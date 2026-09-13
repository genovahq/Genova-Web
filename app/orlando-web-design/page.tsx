import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, Crumbs, FaqList, FinalCta, SpecStrip } from "@/components/ui";
import PricingTiers from "@/components/PricingTiers";
import JsonLd from "@/components/JsonLd";
import { buildPlans } from "@/lib/data/plans";
import { industries } from "@/lib/data/industries";
import { specs } from "@/lib/data/proof";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

/*
 * Local landing page. This is the page that has a real shot at "web design
 * Orlando" style queries — the homepage is too general to rank for them.
 *
 * IMPORTANT: everything on this page is true today. There are no claimed
 * client counts, no "trusted by Orlando businesses since X", and no fake
 * neighbourhood case studies. Add those only when they're real.
 */

export const metadata: Metadata = {
  title: { absolute: "Orlando Web Design | Websites Built to Get You Customers" },
  description:
    "Web design in Orlando, FL for local service businesses. High-converting sites with AI lead capture and local SEO, live in under two weeks. From $750.",
  alternates: { canonical: "/orlando-web-design" },
  openGraph: {
    title: "Orlando Web Design | Genova Web",
    description:
      "Websites for Orlando local businesses — built to convert, found on Google, live in under two weeks.",
    url: "/orlando-web-design",
  },
};

const faq = [
  {
    q: "Do you only work with Orlando businesses?",
    a: `We're based in ${site.city} and most of our work is Central Florida, but the work is done remotely, so we can build for a business anywhere in ${site.regionName} or the US. Local just means we understand the market you're competing in.`,
  },
  {
    q: "Can we meet in person?",
    a: "Everything from intake to launch runs over email, phone, and a shared preview link — that's how we keep the timeline to under two weeks and the price where it is. If a call would help, we'll set one up.",
  },
  {
    q: "How do I rank in the Orlando map pack?",
    a: "Three things move it most: a properly claimed and categorized Google Business Profile, a website that clearly states what you do and where, and consistent business details everywhere they appear. We handle all three from the Growth plan up.",
  },
  {
    q: "Which areas around Orlando do you cover?",
    a: `We build service-area pages for wherever you actually work — commonly ${site.serviceAreas.slice(1, 6).join(", ")}, and the rest of Central Florida.`,
  },
  {
    q: "How much does a website cost in Orlando?",
    a: "Our packages run $750 to $3,500 as a one-time build cost, split 50% up front and 50% on delivery. Local agencies typically quote $5,000–$15,000 for comparable scope with a longer timeline.",
  },
];

export default function OrlandoPage() {
  const crumbs = [{ name: "Orlando Web Design", path: "/orlando-web-design" }];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Web design in ${site.city}, ${site.region}`,
          description:
            "Website design, AI lead capture, and local SEO for Orlando service businesses.",
          path: "/orlando-web-design",
          serviceType: "Web design",
        })}
        id="schema-orlando"
      />
      <JsonLd data={faqSchema(faq)} id="schema-orlando-faq" />
      <JsonLd data={breadcrumbSchema(crumbs)} id="schema-orlando-crumbs" />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={crumbs} />
          <span className="eyebrow">
            {site.city}, {site.region}
          </span>
          <h1>
            <span className="chrome">Web design in Orlando for businesses that </span>
            <span className="chrome-purple">need the phone to ring.</span>
          </h1>
          <p className="sub">
            Central Florida is a crowded market with a lot of tourist-facing noise. If you serve
            locals, your site has to win a specific search from a specific neighbourhood — not just
            look good.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn-primary">
              Get a free quote
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See pricing <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="block block-tight">
        <div className="wrap wrap-narrow">
          <div className="reveal prose">
            <span className="kicker">Why local matters here</span>
            <p>
              <strong>
                Orlando has more small service businesses competing for the same searches than
                almost anywhere in Florida.
              </strong>{" "}
              Metro Orlando covers a wide, sprawling area — a customer in Winter Garden and one in
              Oviedo are forty minutes apart and searching for completely different things, even
              when they want the same service.
            </p>
            <p>
              That&rsquo;s why a single homepage that says &ldquo;serving Central Florida&rdquo;
              underperforms. Google ranks on proximity and relevance, so the business with a genuine
              page for the suburb someone is standing in wins the click — even against a bigger
              competitor downtown.
            </p>
            <p>
              We build the structure that lets you compete area by area and service by service,
              instead of hoping one page carries all of it.
            </p>
          </div>
          <SpecStrip items={specs} />
        </div>
      </section>

      {/* AREAS */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="Service areas"
            title="Built for the whole metro, not just downtown."
            lead="We create real pages for the areas you actually work in — with content specific to each, not a list of city names stuffed in a footer."
          />
          <div className="grid-4">
            {site.serviceAreas.map((area) => (
              <div className="step reveal" key={area} style={{ padding: "22px 24px" }}>
                <h3 style={{ marginBottom: 0 }}>{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="Who we build for in Orlando"
            title="Local trades and service businesses."
          />
          <div className="grid-3">
            {industries.map((i) => (
              <Link href={`/industries/${i.slug}`} className="svc reveal" key={i.slug}>
                <h3>{i.name}</h3>
                <p>{i.lead}</p>
                <span className="more">
                  Read more <span className="arw">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="Orlando web design pricing"
            title="What a website costs here, stated plainly."
            lead="One-time build cost. 50% up front, 50% on delivery. No retainer required."
          />
          <PricingTiers plans={buildPlans} />
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHead kicker="Questions" title="Orlando web design, answered." />
          <FaqList items={faq} />
        </div>
      </section>

      <FinalCta
        title={
          <>
            <span className="chrome">Let&rsquo;s get you found </span>
            <span className="chrome-purple">in your corner of Orlando.</span>
          </>
        }
        sub={`Free quote, no obligation, reply within 24 hours. Email ${site.email} or start below.`}
        cta="Start a Project"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
