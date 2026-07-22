import Link from "next/link";
import type { Plan } from "@/lib/data/plans";

/**
 * Tier cards. The CTA carries the plan through as a query param so the
 * contact form can preselect it — the original site did this with a
 * data-plan click handler, which only worked because everything lived on one
 * page. A query param survives the navigation between pages.
 */
export default function PricingTiers({
  plans,
  className = "pricing",
}: {
  plans: Plan[];
  className?: string;
}) {
  return (
    <div className={className}>
      {plans.map((plan) => (
        <article
          key={plan.slug}
          id={plan.slug}
          className={`tier reveal${plan.featured ? " feat" : ""}`}
        >
          {plan.badge && <div className="tier-badge">{plan.badge}</div>}
          <h3 className="tier-name">{plan.name}</h3>
          <div className="tier-price">
            <sup>$</sup>
            {plan.priceLabel.replace("$", "")}
            {plan.cadence && <span className="per">{plan.cadence}</span>}
          </div>
          <div className="tier-note">
            {plan.cadence ? "Month to month · cancel anytime" : "50% upfront · 50% on delivery"}
          </div>
          <div className="tier-meta">
            <span className="tier-time">{plan.timeline}</span>
            {plan.scope && <span className="tier-scope">{plan.scope}</span>}
          </div>
          <p className="tier-pitch">{plan.pitch}</p>
          <div className="tier-line" />
          <ul>
            {plan.features.map((f, i) => (
              <li
                key={f.text}
                className={f.ai ? "ai" : undefined}
                style={{ "--li": i } as React.CSSProperties}
              >
                {f.text}
              </li>
            ))}
          </ul>
          <Link
            href={`/contact?plan=${plan.slug}`}
            className={`tier-btn ${plan.featured ? "solid" : "line"}`}
          >
            {plan.cta}
          </Link>
          {plan.footnote && <p className="tier-footnote">{plan.footnote}</p>}
        </article>
      ))}
    </div>
  );
}
