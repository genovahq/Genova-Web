"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MediaSlot from "./MediaSlot";
import styles from "./home.module.css";

export type ServicePanel = {
  id: string;
  name: string;
  service: string;
  price: string;
  body: string;
  points: string[];
  href: string;
  shot: { label: string; hint: string; src?: string };
};

/**
 * Scroll-synced services: the list on the left stays put (sticky) and
 * highlights whichever panel on the right is currently in view.
 * A passive scroll listener (not IntersectionObserver) keeps it working in
 * background tabs and older browsers.
 */
export function ServicesScroll({ panels }: { panels: ServicePanel[] }) {
  const [active, setActive] = useState(panels[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.45;
      let current = panels[0].id;
      for (const p of panels) {
        const el = refs.current[p.id];
        if (el && el.getBoundingClientRect().top <= line) current = p.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [panels]);

  return (
    <div className={styles.svcGrid}>
      <nav className={styles.svcList} aria-label="Services">
        {panels.map((p, i) => (
          <a
            key={p.id}
            href={`#svc-${p.id}`}
            className={active === p.id ? styles.svcListOn : undefined}
            aria-current={active === p.id ? "true" : undefined}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {p.name}
          </a>
        ))}
      </nav>

      <div className={styles.svcPanels}>
        {panels.map((p) => (
          <article
            key={p.id}
            id={`svc-${p.id}`}
            ref={(el) => {
              refs.current[p.id] = el;
            }}
            className={styles.svcPanel}
          >
            <div className={styles.svcText}>
              <span className={styles.svcService}>{p.service}</span>
              <h3>{p.name}</h3>
              <span className={styles.svcPrice}>{p.price}</span>
              <p>{p.body}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Link href={p.href} className={styles.btnGhostDark}>
                How {p.name} works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <MediaSlot label={p.shot.label} hint={p.shot.hint} src={p.shot.src} tone="dark" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Drag-to-compare slider: an empty feed vs. the same feed on Seen. */
export function BeforeAfter({ before, after }: { before?: string; after?: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className={styles.ba} style={{ "--pos": `${pos}%` } as React.CSSProperties}>
      <div className={styles.baLayer}>
        <MediaSlot
          label="After: a feed on Seen"
          hint="Grid screenshot of a full, active Instagram feed"
          src={after}
        />
        <span className={`${styles.baBadge} ${styles.baBadgeRight}`}>After</span>
      </div>
      <div className={`${styles.baLayer} ${styles.baBefore}`}>
        <MediaSlot
          label="Before: the empty feed"
          hint="Same profile with a few old, blurry posts"
          src={before}
          tone="dark"
        />
        <span className={styles.baBadge}>Before</span>
      </div>
      <div className={styles.baHandle} aria-hidden="true">
        <span>⟷</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className={styles.baRange}
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
