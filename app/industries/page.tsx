import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, Crumbs, FinalCta } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { industries } from "@/lib/data/industries";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Build For — Trades, Home Services & Local Business",
  description:
    "Websites built for plumbers, HVAC, roofers, landscapers, med spas, and auto detailers across Orlando and Florida. Every trade converts differently.",
  alternates: { canonical: "/industries" },
  openGraph: { url: "/industries", title: "Industries We Build For | Genova Web" },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Industries", path: "/industries" }])}
        id="schema-industries-crumbs"
      />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={[{ name: "Industries", path: "/industries" }]} />
          <span className="eyebrow">Industries</span>
          <h1>
            <span className="chrome">A roofing lead and a med spa lead </span>
            <span className="chrome-purple">are not the same lead.</span>
          </h1>
          <p className="sub">
            One is an emergency, the other is a decision someone has been sitting on for six months.
            Building both the same way is why so many small-business sites underperform.
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

      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="Who we build for"
            title="Pick your trade. We'll tell you what actually matters for it."
            lead={`We work with local service businesses in ${site.city} and across ${site.regionName}. Don't see yours? The thinking transfers — get in touch.`}
          />
          <div className="grid-3">
            {industries.map((i) => (
              <Link href={`/industries/${i.slug}`} className="svc reveal" key={i.slug}>
                <h3>{i.name}</h3>
                <p>{i.lead}</p>
                <span className="more">
                  Websites for {i.plural} <span className="arw">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={
          <>
            <span className="chrome">Different trade? </span>
            <span className="chrome-purple">Still the same problem.</span>
          </>
        }
        sub="If your customers find you by searching and decide by looking, we can help — whatever the industry. Tell us what you do."
        cta="Start a Project"
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
