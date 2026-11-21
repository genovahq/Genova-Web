import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { SectionHead, Crumbs, FaqList, FinalCta } from "@/components/ui";
import PricingTiers from "@/components/PricingTiers";
import JsonLd from "@/components/JsonLd";
import {
  buildPlans,
  carePlans,
  retainerPlans,
  liteRetainerPlans,
  fullEngine,
  projectPlans,
  rushOptions,
  comparisonRows,
  alternativeComparison,
} from "@/lib/data/plans";
import { pricingSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing — Marketing Retainers, Ads & Websites",
  description:
    "Published prices for home-service marketing: local SEO from $1,500/mo, Google & LSA ads from $750/mo, content from $1,800/mo, Full Engine $5,995/mo. Websites from $1,250. Ad spend never marked up.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Marketing Retainers, Ads & Websites | Genova Web",
    description:
      "Found $1,500/mo · Booked $1,500/mo · Seen $3,500/mo · Full Engine $5,995/mo · Websites from $1,250. Ad spend paid direct to Google and Meta.",
    url: "/pricing",
  },
};

const faq = [
  {
    q: "Is ad spend included in the monthly fee?",
    a: "No — and that's on purpose. Your ad spend is billed by Google and Meta directly to your card, in your own ad accounts. We never mark it up or route it through us. Our fee is for the work: building, managing and optimizing the campaigns. Above $10,000 a month in spend, the Booked fee moves to 10% of spend.",
  },
  {
    q: "Why is there a minimum term?",
    a: "Because the first month of any campaign is setup and learning, and SEO takes months to compound. Booked, Booked LSA, Seen and Seen Lite have a 3-month minimum. Found and Full Engine have a 6-month minimum, because SEO genuinely needs that long to show results. After the minimum, everything is month to month.",
  },
  {
    q: "Which package should I start with?",
    a: "If you need calls this month, Booked — paid ads are the fastest lever. If you're getting steady work but losing the map pack to competitors, Found. If people already know you but your social feeds are empty, Seen. If you want every channel run as one system, Full Engine. We'll tell you honestly on the first call — including if you don't need us yet.",
  },
  {
    q: "Why is Full Engine cheaper than buying the parts?",
    a: "Because running SEO, ads and content together is less work than running them separately — the same shoot feeds the ads and the socials, the same landing pages serve SEO and paid traffic. Found + Booked with Meta + Seen would be $7,000 a month separately; Full Engine is $5,995, and includes a Growth website build once you pass month six.",
  },
  {
    q: "I already have a website. Do I need a new one?",
    a: "Not necessarily. If your site loads fast and is clear about what you do, we can work with it — Lead Leak Fix adds missed-call text-back, instant lead follow-up and review requests to almost any existing site. If the site is actively costing you leads, we'll say so and show you why.",
  },
  {
    q: "Who owns the accounts and the website?",
    a: "You do. Your Google Ads account, Meta account, Google Business Profile, website, domain and content are all in your name. If you ever leave, you take everything with you — nothing is held back as leverage.",
  },
  {
    q: "How do website payments work?",
    a: "Website builds and the Brand Refresh are split 50% when you book and 50% when the site is finished and approved — not before you've seen it. Other one-time projects are paid up front. Retainers are billed monthly in advance.",
  },
  {
    q: "What do the Content Day and Ad Launch credits mean?",
    a: "If you start Seen within 30 days of a Content Day, $1,000 of the Content Day comes off your first month. If you start Booked within 30 days of an Ad Launch Setup, $750 comes off your first month. Try the work before committing to the retainer.",
  },
  {
    q: "Do you guarantee results?",
    a: "No honest agency does — rankings and ad auctions aren't ours to control. What we guarantee is the work, and that you'll see exactly what it produced every month in leads and cost per job, not impressions and vanity metrics.",
  },
  {
    q: "What's the difference between $50 hosting and the $149 care plan?",
    a: "The $50 keeps your site online and secure — managed hosting, SSL, daily backups and uptime monitoring. Genova Care adds lead-system monitoring, unlimited content edits and a quarterly check-in. Genova Care is included in Found and Full Engine.",
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

const terms = [
  {
    title: "Ad spend, never marked up",
    body: "Google and Meta bill you directly, in accounts you own. Our fee is for the work, not a cut of your budget — until spend passes $10,000/mo, when Booked moves to 10% of spend.",
  },
  {
    title: "Short minimums",
    body: "3 months on Booked and Seen, 6 on Found and Full Engine — SEO needs that long to compound. Month to month after that.",
  },
  {
    title: "You own everything",
    body: "Ad accounts, Business Profile, website, domain, photos and video are all yours. Leave whenever you like and take it all with you.",
  },
];

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
            <span className="chrome">Published prices. </span>
            <span className="chrome-purple">Ad spend never marked up.</span>
          </h1>
          <p className="sub">
            Most agencies make you book a call to find out what they cost. Here&rsquo;s every
            package we sell — monthly marketing, websites and one-time projects — with the terms
            spelled out.
          </p>
          <div className="actions">
            <Link href="#retainers" className="btn-primary">
              See the packages
            </Link>
            <Link href="/roi-calculator" className="btn-ghost">
              What&rsquo;s a booked job worth to you? <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MONTHLY RETAINERS */}
      <section className="block" id="retainers">
        <div className="wrap">
          <SectionHead
            kicker="Monthly marketing"
            title="Get found, get booked, get seen."
            lead="Three retainers, each owning one job. Take the one you need most, or run all three together as the Full Engine."
          />
          <PricingTiers plans={retainerPlans} />
        </div>
      </section>

      {/* FULL ENGINE */}
      <section className="block block-tight" id="full-engine">
        <div className="wrap">
          <SectionHead
            kicker="The whole system"
            title="All three, run as one — for less than the parts."
            lead="SEO, ads and content feeding the same pipeline, measured as booked jobs."
          />
          <PricingTiers plans={[fullEngine]} className="engine-tier" />
        </div>
      </section>

      {/* LITE RETAINERS */}
      <section className="block block-tight" id="lite">
        <div className="wrap">
          <SectionHead
            kicker="Smaller budgets"
            title="Start smaller. Step up when it pays."
            lead="For contractors who only run Local Services Ads, and for shops, cafés and local brands that need steady content without the full contractor package."
          />
          <PricingTiers plans={liteRetainerPlans} className="care-tiers" />
        </div>
      </section>

      {/* TERMS */}
      <section className="block block-tight" id="terms">
        <div className="wrap">
          <div className="grid-3">
            {terms.map((t) => (
              <div className="svc reveal" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITES */}
      <section className="block" id="packages">
        <div className="wrap">
          <SectionHead
            kicker="Websites"
            title="A website built to turn traffic into booked jobs."
            lead="Custom-coded, fast, and wired for speed-to-lead from day one. Every build includes automated lead response — not sold back to you as an upgrade."
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

      {/* WEBSITE COMPARISON TABLE */}
      <section className="block" id="compare">
        <div className="wrap">
          <SectionHead
            kicker="Line by line"
            title="Exactly what's in each website."
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
                  <th scope="col">Starter — {buildPlans[0].priceLabel}</th>
                  <th scope="col" className="hi">
                    Growth — {buildPlans[1].priceLabel}
                  </th>
                  <th scope="col">Pro — {buildPlans[2].priceLabel}</th>
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

      {/* ONE-TIME PROJECTS */}
      <section className="block" id="projects">
        <div className="wrap">
          <SectionHead
            kicker="One-time projects"
            title="Fix one thing, properly, without a retainer."
            lead="Good on their own — and two of them credit toward the matching retainer if you continue within 30 days."
          />
          <PricingTiers plans={projectPlans} className="pricing pricing-2x2" />
        </div>
      </section>

      {/* ROI CALCULATOR TEASER */}
      <section className="block block-tight" id="calculator">
        <div className="wrap">
          <div className="calc-teaser reveal">
            <div>
              <span className="kicker">Work out the maths</span>
              <h2>What is one extra booked job a month worth to you?</h2>
              <p>
                Enter your average job value and close rate, and see what extra leads are worth per
                year — and how many it takes to cover a retainer. Your numbers, no assumptions from
                us.
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
            kicker="Website care"
            title="Keep the site fast, secure and working."
            lead="Optional, month to month, cancel any time. Genova Care is included in Found and Full Engine."
          />
          <PricingTiers plans={carePlans} className="care-tiers" />
        </div>
      </section>

      {/* ALTERNATIVES */}
      <section className="block" id="alternatives">
        <div className="wrap">
          <SectionHead
            kicker="The alternatives"
            title="Honestly, when we're not the right answer."
            lead="If you have time but no budget, doing it yourself is a reasonable start. If you need a national campaign, hire a big agency. Here's where we actually fit."
          />
          <div className="table-scroll reveal">
            <table className="cmp">
              <caption className="hp">
                Comparison of Genova Web against doing it yourself and large agencies
              </caption>
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col" className="hi">
                    Genova Web
                  </th>
                  <th scope="col">Doing it yourself</th>
                  <th scope="col">Large agency</th>
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
        sub="Tell us about your business and we'll come back within 24 hours with a straight recommendation — which package you actually need, and which you don't."
        cta="Get my recommendation"
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
