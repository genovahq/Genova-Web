"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { serviceGroups, exploreLinks, featuredLink, topLinks } from "@/lib/menu";
import { Phone } from "./Icons";
import Wordmark from "./Wordmark";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile overlay
  const [svcOpen, setSvcOpen] = useState(false); // desktop Services panel
  const [scrolled, setScrolled] = useState(false);
  const svcRef = useRef<HTMLDivElement>(null);
  const svcBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close both menus on navigation — otherwise they stay over the new page.
  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
  // flickering shut while the pointer crosses the gap between button and panel.
  const hoverOpen = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSvcOpen(true);
  };
  const hoverClose = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = setTimeout(() => setSvcOpen(false), 160);
  };
  // Keyboard users tabbing out of the panel should close it.
  const onPanelBlur = (e: React.FocusEvent) => {
    if (!svcRef.current?.contains(e.relatedTarget as Node)) setSvcOpen(false);
  };

  const isCurrent = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const servicesActive = pathname.startsWith("/services");

  let i = 0; // stagger index for the mobile overlay
  const stagger = () => ({ "--i": i++ }) as React.CSSProperties;

  return (
    <>
      <nav className="nav" data-scrolled={scrolled} aria-label="Main">
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

            <div className="mega" id="services-menu" hidden={!svcOpen}>
              <div className="mega-groups">
                {serviceGroups.map((group) => (
                  <div className="mega-group" key={group.label}>
                    <span className="mega-label">{group.label}</span>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="mega-item"
                            aria-current={isCurrent(item.href) ? "page" : undefined}
                          >
                            <span className="mega-name">{item.label}</span>
                            {item.note && <span className="mega-note">{item.note}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mega-side">
                <span className="mega-label">Explore</span>
                <ul>
                  {exploreLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={featuredLink.href} className="mega-feature">
                <span className="mega-feature-name">{featuredLink.label}</span>
                <span className="mega-note">{featuredLink.note}</span>
                <span className="arw" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          {topLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a href={site.phoneHref} className="nav-call" aria-label={`Call Genova Web at ${site.phone}`}>
          <span className="nav-call-ico" aria-hidden="true">
            <Phone />
          </span>
          <span className="nav-call-full">{site.phone}</span>
          <span className="nav-call-short">Call</span>
        </a>

        <Link href="/contact" className="nav-cta">
          Get a Free Audit
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
            {serviceGroups.map((group) => (
              <div className="mm-group" key={group.label}>
                <span className="mm-label" style={stagger()}>
                  {group.label}
                </span>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="mm-item"
                    style={stagger()}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {item.note && <small>{item.note}</small>}
                  </Link>
                ))}
              </div>
            ))}

            <div className="mm-group mm-pages">
              {[...topLinks.filter((l) => l.href !== "/industries"), ...exploreLinks.slice(1)].map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={stagger()}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="mm-actions">
            <a href={site.phoneHref} className="mm-call">
              <Phone /> {site.phone}
            </a>
            <Link href="/contact" className="menu-cta">
              Get a Free Audit
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
