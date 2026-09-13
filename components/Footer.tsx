import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { cities, cityPath } from "@/lib/data/cities";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-cols">
          <div>
            <Link href="/" className="wordmark" style={{ fontSize: "0.95rem" }}>
              <Wordmark />
            </Link>
            <p className="footer-blurb">
              High-converting websites with built-in AI lead capture for local businesses in{" "}
              {site.city} and across {site.regionName}.
            </p>
            <div className="footer-contact">
              <a href={site.phoneHref} className="btn-ghost" style={{ fontSize: "0.82rem" }}>
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="btn-ghost" style={{ fontSize: "0.82rem" }}>
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.navLabel}</Link>
                </li>
              ))}
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Industries</h3>
            <ul>
              {industries.slice(0, 5).map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`}>{i.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/industries">All industries</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/work">Our Work</Link>
              </li>
              <li>
                <Link href="/orlando-web-design">Orlando Web Design</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <nav className="footer-areas" aria-label="Service areas">
          <span className="footer-areas-label">Service areas</span>
          <ul>
            <li>
              <Link href="/orlando-web-design">Orlando</Link>
            </li>
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={cityPath(c.slug)}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-bottom">
          <p className="f-meta">
            © {new Date().getFullYear()} {site.name} · {site.city}, {site.region} · Serving{" "}
            {site.regionName}
          </p>
          <div className="f-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
