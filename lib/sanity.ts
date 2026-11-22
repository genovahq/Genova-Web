/*
 * Sanity (photo & video uploads) — read side.
 *
 * Uses Sanity's public HTTP query API directly, so the website needs no
 * Sanity packages. The editing app (Sanity Studio) lives in /studio and is
 * deployed separately.
 *
 * Until NEXT_PUBLIC_SANITY_PROJECT_ID is set — or if Sanity is unreachable —
 * every getter returns empty media and the site shows its labeled
 * placeholders. A CMS outage can never take a page down.
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2025-01-01";

/** How long (seconds) a fetched result is reused before Sanity is asked again. */
const REVALIDATE = 60;

export const sanityConfigured = Boolean(projectId);

async function query<T>(groq: string): Promise<T | null> {
  if (!projectId) return null;
  const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(groq)}`;
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE, tags: ["sanity"] } });
    if (!res.ok) return null;
    const json = (await res.json()) as { result?: T };
    return json.result ?? null;
  } catch {
    return null;
  }
}

/** Sanity's image CDN resizes on the fly: ask for the size the slot needs. */
export function img(url: string | undefined, width: number): string | undefined {
  if (!url) return undefined;
  return `${url}?w=${width}&fit=max&auto=format&q=80`;
}

export type HomeMedia = {
  heroVideo?: string;
  heroPoster?: string;
  work?: { label?: string; src?: string }[];
  services?: { found?: string; booked?: string; seen?: string; speed?: string };
  objections?: { video?: string; poster?: string }[];
  before?: string;
  after?: string;
  founder?: string;
};

/** Everything the homepage's photo/video slots can show. One "Homepage media" document in the Studio. */
export async function getHomeMedia(): Promise<HomeMedia> {
  const result = await query<HomeMedia>(`*[_id == "homeMedia"][0]{
    "heroVideo": heroVideo.asset->url,
    "heroPoster": heroPoster.asset->url,
    "work": work[]{ label, "src": image.asset->url },
    "services": {
      "found": serviceFound.asset->url,
      "booked": serviceBooked.asset->url,
      "seen": serviceSeen.asset->url,
      "speed": serviceSpeed.asset->url
    },
    "objections": objections[]{ "video": video.asset->url, "poster": poster.asset->url },
    "before": before.asset->url,
    "after": after.asset->url,
    "founder": founder.asset->url
  }`);
  return result ?? {};
}
