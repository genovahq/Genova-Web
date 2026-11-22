import type { Metadata } from "next";
import Link from "next/link";
import { buildPlans, alternativeComparison } from "@/lib/data/plans";
import { commitments, portfolio } from "@/lib/data/proof";
import { site } from "@/lib/site";
import { ServicesScroll, type ServicePanel } from "@/components/home/HomeClient";
import { BrowserFrame, LeadAlertMock, MapPackMock, CareMock } from "@/components/home/Frames";
import TradeDemo from "@/components/home/TradeDemo";
import Reviews from "@/components/home/Reviews";
import styles from "@/components/home/home.module.css";

export const metadata: Metadata = {
  // Home keeps the default title from the layout, so no `title` override here.
  alternates: { canonical: "/" },
};

const domain = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const work = portfolio;
const [lead] = work;
const starter = buildPlans[0];

const panels: ServicePanel[] = [
  {
    id: "website",
    name: "Website Design",
    kicker: "Built to sell",
    price: `From ${starter.priceLabel}`,
    body: "A site that tells a visitor in five seconds what you do, where you do it and how to reach you — then makes contacting you the obvious next step.",
    points: ["Custom-built, mobile-first", "Conversion-focused copy", "Live in under two weeks"],
    href: "/services/website-design",
    visual: lead ? (
      <BrowserFrame src={lead.image} alt={lead.alt} domain={domain(lead.url)} />
    ) : null,
  },
  {
    id: "leads",
    name: "AI Lead Capture",
    kicker: "Included in every plan",
    price: "Every plan, from Starter",
    body: "The moment someone reaches out, the details land in your inbox — organized and ready to call back, so you answer before they call the next company.",
    points: ["Instant lead alerts", "Clean, structured details", "Spam filtered out"],
    href: "/services/ai-lead-capture",
    visual: <LeadAlertMock />,
  },
  {
    id: "seo",
    name: "Local SEO",
    kicker: "Get found nearby",
    price: "Built in from Growth",
    body: "Google Business Profile setup, a page for each service and area, and the structure Google needs to put you in front of people searching near you.",
    points: ["Google Business Profile setup", "Service & area pages", "“Near me” search setup"],
    href: "/services/local-seo",
    visual: <MapPackMock />,
  },
  {
    id: "care",
    name: "Care Plans",
    kicker: "After launch",
    price: "Hosting $50/mo · Care $149/mo",
    body: "Hosting, backups, security and lead-form monitoring handled — plus unlimited content edits on Genova Care. Month to month, cancel any time.",
    points: ["Managed hosting & backups", "Lead-system monitoring", "Unlimited content edits"],
    href: "/services/care-plans",
    visual: <CareMock />,
  },
];

const steps = [
  { n: "01", t: "Quick intake", b: "A short 10-question form. Ten minutes of your time gives us everything we need to build." },
  { n: "02", t: "We build", b: "You run your business. We design, write, and build your site around your brand and your customers." },
  { n: "03", t: "You review", b: "We send a preview link. You tell us what to change. We make it exactly right." },
  { n: "04", t: "Go live", b: "We launch your site and switch on your AI lead capture. Now it's working for you around the clock." },
];

const faq = [
  {
    q: "What does the price actually include?",
    a: "Design, copywriting, build, launch, and the AI Lead Capture Assistant. No separate setup fee, template licence, or launch charge.",
  },
  {
    q: "How does the 50/50 payment split work?",
    a: "Half when you book, which reserves your build slot. The other half when the site is finished and you've approved it — not before you've seen it.",
  },
  {
    q: "Do I have to take a care plan?",
    a: "No. Every plan works as a one-time build. Hosting on its own is $50/mo; Genova Care at $149/mo adds monitoring, unlimited edits and a quarterly check-in.",
  },
  {
    q: "Who owns the website when it's done?",
    a: "You do — the site, the code, the content, and the domain. Nothing is held back as leverage.",
  },
];

