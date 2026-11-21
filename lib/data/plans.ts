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
  /** Overrides the default payment/terms line under the price. */
  note?: string;
};

/** Build packages. */
export const buildPlans: Plan[] = [
  {
    slug: "starter",
    name: "Starter",
    price: 1250,
    priceLabel: "$1,250",
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
        text: "Speed-to-lead: instant auto-reply & alerts on every inquiry",
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
    price: 2950,
    priceLabel: "$2,950",
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
      { text: "Automated review requests after every job", ai: true },
      { text: "Organized lead inbox + instant alerts", ai: true },
      { text: "30 days of support" },
    ],
  },
  {
    slug: "pro",
    name: "Pro",
    price: 4950,
    priceLabel: "$4,950",
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
        text: "Lead-system monitoring — if your lead automation breaks, we catch it and fix it",
        ai: true,
      },
      { text: "Unlimited content edits" },
      { text: "Quarterly check-in — a quick look at what's working and what to fix next" },
    ],
  },
];

/**
 * Monthly marketing retainers. Ad spend is always paid by the client directly
 * to Google/Meta and never marked up — the fee is for the work only.
 * Minimums: 6 months on the SEO-heavy retainers (Found, Full Engine) because
 * SEO needs that long to show results; 3 months on everything else.
 */
export const retainerPlans: Plan[] = [
  {
    slug: "found",
    name: "Found",
    price: 1500,
    priceLabel: "$1,500",
    cadence: "/mo",
    note: "6-month minimum · then month to month",
    timeline: "Local SEO retainer",
    pitch: "Rank in the map pack and organic results for the jobs you actually want.",
    cta: "Get Found",
    features: [
      { text: "Google Business Profile optimization & management" },
      { text: "New service-area and service pages every month" },
      { text: "Citation building & NAP clean-up" },
      { text: "Technical & on-page SEO, ongoing" },
      { text: "Automated review generation after every job", ai: true },
      { text: "Genova Care included — hosting, edits, monitoring" },
      { text: "Monthly ranking & lead report in plain English" },
    ],
  },
  {
    slug: "booked",
    name: "Booked",
    price: 1500,
    priceLabel: "$1,500",
    cadence: "/mo",
    note: "3-month minimum · plus ad spend, paid direct to Google",
    timeline: "Paid ads retainer",
    pitch: "Google Search and Local Services Ads, managed to cost per booked job — not clicks.",
    featured: true,
    badge: "Fastest to leads",
    cta: "Get Booked",
    footnote:
      "Add Meta (Facebook & Instagram) ads for +$500/mo. Above $10,000/mo in ad spend, the fee moves to 10% of spend.",
    features: [
      { text: "Google Search Ads — build, management & optimization" },
      { text: "Local Services Ads (Google Guaranteed) management" },
      { text: "Dedicated landing pages per campaign" },
      { text: "Call tracking & conversion tracking" },
      { text: "Speed-to-lead: instant text-back on every new lead", ai: true },
      { text: "Lead disputes & budget pacing handled" },
      { text: "Monthly cost-per-lead and cost-per-job report" },
    ],
  },
  {
    slug: "seen",
    name: "Seen",
    price: 3500,
    priceLabel: "$3,500",
    cadence: "/mo",
    note: "3-month minimum · then month to month",
    timeline: "Content & social retainer",
    pitch: "Real footage of your crew and your work, posted everywhere your customers look.",
    cta: "Get Seen",
    features: [
      { text: "Monthly on-site content shoot" },
      { text: "8 edited short-form videos a month" },
      { text: "20–30 edited photos a month" },
      { text: "Managed posting on Instagram, Facebook & TikTok" },
      { text: "Weekly Google Business Profile posts" },
      { text: "Nextdoor presence & neighborhood posts" },
      { text: "Review monitoring & responses", ai: true },
    ],
  },
];

