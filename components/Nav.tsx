"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { serviceLinks, industryLinks, extraLinks, topLinks } from "@/lib/menu";
import { Phone } from "./Icons";
import Wordmark from "./Wordmark";

/*
 * Floating pill nav: Services ▾ · Work · Pricing · About, a phone icon and
 * the CTA. Slides away while scrolling down and returns on any scroll up.
 */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile overlay
  const [svcOpen, setSvcOpen] = useState(false); // desktop Services panel
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const svcRef = useRef<HTMLDivElement>(null);
  const svcBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastY = useRef(0);
  // Read inside the scroll handler without re-binding it.
  const menusOpen = useRef(false);
  menusOpen.current = open || svcOpen;

  // Close both menus on navigation — otherwise they stay over the new page.
  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
    setHidden(false);
  }, [pathname]);

  // Condense once scrolled; hide on scroll down, show again on scroll up.
  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 24);
      if (y < 140 || menusOpen.current) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      if (Math.abs(delta) > 6) lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and support Escape while the mobile overlay is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Services panel: Escape returns focus to the trigger; clicking outside closes it.
  useEffect(() => {
    if (!svcOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSvcOpen(false);
        svcBtnRef.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (svcRef.current && !svcRef.current.contains(e.target as Node)) setSvcOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [svcOpen]);

  // Hover opens the panel on mouse devices; a short delay on leave stops it
  // flickering shut while the pointer crosses the gap to the panel.
  const hoverOpen = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSvcOpen(true);
  };
  const hoverClose = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = setTimeout(() => setSvcOpen(false), 160);
  };
  const onPanelBlur = (e: React.FocusEvent) => {
    if (!svcRef.current?.contains(e.relatedTarget as Node)) setSvcOpen(false);
  };

  const isCurrent = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const servicesActive =
    pathname.startsWith("/services") ||
    pathname.startsWith("/industries") ||
    pathname === "/roi-calculator";

  let i = 0; // stagger index for the mobile overlay
  const stagger = () => ({ "--i": i++ }) as React.CSSProperties;

  return (
    <>
      <nav
        className="nav"
        data-scrolled={scrolled}
        data-hidden={hidden && !open && !svcOpen}
        aria-label="Main"
        // Keyboard users tabbing into a hidden nav bring it back.
        onFocus={() => setHidden(false)}
      >
        <Link href="/" className="wordmark" aria-label="Genova Web — home">
          <Wordmark />
        </Link>

        <div className="nav-links">
          <div
            className="nav-svc"
            ref={svcRef}
            onPointerEnter={hoverOpen}
            onPointerLeave={hoverClose}
            onBlur={onPanelBlur}
          >
            <button
              type="button"
              ref={svcBtnRef}
              className="nav-svc-btn"
              aria-expanded={svcOpen}
              aria-controls="services-menu"
              data-current={servicesActive || undefined}
              onClick={() => setSvcOpen((v) => !v)}
            >
              Services
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>

            <div className="nav-panel" id="services-menu" hidden={!svcOpen}>
              <div className="nav-panel-col">
                <span className="nav-panel-label">Services</span>
                <ul>
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="nav-panel-item"
                        aria-current={isCurrent(s.href) ? "page" : undefined}
                      >
                        <span>{s.label}</span>
                        <small>{s.note}</small>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav-panel-col">
                <span className="nav-panel-label">Industries</span>
                <ul className="nav-panel-chips">
                  {industryLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} aria-current={isCurrent(l.href) ? "page" : undefined}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="nav-panel-extra">
                  {extraLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>
                        {l.label} <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {topLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a href={site.phoneHref} className="nav-phone" aria-label={`Call Genova Web at ${site.phone}`}>
          <Phone />
          <span className="nav-phone-tip" aria-hidden="true">
            {site.phone}
          </span>
        </a>

        <Link href="/contact" className="nav-cta">
          Start a Project
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu-scroll">
            <div className="mm-group">
              <span className="mm-label" style={stagger()}>
                Services
              </span>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="mm-item"
                  style={stagger()}
                  aria-current={isCurrent(s.href) ? "page" : undefined}
                >
                  <span>{s.label}</span>
                  <small>{s.note}</small>
                </Link>
              ))}
            </div>
            <div className="mm-group">
              <span className="mm-label" style={stagger()}>
                Industries
              </span>
              <div className="mm-chips" style={stagger()}>
                {industryLinks.map((l) => (
                  <Link key={l.href} href={l.href} aria-current={isCurrent(l.href) ? "page" : undefined}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mm-group mm-pages">
              {[...topLinks, extraLinks[2]].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={stagger()}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mm-actions">
            <a href={site.phoneHref} className="mm-call">
              <Phone /> {site.phone}
            </a>
            <Link href="/contact" className="menu-cta">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
