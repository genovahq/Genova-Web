import type { Metadata } from "next";
import Link from "next/link";
import { retainerPlans, fullEngine } from "@/lib/data/plans";
import { commitments } from "@/lib/data/proof";
import { site } from "@/lib/site";
import { getHomeMedia, img } from "@/lib/sanity";
import MediaSlot from "@/components/home/MediaSlot";
import { ServicesScroll, BeforeAfter, type ServicePanel } from "@/components/home/HomeClient";
import styles from "@/components/home/home.module.css";

/*
 * Homepage (v2 light, photo-driven design). Every MediaSlot is a photo/video
 * position: it shows a labeled placeholder until real media is supplied.
 */
export const metadata: Metadata = {
  // Home keeps the default title from the layout, so no `title` override here.
  alternates: { canonical: "/" },
};

const panels: ServicePanel[] = [
  {
    id: "found",
    name: "Found",
    service: "Local SEO",
    price: "$1,500/mo",
    body: "Own the map pack when homeowners nearby search for what you do. Managed Google profile, new pages every month, reviews on autopilot.",
    points: ["Google Business Profile, managed", "Service-area pages monthly", "Review generation after every job"],
    href: "/services/local-seo",
    shot: { label: "Map-pack ranking", hint: "Phone screenshot: client in the top 3 on Google Maps" },
  },
  {
    id: "booked",
    name: "Booked",
    service: "Google & LSA Ads",
    price: "$1,500/mo + ad spend",
    body: "Google Search and Local Services Ads managed to cost per booked job — not clicks. Ad spend goes straight to Google, never marked up.",
    points: ["Search + Local Services Ads", "Landing page per campaign", "Call tracking & cost-per-job report"],
    href: "/services/paid-ads",
    shot: { label: "Google Guaranteed ad", hint: "Phone screenshot: a client's LSA listing" },
  },
  {
    id: "seen",
    name: "Seen",
    service: "Content & Social",
    price: "$3,500/mo",
    body: "A monthly shoot of your real crew and real jobs, edited into reels and photos and posted everywhere customers check before they call.",
    points: ["Monthly on-site shoot", "8 videos + 20–30 photos a month", "Managed posting & reviews"],
    href: "/services/content-social",
    shot: { label: "A client reel", hint: "Vertical video: before/after from a job" },
  },
  {
    id: "speed",
    name: "Speed to Lead",
    service: "Built into everything",
    price: "Lead Leak Fix · $1,500 + $149/mo",
    body: "Missed-call text-back and instant follow-up on every lead, so you answer first — even from the top of a ladder.",
    points: ["Missed-call text-back", "Instant form follow-up", "Automated review requests"],
    href: "/services/speed-to-lead",
    shot: { label: "Missed-call text-back", hint: "Phone screenshot: the auto-text a caller receives" },
  },
];

const carousel = [
  { label: "Instagram reel", hint: "Before/after job video" },
  { label: "Google LSA ad", hint: "Google Guaranteed listing" },
  { label: "Client website", hint: "Homepage on a phone" },
  { label: "Map-pack ranking", hint: "Top 3 on Google Maps" },
  { label: "Review request", hint: "The text customers get" },
  { label: "Facebook ad", hint: "A seasonal offer" },
];

const objections = [
  {
    q: "“I paid an agency for a year and never knew what I got.”",
    a: "Every month you get leads, cost per lead and what turned into work — in plain English. If something isn't paying, we say so and cut it.",
    video: "Founder answer: monthly reporting",
  },
  {
    q: "“Where does my ad money actually go?”",
    a: "Straight to Google and Meta, in accounts you own. We never touch it or mark it up — our fee is published on the pricing page.",
    video: "Founder answer: ad spend",
  },
  {
    q: "“I don't want to be locked in.”",
    a: "Three months on ads and content, six on SEO because it needs that long — then month to month. We'd rather earn it every month.",
    video: "Founder answer: contracts",
  },
];

const faq = [
  {
    q: "Is ad spend included in the monthly fee?",
    a: "No — Google and Meta bill you directly, in your own accounts. Our fee is flat and never a cut of your budget until spend passes $10,000/mo.",
  },
  {
    q: "Which package should I start with?",
    a: "Need calls this month: Booked. Losing the map pack: Found. Empty feeds: Seen. Every channel as one system: Full Engine. We'll tell you honestly on the first call.",
  },
  {
    q: "Do I need a new website?",
    a: "Not necessarily. If yours is fast and clear we work with it — Lead Leak Fix adds speed-to-lead to almost any existing site.",
  },
  {
    q: "Who owns the accounts?",
    a: "You do: ad accounts, Google profile, website, domain, photos and video. Leave whenever you like and take everything with you.",
  },
];

