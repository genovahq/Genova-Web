import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, Crumbs, FinalCta, SpecStrip } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/data/services";
import { specs } from "@/lib/data/proof";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Local SEO, Google & LSA Ads, Content, Websites",
  description:
    "Home-service marketing in Orlando: local SEO, Google Search and Local Services Ads, content and social, speed-to-lead automation and websites. One system, measured in booked jobs.",
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
            <span className="chrome">Every channel, </span>
            <span className="chrome-purple">one pipeline of booked jobs.</span>
          </h1>
          <p className="sub">
            Getting found on Google, buying the calls you can&rsquo;t wait for, looking like the
            obvious choice, and answering every lead first. Most businesses have one of those
            working. We run all of them.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn-primary">
              Get a Free Audit
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
            title="Six services that add up to one working system."
            lead={`Take one, or run them together. Every one is available to businesses across ${site.regionName}.`}
          />
          <div className="grid-2">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="svc reveal" key={s.slug}>
                <h3>
                  {s.title}
                  {s.packageName && <> · {s.packageName}</>}
                </h3>
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
