import type { Metadata } from "next";
import { Crumbs } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Genova Web collects, uses, and protects the information you send us.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

/*
 * NOTE: this is a plain-language starting point covering how the site actually
 * behaves today (one form, one webhook, no ad trackers). It is not legal
 * advice. Before running paid traffic or adding analytics/pixels, have a
 * lawyer review it — Florida businesses collecting personal data from other
 * states may fall under CCPA/CPRA and similar laws.
 */

export default function PrivacyPage() {
  const updated = "July 2026";

  return (
    <section className="block" style={{ paddingTop: 170 }}>
      <div className="wrap wrap-narrow">
        <Crumbs items={[{ name: "Privacy", path: "/privacy" }]} />
        <h1
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 700,
            fontSize: "clamp(1.9rem,4vw,2.8rem)",
            letterSpacing: "-0.025em",
            marginBottom: 12,
          }}
        >
          Privacy Policy
        </h1>
        <p className="timeline-note" style={{ marginBottom: 40 }}>
          Last updated {updated}
        </p>

        <div className="prose">
          <h2 className="kicker">What we collect</h2>
          <p>
            Only what you type into our contact form: your name, business name, phone number, email
            address, the plan you selected, and anything you write in the message field. We
            don&rsquo;t run advertising trackers, we don&rsquo;t buy or sell contact lists, and we
            don&rsquo;t attempt to identify visitors who never contact us.
          </p>

          <h2 className="kicker">Why we collect it</h2>
          <p>
            To reply to your inquiry and, if you become a client, to deliver the work. That&rsquo;s
            the entire purpose. We don&rsquo;t add you to a marketing list without you asking.
          </p>

          <h2 className="kicker">Where it goes</h2>
          <p>
            Form submissions are transmitted over HTTPS to our automation service, which routes them
            to our email and phone. We keep inquiry records for as long as needed to serve you and
            to meet ordinary business record-keeping needs.
          </p>

          <h2 className="kicker">Who we share it with</h2>
          <p>
            Nobody, except the service providers that operate this website and our lead routing on
            our behalf. We do not sell personal information. We&rsquo;ll disclose information only
            if legally required to.
          </p>

          <h2 className="kicker">Cookies and analytics</h2>
          <p>
            This site uses Google Analytics 4 to count visits and see which pages people
            actually read. It sets cookies in your browser (named <code>_ga</code> and{" "}
            <code>_ga_*</code>) that hold a randomly generated ID. That ID tells us a browser
            came back &mdash; it does not tell us who you are.
          </p>
          <p>
            What it collects: pages viewed, roughly how long you stayed, whether you came from
            Google or a link or typed the address in, your device and browser type, and an
            approximate location from your IP address. Google shortens the IP address so we
            never see the full one, and we have not turned on Google Signals, advertising
            personalisation, or any ad remarketing.
          </p>
          <p>
            We set <strong>no advertising or remarketing cookies</strong>, and we do not sell or
            share this data. If you would rather not be counted, install Google&rsquo;s{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--purple-bright)" }}
            >
              opt-out browser add-on
            </a>
            , or turn on &ldquo;Do Not Track&rdquo; / block cookies in your browser settings.
            Nothing on this site stops working if you do.
          </p>
          <p>
            Analytics is separate from the form. If you never submit the questionnaire, we never
            learn your name, email, or phone number.
          </p>

          <h2 className="kicker">Your choices</h2>
          <p>
            You can ask us what we hold about you, ask us to correct it, or ask us to delete it.
            Email{" "}
            <a href={`mailto:${site.email}`} style={{ color: "var(--purple-bright)" }}>
              {site.email}
            </a>{" "}
            and we&rsquo;ll action it. If you ask us to delete your inquiry, we will, and that
            ends the conversation on our side too.
          </p>

          <h2 className="kicker">Children</h2>
          <p>
            This is a business-to-business service and isn&rsquo;t directed at anyone under 18. We
            don&rsquo;t knowingly collect information from children.
          </p>

          <h2 className="kicker">Changes</h2>
          <p>
            If this policy changes, we&rsquo;ll update the date at the top. Material changes will be
            described rather than quietly edited in.
          </p>

          <h2 className="kicker">Contact</h2>
          <p>
            {site.name}, {site.city}, {site.region}, {site.country} —{" "}
            <a href={`mailto:${site.email}`} style={{ color: "var(--purple-bright)" }}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
