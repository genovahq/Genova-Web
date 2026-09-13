import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHead, Crumbs, FinalCta } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { caseStudies, portfolio } from "@/lib/data/proof";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

/*
 * /work
 *
 * Two kinds of proof, both real:
 *   - `portfolio` (lib/data/proof.ts) — a visual showcase of genuinely live
 *     client sites we built, each linking straight to the real thing. No stock
 *     photos captioned as our work, no demos passed off as clients.
 *   - `caseStudies` (still empty by design) — challenge/approach/results with
 *     evidenced metrics. When it has real entries, they render automatically.
 *
 * There are still no fabricated numbers or invented tiles here. When both
 * arrays are empty the page falls back to the honest "we're new" note below.
 * The anatomy section always shows what we actually build.
 */

export const metadata: Metadata = {
  title: "Our Work — What's Actually Inside a Genova Build",
  description:
    "A page-by-page breakdown of how we build a local business website: the structure, the lead path, the SEO layer, and what gets measured after launch.",
  alternates: { canonical: "/work" },
  openGraph: { url: "/work", title: "Our Work | Genova Web" },
};

const anatomy = [
  {
    n: "01",
    t: "The five-second test",
    b: "Above the fold: what you do, where you do it, and one obvious way to contact you. If a visitor can't answer those three from a phone screen without scrolling, nothing further down matters.",
  },
  {
    n: "02",
    t: "Structure that can rank",
    b: "The homepage is built to win your main search, and from Growth up every service gets its own page — its own URL, title, and content — so each can rank on its own instead of competing on one.",
  },
  {
    n: "03",
    t: "Proof placed where doubt happens",
    b: "Licences, warranty terms, and guarantees — plus a reviews section from Growth up — sit next to the moment someone hesitates, beside the price and the CTA, not parked on a page nobody visits.",
  },
  {
    n: "04",
    t: "A single, unmissable lead path",
    b: "Click-to-call in the header, a short form that only asks what you'll actually use, and the AI assistant routing it to your phone the moment it lands.",
  },
  {
    n: "05",
    t: "The SEO layer you can't see",
    b: "Titles and descriptions written per page, structured data on every template, a real sitemap, clean canonical URLs, and crawlable server-rendered HTML.",
  },
  {
    n: "06",
    t: "Speed as a design constraint",
    b: "Static rendering, self-hosted fonts, optimized images, and no third-party scripts we can't justify. Load time is a ranking factor and the first thing a slow phone punishes.",
  },
  {
    n: "07",
    t: "Accessible by default",
    b: "Real contrast ratios, keyboard navigation, labelled form fields, reduced-motion support. It widens your audience and it's what the guidelines reward.",
  },
  {
    n: "08",
    t: "Measurement from day one",
    b: "Analytics connected at launch — plus Search Console on Pro — so month two is a conversation about data instead of a conversation about opinions.",
  },
];

export default function WorkPage() {
  const crumbs = [{ name: "Work", path: "/work" }];
  const hasCaseStudies = caseStudies.length > 0;
  const hasPortfolio = portfolio.length > 0;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} id="schema-work-crumbs" />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={crumbs} />
          <span className="eyebrow">Our work</span>
          <h1>
            <span className="chrome">Real businesses. </span>
            <span className="chrome-purple">Real sites, live right now.</span>
          </h1>
          <p className="sub">
            Click through to any of them — these are working sites doing the job, not mockups. Below
            them is the eight-part anatomy that goes into every build.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See pricing <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {hasPortfolio && (
        <section className="block" id="selected-work">
          <div className="wrap">
            <SectionHead
              kicker="Selected work"
              title="Sites we built, live and working."
              lead="Every one links straight to the real, published site — see it the way its customers do."
            />
            <div className={`work-grid${portfolio.length === 1 ? " solo" : ""}`}>
              {portfolio.map((p) => (
                <a
                  className="work-card reveal"
                  key={p.slug}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-shot">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, 640px"
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                  <div className="work-meta">
                    <span className="tag">{p.industry}</span>
                    <h3>{p.business}</h3>
                    <span className="work-link">
                      Visit live site <span className="arw">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasCaseStudies && (
        <section className="block">
          <div className="wrap">
            <SectionHead
              kicker="Case studies"
              title="Real builds, real numbers."
              lead="Every figure below comes from the client's own analytics or Search Console."
            />
            <div className="grid-2">
              {caseStudies.map((cs) => (
                <article className="svc reveal" key={cs.slug}>
                  <span className="tag">{cs.industry}</span>
                  <h3 style={{ marginTop: 14 }}>{cs.business}</h3>
                  <p>
                    <strong>Challenge: </strong>
                    {cs.challenge}
                  </p>
                  <p style={{ marginTop: 10 }}>
                    <strong>What we did: </strong>
                    {cs.approach}
                  </p>
                  <ul className="calc-rows" style={{ marginTop: 18 }}>
                    {cs.results.map((r) => (
                      <li key={r.metric}>
                        <span>{r.metric}</span>
                        <b>{r.detail}</b>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ANATOMY */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="Anatomy of a build"
            title="Eight things every Genova site does."
            lead="The fundamentals every site needs to work, built in from the start — with the higher tiers layering more on top."
          />
          <div className="grid-2">
            {anatomy.map((a) => (
              <div className="step reveal" key={a.n}>
                <div className="s-num">{a.n}</div>
                <h3>{a.t}</h3>
                <p>{a.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!hasCaseStudies && !hasPortfolio && (
        <section className="block block-tight">
          <div className="wrap wrap-narrow">
            <div className="reveal prose">
              <span className="kicker">On case studies</span>
              <p>
                <strong>
                  We&rsquo;re new, and we&rsquo;d rather say that than fill this page with invented
                  results.
                </strong>{" "}
                Plenty of agency sites carry stock photos captioned as portfolio work, testimonials
                from people who don&rsquo;t exist, and percentage lifts nobody measured. It&rsquo;s
                common and it&rsquo;s dishonest.
              </p>
              <p>
                When we publish case studies here, they&rsquo;ll name a real business that gave
                permission, and every number will come from that client&rsquo;s own analytics or
                Search Console. Until then, judge us on the structure above, the terms on our{" "}
                <Link href="/pricing" style={{ color: "var(--purple-bright)" }}>
                  pricing page
                </Link>
                , and the fact that this site is itself the product — built the same way, on the
                same principles.
              </p>
              <p>
                If you&rsquo;d like to be one of the first case studies we publish, early clients
                get extra attention for exactly that reason.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* THIS SITE */}
      <section className="statement">
        <div className="wrap">
          <h2 className="reveal">
            <span className="chrome">The best sample of our work </span>
            <span className="chrome-purple">is the site you&rsquo;re reading.</span>
          </h2>
          <div className="principles reveal">
            <div className="principle">
              <div className="p-num chrome-purple">Static</div>
              <div className="p-lbl">Pre-rendered</div>
            </div>
            <div className="principle">
              <div className="p-num chrome-purple">Schema</div>
              <div className="p-lbl">On every page</div>
            </div>
            <div className="principle">
              <div className="p-num chrome-purple">AA</div>
              <div className="p-lbl">Contrast target</div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title={
          <>
            <span className="chrome">Want one built like this </span>
            <span className="chrome-purple">for your business?</span>
          </>
        }
        sub={`Free quote, no obligation, reply within 24 hours. Serving ${site.city} and all of ${site.regionName}.`}
        cta="Start a Project"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
