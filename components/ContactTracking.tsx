"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

/**
 * Records a `contact_click` in Google Analytics whenever a visitor taps a
 * phone, text or email link anywhere on the site, so new links are covered
 * automatically.
 */
export function ContactTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      const method = href.startsWith("tel:") ? "phone" : href.startsWith("sms:") ? "text" : href.startsWith("mailto:") ? "email" : null;
      if (method) track("contact_click", { method, page: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
