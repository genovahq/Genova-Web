import { testimonials, commitments } from "@/lib/data/proof";
import { SectionHead } from "./ui";
import Stars from "./Stars";

/**
 * Social proof: real, permissioned testimonials from lib/data/proof.ts
 * (if any), followed by the commitments block — promises Genova Web sets and
 * controls, which stay useful even once reviews exist.
 *
 * Deliberately no invented quotes, no made-up client names, no "trusted by
 * 50+ businesses" counter. See the header comment in lib/data/proof.ts.
 */
export default function Proof() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="block" id="proof">
      <div className="wrap">
        {hasTestimonials && (
          <>
            <SectionHead kicker="In their words" title="What clients say." />
            <div className={testimonials.length === 1 ? "quote-solo" : "grid-2"}>
              {testimonials.map((t) => (
                <figure key={t.name + t.business} className="quote reveal">
                  {!!t.rating && <Stars rating={t.rating} />}
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption>
                    <b>{t.name}</b>
                    {[t.role, t.business].filter(Boolean).join(", ")}
                    {t.location ? ` · ${t.location}` : ""}
                    {t.source ? ` · Verified ${t.source}` : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        <div className={hasTestimonials ? "proof-commit-gap" : undefined}>
          <SectionHead
            kicker="What you get in writing"
            title="No guarantees we can't keep."
            lead="Every line below is a commitment we set ourselves, and one you can hold us to."
          />
          <div className="grid-3">
            {commitments.map((c) => (
              <div key={c.title} className="commit reveal">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
