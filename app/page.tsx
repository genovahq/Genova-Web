import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, Marquee, FinalCta } from "@/components/ui";
import Proof from "@/components/Proof";
import { Target, Bolt, Phone, Pin, Star, Rocket } from "@/components/Icons";
import { alternativeComparison } from "@/lib/data/plans";
import { services } from "@/lib/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  // Home keeps the default title from the layout, so no `title` override here.
  alternates: { canonical: "/" },
};

const benefits = [
  {
    Icon: Target,
    title: "Turns Visitors Into Leads",
    body: "Every page is built to guide visitors toward one action — contacting you. Clean design, clear calls to action, no distractions.",
  },
  {
    Icon: Bolt,
    title: "AI Lead Capture Assistant",
    body: "The moment someone reaches out, their details land on your phone and in your inbox instantly — so you never miss a job or let a lead go cold.",
    tag: "Included in every plan",
  },
  {
    Icon: Phone,
    title: "Reaches Customers Anywhere",
    body: "Most people find you on their phone. Your site looks sharp and loads fast on every device, so you're never losing a customer to a clunky screen.",
  },
  {
    Icon: Pin,
    title: "Gets You Found Locally",
    body: "Local SEO and Google Maps setup put you in front of people searching for what you offer in your area, right now.",
  },
  {
    Icon: Star,
    title: "Builds Instant Trust",
    body: "Reviews, professional design, and fast load times make you the obvious, credible choice over the competitor with the outdated site.",
  },
  {
    Icon: Rocket,
    title: "Launches Fast",
    body: "Most sites go live in under two weeks. The sooner you're online and converting, the sooner you start getting more calls.",
  },
];

const steps = [
  { n: "01", t: "Quick Intake", b: "A short 10-question form. Ten minutes of your time gives us everything we need to build." },
  { n: "02", t: "We Build", b: "You run your business. We design, write, and build your site around your brand and your customers." },
  { n: "03", t: "You Review", b: "We send a preview link. You tell us what to change. We make it exactly right." },
  { n: "04", t: "Go Live", b: "We launch your site and switch on your AI lead capture. Now it's working for you around the clock." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow">AI-Powered Websites for Local Business</span>
          <h1>
            <span className="chrome">Turn more visitors into </span>
            <span className="chrome-purple">paying customers</span>
            <span className="chrome">.</span>
          </h1>
          <p className="sub">
            We build high-converting websites with built-in AI lead capture — so your business turns
            more visitors into leads, calls, and booked jobs. Live in under two weeks.
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

      <Marquee
        items={[
          "MORE LEADS",
          "HIGHER CONVERSIONS",
          "INSTANT LEAD ALERTS",
          "MOBILE FIRST",
          "LOCAL SEO",
          "BUILT TO SELL",
        ]}
      />

      {/* BENEFITS */}
      <section className="block" id="what">
        <div className="wrap">
          <SectionHead
            kicker="What you actually get"
            title="A website that works like your best salesperson."
            lead="Every build is designed to do one job: turn the people who find you into customers who call, message, and book. Here's how it does that."
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

      {/* SERVICES — new: routes traffic to the dedicated service pages */}
      <section className="block" id="services">
        <div className="wrap">
          <SectionHead
            kicker="Services"
            title="Four things that decide whether a website earns its keep."
            lead="Each one is a separate discipline, and each one is a page you can dig into."
          />
          <div className="grid-2">
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
            <span className="chrome">Your website should work like your best salesperson — </span>
            <span className="chrome-purple">
              capturing leads and turning clicks into customers, 24/7.
            </span>
          </h2>
          <div className="principles reveal">
            <div className="principle">
              <div className="p-num chrome-purple">24/7</div>
              <div className="p-lbl">Lead Capture</div>
            </div>
            <div className="principle">
              <div className="p-num chrome-purple">Built</div>
              <div className="p-lbl">To Convert</div>
            </div>
            <div className="principle">
              <div className="p-num chrome-purple">&lt;2 weeks</div>
              <div className="p-lbl">To Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="block" id="process">
        <div className="wrap">
          <SectionHead
            kicker="How it works"
            title="From first call to a site that sells — in under two weeks."
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
            title="Build it yourself, hire an agency, or this."
            lead="All three work for somebody. Here's the honest trade-off between them."
          />
          <div className="table-scroll reveal">
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

      <FinalCta
        title={
          <>
            <span className="chrome">Your competitors are already online.</span>
            <br />
            <span className="chrome-purple">Let&rsquo;s make you the one they call.</span>
          </>
        }
        sub={`Get a website that turns visitors into customers — starting at $750. Built in ${site.city}, for businesses across ${site.regionName}.`}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
