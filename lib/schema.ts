import { site, absolute } from "./site";
import { buildPlans, carePlans } from "./data/plans";

/*
 * Structured data. The current site has none at all, which is the single
 * biggest crawlability gap on it.
 *
 * NOTE ON LOCAL SCHEMA: we publish `ProfessionalService` with an `areaServed`
 * rather than `LocalBusiness` with a `PostalAddress`, because there is no
 * public street address to give. Inventing one — or borrowing a coworking
 * address — is the fastest way to get a Google Business Profile suspended.
 * When a real address and phone exist, add them here and to the footer, and
 * make them character-identical to the Google Business Profile listing.
 */

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    description: site.description,
    slogan: "Turn more visitors into paying customers.",
    foundingDate: site.founded,
    priceRange: "$750–$3,500",
    knowsAbout: [
      "Website design",
      "Conversion rate optimization",
      "Local SEO",
      "Google Business Profile optimization",
      "Lead generation",
      "AI lead capture",
    ],
    areaServed: [
      {
        "@type": "City",
        name: site.city,
        containedInPlace: { "@type": "State", name: site.regionName },
      },
      { "@type": "State", name: site.regionName },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        // Orlando, FL city centre.
        latitude: 28.5384,
        longitude: -81.3789,
      },
      geoRadius: "80000",
    },
    address: {
      // Locality-only is valid and honest when there's no public street address.
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      areaServed: site.country,
      availableLanguage: "English",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website packages",
      itemListElement: [...buildPlans, ...carePlans].map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price,
        priceCurrency: "USD",
        description: p.pitch,
        url: absolute("/pricing"),
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: absolute(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: { "@type": "State", name: site.regionName },
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Local service businesses",
    },
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Product + Offer markup for the pricing page — makes prices eligible for rich results. */
export function pricingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Genova Web packages",
    itemListElement: buildPlans.map((plan, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${plan.name} website package`,
        description: plan.pitch,
        brand: { "@type": "Brand", name: site.name },
        url: `${absolute("/pricing")}#${plan.slug}`,
        offers: {
          "@type": "Offer",
          price: plan.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: absolute("/contact"),
          seller: { "@id": ORG_ID },
          priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
        },
      },
    })),
  };
}
