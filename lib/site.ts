/**
 * Single source of truth for business facts.
 * Everything SEO-visible (schema, footer, metadata) reads from here so the
 * NAP-style details can never drift between pages.
 */
export const site = {
  name: "Genova Web",
  legalName: "Genova Web",
  // Canonical host: genovaweb.com currently 301s www -> apex, so apex is canonical.
  url: "https://genovaweb.com",
  email: "genovahq@outlook.com",
  city: "Orlando",
  region: "FL",
  regionName: "Florida",
  country: "US",
  founded: "2026",
  tagline: "AI-Powered Websites for Local Business",
  description:
    "Genova Web builds high-converting websites with built-in AI lead capture for local businesses in Orlando and across Florida. Live in about a week, starting at $750.",
  /*
   * NOTE: the n8n webhook URL deliberately does NOT live here any more.
   * Anything in this file is imported by client components and therefore ends
   * up in the public JS bundle — which is exactly how the endpoint used to be
   * discoverable and spammable directly, bypassing every form-side check.
   *
   * It now lives in the server-only env var N8N_LEAD_WEBHOOK_URL, read solely
   * by app/api/lead/route.ts. The browser posts to /api/lead and never learns
   * the real destination. Do not add it back here.
   */
  // Cities used for areaServed schema + local landing copy.
  serviceAreas: [
    "Orlando",
    "Winter Park",
    "Kissimmee",
    "Altamonte Springs",
    "Sanford",
    "Lake Mary",
    "Oviedo",
    "Winter Garden",
    "Apopka",
    "Clermont",
  ],
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/roi-calculator", label: "ROI Calculator" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export const absolute = (path: string) => new URL(path, site.url).toString();