export default async function HomePage() {
  const media = await getHomeMedia();
  // Uploaded service screenshots slot into the scroll-synced panels.
  const shots: Record<string, string | undefined> = {
    found: img(media.services?.found, 600),
    booked: img(media.services?.booked, 600),
    seen: img(media.services?.seen, 600),
    speed: img(media.services?.speed, 600),
  };
  const servicePanels = panels.map((p) => ({ ...p, shot: { ...p.shot, src: shots[p.id] } }));

  return (
    <div className={styles.root}>
      {/* ---------- HERO (light) + big media card ---------- */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Marketing for home-service businesses · Orlando</span>
        <h1 className={styles.heroTitle}>
          Marketing that shows up as <span className={styles.gradText}>booked jobs.</span>
        </h1>
        <div className={styles.heroRow}>
          <p className={styles.heroSub}>
            Local SEO, Google &amp; Local Services Ads, real-footage content and speed-to-lead —
            with published prices and ad spend that&rsquo;s never marked up.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnGrad}>
              Get a Free Audit <span aria-hidden="true">→</span>
            </Link>
            <Link href="/pricing" className={styles.btnLine}>
              See pricing
            </Link>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <MediaSlot
            kind="video"
            label="Hero video: a real crew on a real job"
            hint="10–20 second muted loop — roof tear-off, AC install, finished kitchen"
            src={media.heroVideo}
            poster={img(media.heroPoster, 1600)}
          />
          <div className={`${styles.chip} ${styles.chipA}`}>
            <span className={styles.chipDot} /> New lead · auto-text sent in 4s
          </div>
          <div className={`${styles.chip} ${styles.chipB}`}>
            <b>0%</b> markup on ad spend
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE (dark, grain) ---------- */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((k) => (
            <span key={k}>
              GET FOUND <i>✦</i> GET BOOKED <i>✦</i> GET SEEN <i>✦</i> ANSWER FIRST <i>✦</i> LOCAL
              SERVICES ADS <i>✦</i> MISSED-CALL TEXT-BACK <i>✦</i>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- PHONE CAROUSEL (cream, rounded top) ---------- */}
      <section className={`${styles.sheet} ${styles.cream}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>The work</span>
          <h2 className={styles.h2}>Shows up where your customers look.</h2>
        </div>
        <div className={styles.phoneRail} aria-label="Examples of client work">
          <div className={styles.phoneRailTrack}>
            {[...carousel, ...carousel].map((c, i) => (
              <div className={styles.phoneSm} key={i} aria-hidden={i >= carousel.length || undefined}>
                <div className={styles.phoneScreen}>
                  <MediaSlot
                    label={media.work?.[i % carousel.length]?.label || c.label}
                    hint={c.hint}
                    src={img(media.work?.[i % carousel.length]?.src, 500)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES, SCROLL-SYNCED (dark, rounded top, grain) ---------- */}
      <section className={`${styles.sheet} ${styles.dark}`} id="services">
        <div className={styles.wrap}>
          <span className={styles.kickerLight}>What we do</span>
          <h2 className={`${styles.h2} ${styles.onDark}`}>
            Get found. Get booked. <span className={styles.gradText}>Get seen.</span>
          </h2>
          <ServicesScroll panels={servicePanels} />
          <Link href="/pricing#full-engine" className={styles.engine}>
            <span className={styles.engineName}>Full Engine</span>
            <span>Found + Booked + Seen, run as one — {fullEngine.priceLabel}/mo, less than the parts</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ---------- WHY GENOVA (full gradient band) ---------- */}
      <section className={`${styles.sheet} ${styles.grad}`}>
        <div className={styles.wrap}>
          <h2 className={`${styles.h2} ${styles.onDark}`}>Why contractors pick Genova.</h2>
          <div className={styles.whyGrid}>
            {commitments.map((c) => (
              <div key={c.title} className={styles.why}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FOUNDER VIDEO OBJECTIONS (light) ---------- */}
      <section className={`${styles.sheet} ${styles.light}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>Straight answers</span>
          <h2 className={styles.h2}>The things every contractor asks us first.</h2>
          {objections.map((o, i) => (
            <div className={styles.objection} key={o.q}>
              <div>
                <h3>{o.q}</h3>
                <p>{o.a}</p>
              </div>
              <div className={styles.phone}>
                <div className={styles.phoneScreen}>
                  <MediaSlot
                    kind="video"
                    label={o.video}
                    hint="30–60s vertical video of LJ"
                    src={media.objections?.[i]?.video}
                    poster={img(media.objections?.[i]?.poster, 600)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- BEFORE / AFTER (cream) ---------- */}
      <section className={`${styles.sheet} ${styles.cream}`}>
        <div className={`${styles.wrap} ${styles.baWrap}`}>
          <div>
            <span className={styles.kicker}>Seen · content</span>
            <h2 className={styles.h2}>Same business. Thirty days apart.</h2>
            <p className={styles.lead}>
              Drag the handle. On the left, the feed most contractors have. On the right, the same
              profile after a month of real footage from real jobs.
            </p>
            <Link href="/services/content-social" className={styles.btnLine}>
              How Seen works
            </Link>
          </div>
          <BeforeAfter before={img(media.before, 1200)} after={img(media.after, 1200)} />
        </div>
      </section>

      {/* ---------- RESULTS + REVIEWS (dark) — sample layout only ---------- */}
      <section className={`${styles.sheet} ${styles.dark}`}>
        <div className={styles.wrap}>
          <div className={styles.resultsHead}>
            <div>
              <span className={styles.kickerLight}>Results</span>
              <h2 className={`${styles.h2} ${styles.onDark}`}>Wins, in booked jobs.</h2>
            </div>
            <span className={styles.sampleNote}>
              Sample layout — fills in only with real client numbers, with permission
            </span>
          </div>
          <div className={styles.resultCard}>
            <div className={styles.resultText}>
              <span className={styles.resultClient}>Client name · Trade · City</span>
              <span className={styles.resultNum}>+00%</span>
              <span className={styles.resultLbl}>Booked jobs in the first 90 days</span>
            </div>
            <div className={styles.resultPhoto}>
              <MediaSlot label="Client job photo" tone="dark" />
            </div>
          </div>
          <div className={styles.reviews}>
            {[1, 2, 3].map((n) => (
              <div className={styles.review} key={n}>
                <span className={styles.stars} aria-hidden="true">
                  ★★★★★
                </span>
                <p>Real Google review text goes here, pulled in from your Business Profile.</p>
                <div className={styles.reviewer}>
                  <span className={styles.avatar} aria-hidden="true" />
                  <span>
                    <b>Reviewer name</b>
                    <small>Google review</small>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING TEASER (light) ---------- */}
      <section className={`${styles.sheet} ${styles.light}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>Published prices</span>
          <h2 className={styles.h2}>Pick the job you need done first.</h2>
          <div className={styles.priceGrid}>
            {retainerPlans.map((p) => (
              <div className={`${styles.price} ${p.featured ? styles.priceFeat : ""}`} key={p.slug}>
                {p.badge && <span className={styles.priceBadge}>{p.badge}</span>}
                <span className={styles.priceName}>{p.name}</span>
                <span className={styles.priceNum}>
                  {p.priceLabel}
                  <small>{p.cadence}</small>
                </span>
                <span className={styles.priceNote}>{p.note}</span>
                <p>{p.pitch}</p>
                <Link href={`/contact?plan=${p.slug}`} className={p.featured ? styles.btnGrad : styles.btnLine}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <Link href="/pricing" className={styles.textLink}>
            See every package, website and project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ---------- FOUNDER ON PURPLE ---------- */}
      <section className={`${styles.sheet} ${styles.cream}`}>
        <div className={`${styles.wrap} ${styles.founder}`}>
          <div className={styles.founderPhoto}>
            <MediaSlot
              label="LJ, founder"
              hint="Portrait on the purple backdrop"
              tone="dark"
              src={img(media.founder, 1000)}
            />
          </div>
          <div>
            <span className={styles.kicker}>Who you&rsquo;ll work with</span>
            <h2 className={styles.h2}>You talk to the person doing the work.</h2>
            <p className={styles.lead}>
              Genova is a small Orlando team. No account managers relaying notes — one conversation
              with the person who builds your campaigns, shoots your content and answers your call.
            </p>
            <Link href="/about" className={styles.btnLine}>
              About Genova
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FAQ (light) ---------- */}
      <section className={`${styles.sheet} ${styles.light}`}>
        <div className={`${styles.wrap} ${styles.faqWrap}`}>
          <h2 className={styles.h2}>Questions, answered straight.</h2>
          <div className={styles.faq}>
            {faq.map((f) => (
              <details key={f.q} name="concept-faq">
                <summary>
                  {f.q}
                  <span className={styles.faqBtn} aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA (dark + gradient) ---------- */}
      <section className={`${styles.sheet} ${styles.dark} ${styles.final}`}>
        <div className={styles.wrap}>
          <h2 className={styles.finalTitle}>
            Let&rsquo;s make you the one <span className={styles.gradText}>who gets booked.</span>
          </h2>
          <p className={styles.finalSub}>
            Free audit of your Google profile, site, ads and reviews — and a straight answer on where
            the jobs are leaking. Reply within 24 hours.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnGrad}>
              Get a Free Audit <span aria-hidden="true">→</span>
            </Link>
            <a href={site.phoneHref} className={styles.btnGhostDark}>
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
