import type { Metadata } from "next";
import { SectionHead, Crumbs, FinalCta, SpecStrip } from "@/components/ui";
import Proof from "@/components/Proof";
import JsonLd from "@/components/JsonLd";
import { specs } from "@/lib/data/proof";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — An Orlando Agency That Reports in Booked Jobs",
  description:
    "Genova Web is an Orlando marketing agency for home-service contractors and local businesses. Here's how we work, what we charge, and what we won't promise.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About | Genova Web" },
};

const beliefs = [
  {
    title: "Marketing is measured in booked jobs",
    body: "Not impressions, not reach, not rankings for words nobody searches. If it isn't producing calls that turn into work, it's a cost — and we'll say so.",
  },
  {
    title: "Speed of response beats everything",
    body: "The best-designed site in your city loses to the competitor who calls back first. That's why speed-to-lead is built into everything we sell instead of sold as an upgrade.",
  },
  {
    title: "Prices belong on the website",
    body: "Ours are. If a service business is embarrassed to state what it charges, that's usually a sign the number changes depending on who's asking.",
  },
  {
    title: "You should own what you paid for",
    body: "Ad accounts, Google profile, website, domain, photos and video — all in your name. And your ad spend goes to Google and Meta, never through us with a markup.",
  },
  {
    title: "Nobody can guarantee a Google ranking",
    body: "Anyone who tells you otherwise is selling something. We guarantee the work and report honestly on what it produced.",
  },
  {
    title: "Real work beats stock photos",
    body: "Homeowners can tell. We film your actual crew on your actual jobs, because that's the proof that makes someone pick you over the company with the nicer logo.",
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
            <span className="chrome">Marketing for owners who </span>
            <span className="chrome-purple">measure results in calls and booked jobs.</span>
          </h1>
          <p className="sub">
            Genova Web is a small marketing agency in {site.city}, {site.region}, working with
            home-service contractors and local businesses across {site.regionName}.
          </p>
        </div>
      </section>

      <section className="block block-tight">
        <div className="wrap wrap-narrow">
          <div className="reveal prose">
            <span className="kicker">Why we exist</span>
            <p>
              <strong>
                Most contractors get sold one of two things: a lead service that sells the same
                homeowner to five companies, or an agency retainer with a 12-month contract and a
                report full of impressions.
              </strong>{" "}
              Neither is designed around the thing an owner actually needs, which is more
              qualified people calling them — and only them.
            </p>
            <p>
              Shared leads mean racing four competitors to the same phone number. The big-agency
              route means an account manager relaying notes, ad spend with a markup nobody explains,
              and a contract you can&rsquo;t leave when it isn&rsquo;t working.
            </p>
            <p>
              We built a third option: published prices, short minimums, ad spend paid straight to
              Google and Meta, real footage of your real work, and speed-to-lead wired into every
              channel — because a lead that waits fourteen hours for a reply was paid for and
              thrown away.
            </p>
          </div>
          <SpecStrip items={specs} />
        </div>
      </section>

      <section className="block band-cream">
        <div className="wrap">
          <SectionHead
            kicker="How we think"
            title="Six opinions that shape everything we do."
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
        cta="Get a Free Audit"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
