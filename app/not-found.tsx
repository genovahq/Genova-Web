import Link from "next/link";
import { services } from "@/lib/data/services";

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: "78dvh" }}>
      <div className="hero-ring" aria-hidden="true" />
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1 style={{ maxWidth: "14ch" }}>
          <span className="chrome">That page </span>
          <span className="chrome-purple">isn&rsquo;t here.</span>
        </h1>
        <p className="sub">
          The link may be out of date, or we may have moved something. Here&rsquo;s the way back.
        </p>
        <div className="actions">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/pricing" className="btn-ghost">
            See pricing <span className="arw">→</span>
          </Link>
        </div>

        <div className="grid-3" style={{ marginTop: 64 }}>
          {services.map((s) => (
            <Link href={`/services/${s.slug}`} className="svc" key={s.slug}>
              <h3>{s.navLabel}</h3>
              <span className="more">
                Go there <span className="arw">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
