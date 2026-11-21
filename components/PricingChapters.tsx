"use client";

import { useEffect, useState } from "react";

/** `num` shows the chapter number in the bar; leave it off for extras like FAQ. */
export type Chapter = { id: string; label: string; num?: number };

/**
 * Sticky jump bar for /pricing. Highlights the chapter currently on screen.
 * Uses a passive scroll listener rather than IntersectionObserver so it also
 * works in hidden/background tabs and older browsers.
 */
export function JumpBar({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      // A chapter is "current" once its top passes ~40% down the viewport.
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= line) current = c.id;
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
  }, [chapters]);

  return (
    <nav className="jumpbar" aria-label="Pricing sections">
      <div className="wrap">
        <ul>
          {chapters.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} aria-current={active === c.id ? "true" : undefined}>
                {c.num !== undefined && (
                  <span className="jb-num" aria-hidden="true">
                    {String(c.num).padStart(2, "0")}
                  </span>
                )}
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/** Full-width numbered header band that opens a pricing chapter. */
export function ChapterHead({
  num,
  kicker,
  title,
  lead,
}: {
  num: number;
  kicker: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <header className="chapter-head reveal">
      <div className="wrap">
        <div className="chapter-top">
          <span className="chapter-num" aria-hidden="true">
            {String(num).padStart(2, "0")}
          </span>
          <span className="chapter-kicker">{kicker}</span>
        </div>
        <h2>{title}</h2>
        {lead && <p className="chapter-lead">{lead}</p>}
      </div>
    </header>
  );
}
