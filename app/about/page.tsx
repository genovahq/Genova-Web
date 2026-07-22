import type { Metadata } from "next";
import { SectionHead, Crumbs, FinalCta, SpecStrip } from "@/components/ui";
import Proof from "@/components/Proof";
import JsonLd from "@/components/JsonLd";
import { specs } from "@/lib/data/proof";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Why We Build Websites This Way",
  description:
    "Genova Web builds conversion-focused websites with AI lead capture for local businesses in Orlando and across Florida. Here's how we work and what we won't promise.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About | Genova Web" },
};

const beliefs = [
  {
    title: "A website is a salesperson, not a brochure",
    body: "If it isn't producing inquiries, it's a cost. Every decision we make on a build gets measured against whether it helps someone take the next step.",
  },
  {
    title: "Speed of response beats everything",
    body: "The best-designed site in your city loses to the competitor who calls back first. That's why lead capture is included in every plan instead of sold as an upgrade.",
  },
  {
    title: "Prices belong on the website",
    body: "Ours are. If a service business is embarrassed to state what it charges, that's usually a sign the number changes depending on who's asking.",
  },
  {
    title: "You should own what you paid for",
    body: "The site, the code, the domain, the content. No proprietary platform, no hostage situation, no monthly fee just to keep the lights on.",
  },
  {
    title: "Nobody can guarantee a Google ranking",
    body: "Anyone who tells you otherwise is selling something. We guarantee the work and report honestly on what it produced.",
  },
  {
    title: "Fast is a feature, not a shortcut",
    body: "Most sites go live in about a week — not because we cut corners, but because a tight, well-defined scope removes the eight weeks of meetings that usually pad a project.",
  },
];

export default function AboutPage() {
  const crumbs = [{ name: "About", path: "/about" }];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} id="schema-about-crumbs" />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={crumbs} />
          <span className="eyebrow">About</span>
          <h1>
            <span className="chrome">We build websites for people who </span>
            <span className="chrome-purple">measure results in phone calls.</span>
          </h1>
          <p className="sub">
            Genova Web is a small studio in {site.city}, {site.region}, building conversion-focused
            websites for local service businesses across {site.regionName}.
          </p>
        </div>
      </section>

      <section className="block block-tight">
        <div className="wrap wrap-narrow">
          <div className="reveal prose">
            <span className="kicker">Why we exist</span>
            <p>
              <strong>
                Most small businesses get sold one of two things: a $30/month template they have to
                build themselves, or an $8,000 agency project that takes three months.
              </strong>{" "}
              Neither is designed around the thing an owner actually needs, which is more qualified
              people calling.
            </p>
            <p>
              The template route means you spend evenings fighting a page builder instead of running
              your business, and you end up with a site that looks like ten thousand others and
              ranks like none of them. The agency route means a long discovery phase, a beautiful
              deliverable, and an invoice that assumes you have a marketing budget.
            </p>
            <p>
              We built a third option: a tight, well-defined scope, a fixed price stated publicly, a
              one-week turnaround, and lead capture wired in from day one — because a website that
              collects an inquiry and doesn&rsquo;t tell you about it for fourteen hours has failed
              at the only job that matters.
            </p>
          </div>
          <SpecStrip items={specs} />
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="How we think"
            title="Six opinions that shape every build."
            lead="You'll be able to tell within one call whether these match how you see it."
          />
          <div className="grid-3">
            {beliefs.map((b) => (
              <div className="svc reveal" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Proof />

      <FinalCta
        title={
          <>
            <span className="chrome">If that sounds like the right fit, </span>
            <span className="chrome-purple">let&rsquo;s talk.</span>
          </>
        }
        sub={`Tell us about your business. We reply to every inquiry within 24 hours — or email ${site.email} directly.`}
        cta="Start a Project"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
