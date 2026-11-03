import type { Metadata } from "next";
import Link from "next/link";
import { site, calLink } from "@/lib/site";
import {
  monthlyPackages,
  engineSteps,
  industries,
  homeFaqs,
} from "@/lib/data/packages";

export const metadata: Metadata = {
  title: {
    absolute: "Marketing Agency for Home Service Businesses | Genova Web",
  },
  description:
    "Genova Web turns home-service marketing into booked jobs — ads, content, SEO, website and follow-up as one engine, every lead tracked from click to booked job. Orlando, FL.",
  alternates: { canonical: "/" },
};

const leaks = [
  {
    title: "Slow replies",
    body: "A lead that waits five minutes for a call back has usually already booked someone else. Speed decides who wins.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Missed calls",
    body: "You are on a roof or under a sink. The call goes to voicemail, and most people never leave one — they just call the next result.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
        <path d="M15 4l5 5M20 4l-5 5" />
      </svg>
    ),
  },
  {
    title: "No follow-up",
    body: "Most jobs are won on the second or third touch. With no follow-up or review requests, warm leads quietly go cold.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 6h16v10H7l-3 3z" />
        <path d="M8 10h8M8 13h5" />
      </svg>
    ),
  },
];

const howSteps = [
  { n: "01", t: "Audit", b: "We check your lead response, Google profile, reviews and ads — free — and show what the gaps cost you." },
  { n: "02", t: "Plan", b: "We recommend the package and platforms that fit your trade and your goals. No guessing." },
  { n: "03", t: "Launch", b: "We build, wire up speed-to-lead, and turn on the traffic. You keep running your business." },
  { n: "04", t: "Monthly report", b: "Plain-English numbers tracked to booked jobs — what worked, what we do next." },
];

