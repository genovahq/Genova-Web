import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolio } from "@/lib/data/proof";
import PricingTiers from "@/components/PricingTiers";
import { SectionHead, Crumbs, FaqList, FinalCta } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { services, getService } from "@/lib/data/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** Statically render every service page at build time. */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    // Absolute title: these already contain the location and don't need the
    // brand template appended twice.
    title: { absolute: `${service.metaTitle} | ${site.name}` },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const featured = service.featuredWork
    ? portfolio.find((p) => p.slug === service.featuredWork!.slug)
    : undefined;
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: service.navLabel, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.metaDescription,
          path: `/services/${service.slug}`,
          serviceType: service.title,
        })}
        id={`schema-service-${service.slug}`}
      />
      <JsonLd data={faqSchema(service.faq)} id={`schema-faq-${service.slug}`} />
      <JsonLd data={breadcrumbSchema(crumbs)} id={`schema-crumbs-${service.slug}`} />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={crumbs} />
          <span className="eyebrow">{service.kicker}</span>
          <h1>
            <span className="chrome">{service.h1}</span>
          </h1>
          <p className="sub">{service.lead}</p>
          {service.startingAt && (
            <p className="service-price">
              Starting at <b>${service.startingAt.toLocaleString("en-US")}</b>
              <span> · three packages to choose from</span>
            </p>
          )}
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

      {/* THE PROBLEM */}
      <section className="block block-tight">
        <div className="wrap wrap-narrow">
          <div className="reveal prose">
            <span className="kicker">The problem</span>
            <h2
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 700,
                fontSize: "clamp(1.6rem,3.4vw,2.4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.12,
                marginBottom: 18,
                maxWidth: "22ch",
              }}
            >
              {service.problem.heading}
            </h2>
            <p>{service.problem.body}</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="What's included"
            title="What you're actually paying for."
            lead={service.inPlans}
          />
          <div className="grid-3">
            {service.included.map((item) => (
              <div className="svc reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="statement">
        <div className="wrap">
          <h2 className="reveal">
            <span className="chrome">When this is done properly, </span>
            <span className="chrome-purple">here&rsquo;s what changes.</span>
          </h2>
          <ul
            className="contact-points reveal"
            style={{ maxWidth: 620, margin: "40px auto 0", textAlign: "left" }}
          >
            {service.outcomes.map((o, i) => (
              <li key={o}>
                <span>{String(i + 1).padStart(2, "0")}</span> {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PACKAGES — store tiers, reusing the pricing-page cards */}
      {service.tiers && (
        <section className="block" id="packages">
          <div className="wrap">
            <SectionHead
              kicker={service.tiers.kicker}
              title={service.tiers.title}
              lead={service.tiers.lead}
            />
            <PricingTiers plans={service.tiers.plans} />
            <div className="pricing-notes reveal">
              {service.tiers.notes.map((n) => (
                <div className="rush" key={n.label}>
                  <b>{n.label}</b> {n.text}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURED WORK — a real, live client site (never a demo) */}
      {featured && service.featuredWork && (
        <section className="block">
          <div className="wrap">
            <SectionHead
              kicker="Live example"
              title={service.featuredWork.heading}
              lead={service.featuredWork.body}
            />
            <div className="work-grid solo">
              <a
                className="work-card reveal"
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="work-shot">
                  <Image
                    src={featured.image}
                    alt={featured.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, 640px"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div className="work-meta">
                  <span className="tag">{featured.industry}</span>
                  <h3>{featured.business}</h3>
                  <span className="work-link">
                    Visit live site <span className="arw">→</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* NEXT STEP — e.g. sending traffic to a new store */}
      {service.nextStep && (
        <section className="block block-tight">
          <div className="wrap wrap-narrow">
            <div className="reveal prose">
              <span className="kicker">{service.nextStep.kicker}</span>
              <h2
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem,3.4vw,2.4rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.12,
                  marginBottom: 18,
                  maxWidth: "22ch",
                }}
              >
                {service.nextStep.heading}
              </h2>
              <p>{service.nextStep.body}</p>
              <div className="actions" style={{ marginTop: 24 }}>
                <Link href={service.nextStep.href} className="btn-ghost">
                  {service.nextStep.cta} <span className="arw">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="block band-cream">
        <div className="wrap">
          <SectionHead kicker="Questions" title={`${service.navLabel}, answered.`} />
          <FaqList items={service.faq} />
        </div>
      </section>

      {/* SIBLING SERVICES — internal linking so authority flows between pages */}
      <section className="block block-tight">
        <div className="wrap">
          <SectionHead kicker="Also worth reading" title="Keep reading." />
          <div className="grid-2">
            {others.map((s) => (
              <Link href={`/services/${s.slug}`} className="svc reveal" key={s.slug}>
                <h3>{s.navLabel}</h3>
                <p>{s.lead}</p>
                <span className="more">
                  Read more <span className="arw">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={
          <>
            <span className="chrome">Ready to put this to work </span>
            <span className="chrome-purple">for your business?</span>
          </>
        }
        sub={`Tell us what you do and where you're losing customers. We'll come back within 24 hours with a straight answer — serving ${site.city} and all of ${site.regionName}.`}
        cta="Start a Project"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