export default function HomePage() {
  return (
    <div className={styles.root}>
      {/* ---------- HERO (light) + "pick your trade" demo ---------- */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>{site.tagline} · {site.city}</span>
        <h1 className={styles.heroTitle}>
          Turn more visitors into <span className={styles.gradText}>paying customers.</span>
        </h1>
        <div className={styles.heroRow}>
          <p className={styles.heroSub}>
            High-converting websites with built-in AI lead capture — so more of the people who find
            you become calls, leads and booked jobs. Live in under two weeks, from{" "}
            {starter.priceLabel}.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnGrad}>
              Start a Project <span aria-hidden="true">→</span>
            </Link>
            <Link href="/pricing" className={styles.btnLine}>
              See pricing
            </Link>
          </div>
        </div>

        <TradeDemo />
      </section>

      {/* ---------- MARQUEE (dark) ---------- */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((k) => (
            <span key={k}>
              MORE LEADS <i>✦</i> HIGHER CONVERSIONS <i>✦</i> INSTANT LEAD ALERTS <i>✦</i> MOBILE
              FIRST <i>✦</i> LOCAL SEO <i>✦</i> BUILT TO SELL <i>✦</i>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- REAL WORK (cream, rounded top) ---------- */}
      <section className={`${styles.sheet} ${styles.cream}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>Live right now</span>
          <h2 className={styles.h2}>Real businesses. Real sites.</h2>
          <div className={styles.workGrid}>
            {work.map((p) => (
              <a key={p.slug} href={p.url} target="_blank" rel="noopener" className={styles.workItem}>
                <BrowserFrame src={p.image} alt={p.alt} domain={domain(p.url)} />
                <div className={styles.workMeta}>
                  <b>{p.business}</b>
                  <span>{p.industry} ↗</span>
                </div>
              </a>
            ))}
          </div>
          <Link href="/work" className={styles.textLink}>
            See all our work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ---------- REVIEWS + CREDIBILITY (light) ---------- */}
      <Reviews />

      {/* ---------- SERVICES, SCROLL-SYNCED (dark) ---------- */}
      <section className={`${styles.sheet} ${styles.dark}`} id="services">
        <div className={styles.wrap}>
          <span className={styles.kickerLight}>What you get</span>
          <h2 className={`${styles.h2} ${styles.onDark}`}>
            A website that works like your <span className={styles.gradText}>best salesperson.</span>
          </h2>
          <ServicesScroll panels={panels} />
        </div>
      </section>

      {/* ---------- WHY GENOVA (gradient band) ---------- */}
      <section className={`${styles.sheet} ${styles.grad}`}>
        <div className={styles.wrap}>
          <h2 className={`${styles.h2} ${styles.onDark}`}>Promises we can actually keep.</h2>
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

      {/* ---------- PROCESS (light) ---------- */}
      <section className={`${styles.sheet} ${styles.light}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>How it works</span>
          <h2 className={styles.h2}>From first call to a site that sells — in under two weeks.</h2>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div className={styles.step} key={s.n}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING (cream) ---------- */}
      <section className={`${styles.sheet} ${styles.cream}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>Published prices</span>
          <h2 className={styles.h2}>Pick the plan built for where you&rsquo;re headed.</h2>
          <div className={styles.priceGrid}>
            {buildPlans.map((p) => (
              <div className={`${styles.price} ${p.featured ? styles.priceFeat : ""}`} key={p.slug}>
                {p.badge && <span className={styles.priceBadge}>{p.badge}</span>}
                <span className={styles.priceName}>{p.name}</span>
                <span className={styles.priceNum}>{p.priceLabel}</span>
                <span className={styles.priceNote}>
                  {p.scope} · {p.timeline}
                </span>
                <p>{p.pitch}</p>
                <Link
                  href={`/contact?plan=${p.slug}`}
                  className={p.featured ? styles.btnGrad : styles.btnLine}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <Link href="/pricing" className={styles.textLink}>
            Compare every feature, care plans and rush delivery <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ---------- ALTERNATIVES (light) ---------- */}
      <section className={`${styles.sheet} ${styles.light}`}>
        <div className={styles.wrap}>
          <span className={styles.kicker}>The alternatives</span>
          <h2 className={styles.h2}>Build it yourself, hire an agency, or this.</h2>
          <div className="table-scroll">
            <table className="cmp">
              <caption className="hp">
                Comparison of Genova Web against DIY website builders and traditional agencies
              </caption>
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col" className="hi">
                    Genova Web
                  </th>
                  <th scope="col">DIY builder</th>
                  <th scope="col">Traditional agency</th>
                </tr>
              </thead>
              <tbody>
                {alternativeComparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td className="hi">{row.genova}</td>
                    <td>{row.diy}</td>
                    <td>{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- FAQ (cream) ---------- */}
      <section className={`${styles.sheet} ${styles.cream}`}>
        <div className={`${styles.wrap} ${styles.faqWrap}`}>
          <h2 className={styles.h2}>Questions, answered straight.</h2>
          <div className={styles.faq}>
            {faq.map((f) => (
              <details key={f.q} name="home-faq">
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

      {/* ---------- FINAL CTA (dark, runs into the footer) ---------- */}
      <section className={`${styles.sheet} ${styles.dark} ${styles.final}`}>
        <div className={styles.wrap}>
          <h2 className={styles.finalTitle}>
            Your competitors are already online.{" "}
            <span className={styles.gradText}>Let&rsquo;s make you the one they call.</span>
          </h2>
          <p className={styles.finalSub}>
            A website that turns visitors into customers — starting at {starter.priceLabel}. Built in{" "}
            {site.city}, for businesses across {site.regionName}.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnGrad}>
              Start a Project <span aria-hidden="true">→</span>
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
