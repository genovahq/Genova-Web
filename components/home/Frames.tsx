import styles from "./home.module.css";

/*
 * Visual frames for the homepage. Real client screenshots go in a browser
 * frame; the phone mockups are illustrative interface sketches (no client
 * names, no numbers presented as results).
 */

export function BrowserFrame({
  src,
  alt,
  domain,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  domain: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`${styles.browser} ${className}`}>
      <div className={styles.browserBar} aria-hidden="true">
        <span />
        <span />
        <span />
        <em>{domain}</em>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
    </div>
  );
}

export function PhoneMock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`${styles.phone} ${className}`} aria-hidden="true">
      <div className={`${styles.phoneScreen} ${styles.mockScreen}`}>{children}</div>
    </div>
  );
}

/** "A lead just came in" — what the AI Lead Capture alert looks like. */
export function LeadAlertMock() {
  return (
    <PhoneMock>
      <div className={styles.mockTime}>7:42</div>
      <div className={styles.mockNotif}>
        <span className={styles.mockAppIcon}>G</span>
        <div>
          <b>New website inquiry</b>
          <p>Kitchen remodel · wants a quote this week · call back now</p>
        </div>
      </div>
      <div className={styles.mockCard}>
        <span className={styles.mockLabel}>Lead details</span>
        <dl>
          <dt>Service</dt>
          <dd>Kitchen remodel</dd>
          <dt>Timing</dt>
          <dd>This week</dd>
          <dt>Best way</dt>
          <dd>Call</dd>
          <dt>Source</dt>
          <dd>Website · Growth page</dd>
        </dl>
        <span className={styles.mockBtn}>Call back</span>
      </div>
    </PhoneMock>
  );
}

/** A Google map pack with "your business" on top — what local SEO aims for. */
export function MapPackMock() {
  return (
    <PhoneMock>
      <div className={styles.mockSearch}>plumber near me</div>
      <div className={styles.mockMap} />
      {["Your Business", "Competitor A", "Competitor B"].map((n, i) => (
        <div key={n} className={`${styles.mockListing} ${i === 0 ? styles.mockListingYou : ""}`}>
          <b>{n}</b>
          <span>{i === 0 ? "★★★★★ · Open now" : "★★★★ · Open now"}</span>
        </div>
      ))}
    </PhoneMock>
  );
}

/** The site-health checks Genova Care runs. */
export function CareMock() {
  return (
    <PhoneMock>
      <div className={styles.mockLabel} style={{ marginTop: 44 }}>
        Site health
      </div>
      {["Site online", "SSL certificate", "Daily backup", "Lead form delivering", "Content edits done"].map((t) => (
        <div key={t} className={styles.mockCheck}>
          <span>✓</span>
          {t}
        </div>
      ))}
    </PhoneMock>
  );
}
