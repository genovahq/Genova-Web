import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, Marquee, FinalCta } from "@/components/ui";
import Proof from "@/components/Proof";
import { Pin, Target, Users, Bolt, Chart, Shield } from "@/components/Icons";
import PricingTiers from "@/components/PricingTiers";
import { alternativeComparison, retainerPlans } from "@/lib/data/plans";
import { services } from "@/lib/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  // Home keeps the default title from the layout, so no `title` override here.
  alternates: { canonical: "/" },
};

const benefits = [
  {
    Icon: Pin,
    title: "Get Found",
    body: "Local SEO and a fully managed Google Business Profile put you in the map pack when homeowners nearby search for what you do.",
    tag: "Found",
  },
  {
    Icon: Target,
    title: "Get Booked",
    body: "Google Search and Local Services Ads for the calls you can't wait months for — managed to cost per booked job, not clicks.",
    tag: "Booked",
  },
  {
    Icon: Users,
    title: "Get Seen",
    body: "A monthly shoot of your real crew and real work, edited and posted everywhere your customers check before they call.",
    tag: "Seen",
  },
  {
    Icon: Bolt,
    title: "Answer First",
    body: "Missed-call text-back and instant follow-up on every lead, so you're the first company to respond — even when you're on a job.",
    tag: "Built into everything",
  },
  {
    Icon: Chart,
    title: "Reported in Jobs",
    body: "Every month: leads, cost per lead and what turned into work. Not impressions, not reach, not a 40-page PDF.",
  },
  {
    Icon: Shield,
    title: "Yours to Keep",
    body: "Ad accounts, profile, website and content all stay in your name. Ad spend goes straight to Google and Meta — never marked up.",
  },
];

const steps = [
  { n: "01", t: "Free Audit", b: "We look at your Google profile, site, ads and reviews against the competitors ranking above you — and show you where the jobs are leaking." },
  { n: "02", t: "The Plan", b: "One recommendation, in plain English: which channels to start with, what it costs, and what to expect in the first 90 days." },
  { n: "03", t: "Launch", b: "Profile, tracking, landing pages, campaigns and speed-to-lead set up properly in the first few weeks." },
  { n: "04", t: "Report & Grow", b: "A monthly report in booked jobs, and a plan for what to push next. Scale what works, cut what doesn't." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow">Marketing for Home-Service Businesses</span>
          <h1>
            <span className="chrome">Marketing that shows up as </span>
            <span className="chrome-purple">booked jobs</span>
            <span className="chrome">.</span>
          </h1>
          <p className="sub">
            Local SEO, Google &amp; Local Services Ads, real-footage content and speed-to-lead
            automation for contractors and local businesses across {site.regionName}. Published
            prices, ad spend never marked up, reported in jobs — not clicks.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn-primary">
              Get a Free Audit
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See packages &amp; pricing <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "GET FOUND",
          "GET BOOKED",
          "GET SEEN",
          "LOCAL SERVICES ADS",
          "MISSED-CALL TEXT-BACK",
          "BOOKED JOBS",
        ]}
      />

      {/* BENEFITS */}
      <section className="block" id="what">
        <div className="wrap">
          <SectionHead
            kicker="What we do"
            title="Get found. Get booked. Get seen."
            lead="Three channels that decide who gets the call — and one system that makes sure you answer it first."
          />
          <div className="grid-3">
            {benefits.map(({ Icon, title, body, tag }) => (
              <div className="svc reveal" key={title}>
                <span className="ic">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>
                  {body}
                  {tag && <span className="tag">{tag}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES — the three core retainers */}
      <section className="block" id="packages">
        <div className="wrap">
          <SectionHead
            kicker="Packages"
            title="Pick the job you need done first."
            lead={
              <>
                Or run all three as the{" "}
                <Link href="/pricing#full-engine">Full Engine</Link> for $5,995/mo — less than
                the parts. Smaller budgets start at $750/mo.
              </>
            }
          />
          <PricingTiers plans={retainerPlans} />
        </div>
      </section>

      {/* SERVICES — routes traffic to the dedicated service pages */}
      <section className="block block-tight" id="services">
        <div className="wrap">
          <SectionHead kicker="Services" title="Dig into any part of the system." />
          <div className="grid-3">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="svc reveal" key={s.slug}>
                <h3>{s.title}</h3>
                <p>{s.lead}</p>
                <span className="more">
                  Explore {s.navLabel} <span className="arw">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="wrap">
          <h2 className="reveal">
            <span className="chrome">Homeowners call two or three companies. </span>
            <span className="chrome-purple">
              The one that answers first, looks the part and shows up on top usually wins.
            </span>
          </h2>
          <div className="principles reveal">
            <div className="principle">
              <div className="p-num chrome-purple">Seconds</div>
              <div className="p-lbl">To Answer Every Lead</div>
            </div>
            <div className="principle">
              <div className="p-num chrome-purple">0%</div>
              <div className="p-lbl">Markup On Ad Spend</div>
            </div>
            <div className="principle">
              <div className="p-num chrome-purple">Monthly</div>
              <div className="p-lbl">Reports In Booked Jobs</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="block" id="process">
        <div className="wrap">
          <SectionHead
            kicker="How it works"
            title="From free audit to a pipeline that reports in jobs."
          />
          <div className="grid-4">
            {steps.map((s) => (
              <div className="step reveal" key={s.n}>
                <div className="s-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF (commitments until real testimonials land) */}
      <Proof />

      {/* COMPARISON */}
      <section className="block" id="compare">
        <div className="wrap">
          <SectionHead
            kicker="The alternatives"
            title="Do it yourself, hire a big agency, or this."
            lead="All three work for somebody. Here's the honest trade-off between them."
          />
          <div className="table-scroll reveal">
            <table className="cmp">
              <caption className="hp">
                Comparison of Genova Web against doing it yourself and large agencies
              </caption>
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col" className="hi">
                    Genova Web
                  </th>
                  <th scope="col">Doing it yourself</th>
                  <th scope="col">Large agency</th>
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

      <FinalCta
        title={
          <>
            <span className="chrome">Your competitors are already buying the calls.</span>
            <br />
            <span className="chrome-purple">Let&rsquo;s make you the one who gets booked.</span>
          </>
        }
        sub={`Get a free audit of your Google profile, site, ads and reviews — and a straight answer on where the jobs are leaking. Based in ${site.city}, working across ${site.regionName}.`}
        cta="Get a Free Audit"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
