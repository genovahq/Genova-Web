import type { Metadata } from "next";
import { Suspense } from "react";
import { Crumbs, FaqList } from "@/components/ui";
import Questionnaire from "@/components/Questionnaire";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Get a Free Quote in 24 Hours",
  description:
    "Tell us about your business and get a free website quote within 24 hours. No obligation. Serving Orlando and all of Florida.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact | Genova Web" },
};

const faq = [
  {
    q: "How quickly will I hear back?",
    a: "Within 24 hours, every time. That's a commitment we hold ourselves to — if we can't respond quickly before you're a customer, there's no reason to believe we would after.",
  },
  {
    q: "What happens after I send this?",
    a: "We read it, look at your current site and your competitors, and reply with a straight recommendation on which plan fits and roughly what it will cost. No sales sequence, no drip emails.",
  },
  {
    q: "Do I need to have everything ready?",
    a: "No. You don't need copy, photos, or a brand to start — the questions here are enough for us to quote. We write the first draft of everything and you correct it.",
  },
  {
    q: "What if I don't know which plan I need?",
    a: "Skip that question. Most people don't know, and guessing wrong doesn't matter — we recommend based on what you tell us about the business, not what you clicked.",
  },
  {
    q: "Is the quote free?",
    a: "Yes, and there's no obligation attached to it. If we're not the right fit we'll say so, and where we can we'll point you somewhere that is.",
  },
];

export default function ContactPage() {
  const crumbs = [{ name: "Contact", path: "/contact" }];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} id="schema-contact-crumbs" />
      <JsonLd data={faqSchema(faq)} id="schema-contact-faq" />

      <section className="block" style={{ paddingTop: 170 }}>
        <div className="wrap">
          <Crumbs items={crumbs} />
          <div className="contact-grid">
            <div className="contact-copy reveal">
              <span className="kicker">Get started</span>
              <h1
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: "clamp(1.9rem,4vw,2.8rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}
              >
                Let&rsquo;s get you more customers.
              </h1>
              <p>
                Answer a few quick questions and we&rsquo;ll come back within 24 hours with a
                quote and an honest recommendation. Takes about two minutes.
              </p>
              <ul className="contact-points">
                <li>
                  <span>01</span> Free quote, no obligation
                </li>
                <li>
                  <span>02</span> Response within 24 hours
                </li>
                <li>
                  <span>03</span> Live site in under two weeks
                </li>
                <li>
                  <span>04</span> You own everything we build
                </li>
              </ul>
              <p style={{ marginTop: 30, fontSize: "0.9rem" }}>
                Prefer to talk? Call{" "}
                <a href={site.phoneHref} style={{ color: "var(--purple-bright)" }}>
                  {site.phone}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${site.email}`} style={{ color: "var(--purple-bright)" }}>
                  {site.email}
                </a>
                .
                <br />
                Based in {site.city}, {site.region} — working with businesses across{" "}
                {site.regionName}.
              </p>
            </div>

            <div className="reveal">
              {/* useSearchParams needs a Suspense boundary to stay statically rendered. */}
              <Suspense fallback={<div className="quiz" style={{ minHeight: 520 }} />}>
                <Questionnaire />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="block block-tight">
        <div className="wrap">
          <span className="kicker reveal">Before you ask</span>
          <FaqList items={faq} />
        </div>
      </section>
    </>
  );
}