/** Smaller retainers for LSA-only contractors and non-contractor local brands. */
export const liteRetainerPlans: Plan[] = [
  {
    slug: "booked-lsa",
    name: "Booked LSA",
    price: 750,
    priceLabel: "$750",
    cadence: "/mo",
    note: "3-month minimum · plus ad spend, paid direct to Google",
    timeline: "Local Services Ads only",
    pitch: "For contractors who only need Google Guaranteed leads handled properly.",
    cta: "Start Booked LSA",
    features: [
      { text: "Local Services Ads profile setup & verification help" },
      { text: "Budget, bidding & service-area management" },
      { text: "Lead disputes on bad or spam leads" },
      { text: "Review strategy to climb the LSA rankings" },
      { text: "Monthly cost-per-lead report" },
    ],
  },
  {
    slug: "seen-lite",
    name: "Seen Lite",
    price: 1800,
    priceLabel: "$1,800",
    cadence: "/mo",
    note: "3-month minimum · then month to month",
    timeline: "Content for local brands",
    pitch: "For shops, cafés, detailers and local brands that need steady, good-looking content.",
    cta: "Start Seen Lite",
    features: [
      { text: "Monthly content shoot" },
      { text: "4 edited short-form videos a month" },
      { text: "10 edited photos a month" },
      { text: "8–12 managed posts a month" },
      { text: "Weekly Google Business Profile posts" },
    ],
  },
];

/** The bundle — priced below the $7,000 sum of its parts (Found + Booked w/ Meta + Seen). */
export const fullEngine: Plan = {
  slug: "full-engine",
  name: "Full Engine",
  price: 5995,
  priceLabel: "$5,995",
  cadence: "/mo",
  note: "6-month minimum · plus ad spend, paid direct to Google & Meta",
  timeline: "Found + Booked + Seen",
  pitch:
    "Every channel run as one system — SEO, ads and content feeding the same pipeline, reported as booked jobs.",
  featured: true,
  badge: "Best value",
  cta: "Talk about Full Engine",
  footnote: "Bought separately, Found + Booked with Meta + Seen would be $7,000/mo.",
  features: [
    { text: "Everything in Found — local SEO, GBP, reviews, Genova Care" },
    { text: "Everything in Booked — Google Search, LSA and Meta ads" },
    { text: "Everything in Seen — monthly shoot, videos, photos, posting" },
    { text: "A Growth website build included once you pass month six" },
    { text: "Speed-to-lead automation across every channel", ai: true },
    { text: "One monthly report: leads, cost per job, and what's next" },
    { text: "Priority turnaround & a monthly strategy call" },
  ],
};

