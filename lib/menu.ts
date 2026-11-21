import { carePlans, buildPlans, fullEngine, liteRetainerPlans, retainerPlans } from "./data/plans";

/*
 * Main menu structure. Prices in the subtitles are read from lib/data/plans.ts
 * so the menu can never disagree with the pricing page.
 */

export type MenuItem = { href: string; label: string; note?: string };
export type MenuGroup = { label: string; items: MenuItem[] };

const bySlug = (slug: string) => [...retainerPlans, ...liteRetainerPlans].find((p) => p.slug === slug)!;
const per = (price: number) => `$${price.toLocaleString("en-US")}/mo`;

const found = bySlug("found");
const booked = bySlug("booked");
const bookedLsa = bySlug("booked-lsa");
const seen = bySlug("seen");
const seenLite = bySlug("seen-lite");

export const serviceGroups: MenuGroup[] = [
  {
    label: "Marketing",
    items: [
      { href: "/services/local-seo", label: "Local SEO", note: `${found.name} · ${per(found.price)}` },
      {
        href: "/services/paid-ads",
        label: "Google & LSA Ads",
        note: `${booked.name} · from ${per(Math.min(booked.price, bookedLsa.price))}`,
      },
      {
        href: "/services/content-social",
        label: "Content & Social",
        note: `${seen.name} · from ${per(Math.min(seen.price, seenLite.price))}`,
      },
      { href: "/services/speed-to-lead", label: "Speed to Lead", note: "Lead Leak Fix" },
    ],
  },
  {
    label: "Websites",
    items: [
      {
        href: "/services/website-design",
        label: "Website Design",
        note: `From $${Math.min(...buildPlans.map((p) => p.price)).toLocaleString("en-US")}`,
      },
      {
        href: "/services/care-plans",
        label: "Care Plans",
        note: `From ${per(Math.min(...carePlans.map((p) => p.price)))}`,
      },
    ],
  },
];

export const exploreLinks: MenuItem[] = [
  { href: "/services", label: "All services" },
  { href: "/industries", label: "Industries" },
  { href: "/roi-calculator", label: "ROI calculator" },
];

export const featuredLink: MenuItem = {
  href: "/pricing#full-engine",
  label: fullEngine.name,
  note: `All three, run as one — ${per(fullEngine.price)}`,
};

/** Plain top-level links that sit beside the Services menu. */
export const topLinks: MenuItem[] = [
  { href: "/pricing", label: "Pricing" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];
