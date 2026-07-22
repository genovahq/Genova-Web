"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { buildPlans } from "@/lib/data/plans";

/**
 * ROI calculator.
 *
 * HONESTY NOTE: every assumption is a slider the visitor sets themselves.
 * We deliberately do not bake in a "typical conversion lift" multiplier,
 * because we have no evidenced figure for one and inventing one would make
 * this a fabricated performance claim rather than a planning tool. The output
 * is labelled as the visitor's own estimate, and the disclaimer says so.
 */

const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * Eases a number toward its target over ~420ms so the headline figure rolls
 * instead of snapping when a slider moves.
 *
 * Respects prefers-reduced-motion and cancels cleanly on unmount. Falls back to
 * the exact value immediately if rAF isn't available (or the tab is hidden, in
 * which case rAF never fires and the number must still be correct).
 */
function useAnimatedNumber(target: number) {
  const [display, setDisplay] = useState(target);
  const frame = useRef<number | null>(null);
  const from = useRef(target);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof requestAnimationFrame === "undefined" || document.hidden) {
      setDisplay(target);
      from.current = target;
      return;
    }

    const start = performance.now();
    const origin = from.current;
    const delta = target - origin;
    const duration = 420;
    // ease-out cubic — fast to start, settles gently
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setDisplay(origin + delta * ease(t));
      if (t < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        from.current = target;
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      from.current = target;
    };
  }, [target]);

  return display;
}

export default function RoiCalculator() {
  const [jobValue, setJobValue] = useState(1200);
  const [extraLeads, setExtraLeads] = useState(6);
  const [closeRate, setCloseRate] = useState(35);
  const [planSlug, setPlanSlug] = useState("growth");

  const plan = buildPlans.find((p) => p.slug === planSlug) ?? buildPlans[1];

  const result = useMemo(() => {
    const wonPerMonth = extraLeads * (closeRate / 100);
    const monthly = wonPerMonth * jobValue;
    const annual = monthly * 12;
    // Months until the one-time build cost is covered. Infinity if monthly is 0.
    const payback = monthly > 0 ? plan.price / monthly : Infinity;
    return { wonPerMonth, monthly, annual, payback };
  }, [jobValue, extraLeads, closeRate, plan.price]);

  const animatedAnnual = useAnimatedNumber(result.annual);
  const animatedMonthly = useAnimatedNumber(result.monthly);

  // Fills the slider track up to the thumb (WebKit needs this as a variable).
  const pct = (value: number, min: number, max: number) =>
    ({ "--pct": `${((value - min) / (max - min)) * 100}%` }) as React.CSSProperties;

  return (
    <div className="calc reveal">
      <div>
        <div className="calc-field">
          <label htmlFor="roi-job">
            Average job value
            <span className="val">{currency(jobValue)}</span>
          </label>
          <input
            id="roi-job"
            type="range"
            min={150}
            max={20000}
            step={50}
            value={jobValue}
            style={pct(jobValue, 150, 20000)}
            onChange={(e) => setJobValue(Number(e.target.value))}
          />
          <p className="hint">What one new customer is typically worth to you.</p>
        </div>

        <div className="calc-field">
          <label htmlFor="roi-leads">
            Extra inquiries per month
            <span className="val">{extraLeads}</span>
          </label>
          <input
            id="roi-leads"
            type="range"
            min={1}
            max={40}
            step={1}
            value={extraLeads}
            style={pct(extraLeads, 1, 40)}
            onChange={(e) => setExtraLeads(Number(e.target.value))}
          />
          <p className="hint">
            Your estimate — how many more inquiries a site that actually converts would bring in.
            We don&rsquo;t assume a number for you.
          </p>
        </div>

        <div className="calc-field">
          <label htmlFor="roi-close">
            Inquiries you win
            <span className="val">{closeRate}%</span>
          </label>
          <input
            id="roi-close"
            type="range"
            min={5}
            max={100}
            step={5}
            value={closeRate}
            style={pct(closeRate, 5, 100)}
            onChange={(e) => setCloseRate(Number(e.target.value))}
          />
          <p className="hint">Of the people who contact you, how many become customers.</p>
        </div>

        <div className="calc-field" style={{ marginBottom: 0 }}>
          <label htmlFor="roi-plan">Compare against</label>
          <div className="fg" style={{ marginBottom: 0 }}>
            <select
              id="roi-plan"
              value={planSlug}
              onChange={(e) => setPlanSlug(e.target.value)}
            >
              {buildPlans.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} — {p.priceLabel}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="calc-out">
        {/* aria-live carries the settled value, not every animation frame. */}
        <div className="big chrome-purple" aria-hidden="true">
          {currency(animatedAnnual)}
        </div>
        <span className="hp" aria-live="polite">
          {currency(result.annual)} added revenue per year
        </span>
        <div className="big-lbl">Added revenue per year, on your numbers</div>

        <ul className="calc-rows">
          <li>
            <span>New customers / month</span>
            <b>{result.wonPerMonth.toFixed(1)}</b>
          </li>
          <li>
            <span>Added revenue / month</span>
            <b>{currency(animatedMonthly)}</b>
          </li>
          <li>
            <span>{plan.name} build cost</span>
            <b>{plan.priceLabel}</b>
          </li>
          <li>
            <span>Pays for itself in</span>
            <b>
              {result.payback === Infinity
                ? "—"
                : result.payback < 1
                  ? "under a month"
                  : `${result.payback.toFixed(1)} months`}
            </b>
          </li>
        </ul>

        <Link href={`/contact?plan=${plan.slug}`} className="tier-btn solid">
          Start with {plan.name}
        </Link>

        <p className="calc-disclaimer" style={{ marginTop: 16 }}>
          This is a planning estimate built entirely from the numbers you entered — not a
          projection, forecast, or guarantee of results. We don&rsquo;t assume a conversion lift on
          your behalf, because no honest agency can know one in advance.
        </p>
      </div>
    </div>
  );
}