/** One-time projects. Credits apply when the client starts the matching retainer. */
export const projectPlans: Plan[] = [
  {
    slug: "lead-leak-fix",
    name: "Lead Leak Fix",
    price: 1500,
    priceLabel: "$1,500",
    note: "One-time setup · then $149/mo",
    timeline: "Live in about a week",
    scope: "Works on your existing site",
    pitch:
      "Already have a website? We retrofit the lead-response system onto it — no rebuild required.",
    cta: "Fix my lead leaks",
    footnote:
      "The $149/mo covers the phone number, texting and automation running costs, plus monitoring so it never silently breaks.",
    features: [
      { text: "Missed-call text-back — every missed call gets a text in seconds", ai: true },
      { text: "Instant follow-up on every form lead", ai: true },
      { text: "Automated review requests after each job" },
      { text: "Lead alerts to your phone & email" },
      { text: "Works with WordPress, Wix, Squarespace and most others" },
    ],
  },
  {
    slug: "ad-launch",
    name: "Ad Launch Setup",
    price: 1500,
    priceLabel: "$1,500",
    note: "One-time · plus ad spend, paid direct to Google",
    timeline: "Live in 7–10 business days",
    pitch: "A properly built Google Ads account and landing page, ready to run.",
    cta: "Launch my ads",
    footnote: "Start Booked within 30 days and $750 is credited to your first month.",
    features: [
      { text: "Google Ads account setup or clean-up" },
      { text: "A dedicated, conversion-focused landing page" },
      { text: "Call & conversion tracking installed" },
      { text: "Your first campaign — keywords, ads, negatives, budget" },
      { text: "A handover walkthrough so you know what's running" },
    ],
  },
  {
    slug: "content-day",
    name: "Content Day",
    price: 2500,
    priceLabel: "$2,500",
    note: "One-time · paid before the shoot",
    timeline: "Edits delivered in about 10 days",
    pitch: "One half-day shoot that gives you months of real footage of your work.",
    cta: "Book a Content Day",
    footnote: "Start Seen within 30 days and $1,000 is credited to your first month.",
    features: [
      { text: "Half-day on-site shoot with your crew & projects" },
      { text: "8 edited short-form videos, ready to post" },
      { text: "20–30 edited photos for your site, ads & socials" },
      { text: "Captions & a posting plan included" },
    ],
  },
  {
    slug: "brand-refresh",
    name: "Brand Refresh",
    price: 8500,
    priceLabel: "$8,500",
    note: "50% upfront · 50% on delivery",
    timeline: "About 4–6 weeks",
    pitch: "New look, new site, new content — everything relaunched together.",
    cta: "Plan a Brand Refresh",
    features: [
      { text: "Logo, color palette & typography" },
      { text: "Brand kit for trucks, uniforms, signs & print" },
      { text: "A Growth website build in the new brand" },
      { text: "A Content Day to shoot the new look" },
    ],
  },
];

/** Every package, for the contact form's plan picker and schema. */
export const allPlans = (): Plan[] => [
  ...retainerPlans,
  fullEngine,
  ...liteRetainerPlans,
  ...buildPlans,
  ...projectPlans,
  ...carePlans,
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
      { label: "Speed-to-lead auto-reply", starter: true, growth: true, pro: true },
      { label: "Instant email alerts", starter: true, growth: true, pro: true },
      { label: "Click-to-call & Google Maps", starter: true, growth: true, pro: true },
      { label: "Organized lead inbox", starter: false, growth: true, pro: true },
      { label: "Customer reviews section", starter: false, growth: true, pro: true },
      { label: "Automated review requests", starter: false, growth: true, pro: true },
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
 * structured, not about results. "Large agency" cells say "often"/"varies"
 * deliberately: plenty of big agencies don't do these things, and the table
 * shouldn't claim they all do.
 */
export const alternativeComparison = [
  {
    label: "Who does the work",
    genova: "A small Orlando team — you talk to the people doing it",
    diy: "You, after hours",
    agency: "An account manager relaying to a team",
  },
  {
    label: "What gets reported",
    genova: "Leads, cost per lead, and booked jobs",
    diy: "Whatever you find time to track",
    agency: "Often impressions, clicks and rankings",
  },
  {
    label: "Ad spend",
    genova: "Paid direct to Google & Meta — never marked up",
    diy: "Paid direct, managed by you",
    agency: "Varies — sometimes marked up or a % of spend",
  },
  {
    label: "Contract",
    genova: "3 months (6 for SEO), then month to month",
    diy: "None",
    agency: "Often 6–12 months",
  },
  {
    label: "Speed to lead",
    genova: "Instant text-back and follow-up built in",
    diy: "You call back when you can",
    agency: "Usually a separate tool or add-on",
  },
  {
    label: "Content",
    genova: "We shoot your real crew and your real work",
    diy: "Your phone, when there's time",
    agency: "Varies — often stock or a separate vendor",
  },
  {
    label: "Website",
    genova: "Custom-coded, $1,250–$4,950, one time",
    diy: "A template builder subscription",
    agency: "Varies — sometimes rented, not owned",
  },
  {
    label: "Who owns the accounts",
    genova: "You — ad accounts, profile, site, content",
    diy: "You",
    agency: "Varies by contract",
  },
];
