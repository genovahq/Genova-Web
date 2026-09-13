"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { site } from "@/lib/site";
import { industries } from "@/lib/data/industries";

/**
 * Multi-step intake questionnaire.
 *
 * Replaces the flat contact form. The site already promises a "quick 10-question
 * intake", so this makes that real rather than a claim — and one question per
 * screen converts better than a wall of fields on a phone.
 *
 * Behaviour worth knowing:
 * - Choice steps auto-advance on select; typed steps need Next (so we don't
 *   yank the screen away mid-keystroke).
 * - Validation runs per step, so nobody reaches the end and gets a wall of red.
 * - Focus moves to the new step heading on advance, and the live region
 *   announces progress, so this is usable on a screen reader.
 * - Progress is saved to sessionStorage: a refresh or accidental back-swipe
 *   doesn't wipe six answers.
 * - The final payload posts to the same n8n webhook as before, with every
 *   answer flattened into named fields.
 */

type Step = {
  id: string;
  kind: "choice" | "multi" | "text" | "contact";
  question: string;
  help?: string;
  optional?: boolean;
  options?: { value: string; label: string; hint?: string }[];
  placeholder?: string;
};

const PLAN_OPTIONS = [
  { value: "starter", label: "Starter — $750", hint: "2 pages, live in 5–7 days" },
  { value: "growth", label: "Growth — $2,000", hint: "Up to 5 pages, local SEO" },
  { value: "pro", label: "Pro — $3,500", hint: "Up to 10 pages, 3 months Care" },
];

const steps: Step[] = [
  {
    id: "industry",
    kind: "choice",
    question: "What kind of business do you run?",
    help: "This tells us how your customers search and what the site has to do.",
    options: [
      ...industries.map((i) => ({ value: i.slug, label: i.name })),
      { value: "other", label: "Something else" },
    ],
  },
  {
    id: "current_site",
    kind: "choice",
    question: "Do you have a website right now?",
    options: [
      { value: "none", label: "No website yet", hint: "Starting from scratch" },
      { value: "outdated", label: "Yes, but it's outdated", hint: "Needs a rebuild" },
      { value: "works", label: "Yes, it just isn't getting leads", hint: "Looks fine, doesn't convert" },
      { value: "diy", label: "Yes, I built it myself", hint: "Wix, Squarespace, GoDaddy" },
    ],
  },
  {
    id: "goal",
    kind: "multi",
    question: "What do you most need it to do?",
    help: "Pick as many as apply.",
    options: [
      { value: "more_calls", label: "Get the phone ringing" },
      { value: "look_credible", label: "Look credible and professional" },
      { value: "rank_local", label: 'Show up in "near me" searches' },
      { value: "bookings", label: "Take bookings or quote requests" },
      { value: "stop_losing", label: "Stop losing leads I already get" },
    ],
  },
  {
    id: "timing",
    kind: "choice",
    question: "How soon do you need it live?",
    options: [
      { value: "asap", label: "As soon as possible", hint: "Rush delivery available" },
      { value: "few_weeks", label: "Within the next few weeks" },
      { value: "no_rush", label: "No firm deadline" },
      { value: "exploring", label: "Just exploring options" },
    ],
  },
  {
    id: "package",
    kind: "choice",
    question: "Which plan looks closest to what you need?",
    help: "Not sure? Skip this one — we'll recommend the right fit.",
    optional: true,
    options: PLAN_OPTIONS,
  },
  {
    id: "service_area",
    kind: "text",
    question: "Which areas do you serve?",
    help: "City, towns, or a radius — whatever's accurate.",
    placeholder: `e.g. ${site.city} and surrounding Central Florida`,
  },
  {
    id: "contact",
    kind: "contact",
    question: "Last step — how do we reach you?",
    help: "We reply to every inquiry within 24 hours.",
  },
  {
    id: "message",
    kind: "text",
    question: "Anything else we should know?",
    help: "Optional. Competitors you admire, a deadline, a specific problem.",
    optional: true,
    placeholder: "Tell us anything that would help us quote accurately.",
  },
];

type Answers = Record<string, string | string[]>;
type Errors = Record<string, string>;

const STORAGE_KEY = "genova-intake-v1";

