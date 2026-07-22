import { NextResponse } from "next/server";

/**
 * SERVER-SIDE LEAD PROXY
 * ---------------------------------------------------------------------------
 * Why this exists: the n8n webhook URL used to be called straight from the
 * browser, which put it in the public JS bundle. Anyone could read it out of
 * DevTools and POST to it directly, bypassing every client-side check — a bot
 * hitting the webhook never loads the form, so honeypots and CAPTCHAs are
 * irrelevant to it.
 *
 * Now the browser posts here, and only this route knows the n8n URL (server
 * env var, never shipped to the client). That makes real filtering possible:
 *
 *   1. Honeypot          — hidden field a human never fills
 *   2. Time trap         — submissions faster than a human can type
 *   3. Field validation  — re-checked server-side; client checks are advisory
 *   4. Content heuristics— links, foreign scripts, spam keywords, junk email
 *   5. Rate limiting     — per-IP burst cap
 *   6. Shared secret     — n8n rejects anything without this header
 *
 * Nothing here is perfect. A human paid to fill forms gets through all of it.
 * The goal is to make automated abuse not worth the effort.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEBHOOK = process.env.N8N_LEAD_WEBHOOK_URL;
const SECRET = process.env.LEAD_SHARED_SECRET;

/** Minimum seconds between page load and submit. Humans take far longer. */
const MIN_FILL_SECONDS = 4;
/** Reject stale forms — a tab left open for a day, or a replayed payload. */
const MAX_FILL_SECONDS = 60 * 60 * 6;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

/**
 * In-memory rate limit. Serverless instances are per-region and recycled, so
 * this is a speed bump, not a guarantee — it stops a single script hammering
 * one instance. For a hard limit put Vercel WAF rate limiting in front of
 * /api/lead, or swap this map for Upstash Redis.
 */
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map can't grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

const SPAM_WORDS = [
  "seo service",
  "backlink",
  "guest post",
  "crypto",
  "bitcoin",
  "forex",
  "casino",
  "viagra",
  "escort",
  "web traffic",
  "rank #1",
  "buy followers",
  "loan offer",
];

/** Throwaway inbox providers — real businesses don't use these for a quote. */
const DISPOSABLE = [
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "throwawaymail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
];

type Payload = Record<string, unknown>;

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

/** Returns a list of reasons the submission looks automated. Empty = looks human. */
function screen(body: Payload, ip: string): string[] {
  const reasons: string[] = [];

  // 1. Honeypot — hidden, off-screen, not in the tab order.
  if (str(body.company_website)) reasons.push("honeypot");

  // 2. Time trap.
  const started = Number(body.started_at);
  if (Number.isFinite(started) && started > 0) {
    const elapsed = (Date.now() - started) / 1000;
    if (elapsed < MIN_FILL_SECONDS) reasons.push("too_fast");
    if (elapsed > MAX_FILL_SECONDS) reasons.push("stale_form");
  } else {
    // Our form always sends this; absence means something else built the request.
    reasons.push("no_timing");
  }

  // 3. Required fields, re-validated here.
  const first = str(body.first_name);
  const business = str(body.business_name);
  const email = str(body.email).toLowerCase();
  const phone = str(body.phone);
  const message = str(body.message);

  if (!first) reasons.push("missing_first_name");
  if (!business) reasons.push("missing_business");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) reasons.push("bad_email");

  const digits = phone.replace(/\D/g, "");
  const validPhone = digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
  if (!validPhone) reasons.push("bad_phone");

  // 4. Content heuristics.
  const haystack = `${first} ${str(body.last_name)} ${business} ${message}`.toLowerCase();
  const hit = SPAM_WORDS.find((w) => haystack.includes(w));
  if (hit) reasons.push(`keyword:${hit}`);

  // Links in a free-text field are the single strongest spam signal.
  if (/(https?:\/\/|www\.|\[url|<a\s)/i.test(message)) reasons.push("link_in_message");

  // Cyrillic / CJK / Arabic in a form for Florida local businesses.
  if (/[Ѐ-ӿ一-鿿؀-ۿ]/.test(message)) reasons.push("foreign_script");

  const domain = email.split("@")[1] ?? "";
  if (DISPOSABLE.includes(domain)) reasons.push("disposable_email");

  // Same string in every field is a classic filler-bot signature.
  if (first && first.toLowerCase() === business.toLowerCase() && first.length > 2) {
    reasons.push("duplicate_fields");
  }

  // 5. Burst protection.
  if (rateLimited(ip)) reasons.push("rate_limited");

  return reasons;
}

export async function POST(request: Request) {
  if (!WEBHOOK || !SECRET) {
    // Misconfiguration is ours, not the visitor's — say so plainly in logs and
    // give them the fallback email rather than a silent failure.
    console.error("[lead] Missing N8N_LEAD_WEBHOOK_URL or LEAD_SHARED_SECRET");
    return NextResponse.json(
      { success: false, error: "Lead capture is not configured." },
      { status: 500 }
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const reasons = screen(body, ip);

  if (reasons.length) {
    /*
     * Return 200 with a generic success shape.
     *
     * Deliberate: a bot that gets a 403 learns which check caught it and
     * iterates. A bot that appears to succeed has no signal to tune against.
     * The tradeoff is that a real person tripping a check silently fails —
     * which is why the checks are all high-confidence, and why the form shows
     * a direct email address as a fallback.
     */
    console.warn(`[lead] blocked ip=${ip} reasons=${reasons.join(",")}`);
    return NextResponse.json({ success: true, filtered: true });
  }

  // Strip client-controlled control fields before forwarding.
  const { company_website: _hp, started_at: _t, ...clean } = body;
  void _hp;
  void _t;

  try {
    const upstream = await fetch(WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // n8n verifies this. Without it the webhook URL alone is useless.
        "x-genova-signature": SECRET,
      },
      body: JSON.stringify({
        ...clean,
        verified_by: "genova-web-api",
        client_ip: ip,
        received_at: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!upstream.ok) {
      console.error(`[lead] upstream ${upstream.status}`);
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[lead] upstream request failed", error);
    return NextResponse.json({ success: false }, { status: 502 });
  }
}

/** Anything other than POST gets nothing useful. */
export async function GET() {
  return NextResponse.json({ success: false }, { status: 405 });
}
