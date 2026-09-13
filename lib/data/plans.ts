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
    scope: "2 pages",
    pitch: "For businesses that need to get online and start capturing leads.",
    cta: "Start with Starter",
    footnote:
      "Keep it running smoothly — add Genova Care for $149/mo. Hosting, security, and peace of mind so your site's always working. Cancel anytime.",
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
        text: "3 months of Genova Care included — a $447 value",
        ai: true,
      },
      { text: "Priority delivery & launch support" },
    ],
  },
];

/** Monthly options: hosting on its own, or full care. Both month to month. */
export const carePlans: Plan[] = [
  {
    slug: "hosting",
    name: "Hosting only",
    price: 50,
    priceLabel: "$50",
    cadence: "/mo",
    timeline: "Month to month",
    pitch: "Keep it online and secure — nothing more.",
    cta: "Add hosting",
    features: [
      { text: "Managed hosting & SSL" },
      { text: "Daily backups" },
      { text: "Uptime monitoring" },
    ],
  },
  {
    slug: "care",
    name: "Genova Care",
    price: 149,
    priceLabel: "$149",
    cadence: "/mo",
    timeline: "Month to month",
    pitch: "Keep it online, secure, and handled — so you never think about it.",
    featured: true,
    badge: "Recommended",
    cta: "Add Genova Care",
    features: [
      { text: "Everything in hosting — managed hosting, SSL, daily backups, uptime monitoring" },
      {
        text: "Lead-system monitoring — if your AI lead capture breaks, we catch it and fix it",
        ai: true,
      },
      { text: "Unlimited content edits" },
      { text: "Quarterly check-in — a quick look at what's working and what to fix next" },
    ],
  },
];

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
      { label: "Pages included", starter: "2 pages", growth: "Up to 5 pages", pro: "Up to 10 pages" },
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
      { label: "Genova Care included", starter: false, growth: false, pro: "3 months" },
      // Ongoing monitoring and content edits reach Pro clients through the
      // included 3 months of Genova Care, not as separate Pro line items.
      { label: "Lead-system monitoring", starter: false, growth: false, pro: "Via Care" },
      { label: "Hosting after launch", starter: "$50/mo or Care", growth: "$50/mo or Care", pro: "Included 3 mo" },
    ],
  },
];

/**
 * Honest, factual comparison — every claim is about how the offer is
 * structured, not about results.
 *
 * NOTE: the cost rows deliberately avoid framing a monthly fee as the bad
 * outcome ("$20–$60/mo forever" used to sit here). Genova sells a $149/mo care
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
    genova: "Under two weeks",
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
