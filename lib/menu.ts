import { buildPlans, carePlans, storeStartingPrice } from "./data/plans";
import { industries } from "./data/industries";

/*
 * Main menu. Four top-level links (Services ▾, Work, Pricing, About); the
 * Services dropdown carries the services, the industries and the ROI
 * calculator. Prices are read from lib/data/plans.ts so the menu can never
 * disagree with the pricing page.
 */

export type MenuItem = { href: string; label: string; note?: string };

const from = (n: number) => `From $${n.toLocaleString("en-US")}`;
const minBuild = Math.min(...buildPlans.map((p) => p.price));
const minCare = Math.min(...carePlans.map((p) => p.price));

export const serviceLinks: MenuItem[] = [
  { href: "/services/website-design", label: "Website Design", note: from(minBuild) },
  { href: "/services/online-stores", label: "Online Stores", note: from(storeStartingPrice) },
  { href: "/services/ai-lead-capture", label: "AI Lead Capture", note: "Every plan" },
  { href: "/services/local-seo", label: "Local SEO", note: "From Growth" },
  { href: "/services/care-plans", label: "Care Plans", note: `${from(minCare)}/mo` },
];

/** Short labels for the dropdown; the full names stay on the industry pages. */
const shortName: Record<string, string> = {
  "auto-detailing": "Detailing",
  "landscaping": "Landscaping",
  "med-spas": "Med Spas",
};

export const industryLinks: MenuItem[] = industries.map((i) => ({
  href: `/industries/${i.slug}`,
  label: shortName[i.slug] ?? i.name,
}));

export const extraLinks: MenuItem[] = [
  { href: "/services", label: "All services" },
  { href: "/industries", label: "All industries" },
  { href: "/roi-calculator", label: "ROI calculator" },
];

/** Plain top-level links beside the Services menu. Work leads: proof first. */
export const topLinks: MenuItem[] = [
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];
