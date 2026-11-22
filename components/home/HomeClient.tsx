"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";

export type ServicePanel = {
  id: string;
  name: string;
  kicker: string;
  price: string;
  body: string;
  points: string[];
  href: string;
  visual: React.ReactNode;
};

/**
 * Scroll-synced services: the list on the left stays put (sticky) and
 * highlights whichever panel on the right is in view. A passive scroll
 * listener (not IntersectionObserver) keeps it working in background tabs.
 */
export function ServicesScroll({ panels }: { panels: ServicePanel[] }) {
  const [active, setActive] = useState(panels[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});
  const listRef = useRef<HTMLElement | null>(null);

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

  // On phones the list scrolls sideways: keep the active item in view.
  // Scrolls only the list itself, never the page.
  useEffect(() => {
    const row = listRef.current;
    const item = row?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!row || !item || row.scrollWidth <= row.clientWidth) return;
    const offset = item.getBoundingClientRect().left - row.getBoundingClientRect().left;
    row.scrollTo({ left: Math.max(0, row.scrollLeft + offset - 16), behavior: "smooth" });
  }, [active]);

  return (
    <div className={styles.svcGrid}>
      <nav className={styles.svcList} aria-label="Services" ref={listRef}>
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
              <span className={styles.svcService}>{p.kicker}</span>
              <h3>{p.name}</h3>
              <span className={styles.svcPrice}>{p.price}</span>
              <p>{p.body}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Link href={p.href} className={styles.btnGhostDark}>
                More on {p.name} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.svcVisual}>{p.visual}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
