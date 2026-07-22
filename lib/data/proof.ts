/**
 * PROOF / SOCIAL PROOF
 * ---------------------------------------------------------------------------
 * READ THIS BEFORE ADDING ANYTHING HERE.
 *
 * `testimonials` and `caseStudies` ship EMPTY on purpose. Inventing a customer
 * quote, a client name, or a results stat is not a placeholder — it is a false
 * statement of fact about a real business, and for a US company that is an FTC
 * problem, not a design detail. Same goes for "50+ sites launched" style
 * numbers before they're true.
 *
 * Until real ones exist, the UI automatically falls back to `commitments` —
 * promises Genova Web controls and can actually keep. That block is honest,
 * it converts well, and it needs no permission from anyone.
 *
 * TO GO LIVE WITH REAL PROOF:
 *   1. Get written permission from the client to use their name and quote.
 *   2. Add the entry below. The <Proof /> component swaps over automatically
 *      as soon as the array is non-empty — no other file needs editing.
 *   3. For `caseStudies`, only use metrics you can actually evidence from
 *      analytics or Search Console. Round honestly; don't extrapolate.
 */

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  /** City is fine; a street address is not necessary and invites mistakes. */
  location?: string;
};

export type CaseStudy = {
  slug: string;
  business: string;
  industry: string;
  challenge: string;
  approach: string;
  /** Only evidenced numbers. Leave empty rather than guessing. */
  results: { metric: string; detail: string }[];
  plan: string;
};

// Example shape, kept commented so the format is obvious when real ones arrive:
//
// export const testimonials: Testimonial[] = [
//   {
//     quote: "We went from two calls a week to two a day.",
//     name: "Real Name",
//     business: "Real Business LLC",
//     location: "Orlando, FL",
//   },
// ];

export const testimonials: Testimonial[] = [];

export const caseStudies: CaseStudy[] = [];

/**
 * The honest fallback: terms Genova Web sets itself. Every line here is a
 * promise about how the business operates, which is verifiable and safe to
 * publish on day one.
 */
export const commitments: { title: string; body: string }[] = [
  {
    title: "You own everything",
    body:
      "The site, the domain, the content, the code. No proprietary builder, no platform you have to keep renting. If you ever leave, you leave with all of it.",
  },
  {
    title: "50% up front, 50% on delivery",
    body:
      "You don't pay the balance until you've seen the finished site and signed off on it. The risk is split, not stacked on you.",
  },
  {
    title: "A reply within 24 hours",
    body:
      "On every inquiry, before you're a customer and after. If we're going to sell you fast response times, we should be able to demonstrate one.",
  },
  {
    title: "Revisions until it's right",
    body:
      "The review round isn't a formality with a change limit. We adjust until the site is one you'd actually send someone to.",
  },
  {
    title: "No lock-in on care plans",
    body:
      "Care and Care+ are month to month. Cancel any time and keep the website. Retainers should be earned monthly, not enforced by contract.",
  },
  {
    title: "No ranking guarantees",
    body:
      "Nobody can promise you a position in Google, and anyone who does is either guessing or lying. We guarantee the work and report exactly what it produced.",
  },
];

/**
 * Spec claims — statements about how the service is structured, not about
 * history or results. Safe to publish immediately.
 */
export const specs = [
  { value: "~1 wk", label: "Typical build time" },
  { value: "24 hr", label: "Reply to every inquiry" },
  { value: "50/50", label: "Payment split" },
  { value: "$750", label: "Starting price" },
];
