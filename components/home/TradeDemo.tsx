"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";

/*
 * "Pick your trade" hero demo. One website mockup, drawn entirely in code,
 * that changes its colours AND its page layout for each trade (split,
 * centered, booking-first, form-first, tiles, editorial) — then a lead pops
 * in, the way the AI
 * Lead Capture alert would. Business names are generic placeholders
 * ("Your Detailing Co.") and there are no ratings, counts or results, so
 * nothing here can be mistaken for a real client or a real claim.
 */

/** Each trade gets its own page structure, not just its own colours. */
type Layout = "split" | "centered" | "booking" | "form" | "tiles" | "editorial";

type Trade = {
  id: string;
  tab: string;
  layout: Layout;
  /** Optional strip above the nav (e.g. an emergency line). */
  banner?: string;
  brand: string;
  tagline: string;
  headline: string;
  sub: string;
  cta: string;
  services: string[];
  lead: { title: string; body: string };
  theme: {
    bg: string; // hero background
    ink: string; // text on the hero
    muted: string;
    accent: string; // buttons, highlights
    accentInk: string; // text on accent
    glow: string; // decorative shape
    card: string; // service cards
  };
};

const TRADES: Trade[] = [
  {
    id: "detailing",
    layout: "split",
    tab: "Detailing",
    brand: "Your Detailing Co.",
    tagline: "Mobile detailing · Orlando",
    headline: "Ceramic coatings that turn heads.",
    sub: "Paint correction, ceramic and interiors, done in your driveway.",
    cta: "Book a detail",
    services: ["Ceramic coating", "Paint correction", "Interior reset"],
    lead: { title: "New booking request", body: "Ceramic coating · black SUV · this Saturday" },
    theme: { bg: "#0e0f14", ink: "#ffffff", muted: "#a3a6b4", accent: "#e11d48", accentInk: "#ffffff", glow: "#e11d48", card: "#1d1f29" },
  },
  {
    id: "plumbing",
    layout: "centered",
    banner: "Open 24/7 · Emergency service across Orlando",
    tab: "Plumbing",
    brand: "Your Plumbing Co.",
    tagline: "24/7 plumbing · Orlando",
    headline: "Burst pipe? We're there fast.",
    sub: "Emergency repairs, water heaters and drains. Upfront pricing.",
    cta: "Call now · 24/7",
    services: ["Emergency repairs", "Water heaters", "Drain cleaning"],
    lead: { title: "New emergency request", body: "Water heater leaking · tonight · call back now" },
    theme: { bg: "#eaf2ff", ink: "#0b1b3a", muted: "#4a5a7a", accent: "#1d4ed8", accentInk: "#ffffff", glow: "#60a5fa", card: "#ffffff" },
  },
  {
    id: "hvac",
    layout: "booking",
    tab: "HVAC",
    brand: "Your Air Co.",
    tagline: "AC & heating · Orlando",
    headline: "AC out? Cool again today.",
    sub: "Same-day repairs, new systems and maintenance plans.",
    cta: "Schedule service",
    services: ["AC repair", "New systems", "Maintenance plans"],
    lead: { title: "New service request", body: "AC not cooling · 2-story home · today" },
    theme: { bg: "#e9fbfd", ink: "#083344", muted: "#3f6470", accent: "#0891b2", accentInk: "#ffffff", glow: "#22d3ee", card: "#ffffff" },
  },
  {
    id: "roofing",
    layout: "form",
    tab: "Roofing",
    brand: "Your Roofing Co.",
    tagline: "Roofing · Central Florida",
    headline: "Storm damage? Free inspection.",
    sub: "Replacements, leak repair and help with your insurance claim.",
    cta: "Get a free inspection",
    services: ["Roof replacement", "Storm & insurance", "Leak repair"],
    lead: { title: "New inspection request", body: "Leak after the storm · insurance claim" },
    theme: { bg: "#1c1917", ink: "#ffffff", muted: "#b7aea4", accent: "#f59e0b", accentInk: "#1c1917", glow: "#f59e0b", card: "#2c2724" },
  },
  {
    id: "landscaping",
    layout: "tiles",
    tab: "Landscaping",
    brand: "Your Lawn Co.",
    tagline: "Lawn & landscape · Orlando",
    headline: "Weekly lawn care, done right.",
    sub: "Mowing, landscape design and seasonal cleanups.",
    cta: "Get a quote",
    services: ["Weekly mowing", "Landscape design", "Sod & mulch"],
    lead: { title: "New quote request", body: "Weekly mowing · corner lot · start next week" },
    theme: { bg: "#effcf2", ink: "#0f2e1a", muted: "#4b6b55", accent: "#15803d", accentInk: "#ffffff", glow: "#4ade80", card: "#ffffff" },
  },
  {
    id: "medspa",
    layout: "editorial",
    tab: "Med Spa",
    brand: "Your Med Spa",
    tagline: "Aesthetics · Winter Park",
    headline: "Look refreshed, never overdone.",
    sub: "Injectables, facials and laser. Consults with a licensed provider.",
    cta: "Book a consult",
    services: ["Injectables", "Facials", "Laser"],
    lead: { title: "New consult request", body: "Consultation · facial treatment · Thursday evening" },
    theme: { bg: "#fdf2f8", ink: "#3b0a24", muted: "#7a4a62", accent: "#be185d", accentInk: "#ffffff", glow: "#f472b6", card: "#ffffff" },
  },
];

