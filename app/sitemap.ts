import type { MetadataRoute } from "next";
import { site, absolute } from "@/lib/site";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { cities, cityPath } from "@/lib/data/cities";

/**
 * Generated sitemap — served at /sitemap.xml and referenced from robots.txt.
 * Priorities reflect commercial intent: pricing and contact are the pages we
 * most want indexed after the homepage.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/pricing", priority: 0.95, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/roi-calculator", priority: 0.9, freq: "monthly" },
    { path: "/orlando-web-design", priority: 0.9, freq: "monthly" },
    { path: "/contact", priority: 0.85, freq: "monthly" },
    { path: "/industries", priority: 0.8, freq: "monthly" },
    { path: "/work", priority: 0.7, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/privacy", priority: 0.2, freq: "yearly" },
    { path: "/terms", priority: 0.2, freq: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({
      url: absolute(p.path),
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: absolute(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...industries.map((i) => ({
      url: absolute(`/industries/${i.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...cities.map((c) => ({
      url: absolute(cityPath(c.slug)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

export const baseUrl = site.url;
