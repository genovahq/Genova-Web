/**
 * 2026 agency repositioning — monthly retainers + one-time packages.
 * Content will move to Sanity at build time; kept here so the preview renders.
 *
 * Every price that involves media buying shows "+ ad spend", and the site
 * states plainly that ad spend is billed directly by Google/Meta.
 */

export type MonthlyPackage = {
  slug: string;
  name: string;
  price: number;
  priceLabel: string;
  adSpend: boolean;
  tagline: string;
  popular?: boolean;
  includes: string[];
};

export const monthlyPackages: MonthlyPackage[] = [
  {
    slug: "found",
    name: "Found",
    price: 1500,
    priceLabel: "$1,500",
    adSpend: false,
    tagline: "Get found when customers search — on Google and in AI answers.",
    includes: [
      "SEO built for local service searches",
      "AI search visibility (Google AI Overviews, ChatGPT, Gemini)",
      "Google Business Profile management",
      "Review generation & monitoring",
      "Ongoing site maintenance",
    ],
  },
  {
    slug: "booked",
    name: "Booked",
    price: 2000,
    priceLabel: "$2,000",
    adSpend: true,
    popular: true,
    tagline: "Turn ad clicks into booked jobs with speed-to-lead follow-up.",
    includes: [
      "Google and/or Meta ads (platform picked for your industry)",
      "Local Services Ads where they fit",
      "High-converting landing pages",
      "Speed-to-lead: instant reply, missed-call text-back, follow-ups",
      "Plain-English monthly report",
    ],
  },
  {
    slug: "seen",
    name: "Seen",
    price: 3500,
    priceLabel: "$3,500",
    adSpend: false,
    tagline: "Show up everywhere with monthly video and social content.",
    includes: [
      "Monthly on-site content shoot",
      "8 short-form videos",
      "~20 edited photos",
      "Social posting & engagement",
      "Review management",
    ],
  },
  {
    slug: "full-engine",
    name: "Full Engine",
    price: 6500,
    priceLabel: "$6,500",
    adSpend: true,
    tagline: "The whole engine, working together — and cheaper than buying it piecemeal.",
    includes: [
      "Everything in Found, Booked & Seen",
      "Website & automation, managed",
      "Ads across the right platforms",
      "Monthly content + social",
      "Full reputation & past-customer campaigns",
    ],
  },
];

export type OneTimePackage = {
  name: string;
  price: string;
  adSpend: boolean;
  body: string;
};

export const oneTimePackages: OneTimePackage[] = [
  {
    name: "Lead Leak Fix",
    price: "$1,000",
    adSpend: false,
    body: "Speed-to-lead, missed-call text-back, follow-ups and review requests added to your existing site.",
  },
  {
    name: "Ad Launch Setup",
    price: "$1,500",
    adSpend: true,
    body: "Landing page, ad account setup, conversion tracking, and your first campaign live.",
  },
  {
    name: "Content Day",
    price: "$2,500",
    adSpend: false,
    body: "A 3-hour shoot: 8 edited short-form videos and 20–30 edited photos.",
  },
  {
    name: "Website Launch",
    price: "$3,000",
    adSpend: false,
    body: "A custom website, Google Business Profile setup, and a review-request system.",
  },
  {
    name: "Brand Refresh",
    price: "$7,000",
    adSpend: false,
    body: "New logo and brand kit, a new website, and one content shoot.",
  },
];

/** The 4-step Genova Engine loop. */
export const engineSteps = [
  { n: "01", t: "Content", b: "Shoots and posts that feed the ads and the feed." },
  { n: "02", t: "Traffic", b: "Ads, social and SEO bring the right people in." },
  { n: "03", t: "Booked jobs", b: "Website + automation convert fast — speed-to-lead." },
  { n: "04", t: "Repeat & refer", b: "Reviews and past-customer campaigns feed it again." },
];

export const industries = [
  { slug: "roofers", name: "Roofers", blurb: "Storm and retail demand, won on Google & Local Services Ads." },
  { slug: "hvac", name: "HVAC", blurb: "Seasonal spikes captured with Google + LSAs and fast follow-up." },
  { slug: "water-mitigation", name: "Water Mitigation", blurb: "Emergency intent — speed-to-lead decides who gets the call." },
  { slug: "remodelers", name: "Remodelers", blurb: "A considered buy, nurtured with Meta, Google and real content." },
];

export const homeFaqs = [
  {
    q: "Is there a contract?",
    a: "Monthly packages have a 3-month minimum so the work has time to produce results, then they're month-to-month. One-time packages are just that — one time.",
  },
  {
    q: "How does ad spend work?",
    a: "Ad spend is separate from our fee and is billed directly to your own account by Google or Meta — never marked up by us. You keep full ownership of your ad accounts.",
  },
  {
    q: "Who owns the accounts and the work?",
    a: "You do. Your website, ad accounts, social accounts and content are yours. If you ever leave, you leave with everything.",
  },
  {
    q: "What does the free Lead Leak Audit check?",
    a: "How fast you respond to new leads, your Google Business Profile, your reviews, and your ads — then we show you what the gaps are costing you in booked jobs.",
  },
  {
    q: "How soon will I see results?",
    a: "Speed-to-lead and ads can change your booked jobs within weeks; SEO and content compound over months. We report plainly on both every month.",
  },
];
