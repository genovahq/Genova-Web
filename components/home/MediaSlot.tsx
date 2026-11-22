import styles from "./home.module.css";

/**
 * A photo/video slot. With `src` it renders the real media; without it,
 * an on-brand placeholder that says exactly what belongs there.
 *
 * Media comes from Sanity (lib/sanity.ts), so photos are uploaded and
 * replaced in the Studio without touching code.
 */
export default function MediaSlot({
  label,
  hint,
  kind = "photo",
  src,
  poster,
  alt = "",
  tone = "light",
  className = "",
}: {
  label: string;
  hint?: string;
  kind?: "photo" | "video";
  src?: string;
  /** Still frame shown before a video loads. */
  poster?: string;
  alt?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  if (src) {
    return kind === "video" ? (
      <video
        className={`${styles.media} ${className}`}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt || label}
      />
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={`${styles.media} ${className}`} src={src} alt={alt || label} loading="lazy" />
    );
  }
  return (
    <div
      className={`${styles.slot} ${tone === "dark" ? styles.slotDark : ""} ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span className={styles.slotIcon} aria-hidden="true">
        {kind === "video" ? (
          <svg viewBox="0 0 24 24">
            <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <circle cx="9" cy="10" r="1.8" />
            <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" />
          </svg>
        )}
      </span>
      <span className={styles.slotLabel}>{label}</span>
      {hint && <span className={styles.slotHint}>{hint}</span>}
      <span className={styles.slotTag}>{kind === "video" ? "Video slot" : "Photo slot"}</span>
    </div>
  );
}
