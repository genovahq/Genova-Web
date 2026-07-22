import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHead, Crumbs, FinalCta } from "@/components/ui";
import PricingTiers from "@/components/PricingTiers";
import JsonLd from "@/components/JsonLd";
import { industries, getIndustry } from "@/lib/data/industries";
import { buildPlans } from "@/lib/data/plans";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: { absolute: `${industry.metaTitle} | ${site.name}` },
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const plan = buildPlans.find((p) => p.slug === industry.recommendedPlan) ?? buildPlans[1];
  const crumbs = [
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${industry.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Website design for ${industry.plural}`,
          description: industry.metaDescription,
          path: `/industries/${industry.slug}`,
          serviceType: `${industry.name} website design`,
        })}
        id={`schema-industry-${industry.slug}`}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} id={`schema-crumbs-${industry.slug}`} />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={crumbs} />
          <span className="eyebrow">{industry.name}</span>
          <h1>
            <span className="chrome">{industry.h1}</span>
          </h1>
          <p className="sub">{industry.lead}</p>
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

      {/* THE MOMENT */}
      <section className="block block-tight">
        <div className="wrap wrap-narrow">
          <div className="reveal prose">
            <span className="kicker">The moment they search</span>
            <p style={{ fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.7 }}>
              {industry.moment}
            </p>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="What goes wrong"
            title={`Where most ${industry.plural} lose the job.`}
            lead="None of these are exotic problems. They're the same four or five things, on almost every site we're asked to replace."
          />
          <ul className="contact-points reveal" style={{ marginTop: 40, maxWidth: 720 }}>
            {industry.painPoints.map((p, i) => (
              <li key={p}>
                <span>{String(i + 1).padStart(2, "0")}</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT WE EMPHASIZE */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="How we build it"
            title={`What a ${industry.name.toLowerCase()} site needs that a generic one doesn't.`}
          />
          <div className="grid-2">
            {industry.emphasis.map((e) => (
              <div className="svc reveal" key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH TERMS */}
      <section className="block block-tight">
        <div className="wrap">
          <SectionHead
            kicker="What we build you to rank for"
            title="The searches that turn into work."
            lead="Each of these is a different page with different content — not one homepage trying to be all of them."
          />
          <div className="grid-4">
            {industry.searchTerms.map((term) => (
              <div className="step reveal" key={term}>
                <div className="s-num" style={{ fontSize: "1rem" }}>
                  &ldquo;{term.replace("[city]", site.city.toLowerCase())}&rdquo;
                </div>
              </div>
            ))}
          </div>
          <p className="timeline-note reveal" style={{ marginTop: 24 }}>
            Example terms for illustration — we research the actual search volume and competition in
            your area before deciding which pages to build. No one can promise a ranking position,
            and we don&rsquo;t.
          </p>
        </div>
      </section>

      {/* RECOMMENDED PLAN */}
      <section className="block">
        <div className="wrap">
          <SectionHead
            kicker="Where to start"
            title={`Most ${industry.plural} land on ${plan.name}.`}
            lead={`${plan.pitch} If your situation is different, we'll say so rather than upsell you.`}
          />
          <PricingTiers plans={[plan]} className="grid-2" />
          <div className="actions" style={{ marginTop: 30 }}>
            <Link href="/pricing" className="btn-ghost">
              Compare all plans <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="block block-tight">
        <div className="wrap">
          <SectionHead kicker="Other trades" title="We build for these too." />
          <div className="grid-3">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .slice(0, 3)
              .map((i) => (
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

      <FinalCta
        title={
          <>
            <span className="chrome">Let&rsquo;s get your phone ringing, </span>
            <span className="chrome-purple">not just your site looking good.</span>
          </>
        }
        sub={`Websites for ${industry.plural} in ${site.city} and across ${site.regionName}. Free quote, reply within 24 hours.`}
        cta="Get my quote"
        secondary={{ label: "See all industries", href: "/industries" }}
      />
    </>
  );
}
