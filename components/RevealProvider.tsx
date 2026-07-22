"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-reveal driver.
 *
 * Design notes:
 * - Elements are visible by default in CSS; the hidden start state is scoped
 *   to `html.js`. So no-JS, crawlers, and headless renderers that never fire
 *   IntersectionObserver still show every section.
 * - Anything already in (or above) the viewport on load is revealed
 *   immediately rather than animated, so the hero never waits on a scroll.
 * - Siblings inside a grid stagger by 45ms via --reveal-delay, capped so a
 *   long list never crawls.
 * - prefers-reduced-motion is handled in CSS; we still add .in so state stays
 *   consistent.
 */
export default function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (!els.length) return;

    const reveal = (el: HTMLElement) => el.classList.add("in");

    // Bail out safely if the browser can't observe — show everything.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach(reveal);
      return;
    }

    // Stagger within each parent so grids cascade instead of popping at once.
    const seen = new Map<Element, number>();
    els.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const n = seen.get(parent) ?? 0;
      seen.set(parent, n + 1);
      if (n > 0) el.style.setProperty("--reveal-delay", `${Math.min(n * 45, 270)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      // Fire slightly before the element is fully on screen.
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => {
      // Already visible on load (hero, above-the-fold): reveal immediately.
      // Done synchronously rather than inside requestAnimationFrame, because
      // rAF is suspended in a background tab — a page opened via
      // cmd-click/"open in new tab" would otherwise sit blank until focused.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    // Belt and braces: if something never intersects — background tab, headless
    // renderer, zero-height container, IO quirk — show it rather than leaving
    // the page blank. Content visibility must never depend on an animation.
    const failsafe = window.setTimeout(() => els.forEach(reveal), 1500);

    // Backgrounded tabs throttle timers hard; catch up the moment we're shown.
    const onVisible = () => {
      if (!document.hidden) els.forEach(reveal);
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [pathname]);

  return null;
}
