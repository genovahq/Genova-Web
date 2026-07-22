import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, Crumbs, FinalCta, SpecStrip } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/data/services";
import { specs } from "@/lib/data/proof";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Web Design, AI Lead Capture & Local SEO",
  description:
    "Website design, AI lead capture, local SEO, and ongoing care plans for local businesses in Orlando and across Florida. Four disciplines, one system.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "Services | Genova Web" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Services", path: "/services" }])}
        id="schema-services-crumbs"
      />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={[{ name: "Services", path: "/services" }]} />
          <span className="eyebrow">Services</span>
          <h1>
            <span className="chrome">A website is four jobs </span>
            <span className="chrome-purple">pretending to be one.</span>
          </h1>
          <p className="sub">
            Getting found, converting the visit, capturing the lead, and staying alive afterwards.
            Most sites do one of those well and quietly fail the other three.
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
            kicker="What we do"
            title="Four disciplines that add up to one working system."
            lead={`Every Genova build touches all four. What changes between plans is how far each one goes — and every one is available to businesses across ${site.regionName}.`}
          />
          <div className="grid-2">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="svc reveal" key={s.slug}>
                <h3>{s.title}</h3>
                <p>{s.lead}</p>
                <span className="tag">{s.inPlans}</span>
                <span className="more">
                  Read more <span className="arw">→</span>
                </span>
              </Link>
            ))}
          </div>
          <SpecStrip items={specs} />
        </div>
      </section>

      <FinalCta
        title={
          <>
            <span className="chrome">Not sure which of these you need? </span>
            <span className="chrome-purple">That&rsquo;s a normal place to start.</span>
          </>
        }
        sub="Tell us what your business does and where customers currently find you. We'll tell you honestly which parts are worth paying for and which aren't."
        cta="Get an honest recommendation"
        secondary={{ label: "Browse by industry", href: "/industries" }}
      />
    </>
  );
}
