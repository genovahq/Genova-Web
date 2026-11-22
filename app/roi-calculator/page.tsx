import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, Crumbs, FaqList, FinalCta } from "@/components/ui";
import RoiCalculator from "@/components/RoiCalculator";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing ROI Calculator — What Is a Lead Actually Worth?",
  description:
    "Free marketing ROI calculator for contractors and local businesses. Enter your average job value and close rate to see what extra leads are worth per year — against a retainer or a website build.",
  alternates: { canonical: "/roi-calculator" },
  openGraph: {
    title: "Marketing ROI Calculator | Genova Web",
    description:
      "Work out what one extra booked job a month is worth to your business — and what it takes to cover a retainer.",
    url: "/roi-calculator",
  },
};

const faq = [
  {
    q: "How does this calculator work?",
    a: "It multiplies the extra monthly inquiries you enter by your close rate to get new customers per month, multiplies that by your average job value to get added revenue, then divides the build cost by that monthly figure to get a payback period. That's the whole calculation — no hidden multipliers.",
  },
  {
    q: "Why don't you estimate the extra leads for me?",
    a: "Because we'd be making it up. Traffic, competition, and demand vary enormously between trades and towns, and any agency that plugs in a 'typical 300% lift' is inventing a number to make its own quote look good. You know your market better than a slider does.",
  },
  {
    q: "What's a realistic close rate?",
    a: "It depends heavily on your trade and how fast you respond. Rather than guess for you, use your own experience: of the last ten people who contacted you, how many booked? That's your number.",
  },
  {
    q: "Is this a guarantee of results?",
    a: "No. It's a planning tool built entirely from figures you supply — an arithmetic model, not a forecast. No one can guarantee website performance, and we don't.",
  },
  {
    q: "What should I do with the result?",
    a: "Use it to sanity-check any website quote, including ours. If a build costs less than a couple of extra jobs, the decision is usually straightforward. If it doesn't, that's worth knowing before you spend.",
  },
];

export default function RoiCalculatorPage() {
  const crumbs = [{ name: "ROI Calculator", path: "/roi-calculator" }];

  return (
    <>
      <JsonLd data={faqSchema(faq)} id="schema-roi-faq" />
      <JsonLd data={breadcrumbSchema(crumbs)} id="schema-roi-crumbs" />

      <section className="hero hero-sm">
        <div className="hero-ring" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={crumbs} />
          <span className="eyebrow">ROI Calculator</span>
          <h1>
            <span className="chrome">What is one extra customer a month </span>
            <span className="chrome-purple">actually worth to you?</span>
          </h1>
          <p className="sub">
            Set your own numbers below. This is the calculation worth doing before you accept any
            website quote — including ours.
          </p>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RoiCalculator />
        </div>
      </section>

      {/* HOW TO READ IT */}
      <section className="block block-tight band-cream">
        <div className="wrap">
          <SectionHead
            kicker="How to read this"
            title="Three numbers that decide whether marketing is worth it."
            lead="Most marketing conversations skip straight to price. These are the figures that actually determine whether the price is a good one."
          />
          <div className="grid-3">
            <div className="svc reveal">
              <h3>Average job value</h3>
              <p>
                A $150 drain clear and a $22,000 roof replacement justify completely different
                budgets. The higher your job value, the less a site has to do before it pays for
                itself.
              </p>
            </div>
            <div className="svc reveal">
              <h3>Close rate</h3>
              <p>
                Of the people who contact you, how many book. If this is low, more traffic
                won&rsquo;t fix it — the bottleneck is response speed or the conversation, not the
                website.
              </p>
            </div>
            <div className="svc reveal">
              <h3>Payback period</h3>
              <p>
                How many months of added revenue it takes to cover the build. Under three months is
                usually an easy decision. Over twelve, and the honest answer may be that you
                don&rsquo;t need this yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="wrap">
          <h2 className="reveal">
            <span className="chrome">If the maths doesn&rsquo;t work, </span>
            <span className="chrome-purple">we&rsquo;ll tell you that too.</span>
          </h2>
          <p
            className="reveal"
            style={{
              color: "var(--muted)",
              maxWidth: "52ch",
              margin: "28px auto 0",
              position: "relative",
            }}
          >
            We&rsquo;d rather turn down a client than sell a $1,500/mo retainer to a business that
            can&rsquo;t recover it. Send us your numbers and we&rsquo;ll give you a straight read.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHead kicker="Questions" title="About this calculator." />
          <FaqList items={faq} />
          <div className="actions" style={{ marginTop: 40 }}>
            <Link href="/pricing" className="btn-ghost">
              See what each plan costs <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCta
        title={
          <>
            <span className="chrome">Numbers look good? </span>
            <span className="chrome-purple">Let&rsquo;s get started.</span>
          </>
        }
        sub={`Free audit, no obligation, reply within 24 hours. Serving ${site.city} and all of ${site.regionName}.`}
        cta="Get a Free Audit"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