export default function HomePage() {
  return (
    <div className="ag">
      {/* HERO */}
      <section className="ag-hero">
        <div className="ag-wrap">
          <span className="ag-label">Marketing for home-service businesses</span>
          <h1>
            Turn your marketing into <span className="grad">booked jobs.</span>
          </h1>
          <p className="sub">
            We&rsquo;re the marketing team for home-service businesses in {site.city} — ads, content,
            SEO, website and follow-up as one engine, with every lead tracked from click to booked job.
          </p>
          <div className="ag-actions">
            <a href={calLink} className="ag-btn ag-btn-gold">
              Get your free Lead Leak Audit
            </a>
            <a href={calLink} className="ag-btn ag-btn-ghost">
              Book a call
            </a>
          </div>
          <div className="ag-revchip">
            <span className="stars">★★★★★</span> 5.0 on Google <small>— real client reviews</small>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="ag-cred">
        <div className="ag-wrap">
          <div><div className="k">{site.city}, FL</div><div className="v">Service-area agency</div></div>
          <div><div className="k"><span className="u">You</span> own it</div><div className="v">Ad &amp; social accounts</div></div>
          <div><div className="k">Tracked</div><div className="v">To booked jobs</div></div>
          <div><div className="k">24-hour</div><div className="v">Reply to every inquiry</div></div>
          <div><div className="k">3-mo <span className="u">min</span></div><div className="v">Then month-to-month</div></div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="ag-sec">
        <div className="ag-wrap">
          <div className="ag-head">
            <span className="ag-label">The problem</span>
            <h2>Most of your leads leak out <span className="grad">before they ever book.</span></h2>
            <p>You&rsquo;re paying for clicks and calls you never close. Here&rsquo;s where the money goes.</p>
          </div>
          <div className="ag-leaks">
            {leaks.map((l) => (
              <div className="ag-leak" key={l.title}>
                <span className="ag-ic">{l.icon}</span>
                <h3>{l.title}</h3>
                <p>{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE GENOVA ENGINE */}
      <section className="ag-sec">
        <div className="ag-wrap">
          <div className="ag-head">
            <span className="ag-label">The Genova Engine</span>
            <h2>One engine that keeps your <span className="grad">calendar full.</span></h2>
            <p>Four parts that feed each other — so every dollar works harder than the last.</p>
          </div>
          <div className="ag-loop">
            {engineSteps.map((s) => (
              <div className="ag-step" key={s.n}>
                <div className="num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="ag-sec ag-pkgsec">
        <div className="ag-wrap">
          <div className="ag-head">
            <span className="ag-label">Monthly packages</span>
            <h2>Start where you are. <span className="grad">Scale into the full engine.</span></h2>
            <p>3-month minimum, then month-to-month. Ad spend, where it applies, is separate.</p>
          </div>
          <div className="ag-pkgs">
            {monthlyPackages.map((p) => (
              <div className={`ag-pkg${p.popular ? " pop" : ""}`} key={p.slug}>
                {p.popular && <span className="poptag">Most popular</span>}
                <div className="pn">{p.name}</div>
                <div className="pp">
                  {p.priceLabel}
                  <small>/mo</small>
                </div>
                <div className="ptag">{p.adSpend ? "+ ad spend" : " "}</div>
                <p className="pdesc">{p.tagline}</p>
                <ul>
                  {p.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link href="/services" className="plink">
                  Full details →
                </Link>
              </div>
            ))}
          </div>
          <p className="ag-adnote">Ad spend is billed directly to your account by Google / Meta — never marked up.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ag-sec">
        <div className="ag-wrap">
          <div className="ag-head">
            <span className="ag-label">How it works</span>
            <h2>Audit → Plan → Launch → <span className="grad">Monthly report.</span></h2>
          </div>
          <div className="ag-how">
            {howSteps.map((s) => (
              <div className="ag-howstep" key={s.n}>
                <div className="s-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="ag-sec">
        <div className="ag-wrap">
          <div className="ag-head">
            <span className="ag-label">Who we build for</span>
            <h2>Built for <span className="grad">the trades.</span></h2>
            <p>We know how each of these gets found and booked — and which platform wins. We work with others too.</p>
          </div>
          <div className="ag-inds">
            {industries.map((i) => (
              <Link href={`/${i.slug}`} className="ag-ind" key={i.slug}>
                <h3>{i.name}</h3>
                <p>{i.blurb}</p>
                <span className="more">See {i.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="ag-sec ag-proofsec">
        <div className="ag-wrap">
          <div className="ag-head">
            <span className="ag-label">Proof</span>
            <h2>Real work. <span className="grad">Real tracking.</span></h2>
            <p>Our work, with the numbers tracked. Placeholders below get filled with real results.</p>
          </div>
          <div className="ag-proof">
            <div className="ag-case">
              <span className="tag">Mobile detailing</span>
              <h3>Showroom Shine</h3>
              <p>Website, booking and review system for a veteran-owned mobile detailing business.</p>
              <div className="result">[CASE STUDY RESULT — to add]</div>
            </div>
            <div className="ag-case">
              <span className="tag">Equipment &amp; calibration</span>
              <h3>S&amp;S Equipment Solutions</h3>
              <p>E-commerce storefront with buy-now, quote catalog and calibration/repair request flows.</p>
              <div className="result">[CASE STUDY RESULT — to add]</div>
            </div>
          </div>
          <div className="ag-review">
            <div className="stars">★★★★★</div>
            <blockquote>&ldquo;[Paste your real Google review here — the one you already have.]&rdquo;</blockquote>
            <div className="by">[Client name] · Verified Google review</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ag-sec">
        <div className="ag-wrap">
          <div className="ag-head">
            <span className="ag-label">Questions</span>
            <h2>Answered <span className="grad">straight.</span></h2>
          </div>
          <div className="ag-faq">
            {homeFaqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="fa">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ag-sec ag-final">
        <div className="ag-wrap">
          <h2>
            See exactly where your leads are leaking — <span className="grad">free.</span>
          </h2>
          <p>
            We&rsquo;ll check your response time, Google profile, reviews and ads, and show you what it&rsquo;s
            costing you in booked jobs.
          </p>
          <div className="ag-actions" style={{ justifyContent: "center" }}>
            <a href={calLink} className="ag-btn ag-btn-gold">
              Get your free Lead Leak Audit
            </a>
            <a href={`tel:${site.phoneHref.replace("tel:", "")}`} className="ag-btn ag-btn-ghost">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
