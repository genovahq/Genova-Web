export type Plan = {
  slug: string;
  name: string;
  price: number;
  priceLabel: string;
  cadence?: string;
  timeline: string;
  /** Page allowance, shown as a badge on the card. */
  scope?: string;
  pitch: string;
  featured?: boolean;
  badge?: string;
  features: { text: string; ai?: boolean }[];
  cta: string;
  /** Soft upsell line rendered under the CTA. */
  footnote?: string;
};

/** Build packages. */
export const buildPlans: Plan[] = [
  {
    slug: "starter",
    name: "Starter",
    price: 750,
    priceLabel: "$750",
    timeline: "Live in 5–7 business days",
    scope: "1 page",
    pitch: "For businesses that need to get online and start capturing leads.",
    cta: "Start with Starter",
    footnote:
      "Keep it running smoothly — add Genova Care for $297/mo. Hosting, security, and peace of mind so your site's always working. Cancel anytime.",
    features: [
      { text: "High-converting professional website" },
      { text: "Optimized for every device" },
      {
        text: "AI Lead Capture Assistant — inquiries sent straight to your phone & email",
        ai: true,
      },
      { text: "Click-to-call & Google Maps" },
      { text: "SEO foundation — built to be found on Google" },
      { text: "Website visitor analytics" },
      { text: "14 days of post-launch support" },
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    price: 2000,
    priceLabel: "$2,000",
    timeline: "Live in 7–10 business days",
    scope: "Up to 5 pages",
    pitch: "Everything you need to turn local searches into paying customers.",
    featured: true,
    badge: "Most Popular",
    cta: "Choose Growth",
    features: [
      { text: "Everything in Starter" },
      { text: "A dedicated page for each service you offer" },
      { text: "Google Business Profile setup" },
      { text: 'Local search setup — designed to win "near me" searches' },
      { text: "Conversion copywriting designed to generate leads" },
      { text: "Customer reviews section" },
      { text: "Organized lead inbox + instant alerts", ai: true },
      { text: "30 days of support" },
    ],
  },
  {
    slug: "pro",
    name: "Pro",
    price: 3500,
    priceLabel: "$3,500",
    timeline: "Live in 10–14 business days",
    scope: "Up to 10 pages",
    pitch:
      "The complete system — built, optimized, and managed for you, so you never have to touch it.",
    cta: "Go Pro",
    features: [
      { text: "Everything in Growth" },
      { text: "Premium custom design & brand polish" },
      { text: "Multi-location & service-area pages" },
      { text: "Advanced SEO foundation — technical, local & on-page setup" },
      { text: "Google Search Console setup & connection" },
      {
        text: "3 months of Genova Care+ included, managed for you — a $1,791 value (monthly reports, SEO optimization, and monitoring run through this)",
        ai: true,
      },
      { text: "Priority delivery & launch support" },
    ],
  },
];

/** Monthly retainers. */
export const carePlans: Plan[] = [
  {
    slug: "care",
    name: "Genova Care",
    price: 297,
    priceLabel: "$297",
    cadence: "/mo",
    timeline: "Month to month",
    pitch: "Maintain my website — keep it fast, secure, and online.",
    cta: "Add Genova Care",
    features: [
      { text: "Managed hosting, security & daily backups" },
      { text: "Uptime monitoring" },
      { text: "Lead system uptime monitoring — if it breaks, we fix it", ai: true },
      { text: "Up to 2 content edits / month" },
      { text: "Monthly performance report — plus what we'd do next" },
      { text: "Same-week response on anything broken" },
      { text: "Quarterly strategy call" },
    ],
  },
  {
    slug: "care_plus",
    name: "Genova Care+",
    price: 597,
    priceLabel: "$597",
    cadence: "/mo",
    timeline: "Month to month",
    pitch: "Maintain and grow my website — active optimization every month.",
    featured: true,
    badge: "Recommended",
    cta: "Add Genova Care+",
    // Care+ only — this perk is not part of the $297 Care plan.
    footnote:
      "New systems & automations as they launch: small improvements included free, major new systems at an exclusive member discount. Available while your Care+ membership is active.",
    features: [
      { text: "Everything in Genova Care" },
      { text: "Up to 5 content edits / month" },
      { text: "Monthly SEO optimization" },
      { text: "Monthly performance reports" },
      { text: "Google Search Console monitoring" },
      { text: "AI Lead Assistant monitoring & tuning", ai: true },
      { text: "Website health audit" },
      { text: "Performance optimization" },
      { text: "Priority support" },
    ],
  },
];

/**
 * Hosting, stated as a footnote under the care plans. Every site needs it, and
 * a client should never discover the number after they've signed off.
 */
export const hostingNote =
  "Hosting is $50/mo on its own if you'd rather not take a care plan — both Genova Care and Care+ include it at no extra cost.";

export const rushOptions = [
  { plan: "Starter", surcharge: "+$200", timeline: "3–4 days" },
  { plan: "Growth", surcharge: "+$300", timeline: "5–6 days" },
  { plan: "Pro", surcharge: "+$500", timeline: "7 days" },
];

/**
 * Feature matrix for the /pricing comparison table.
 * `value` of true/false renders a check/dash; a string renders as-is.
 */
export const comparisonRows: {
  group: string;
  rows: { label: string; starter: boolean | string; growth: boolean | string; pro: boolean | string }[];
}[] = [
  {
    group: "The website",
    rows: [
      { label: "Custom-built, mobile-first site", starter: true, growth: true, pro: true },
      { label: "Conversion-focused page structure", starter: true, growth: true, pro: true },
      { label: "Pages included", starter: "1 page", growth: "Up to 5 pages", pro: "Up to 10 pages" },
      { label: "A page per service you offer", starter: false, growth: true, pro: true },
      { label: "Conversion copywriting", starter: false, growth: true, pro: true },
      { label: "Premium custom design & brand polish", starter: false, growth: false, pro: true },
    ],
  },
  {
    group: "Getting found",
    rows: [
      { label: "SEO foundation (titles, schema, sitemap)", starter: true, growth: true, pro: true },
      { label: "Google Business Profile setup", starter: false, growth: true, pro: true },
      { label: '"Near me" local search setup', starter: false, growth: true, pro: true },
      { label: "Multi-location & service-area pages", starter: false, growth: false, pro: true },
      { label: "Google Search Console setup & connection", starter: false, growth: false, pro: true },
    ],
  },
  {
    group: "Turning visits into leads",
    rows: [
      { label: "AI Lead Capture Assistant", starter: true, growth: true, pro: true },
      { label: "Instant phone + email alerts", starter: true, growth: true, pro: true },
      { label: "Click-to-call & Google Maps", starter: true, growth: true, pro: true },
      { label: "Organized lead inbox", starter: false, growth: true, pro: true },
      { label: "Customer reviews section", starter: false, growth: true, pro: true },
    ],
  },
  {
    group: "After launch",
    rows: [
      { label: "Post-launch support", starter: "14 days", growth: "30 days", pro: "Priority" },
      { label: "Visitor analytics", starter: true, growth: true, pro: true },
      { label: "Genova Care+ included", starter: false, growth: false, pro: "3 months" },
      // Reports/SEO/monitoring reach Pro clients through the included Care+,
      // not as separate Pro line items — reflected here so the table matches.
      { label: "Monthly performance reports", starter: false, growth: false, pro: "Via Care+" },
      { label: "Ongoing monthly SEO optimization", starter: false, growth: false, pro: "Via Care+" },
      { label: "Hosting after launch", starter: "$50/mo or Care", growth: "$50/mo or Care", pro: "Included 3 mo" },
    ],
  },
];

/**
 * Honest, factual comparison — every claim is about how the offer is
 * structured, not about results.
 *
 * NOTE: the cost rows deliberately avoid framing a monthly fee as the bad
 * outcome ("$20–$60/mo forever" used to sit here). Genova sells a $297/mo care
 * plan, so an argument that recurring cost is inherently a trap argues against
 * our own product. The real distinction is what you get for it and whether
 * it's optional — so that's what these rows compare.
 */
export const alternativeComparison = [
  {
    label: "Who builds it",
    genova: "We do — design, copy, and launch",
    diy: "You do, on a template",
    agency: "An assigned team",
  },
  {
    label: "Typical time to launch",
    genova: "About a week",
    diy: "However long you have spare",
    agency: "6–12 weeks",
  },
  {
    label: "Cost to build it",
    genova: "$750–$3,500, one time",
    diy: "Your evenings and weekends",
    agency: "$8,000+",
  },
  {
    label: "Ongoing cost",
    genova: "$50/mo hosting — care plans optional",
    diy: "Platform subscription, plus your time",
    agency: "Retainer, usually required",
  },
  {
    label: "Lead capture",
    genova: "AI assistant included in every plan",
    diy: "A contact form that emails you",
    agency: "Usually an add-on",
  },
  {
    label: "Local SEO",
    genova: "Built in from Growth up",
    diy: "Your responsibility",
    agency: "Separate retainer",
  },
  {
    label: "Who maintains it",
    genova: "Us, if you want it — never required",
    diy: "You, indefinitely",
    agency: "Retainer, usually required",
  },
  {
    label: "Who owns it",
    genova: "You do — site, code, and domain",
    diy: "You rent the platform",
    agency: "Varies by contract",
  },
];