export default function Questionnaire() {
  const params = useSearchParams();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [restored, setRestored] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advancedOnce = useRef(false);
  /**
   * When this form first rendered. Sent with the payload so the server can
   * reject submissions completed faster than a human could type. Set in an
   * effect (not at module scope) so it reflects this visit, not build time.
   */
  const startedAt = useRef<number>(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const step = steps[index];
  const isLast = index === steps.length - 1;
  const progress = Math.round(((index + 1) / steps.length) * 100);

  // Restore a part-finished intake, and honour ?plan= from the pricing cards.
  useEffect(() => {
    let initial: Answers = {};
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) initial = JSON.parse(saved);
    } catch {
      /* sessionStorage can throw in private mode — not worth failing over */
    }
    const plan = params.get("plan");
    if (plan && PLAN_OPTIONS.some((p) => p.value === plan)) initial.package = plan;
    setAnswers(initial);
    setRestored(true);
  }, [params]);

  useEffect(() => {
    if (!restored) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* ignore */
    }
  }, [answers, restored]);

  // Move focus to the new question so keyboard/screen-reader users follow along.
  useEffect(() => {
    if (advancedOnce.current) headingRef.current?.focus();
  }, [index]);

  const setField = (id: string, value: string | string[]) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setErrors((e) => {
      if (!e[id]) return e;
      const next = { ...e };
      delete next[id];
      return next;
    });
  };

  const validateStep = (): boolean => {
    const found: Errors = {};
    if (step.kind === "contact") {
      const g = (k: string) => String(answers[k] ?? "").trim();
      if (!g("first_name")) found.first_name = "Please enter your first name.";
      if (!g("business_name")) found.business_name = "Please enter your business name.";
      if (!g("phone")) {
        found.phone = "Please add a number we can reach you on.";
      } else if (g("phone").replace(/\D/g, "").length < 10) {
        found.phone = "That looks short — please include the area code.";
      }
      if (!g("email")) {
        found.email = "Please enter your email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(g("email"))) {
        found.email = "Please check that address — we can't reply without it.";
      }
    } else if (!step.optional) {
      const v = answers[step.id];
      const empty = Array.isArray(v) ? v.length === 0 : !String(v ?? "").trim();
      if (empty) {
        found[step.id] =
          step.kind === "multi" ? "Pick at least one." : "Please answer to continue.";
      }
    }
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    advancedOnce.current = true;
    if (isLast) void submit();
    else setIndex((i) => Math.min(i + 1, steps.length - 1));
  };

  const back = () => {
    advancedOnce.current = true;
    setErrors({});
    setIndex((i) => Math.max(i - 1, 0));
  };

  const skip = () => {
    advancedOnce.current = true;
    if (isLast) void submit();
    else setIndex((i) => i + 1);
  };

  const submit = async () => {
    setStatus("sending");
    try {
      const payload: Record<string, unknown> = {
        ...answers,
        goal: Array.isArray(answers.goal) ? answers.goal.join(", ") : answers.goal,
        source: "genova-web-questionnaire",
        page: window.location.pathname,
        submitted_at: new Date().toISOString(),
        // Anti-bot signals — screened server-side in /api/lead, never here.
        // Client-side checks are trivially skipped, so they're not the defense.
        started_at: startedAt.current,
      };
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const summary = useMemo(() => {
    const plan = PLAN_OPTIONS.find((p) => p.value === answers.package);
    return plan?.label;
  }, [answers.package]);

  if (status === "done") {
    return (
      <div className="quiz">
        <div className="form-success" role="status" aria-live="polite">
          <div className="fs-mark" aria-hidden="true">
            ✦
          </div>
          <h2>Request received.</h2>
          <p>
            Thanks — we&rsquo;ll be in touch within 24 hours
            {summary ? ` about ${summary}` : ""}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-top">
        <div className="quiz-count">
          Question {index + 1} <span>of {steps.length}</span>
        </div>
        <div
          className="quiz-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Intake progress"
        >
          <i style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* key={step.id} restarts the entrance animation on every step change */}
      <div className="quiz-step" key={step.id}>
        <h2 className="quiz-q" tabIndex={-1} ref={headingRef}>
          {step.question}
        </h2>
        {step.help && <p className="quiz-help">{step.help}</p>}

        {(step.kind === "choice" || step.kind === "multi") && (
          <div className="quiz-opts">
            {step.options!.map((opt, i) => {
              const selected =
                step.kind === "multi"
                  ? Array.isArray(answers[step.id]) &&
                    (answers[step.id] as string[]).includes(opt.value)
                  : answers[step.id] === opt.value;
              return (
                <button
                  type="button"
                  key={opt.value}
                  className={`quiz-opt${selected ? " sel" : ""}`}
                  style={{ "--i": i } as React.CSSProperties}
                  aria-pressed={selected}
                  onClick={() => {
                    if (step.kind === "multi") {
                      const cur = Array.isArray(answers[step.id])
                        ? (answers[step.id] as string[])
                        : [];
                      setField(
                        step.id,
                        cur.includes(opt.value)
                          ? cur.filter((v) => v !== opt.value)
                          : [...cur, opt.value]
                      );
                    } else {
                      setField(step.id, opt.value);
                      // Single-choice auto-advances; multi waits for Next.
                      advancedOnce.current = true;
                      window.setTimeout(
                        () => setIndex((n) => Math.min(n + 1, steps.length - 1)),
                        220
                      );
                    }
                  }}
                >
                  <span className="quiz-opt-label">{opt.label}</span>
                  {opt.hint && <span className="quiz-opt-hint">{opt.hint}</span>}
                </button>
              );
            })}
          </div>
        )}

        {step.kind === "text" && (
          <div className="fg">
            <label htmlFor={step.id} className="hp">
              {step.question}
            </label>
            <textarea
              id={step.id}
              name={step.id}
              placeholder={step.placeholder}
              value={String(answers[step.id] ?? "")}
              onChange={(e) => setField(step.id, e.target.value)}
              aria-invalid={errors[step.id] ? true : undefined}
            />
          </div>
        )}

        {step.kind === "contact" && (
          <div className="quiz-contact">
            <div className="fg-row">
              <div className="fg">
                <label htmlFor="first_name">
                  First name<span className="req">*</span>
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  autoComplete="given-name"
                  placeholder="John"
                  value={String(answers.first_name ?? "")}
                  onChange={(e) => setField("first_name", e.target.value)}
                  aria-invalid={errors.first_name ? true : undefined}
                />
                {errors.first_name && (
                  <span className="fg-err" role="alert">
                    {errors.first_name}
                  </span>
                )}
              </div>
              <div className="fg">
                <label htmlFor="last_name">Last name</label>
                <input
                  id="last_name"
                  name="last_name"
                  autoComplete="family-name"
                  placeholder="Smith"
                  value={String(answers.last_name ?? "")}
                  onChange={(e) => setField("last_name", e.target.value)}
                />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="business_name">
                Business name<span className="req">*</span>
              </label>
              <input
                id="business_name"
                name="business_name"
                autoComplete="organization"
                placeholder="Smith Plumbing LLC"
                value={String(answers.business_name ?? "")}
                onChange={(e) => setField("business_name", e.target.value)}
                aria-invalid={errors.business_name ? true : undefined}
              />
              {errors.business_name && (
                <span className="fg-err" role="alert">
                  {errors.business_name}
                </span>
              )}
            </div>
            <div className="fg-row">
              <div className="fg">
                <label htmlFor="phone">
                  Phone<span className="req">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(407) 555-0100"
                  value={String(answers.phone ?? "")}
                  onChange={(e) => setField("phone", e.target.value)}
                  aria-invalid={errors.phone ? true : undefined}
                />
                {errors.phone && (
                  <span className="fg-err" role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="fg">
                <label htmlFor="email">
                  Email<span className="req">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="john@business.com"
                  value={String(answers.email ?? "")}
                  onChange={(e) => setField("email", e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                />
                {errors.email && (
                  <span className="fg-err" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="hp" aria-hidden="true">
              <label htmlFor="company_website">Leave empty</label>
              <input
                id="company_website"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                onChange={(e) => setField("company_website", e.target.value)}
              />
            </div>
          </div>
        )}

        {errors[step.id] && step.kind !== "contact" && (
          <p className="fg-err" role="alert" style={{ marginTop: 14 }}>
            {errors[step.id]}
          </p>
        )}
      </div>

      <div className="quiz-nav">
        <button
          type="button"
          className="quiz-back"
          onClick={back}
          disabled={index === 0}
        >
          ← Back
        </button>

        <div className="quiz-nav-right">
          {step.optional && !isLast && (
            <button type="button" className="quiz-skip" onClick={skip}>
              Skip
            </button>
          )}
          {/* Single-choice steps auto-advance, so Next is redundant — unless the
              step is optional, or the user came back to one they've answered. */}
          {(step.kind !== "choice" || step.optional || answers[step.id]) && (
            <button
              type="button"
              className="form-btn quiz-next"
              onClick={next}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : isLast ? "Send my request →" : "Next →"}
            </button>
          )}
        </div>
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong sending that. Please try again, or email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <p className="form-note">
        Takes about two minutes. We reply within 24 hours and never sell your details — see our{" "}
        <a href="/privacy">privacy policy</a>.
      </p>
    </div>
  );
}
