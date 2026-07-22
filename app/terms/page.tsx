import type { Metadata } from "next";
import { Crumbs } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply to using the Genova Web website and engaging our services.",
  alternates: { canonical: "/terms" },
};

/*
 * NOTE: a plain-language summary of how the service is described elsewhere on
 * this site. It is NOT a substitute for a client services agreement, and it is
 * not legal advice. Have a lawyer produce the actual contract you sign with
 * clients — particularly the sections on IP transfer, payment terms, and
 * limitation of liability.
 */

export default function TermsPage() {
  const updated = "July 2026";

  return (
    <section className="block" style={{ paddingTop: 170 }}>
      <div className="wrap wrap-narrow">
        <Crumbs items={[{ name: "Terms", path: "/terms" }]} />
        <h1
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 700,
            fontSize: "clamp(1.9rem,4vw,2.8rem)",
            letterSpacing: "-0.025em",
            marginBottom: 12,
          }}
        >
          Terms of Service
        </h1>
        <p className="timeline-note" style={{ marginBottom: 40 }}>
          Last updated {updated}
        </p>

        <div className="prose">
          <h2 className="kicker">About these terms</h2>
          <p>
            These terms cover your use of this website and summarise how we engage with clients.
            Each project is confirmed by a separate written agreement, and where that agreement and
            this page differ, the signed agreement governs.
          </p>

          <h2 className="kicker">Quotes and pricing</h2>
          <p>
            Package prices shown on this site are current at the time of publication and apply to
            the scope described. Work outside that scope — ecommerce, booking systems, memberships,
            custom integrations — is quoted separately. A quote we send you is valid for 30 days.
          </p>

          <h2 className="kicker">Payment</h2>
          <p>
            Build projects are 50% on booking and 50% on delivery. The deposit reserves your build
            slot and is what allows us to hold the timeline. Care plans are billed monthly in
            advance and can be cancelled at any time, effective at the end of the current period.
          </p>

          <h2 className="kicker">Timelines</h2>
          <p>
            Published timelines assume content, photos, access, and feedback arrive promptly.
            They&rsquo;re realistic targets rather than contractual deadlines, and delays on either
            side move the date. We&rsquo;ll tell you as soon as we know.
          </p>

          <h2 className="kicker">Ownership</h2>
          <p>
            On final payment, the completed website, its content, and its code are yours. Your
            domain is registered in your name. We may reference the project as an example of our
            work — including in a case study naming your business — only with your written
            permission.
          </p>

          <h2 className="kicker">Your responsibilities</h2>
          <p>
            You confirm that any content, images, logos, or claims you give us are yours to use and
            are accurate. We can&rsquo;t verify licences on material you supply, and we rely on you
            for the truth of statements about your business, credentials, and offers.
          </p>

          <h2 className="kicker">What we don&rsquo;t promise</h2>
          <p>
            We do not guarantee search rankings, traffic volumes, lead counts, or revenue. Search
            engines are third parties whose behaviour we don&rsquo;t control. We guarantee the work
            described in your agreement and honest reporting of what it produced.
          </p>

          <h2 className="kicker">Third-party services</h2>
          <p>
            Hosting, domain registration, Google services, and automation tools are operated by
            third parties under their own terms. We&rsquo;re not responsible for their outages,
            policy changes, or pricing.
          </p>

          <h2 className="kicker">Liability</h2>
          <p>
            To the extent permitted by law, our total liability arising from a project is limited to
            the fees you paid for it. We&rsquo;re not liable for indirect or consequential losses,
            including lost profits or lost business.
          </p>

          <h2 className="kicker">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of {site.regionName}, United States.
          </p>

          <h2 className="kicker">Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${site.email}`} style={{ color: "var(--purple-bright)" }}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
