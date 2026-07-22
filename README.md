# Genova Web — genovaweb.com

Next.js 16 (App Router) rebuild of the Genova Web site. Colors, logo, fonts, and
copy voice are carried over from the original single-page site; the structure,
SEO layer, and animation system are new.

---

## ⚠️ Do these before launch

These are the only places the site says something that isn't fully wired up yet.

1. **Set `N8N_LEAD_WEBHOOK_URL` and `LEAD_SHARED_SECRET` in Vercel**, then set
   `STRICT = true` in the n8n `Verify Signature` node once the new site is live.
   See "Lead capture & bot protection" below. Leads will not send without those
   two env vars.

2. **Add real proof.** `lib/data/proof.ts` ships with `testimonials` and
   `caseStudies` deliberately **empty**. Until they have real, permissioned
   entries, the site renders the "commitments" block instead — promises you
   control and can keep. Read the comment at the top of that file before
   adding anything. Do not invent quotes, client names, or results stats: for a
   US business those are FTC problems, not design details.

3. **Set up a Google Business Profile.** This is the single biggest local-SEO
   lever and the site can't fake it. Once it exists, add the phone number and
   (if you have one) address to `lib/site.ts`, then update
   `lib/schema.ts → organizationSchema()` to emit `LocalBusiness` with a full
   `PostalAddress`. Make the details character-identical to the GBP listing.

4. **Have a lawyer read `/privacy` and `/terms`.** They're honest plain-language
   drafts describing how the site actually behaves — not legal advice, and not a
   client services agreement.

5. **Submit the sitemap** at `https://genovaweb.com/sitemap.xml` in Google
   Search Console after the first deploy.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — should end with 26 static pages
```

> **OneDrive note:** this project lives under `OneDrive\Desktop`, where OneDrive
> holds file locks that break `npm install` with `ENOTEMPTY`. `node_modules` is
> a directory junction pointing at `C:\Users\eljay\node-cache\Genova Web\node_modules`.
> If you ever clone this fresh, recreate it *before* the first install:
>
> ```
> cmd /c mklink /J "<project>\node_modules" "C:\Users\eljay\node-cache\Genova Web\node_modules"
> ```

## Deploying to Vercel

1. `git init && git add . && git commit -m "Rebuild"` then push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new). Framework
   detection and build settings need no changes.
3. Add `genovaweb.com` and `www.genovaweb.com` as domains. Keep the current
   behaviour — **www redirects to the apex** — because `lib/site.ts` declares
   `https://genovaweb.com` as canonical. If you'd rather make www canonical,
   change `site.url` too or every canonical tag will point at the wrong host.
4. No environment variables are needed. The lead webhook URL is a public
   endpoint and lives in `lib/site.ts`.

---

## Structure

```
app/
  page.tsx                    Home
  pricing/                    ← the dedicated pricing page you asked for
  roi-calculator/             ← the calculator on its own page
  services/                   Hub + [slug] → 4 service pages
  industries/                 Hub + [slug] → 6 industry pages
  orlando-web-design/         Local SEO landing page
  work/  about/  contact/
  privacy/  terms/
  sitemap.ts  robots.ts       Generated /sitemap.xml and /robots.txt
  opengraph-image.tsx         Build-time social share card
  icon.tsx                    Favicon
lib/
  site.ts                     Single source of truth for business facts
  schema.ts                   All JSON-LD generators
  data/plans.ts               Prices, features, comparison matrices
  data/services.ts            Service page content
  data/industries.ts          Industry page content
  data/proof.ts               Testimonials (empty), commitments (live)
components/
```

**Editing content:** almost everything lives in `lib/data/*`. Adding an industry
page is one object in `industries.ts` — the route, metadata, schema, sitemap
entry, and footer link all follow automatically.

---

## What changed from the old site

### Structure
- One page became **19 indexable URLs**. The old site had a single `/` with
  anchor links, so every keyword competed against itself on one URL.
- Pricing is now its own page with a full feature-comparison table, an ROI
  calculator, an alternatives table, and 8 FAQs.

