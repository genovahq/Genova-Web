import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHead({
  kicker,
  title,
  lead,
  as: Tag = "h2",
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="block-head reveal">
      {kicker && <span className="kicker">{kicker}</span>}
      <Tag>{title}</Tag>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function Crumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item, i) => (
        <span key={item.path} style={{ display: "contents" }}>
          <span aria-hidden="true">/</span>
          {i === items.length - 1 ? (
            <span aria-current="page">{item.name}</span>
          ) : (
            <Link href={item.path}>{item.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {/* Duplicated so the -50% translate loops seamlessly. */}
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function FaqList({ items, id }: { items: { q: string; a: string }[]; id?: string }) {
  return (
    <div className="faq" id={id}>
      {items.map((item) => (
        <details key={item.q} name="faq">
          <summary>{item.q}</summary>
          <div className="faq-body">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

export function FinalCta({
  title,
  sub,
  cta = "Start a Project",
  href = "/contact",
  secondary,
}: {
  title: ReactNode;
  sub: string;
  cta?: string;
  href?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="final">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{sub}</p>
        <div className="actions" style={{ justifyContent: "center" }}>
          <Link href={href} className="btn-primary">
            {cta}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-ghost">
              {secondary.label} <span className="arw">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function SpecStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="spec-strip reveal">
      {items.map((s) => (
        <div key={s.label}>
          <div className="s-val">{s.value}</div>
          <div className="s-lbl">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
