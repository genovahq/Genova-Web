import { testimonials, commitments } from "@/lib/data/proof";
import { SectionHead } from "./ui";

/**
 * Social proof with an honest fallback.
 *
 * If real, permissioned testimonials exist in lib/data/proof.ts, they render.
 * If the array is empty — which it is until actual clients supply quotes —
 * this renders the commitments block instead: promises Genova Web sets and
 * controls, which are true on day one.
 *
 * Deliberately no invented quotes, no made-up client names, no "trusted by
 * 50+ businesses" counter. See the header comment in lib/data/proof.ts.
 */
export default function Proof() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="block" id="proof">
      <div className="wrap">
        {hasTestimonials ? (
          <>
            <SectionHead
              kicker="In their words"
              title="What clients say."
              lead="Real quotes from businesses we've built for."
            />
            <div className="grid-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="quote reveal">
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption>
                    <b>{t.name}</b>
                    {t.business}
                    {t.location ? ` · ${t.location}` : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        ) : (
          <>
            <SectionHead
              kicker="What you get in writing"
              title="No guarantees we can't keep."
              lead="We're new enough that we'd rather show you our terms than a wall of testimonials. Every line below is a commitment we set ourselves — and one you can hold us to."
            />
            <div className="grid-3">
              {commitments.map((c) => (
                <div key={c.title} className="commit reveal">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