const CYCLE_MS = 5200;

/** Headline, sub and buttons — shared by every layout. */
function Copy({ t, center = false }: { t: Trade; center?: boolean }) {
  return (
    <div className={`${styles.demoCopy} ${center ? styles.demoCopyCenter : ""}`}>
      <span className={styles.demoTagline}>{t.tagline}</span>
      <span className={styles.demoHeadline}>{t.headline}</span>
      <span className={styles.demoSub}>{t.sub}</span>
      <span className={styles.demoBtns}>
        <span className={styles.demoBtn}>{t.cta}</span>
        <span className={styles.demoBtnGhost}>See services</span>
      </span>
    </div>
  );
}

function Hero({ t }: { t: Trade }) {
  switch (t.layout) {
    // Plumbing: emergency look — big centered headline, services in a row.
    case "centered":
      return (
        <div className={`${styles.demoHero} ${styles.lCentered}`}>
          <Copy t={t} center />
          <div className={styles.demoRow} aria-hidden="true">
            {t.services.map((s, i) => (
              <span key={s} className={styles.demoCard} style={{ "--n": i } as React.CSSProperties}>
                <i />
                {s}
              </span>
            ))}
          </div>
        </div>
      );

    // HVAC: booking-first — a scheduling card beside the headline.
    case "booking":
      return (
        <div className={`${styles.demoHero} ${styles.lSplit}`}>
          <Copy t={t} />
          <div className={styles.demoPanel} aria-hidden="true">
            <b>Book a visit</b>
            <span className={styles.demoDays}>
              <i className={styles.on}>Today</i>
              <i>Tomorrow</i>
              <i>Fri</i>
            </span>
            <span className={styles.demoSlots}>
              {["9:00", "11:30", "2:00", "4:30"].map((tm, i) => (
                <i key={tm} className={i === 2 ? styles.on : undefined}>
                  {tm}
                </i>
              ))}
            </span>
            <span className={styles.demoBtn}>Confirm visit</span>
          </div>
        </div>
      );

    // Roofing: form-first — the inspection request is the hero.
    case "form":
      return (
        <div className={`${styles.demoHero} ${styles.lSplit}`}>
          <Copy t={t} />
          <div className={styles.demoPanel} aria-hidden="true">
            <b>Free roof inspection</b>
            <span className={styles.demoField}>Your name</span>
            <span className={styles.demoField}>Property address</span>
            <span className={`${styles.demoField} ${styles.demoSelect}`}>What happened? Storm damage</span>
            <span className={styles.demoBtn}>Request inspection</span>
          </div>
        </div>
      );

    // Landscaping: headline on top, three service tiles with seasonal art.
    case "tiles":
      return (
        <div className={`${styles.demoHero} ${styles.lTiles}`}>
          <Copy t={t} />
          <div className={styles.demoTiles} aria-hidden="true">
            {t.services.map((s, i) => (
              <span key={s} className={styles.demoTile} style={{ "--n": i } as React.CSSProperties}>
                <i />
                <b>{s}</b>
              </span>
            ))}
          </div>
        </div>
      );

    // Med spa: editorial — serif, centered, airy, an arch behind the copy.
    case "editorial":
      return (
        <div className={`${styles.demoHero} ${styles.lEditorial}`}>
          <span className={styles.demoArch} aria-hidden="true" />
          <Copy t={t} center />
          <span className={styles.demoList} aria-hidden="true">
            {t.services.join("  ·  ")}
          </span>
        </div>
      );

    // Detailing (default): split — headline left, stacked service cards right.
    default:
      return (
        <div className={`${styles.demoHero} ${styles.lSplit}`}>
          <Copy t={t} />
          <div className={styles.demoArt} aria-hidden="true">
            <span className={styles.demoOrb} />
            {t.services.map((s, i) => (
              <span key={s} className={styles.demoCard} style={{ "--n": i } as React.CSSProperties}>
                <i />
                {s}
              </span>
            ))}
          </div>
        </div>
      );
  }
}