### SEO
- **Structured data everywhere** — the old site had none at all. Now:
  `ProfessionalService` + `WebSite` sitewide, `Service` on service and industry
  pages, `Product`/`Offer` on pricing, `FAQPage` on four pages, `BreadcrumbList`
  on every subpage.
- Per-page titles, descriptions, and **canonical URLs**.
- Generated `sitemap.xml` and `robots.txt`.
- **Open Graph + Twitter cards with a generated image.** Previously every share
  on iMessage, WhatsApp, LinkedIn, or Slack rendered as a bare grey link.
- Real internal linking between services, industries, and pricing.

### Performance
- Fonts self-hosted via `next/font` instead of a render-blocking Google Fonts
  `<link>` — removes two preconnects and a stylesheet round-trip before first
  paint, and adds size-adjusted fallbacks so font swap doesn't shift layout.
- All 26 pages statically pre-rendered.

### Accessibility & correctness (fixed during the build)
- `--muted-dim` was **3.18:1** against the background — below WCAG AA. Retuned
  to `#787883` (4.67:1).
- `.hero-ring` was pushing **76px of horizontal scroll** on desktop; the
  decorative rings are now clipped by their sections.
- Mobile menu button was being flex-shrunk to **25px wide**, under the 44px
  touch minimum.
- Form inputs are 16px (stops iOS auto-zoom on focus), every field has a real
  `<label>`, errors appear inline with `role="alert"`, and focus jumps to the
  first invalid field on submit.
- Added a skip link, breadcrumbs, and `aria-current` on nav.

### Animation
- Scroll reveals with per-grid stagger, nav condense on scroll, staggered mobile
  menu, hover states on cards and arrows.
- **Content is visible by default.** The hidden start state only applies under
  `html.js`, and there's an IntersectionObserver failsafe plus a
  `visibilitychange` catch-up. A JS failure, a crawler, or a backgrounded tab
  can never leave the page blank — animation never gates content.
- Everything animates `transform`/`opacity` only, 180–620ms, and
  `prefers-reduced-motion` disables it all.

---

---

## Lead capture & bot protection

The browser posts to **`/api/lead`** (`app/api/lead/route.ts`), which screens the
submission and forwards it to n8n server-side.

**Why:** the n8n webhook URL used to be called directly from the browser, so it
sat in the public JS bundle. Anyone could read it out of DevTools and POST to it
forever — and a bot hitting the webhook directly never loads the form, so
honeypots and CAPTCHAs are irrelevant to it. The URL is now a server-only env
var. Verified absent from `.next/static/` after build.

### Layers, in order

| # | Layer | Where |
|---|---|---|
| 1 | Honeypot (`company_website`) | `/api/lead` + n8n |
| 2 | Time trap — under 4s or over 6h is rejected | `/api/lead` |
| 3 | Field revalidation (email format, 10/11-digit phone) | `/api/lead` + n8n |
| 4 | Heuristics — spam keywords, links in message, foreign scripts, disposable email domains, duplicated fields | `/api/lead` + n8n |
| 5 | Rate limit — 5 per IP per 10 min | `/api/lead` |
| 6 | Shared secret `x-genova-signature` | n8n `Verify Signature` |

**Blocked submissions return `200 {success:true, filtered:true}`** and are logged
server-side. This is deliberate: a `403` tells a bot which check caught it so it
can iterate; an apparent success gives it nothing to tune against. The tradeoff
is that a false positive fails silently, which is why every check is
high-confidence and the form shows a direct email address as a fallback.

### Env vars (set both in Vercel → Settings → Environment Variables)

```
N8N_LEAD_WEBHOOK_URL=https://genovahq.app.n8n.cloud/webhook/genova-web-lead
LEAD_SHARED_SECRET=<the secret, must match the n8n Verify Signature node>
```

Never prefix these `NEXT_PUBLIC_` — that ships them to the browser and undoes
the whole design. `.env.local` holds them for local dev and is gitignored.

### ⚠️ Flip STRICT after you deploy

