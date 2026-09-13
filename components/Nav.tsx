"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Phone } from "./Icons";
import Wordmark from "./Wordmark";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the menu on navigation — otherwise it stays over the new page.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and support Escape while the overlay is open.
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

  const isCurrent = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <>
      <nav className="nav" data-scrolled={scrolled} aria-label="Main">
        <Link href="/" className="wordmark" aria-label="Genova Web — home">
          <Wordmark />
        </Link>

        <div className="nav-links">
          {nav.map((item) => (
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
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ "--i": i } as React.CSSProperties}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="menu-cta"
            style={{ "--i": nav.length } as React.CSSProperties}
          >
            Start a Project
          </Link>
        </div>
      )}
    </>
  );
}
