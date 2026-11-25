import { testimonials, portfolio } from "@/lib/data/proof";
import { BrowserFrame } from "./Frames";
import Stars from "@/components/Stars";
import styles from "./home.module.css";

/*
 * Reviews + credibility. Only real, permissioned reviews from
 * lib/data/proof.ts — the first is featured beside the client's live site;
 * any further reviews render as smaller cards. The stats row is limited to
 * facts Genova controls or can count (live sites in the portfolio data,
 * published policies). Renders nothing if there are no reviews.
 */

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const domain = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function Reviews() {
  const [featured, ...rest] = testimonials;
  if (!featured) return null;
  const project = portfolio.find((p) => p.slug === featured.project);

  const facts = [
    { value: String(portfolio.length), label: "Client sites live right now" },
    { value: "<2 wks", label: "Typical time to launch" },
    { value: "24 hr", label: "Reply to every inquiry" },
    { value: "$0", label: "Hidden fees. The price is the price" },
  ];

  return (
    <section className={`${styles.sheet} ${styles.light}`} id="reviews">
      <div className={styles.wrap}>
        <span className={styles.kicker}>Reviews</span>
        <h2 className={styles.h2}>Don&rsquo;t take our word for it.</h2>

        <div className={`${styles.reviewFeature} ${project ? "" : styles.reviewSolo}`}>
          <figure className={styles.reviewCard}>
            <span className={styles.reviewTop}>
              <span className={styles.reviewMark} aria-hidden="true">
                &ldquo;
              </span>
              {!!featured.rating && <Stars rating={featured.rating} className={styles.reviewStars} />}
            </span>
            <blockquote>{featured.quote}</blockquote>
            <figcaption className={styles.reviewBy}>
              <span className={styles.reviewAvatar} aria-hidden="true">
                {initials(featured.name)}
              </span>
              <span>
                <b>{featured.name}</b>
                <small>
                  {[featured.role, featured.business].filter(Boolean).join(", ")}
                  {featured.location ? ` · ${featured.location}` : ""}
                </small>
              </span>
              {featured.source && (
                <span className={styles.reviewSource}>
                  <span aria-hidden="true">✓</span> Verified {featured.source}
                </span>
              )}
            </figcaption>
          </figure>

          {project && (
            <a href={project.url} target="_blank" rel="noopener" className={styles.reviewSite}>
              <BrowserFrame src={project.image} alt={project.alt} domain={domain(project.url)} />
              <span className={styles.reviewSiteCap}>
                The site {featured.name.split(" ")[0]} is talking about: {project.business}
                <span aria-hidden="true"> ↗</span>
              </span>
            </a>
          )}
        </div>

        {rest.length > 0 && (
          <div className={styles.reviewMore}>
            {rest.map((t) => (
              <figure key={t.name + t.business} className={styles.reviewSmall}>
                {!!t.rating && <Stars rating={t.rating} />}
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className={styles.reviewBy}>
                  <span className={styles.reviewAvatar} aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  <span>
                    <b>{t.name}</b>
                    <small>{[t.role, t.business].filter(Boolean).join(", ")}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <dl className={styles.facts}>
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
