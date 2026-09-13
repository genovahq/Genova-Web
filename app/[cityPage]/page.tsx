import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHead, Crumbs, FaqList, FinalCta, SpecStrip } from "@/components/ui";
import PricingTiers from "@/components/PricingTiers";
import JsonLd from "@/components/JsonLd";
import { buildPlans } from "@/lib/data/plans";
import { industries } from "@/lib/data/industries";
import { specs } from "@/lib/data/proof";
import { cities, getCity, cityPath } from "@/lib/data/cities";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

/*
 * City / service-area landing pages, served at /<city>-web-design.
 *
 * These are the pages with a real shot at "web design <city>" style queries.
 * Each city's distinguishing copy lives in lib/data/cities.ts and is written
 * uniquely on purpose — near-duplicate city pages read as doorway pages to
 * Google. Orlando is excluded here; it has its own page at /orlando-web-design.
 */

const SUFFIX = "-web-design";

/** Resolve the [cityPage] param ("winter-park-web-design") back to a city. */
function cityFromParam(cityPage: string) {
  if (!cityPage.endsWith(SUFFIX)) return undefined;
  return getCity(cityPage.slice(0, -SUFFIX.length));
}

type Params = { params: Promise<{ cityPage: string }> };

/** Only these params render; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ cityPage: `${c.slug}${SUFFIX}` }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { cityPage } = await params;
  const city = cityFromParam(cityPage);
  if (!city) return {};
  const path = cityPath(city.slug);
  return {
    title: { absolute: `${city.metaTitle} | ${site.name}` },
    description: city.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${city.name} Web Design | ${site.name}`,
      description: city.metaDescription,
      url: path,
    },
  };
}

/** Resolve a nearby slug to a display name + href ("orlando" -> the bespoke page). */
function nearbyLink(slug: string) {
  if (slug === "orlando") return { name: "Orlando", href: "/orlando-web-design" };
  const c = getCity(slug);
  return c ? { name: c.name, href: cityPath(c.slug) } : null;
}

export default async function CityPage({ params }: Params) {
  const { cityPage } = await params;
  const city = cityFromParam(cityPage);
  if (!city) notFound();

  const path = cityPath(city.slug);
  const crumbs = [{ name: `${city.name} Web Design`, path }];
  const nearby = city.nearby.map(nearbyLink).filter((n): n is { name: string; href: string } => !!n);

  const faq = [
    ...city.faq,
    {
      q: `How much does a website cost in ${city.name}?`,
      a: "Our packages run $750 to $3,500 as a one-time build, split 50% up front and 50% on delivery. Local agencies typically quote $5,000–$15,000 for comparable scope with a longer timeline.",
    },
    {
      q: `How do I show up in ${city.name} on Google?`,
      a: "Three things move it most: a properly claimed and categorized Google Business Profile, a website that clearly states what you do and where, and consistent business details everywhere they appear. We handle all three from the Growth plan up.",
    },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Web design in ${city.name}, ${site.region}`,
          description: city.metaDescription,
          path,
          serviceType: "Web design",
          areaServedCity: city.name,
        })}
        id={`schema-${city.slug}`}
      />
      <JsonLd data={faqSchema(faq)} id={`schema-${city.slug}-faq`} />
      <JsonLd data={breadcrumbSchema(crumbs)} id={`schema-${city.slug}-crumbs`} />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={crumbs} />
          <span className="eyebrow">
            {city.name}, {site.region} · {city.county}
          </span>
          <h1>
            <span className="chrome">Web design in {city.name} for businesses that </span>
            <span className="chrome-purple">need the phone to ring.</span>
          </h1>
          <p className="sub">{city.heroLead}</p>
          <div className="actions">
            <Link href="/contact" className="btn-primary">
              Get a free quote
            </Link>
            <a href={site.phoneHref} className="btn-ghost">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="block block-tight">
        <div className="wrap wrap-narrow">
          <div className="reveal prose">
            <span className="kicker">Why local matters in {city.name}</span>
            {city.why.map((p, i) => (
              <p key={i}>{i === 0 ? <strong>{p}</strong> : p}</p>
            ))}
          </div>
          <SpecStrip items={specs} />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker={`Who we build for in ${city.name}`}
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
            kicker={`${city.name} web design pricing`}
            title="What a website costs here, stated plainly."
            lead="One-time build cost. 50% up front, 50% on delivery. No retainer required."
          />
          <PricingTiers plans={buildPlans} />
        </div>
      </section>

      {/* NEARBY AREAS — internal linking to sibling service-area pages */}
      {nearby.length > 0 && (
        <section className="block block-tight">
          <div className="wrap">
            <SectionHead
              kicker="Nearby areas we serve"
              title={`Around ${city.name} and across Central Florida.`}
              lead="We build a real local page for each area we work in — pick the one closest to you."
            />
            <div className="grid-4">
              {nearby.map((n) => (
                <Link href={n.href} className="step reveal" key={n.href} style={{ padding: "22px 24px" }}>
                  <h3 style={{ marginBottom: 0 }}>{n.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="block">
        <div className="wrap">
          <SectionHead kicker="Questions" title={`${city.name} web design, answered.`} />
          <FaqList items={faq} />
        </div>
      </section>

      <FinalCta
        title={
          <>
            <span className="chrome">Let&rsquo;s get you found </span>
            <span className="chrome-purple">in {city.name}.</span>
          </>
        }
        sub={`Free quote, no obligation, reply within 24 hours. Call ${site.phone} or start below.`}
        cta="Start a Project"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
