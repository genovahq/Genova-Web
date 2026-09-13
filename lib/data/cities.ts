/**
 * City / service-area landing pages.
 *
 * Each entry renders at /<slug>-web-design (e.g. /winter-park-web-design) via
 * app/[cityPage]/page.tsx. Orlando is intentionally NOT here — it has its own
 * hand-written page at /orlando-web-design.
 *
 * HONESTY RULE (same as the rest of the site): every line here is true today.
 * The `why` copy describes real, well-known characteristics of each city's
 * market — no invented client counts, no fake "trusted since" claims, no
 * fabricated neighbourhood case studies. The whole point of writing each page
 * uniquely is to avoid thin, near-duplicate "doorway" pages, which Google
 * filters or penalises.
 */

export type City = {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  /** Hero sub-heading — unique per city. */
  heroLead: string;
  /** The "why local matters here" paragraphs — unique per city. */
  why: string[];
  /** Slugs of nearby areas for internal linking. "orlando" links to /orlando-web-design. */
  nearby: string[];
  /** City-specific FAQ (rendered alongside a couple of shared ones). */
  faq: { q: string; a: string }[];
};

export const cities: City[] = [
  {
    slug: "winter-park",
    name: "Winter Park",
    county: "Orange County",
    metaTitle: "Winter Park Web Design | Sites Built to Convert",
    metaDescription:
      "Web design for Winter Park, FL businesses — polished, high-converting sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Winter Park customers expect a certain level of polish — from Park Avenue boutiques to the professional offices along 17-92. Your site has to match that standard and still turn visits into booked work.",
    why: [
      "Winter Park is one of the most established, design-conscious markets in Central Florida. Between Park Avenue, Rollins College, and a dense base of professional practices, customers here notice when a website looks dated — and quietly click to a competitor that doesn't.",
      "That raises the bar in two directions at once: the site has to look genuinely premium, and it still has to do the unglamorous work of ranking for “near me” searches and turning a visitor into a phone call. We build for both, so a Winter Park business looks the part and books the job.",
    ],
    nearby: ["orlando", "altamonte-springs", "oviedo"],
    faq: [
      {
        q: "Do you work with Park Avenue and boutique retail businesses?",
        a: "Yes. Independent retail, salons, and professional practices are a natural fit — the build is designed to look premium and route inquiries straight to you, which matters most where the competition already looks good.",
      },
    ],
  },
  {
    slug: "kissimmee",
    name: "Kissimmee",
    county: "Osceola County",
    metaTitle: "Kissimmee Web Design | Websites Built to Get Calls",
    metaDescription:
      "Web design for Kissimmee, FL service businesses — mobile-first sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Kissimmee runs on a mix of tourism traffic and everyday local trade. If you serve residents and businesses off the 192 corridor, your site has to win the local search — not compete with theme-park noise.",
    why: [
      "Osceola County is growing fast, and Kissimmee's market is split: a huge tourist-facing economy along US-192, and a large, year-round local population that needs plumbers, detailers, med-spas, and contractors like anywhere else. Those are two completely different customers, and a generic site speaks to neither.",
      "Most searches here happen on a phone, and a large share of your customers may search in Spanish as readily as English. We build mobile-first, fast-loading sites focused on the local, booked-job searches that actually pay — not vanity traffic passing through on vacation.",
    ],
    nearby: ["orlando", "clermont"],
    faq: [
      {
        q: "Can the site serve both English and Spanish speakers?",
        a: "We build with a bilingual audience in mind and can structure the site so key pages and calls-to-action work for Spanish-speaking customers — which matters in a market as diverse as Kissimmee.",
      },
    ],
  },
  {
    slug: "altamonte-springs",
    name: "Altamonte Springs",
    county: "Seminole County",
    metaTitle: "Altamonte Springs Web Design | Genova Web",
    metaDescription:
      "Web design for Altamonte Springs, FL businesses — high-converting sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Altamonte sits right on the I-4 commercial spine of Seminole County — dense, competitive, and full of businesses fighting for the same clicks. A clear, fast site is how you stand out.",
    why: [
      "Altamonte Springs packs a lot of commerce into a small footprint: the mall, the I-4 corridor, and a wall of retail and service businesses all chasing the same Seminole County customers. Visibility here is genuinely competitive, and “good enough” sites get buried.",
      "The businesses that win are the ones a customer can understand in five seconds and contact in one tap. We build that clarity in — and back it with the local SEO structure that decides who shows up first when someone nearby searches.",
    ],
    nearby: ["orlando", "winter-park", "lake-mary", "apopka"],
    faq: [
      {
        q: "How do I compete with so many similar businesses in Altamonte?",
        a: "Clarity and proximity win. A site that states exactly what you do and where, backed by a properly set-up Google Business Profile, can out-rank bigger competitors with vague, slow websites. That's the core of what we build.",
      },
    ],
  },
  {
    slug: "sanford",
    name: "Sanford",
    county: "Seminole County",
    metaTitle: "Sanford Web Design | Genova Web",
    metaDescription:
      "Web design for Sanford, FL businesses — conversion-focused sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Sanford is having a moment — a revitalized historic downtown and steady growth around the airport and Lake Monroe. A modern website is how a local business rides that momentum instead of watching it pass.",
    why: [
      "Sanford's historic downtown and riverfront have drawn a wave of new restaurants, shops, and service businesses, while the area around Orlando Sanford Airport and SR-46 keeps expanding. It's a market with real momentum — and a lot of new competition arriving with it.",
      "A dated or missing website is the fastest way to look like the old guard while newer businesses take the calls. We build sites that make an established Sanford business look current and a new one look credible — both pointed at the same goal of booked work.",
    ],
    nearby: ["lake-mary", "altamonte-springs", "oviedo", "orlando"],
    faq: [
      {
        q: "I've been in Sanford for years — do I really need a new site?",
        a: "If customers can't find you on a phone, or the site looks dated, longevity can work against you: newer competitors simply look more current. A modern site turns your track record into an advantage instead of hiding it.",
      },
    ],
  },
  {
    slug: "lake-mary",
    name: "Lake Mary",
    county: "Seminole County",
    metaTitle: "Lake Mary Web Design | Genova Web",
    metaDescription:
      "Web design for Lake Mary, FL businesses — polished, professional sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Lake Mary is corporate Central Florida — Heathrow office parks, finance and tech, and an affluent residential base. Your site has to read as professional as the market it's in.",
    why: [
      "Lake Mary and the Heathrow business district are among the most corporate, affluent areas in the region, home to finance, tech, and professional-services firms. Customers and clients here judge credibility quickly, and a weak website undercuts an otherwise strong business.",
      "Whether you're B2B or serving high-income households, the site has to look established and make the next step obvious. We build clean, fast, professional sites with lead capture tuned for a considered buying decision — not just a spur-of-the-moment call.",
    ],
    nearby: ["sanford", "altamonte-springs", "oviedo", "winter-park"],
    faq: [
      {
        q: "Do you build for B2B and professional-services firms?",
        a: "Yes. Not every business lives on emergency calls — many Lake Mary firms need a site that builds trust and captures a considered inquiry. We structure the build and the AI lead capture around that longer decision.",
      },
    ],
  },
  {
    slug: "oviedo",
    name: "Oviedo",
    county: "Seminole County",
    metaTitle: "Oviedo Web Design | Genova Web",
    metaDescription:
      "Web design for Oviedo, FL businesses — mobile-first sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Oviedo is a growing family suburb near UCF — the kind of place where word-of-mouth and “near me” searches decide who gets the job. Your site has to show up for both.",
    why: [
      "Oviedo has grown from a quiet Seminole County town into a busy family suburb, anchored by its proximity to UCF and gathering spots like Oviedo on the Park. The customers here are households searching for reliable local services — and they check Google before they call.",
      "Word-of-mouth still matters in a community this tight, but it now runs through the internet: people hear a name, then search it. If your site is slow, thin, or missing, that referral leaks to a competitor. We build the site that catches it.",
    ],
    nearby: ["winter-park", "sanford", "lake-mary", "altamonte-springs"],
    faq: [
      {
        q: "Most of my work is referrals — is a website worth it?",
        a: "Yes, precisely because of that. Referrals now end in a Google search of your name; if nothing solid comes up, the lead cools. A clear site converts the referrals you're already earning.",
      },
    ],
  },
  {
    slug: "winter-garden",
    name: "Winter Garden",
    county: "Orange County",
    metaTitle: "Winter Garden Web Design | Genova Web",
    metaDescription:
      "Web design for Winter Garden, FL businesses — high-converting sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Winter Garden is one of the fastest-growing corners of West Orange County — historic Plant Street, Winter Garden Village, and thousands of new households arriving. A strong site is how you reach them first.",
    why: [
      "Between historic downtown Plant Street, the Winter Garden Village, and the explosive growth of Horizon West next door, West Orange County is adding rooftops and businesses at a rapid pace. New residents arrive with no established loyalties — they find their plumber, detailer, or med-spa by searching.",
      "That's a rare opening: the customer base is expanding faster than most businesses' visibility. A site built to rank locally and convert quickly lets you claim those new households before a competitor does. We build exactly that.",
    ],
    nearby: ["apopka", "clermont", "orlando"],
    faq: [
      {
        q: "There are lots of new residents here — how do I reach them?",
        a: "New movers pick local businesses almost entirely through search. A site with genuine local pages and a solid Google Business Profile puts you in front of them at the exact moment they're choosing — which is the whole game in a growth market.",
      },
    ],
  },
  {
    slug: "apopka",
    name: "Apopka",
    county: "Orange County",
    metaTitle: "Apopka Web Design | Genova Web",
    metaDescription:
      "Web design for Apopka, FL businesses — conversion-focused sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Apopka is growing fast on the northwest side of the metro, with deep roots in nurseries, trades, and home services. Your site has to reach both the old base and the new rooftops.",
    why: [
      "Known as the “Indoor Foliage Capital of the World,” Apopka has long been a town of nurseries, trades, and hands-on service businesses. It's also one of the faster-growing parts of northwest Orange County, with new housing bringing customers who don't know the established names yet.",
      "For a trades or home-services business, that combination is ideal — steady demand plus a stream of new homeowners searching for help. We build sites that load fast on a phone, push straight to a call, and rank for the service-plus-Apopka searches that turn into jobs.",
    ],
    nearby: ["winter-garden", "altamonte-springs", "sanford", "orlando"],
    faq: [
      {
        q: "Do you build for trades and home-services businesses?",
        a: "Absolutely — that's core to what we do. Fast mobile pages, click-to-call, service-area structure, and instant lead alerts are built for exactly the way Apopka homeowners find and hire a trade.",
      },
    ],
  },
  {
    slug: "clermont",
    name: "Clermont",
    county: "Lake County",
    metaTitle: "Clermont Web Design | Genova Web",
    metaDescription:
      "Web design for Clermont, FL businesses — mobile-first sites with AI lead capture and local SEO. Live in under two weeks, from $750.",
    heroLead:
      "Clermont has grown from a quiet Lake County town into a booming corner of the metro — rolling hills, the chain of lakes, and thousands of new families. A modern site is how you get found there.",
    why: [
      "Clermont sits just west of the Orange County line in Lake County, and it's one of the fastest-growing communities in the region. Its rolling hills and chain of lakes have drawn a wave of new families and retirees — along with the athletic, outdoor crowd it's known for as a training destination.",
      "Rapid growth means most of your future customers are new to the area and searching for everything from scratch. A business that ranks locally and converts on the first visit picks up those households; one relying on being “known around town” gets skipped. We build for the search.",
    ],
    nearby: ["winter-garden", "kissimmee", "apopka"],
    faq: [
      {
        q: "I'm in Lake County, not Orlando — do you cover Clermont?",
        a: "Yes. We build for Clermont and the surrounding Lake County communities the same way we do for the Orlando metro — with a real local page for your area, not a generic “Central Florida” catch-all.",
      },
    ],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

/** The URL slug for a city page, e.g. "winter-park" -> "winter-park-web-design". */
export const cityPath = (slug: string) => `/${slug}-web-design`;