export default function TradeDemo() {
  const [index, setIndex] = useState(0);
  const [touched, setTouched] = useState(false); // stop auto-cycling once the visitor picks
  const [leadKey, setLeadKey] = useState(0); // re-triggers the lead pop-in
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const trade = TRADES[index];

  // Gently cycle through trades until the visitor interacts.
  useEffect(() => {
    if (touched) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % TRADES.length);
      setLeadKey((k) => k + 1);
    }, CYCLE_MS);
    return () => clearInterval(t);
  }, [touched]);

  // On phones the tab row scrolls sideways: keep the active tab in view.
  // Scrolls only the tab row itself (never the page), so auto-cycling can't
  // pull a visitor who is reading further down.
  useEffect(() => {
    const tab = tabsRef.current[index];
    const row = tab?.parentElement;
    if (!tab || !row || row.scrollWidth <= row.clientWidth) return;
    const offset = tab.getBoundingClientRect().left - row.getBoundingClientRect().left;
    const target = row.scrollLeft + offset - (row.clientWidth - tab.offsetWidth) / 2;
    row.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [index]);

  const pick = (i: number) => {
    setTouched(true);
    setIndex(i);
    setLeadKey((k) => k + 1);
  };

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern).
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + TRADES.length) % TRADES.length;
    pick(next);
    tabsRef.current[next]?.focus();
  };

  const vars = {
    "--d-bg": trade.theme.bg,
    "--d-ink": trade.theme.ink,
    "--d-muted": trade.theme.muted,
    "--d-accent": trade.theme.accent,
    "--d-accent-ink": trade.theme.accentInk,
    "--d-glow": trade.theme.glow,
    "--d-card": trade.theme.card,
  } as React.CSSProperties;

  return (
    <div className={styles.demo}>
      <div className={styles.demoTop}>
        <span className={styles.demoAsk}>Pick your trade, see your site:</span>
        <div className={styles.demoTabs} role="tablist" aria-label="Choose a trade" onKeyDown={onKey}>
          {TRADES.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`demo-tab-${t.id}`}
              aria-selected={i === index}
              aria-controls="demo-panel"
              tabIndex={i === index ? 0 : -1}
              className={i === index ? styles.demoTabOn : undefined}
              onClick={() => pick(i)}
            >
              {t.tab}
            </button>
          ))}
        </div>
      </div>

      <div
        className={styles.demoStage}
        id="demo-panel"
        role="tabpanel"
        aria-labelledby={`demo-tab-${trade.id}`}
        style={vars}
      >
        <div className={styles.browser}>
          <div className={styles.browserBar} aria-hidden="true">
            <span />
            <span />
            <span />
            <em>your-business.com</em>
          </div>

          <div className={styles.demoSite} data-layout={trade.layout}>
            {trade.banner && <div className={styles.demoBanner}>{trade.banner}</div>}
            <div className={styles.demoNav}>
              <b>{trade.brand}</b>
              <span className={styles.demoNavLinks} aria-hidden="true">
                <i>Services</i>
                <i>About</i>
                <i>Reviews</i>
              </span>
              <span className={styles.demoNavCta}>{trade.cta}</span>
            </div>

            <div key={trade.id} className={styles.demoHeroWrap}>
              <Hero t={trade} />
            </div>

            <div className={styles.demoStrip} aria-hidden="true">
              <span>Fast quotes</span>
              <span>Licensed & insured</span>
              <span>Mobile-friendly booking</span>
            </div>
          </div>
        </div>

        {/* The lead pop-in: what AI Lead Capture sends you. */}
        <div className={styles.demoLead} key={`lead-${leadKey}`} aria-hidden="true">
          <span className={styles.mockAppIcon}>G</span>
          <span>
            <b>{trade.lead.title}</b>
            <small>{trade.lead.body}</small>
          </span>
          <span className={styles.demoLeadBtn}>Call back</span>
        </div>
      </div>

      <p className={styles.demoNote}>
        Demo: your site is built around your trade, your colors and your services, with AI lead
        capture sending every inquiry straight to you.
      </p>
    </div>
  );
}
