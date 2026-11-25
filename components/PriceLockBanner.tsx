"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { priceLockEndsAt } from "@/lib/site";

/*
 * Site-wide "2026 pricing ends Dec 31" announcement.
 *
 * Renders nothing on the server and nothing on the first client render, so
 * there is no hydration mismatch. After mount it appears only if the cutoff
 * hasn't passed and the visitor hasn't dismissed it.
 *
 * It floats at the bottom of the screen (position: fixed), so appearing after
 * load never pushes page content and never touches the floating nav pill,
 * which is fixed to the top.
 *
 * The dismissal key includes the cutoff, so moving the date shows the
 * banner again to people who closed the old one.
 */
const STORAGE_KEY = `genova:price-lock-dismissed:${priceLockEndsAt}`;
// setTimeout can't wait longer than ~24.8 days; beyond that, the date check
// on the next page load hides the banner instead.
const MAX_TIMEOUT = 2 ** 31 - 1;

export default function PriceLockBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const endsAt = Date.parse(priceLockEndsAt);
    const remaining = endsAt - Date.now();
    if (!(remaining > 0)) return;

    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Storage blocked (private mode, strict settings): just show it.
    }
    if (dismissed) return;

    setShow(true);
    // If the page is left open across the cutoff, hide it right on time.
    if (remaining < MAX_TIMEOUT) {
      const timer = setTimeout(() => setShow(false), remaining);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  const dismiss = () => {
    setShow(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage blocked: it just won't be remembered across pages.
    }
  };

  return (
    <aside className="price-lock" aria-label="Announcement">
      <p className="price-lock-text">
        <span className="price-lock-long">
          2026 pricing ends December 31. Book by then to lock in current rates.
        </span>
        <span className="price-lock-short">Lock in 2026 pricing before Dec 31</span>{" "}
        <Link href="/pricing" className="price-lock-link">
          See pricing
        </Link>
      </p>
      <button
        type="button"
        className="price-lock-close"
        aria-label="Dismiss announcement"
        onClick={dismiss}
      >
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 2.5l7 7m0-7l-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </aside>
  );
}
