import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { SectionHead, Crumbs, FaqList, FinalCta } from "@/components/ui";
import PricingTiers from "@/components/PricingTiers";
import JsonLd from "@/components/JsonLd";
import {
  buildPlans,
  carePlans,
  rushOptions,
  comparisonRows,
  alternativeComparison,
  hostingNote,
} from "@/lib/data/plans";
import { pricingSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing — Website Packages from $750",
  description:
    "Transparent website pricing: Starter $750, Growth $2,000, Pro $3,500. 50% up front, 50% on delivery. AI lead capture included in every plan. Care plans from $297/mo.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Website Packages from $750 | Genova Web",
    description:
      "Starter $750 · Growth $2,000 · Pro $3,500. AI lead capture in every plan. No hidden fees, no lock-in.",
    url: "/pricing",
  },
};

const faq = [
  {
    q: "What does the price actually include?",
    a: "Design, copywriting, build, launch, and the AI Lead Capture Assistant. There's no separate setup fee, template licence, or launch charge. The number on the card is the number you pay, plus rush delivery only if you choose it.",
  },
  {
    q: "How does the 50/50 payment split work?",
    a: "Half when you book, which reserves your build slot and starts the work. The other half when the site is finished and you've approved it — not before you've seen it.",
  },
  {
    q: "Do I have to take a care plan?",
    a: "No. Every plan works as a one-time build. Care and Care+ are optional, month to month, and cancellable any time. Pro includes three months of Care+ so you can judge it before deciding.",
  },
  {
    q: "What if I need more than the Pro plan covers?",
    a: "Then it's a custom quote rather than a package. Ecommerce, booking systems, memberships, and multi-brand builds sit outside these tiers. Tell us what you need and we'll price it honestly.",
  },
  {
    q: "Are there ongoing costs I should expect?",
    a: "Two: your domain (typically $12–20/year, paid to the registrar in your own name) and hosting. Hosting is $50/mo on its own, or included free in Genova Care at $297/mo. Nothing else is billed unless you ask for it.",
  },
  {
    q: "What's the difference between $50 hosting and the $297 care plan?",
    a: "The $50 keeps your site online and secure — hosting, SSL, nothing more. Genova Care includes that hosting plus daily backups, security patching, uptime and lead-system monitoring, two content edits a month, a monthly report, and a quarterly strategy call. Both are month to month.",
  },
  {
    q: "How many pages do I get?",
    a: "Starter is a single page. Growth covers up to 5 pages, including a dedicated page per service. Pro covers up to 10, which is what multi-location and service-area coverage needs. If you need more, we'll quote it.",
  },
  {
    q: "Who owns the website when it's done?",
    a: "You do — the site, the code, the content, and the domain. There's no proprietary platform to stay subscribed to and nothing held back as leverage.",
  },
  {
    q: "What happens if I want changes after launch?",
    a: "Post-launch support covers fixes and tweaks for 14 days on Starter, 30 on Growth, priority on Pro. After that, edits are included in a care plan or quoted individually.",
  },
  {
    q: "Can you work with my existing domain and content?",
    a: "Yes. We can build on the domain you already have and preserve URLs that already rank so you don't lose existing search traffic.",
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="yes" aria-label="Included">
        ✓
      </span>
    );
  if (value === false)
    return (
      <span className="no" aria-label="Not included">
        —
      </span>
    );
  return <>{value}</>;
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema()} id="schema-pricing" />
      <JsonLd data={faqSchema(faq)} id="schema-pricing-faq" />
      <JsonLd
        data={breadcrumbSchema([{ name: "Pricing", path: "/pricing" }])}
        id="schema-pricing-crumbs"
      />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={[{ name: "Pricing", path: "/pricing" }]} />
          <span className="eyebrow">Pricing</span>
          <h1>
            <span className="chrome">Clear prices. </span>
            <span className="chrome-purple">No surprises on the invoice.</span>
          </h1>
          <p className="sub">
            One-time build cost, split 50% up front and 50% on delivery. AI lead capture is included
            in every plan — not sold back to you as an upgrade.
          </p>
          <div className="actions">
            <Link href="#packages" className="btn-primary">
              See the packages
            </Link>
            <Link href="/roi-calculator" className="btn-ghost">
              What&rsquo;s a lead worth to you? <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="block" id="packages">
        <div className="wrap">
          <SectionHead
            kicker="Build packages"
            title="Pick the plan built for where your business is headed."
            lead="Every plan is a complete, finished website — the difference is how much ground it covers and how hard it works to get you found."
          />
          <PricingTiers plans={buildPlans} />

          <div className="pricing-notes reveal">
            <div className="rush">
              <b>Need it sooner?</b> Rush delivery available —{" "}
              {rushOptions.map((r, i) => (
                <span key={r.plan}>
                  {i > 0 ? ", " : ""}
                  {r.plan} {r.surcharge} ({r.timeline})
                </span>
              ))}
              .
            </div>
            <div className="timeline-note">
              Most projects launch sooner. Timelines depend on how quickly content, photos, and
              feedback are provided.
            </div>
          </div>
        </div>
      </section>

      {/* FULL COMPARISON TABLE */}
      <section className="block" id="compare">
        <div className="wrap">
          <SectionHead
            kicker="Line by line"
            title="Exactly what's in each plan."
            lead="No asterisks. If it's in the table, it's in the price."
          />
          <div className="table-scroll reveal">
            <table className="cmp">
              <caption className="hp">
                Feature comparison of the Starter, Growth, and Pro website packages
              </caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Starter — $750</th>
                  <th scope="col" className="hi">
                    Growth — $2,000
                  </th>
                  <th scope="col">Pro — $3,500</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((group) => (
                  <Fragment key={group.group}>
                    <tr className="group">
                      <th scope="colgroup" colSpan={4}>
                        {group.group}
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td>
                          <Cell value={row.starter} />
                        </td>
                        <td className="hi">
                          <Cell value={row.growth} />
                        </td>
                        <td>
                          <Cell value={row.pro} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR TEASER — the tool now lives on its own page */}
      <section className="block block-tight" id="calculator">
        <div className="wrap">
          <div className="calc-teaser reveal">
            <div>
              <span className="kicker">Work out the maths</span>
              <h2>What is one extra customer a month worth to you?</h2>
              <p>
                Enter your average job value and close rate, and see what extra inquiries are worth
                per year — plus how quickly a build pays for itself. Your numbers, no assumptions
                from us.
              </p>
              <Link href="/roi-calculator" className="btn-primary">
                Open the ROI calculator
              </Link>
            </div>
            <div className="calc-teaser-art" aria-hidden="true">
              <span className="cta-num">$30,240</span>
              <span className="cta-lbl">Added revenue / year</span>
              <div className="cta-bars">
                {[38, 62, 45, 78, 55, 92].map((h, i) => (
                  <i key={i} style={{ "--h": `${h}%`, "--i": i } as React.CSSProperties} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARE PLANS */}
      <section className="block" id="care">
        <div className="wrap">
          <SectionHead
            kicker="Ongoing care"
            title="Launch is day one. Care is every day after."
            lead="Optional, month to month, cancel any time. You keep the website either way."
          />
          <PricingTiers plans={carePlans} className="care-tiers" />
          <p className="care-note reveal">
            <b>Hosting:</b> {hostingNote}
          </p>
          <p className="care-note reveal">
            <b>No guarantees, no gimmicks.</b> Every month we optimize your website, local search
            presence, and lead system to maximize your chances of attracting qualified customers.
          </p>
        </div>
      </section>

      {/* ALTERNATIVES */}
      <section className="block" id="alternatives">
        <div className="wrap">
          <SectionHead
            kicker="The alternatives"
            title="Honestly, when we're not the right answer."
            lead="If you have time and patience but no budget, a DIY builder is a reasonable start. If you need enterprise systems, hire an agency. Here's where we actually fit."
          />
          <div className="table-scroll reveal">
            <table className="cmp">
              <caption className="hp">
                Comparison of Genova Web against DIY builders and traditional agencies
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

      {/* FAQ */}
      <section className="block" id="faq">
        <div className="wrap">
          <SectionHead kicker="Questions" title="Pricing questions, answered straight." />
          <FaqList items={faq} />
        </div>
      </section>

      <FinalCta
        title={
          <>
            <span className="chrome">Know what it costs. </span>
            <span className="chrome-purple">Now find out what it&rsquo;s worth.</span>
          </>
        }
        sub="Tell us about your business and we'll come back within 24 hours with a straight quote and an honest recommendation on which plan you actually need."
        cta="Get my quote"
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