The n8n `Verify Signature` node has `const STRICT = false` at the top. While
false, unsigned requests are allowed through and tagged `legacy_unsigned`, so
the **current** live genovaweb.com (which posts directly, with no header) keeps
delivering leads.

**Once the new site is live on Vercel, set `STRICT = true`.** Until you do, the
shared secret isn't actually being enforced. Flipping it before the new site is
live would drop real leads.

### If spam still gets through

Add **Cloudflare Turnstile** (free, invisible for most users) verified inside
`/api/lead`, and turn on **Vercel WAF rate limiting** in front of the route.
Turnstile sets a Cloudflare token, so `/privacy` needs a line about it first.

---

## Pricing model (as configured)

All of this lives in `lib/data/plans.ts` — change it there and the cards,
comparison table, schema, and contact-form dropdown all follow.

| Build | Price | Pages | Timeline |
|---|---|---|---|
| Starter | $750 | 1 page | 5–7 business days |
| Growth | $2,000 | Up to 5 pages | 7–10 business days |
| Pro | $3,500 | Up to 10 pages | 10–14 business days |

**Ongoing** (optional, month to month):

| Plan | Price | What it is |
|---|---|---|
| Genova Care | $297/mo | Hosting included, plus backups, monitoring, 2 edits/mo, reporting. |
| Genova Care+ | $597/mo | All of Care, plus 5 edits/mo, monthly SEO, reports, Search Console, AI tuning. |

**Hosting on its own is $50/mo**, stated as a footnote under the care tiers
(`hostingNote` in `plans.ts`) rather than as a third card — it's a floor price,
not a product to sell against the care plans.

**The Care+ member perk** ("new systems & automations as they launch — small
improvements free, major systems at a member discount") is a `footnote` on the
Care+ plan object only, so it can't be mistaken for a $297 Care benefit.

Pro includes 3 months of Care+ ($1,791 value) — which is how Pro clients receive
monthly reports, SEO optimization, and monitoring. The comparison table marks
those rows "Via Care+" rather than as standalone Pro features, so the table and
the cards can't contradict each other.

### A note on the alternatives table

The DIY column used to read "$20–$60/mo forever". That argued against Genova's
own $297/mo care plan — if recurring cost is inherently a trap, so is the
retainer. The cost rows now compare *what you get for the money and whether
it's optional* instead, which is the real distinction and doesn't undercut the
subscription.

### The intake questionnaire

`/contact` is an 8-step questionnaire (`components/Questionnaire.tsx`), not a
flat form — which makes the "quick 10-question intake" the site promises real.

- Single-choice steps auto-advance; multi-select and typed steps wait for Next.
- Validation runs per step, so nobody hits the end and gets a wall of red.
- Answers persist to `sessionStorage`, so a refresh doesn't wipe six answers.
- Focus moves to each new question heading; progress is announced to screen
  readers.
- The plan step offers **only Starter, Growth, and Pro**, and is skippable —
  people who don't know shouldn't be forced into a wrong guess.
- `?plan=growth` from a pricing card preselects that step.
- Posts to the same n8n webhook, with `source: "genova-web-questionnaire"`.

> **n8n:** the payload now includes `industry`, `current_site`, `goal`,
> `timing`, `service_area`, and `page` alongside the original name/business/
> phone/email/package/message fields. Map the new ones if your workflow is strict.

## Ideas not built (worth considering next)

- **A blog.** You didn't pick it, and it's only worth it if you'll actually
  publish. But "how much does a website cost in Orlando" style posts are how
  local agencies win long-tail search.
- **Per-city landing pages.** `/orlando-web-design` proves the pattern; Winter
  Park, Kissimmee, and Lake Mary versions are a copy-paste of that template with
  genuinely different content.
- **Analytics.** Nothing is installed. Vercel Analytics is one line and adds no
  cookie-consent burden; add it and update `/privacy` before it goes live.
- **A real intake form.** The site references a "10-question intake" — worth
  building as a multi-step form so it's a genuine differentiator rather than a
  promise.
