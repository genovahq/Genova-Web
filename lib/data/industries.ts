export type Industry = {
  slug: string;
  name: string;
  /** Plural, lowercase, used mid-sentence: "for plumbers" */
  plural: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** What the customer is feeling at the moment they search. */
  moment: string;
  painPoints: string[];
  /** What the marketing emphasizes for this trade. */
  emphasis: { title: string; body: string }[];
  searchTerms: string[];
  /** Slug of any package in lib/data/plans.ts (retainer, build or project). */
  recommendedPlan: string;
};

export const industries: Industry[] = [
  {
    slug: "plumbers",
    name: "Plumbing",
    plural: "plumbers",
    metaTitle: "Marketing for Plumbers | Orlando & Central Florida",
    metaDescription:
      "Plumbing marketing built to win emergency calls: Local Services Ads, Google Search Ads, map-pack SEO and missed-call text-back. Orlando and Central Florida.",
    h1: "Marketing for plumbers who want the phone to ring.",
    lead:
      "Plumbing is an emergency business. The job goes to whoever shows up first on Google and answers first on the phone — we make that you.",
    moment:
      "It's 8pm, there's water on the floor, and they're searching on a phone with wet hands. They will call the first credible result — not the best-looking one, the fastest and clearest one.",
    painPoints: [
      "Emergency callers bounce if the number isn't instantly tappable",
      "No page for the specific job they searched (water heater, repipe, drain)",
      "Invisible in the map pack for the towns you actually drive to",
      "After-hours leads sit unread until morning",
    ],
    emphasis: [
      {
        title: "Local Services Ads first",
        body:
          "Emergency searchers tap the Google Guaranteed badge before anything else. We set up, manage and dispute bad leads so the budget goes to real jobs.",
      },
      {
        title: "Search Ads by job type",
        body:
          "Water heater, drain, repipe, leak detection — separate campaigns and landing pages, because each one is a different search with a different value.",
      },
      {
        title: "Missed-call text-back",
        body:
          "You're under a sink when the phone rings. Every missed call gets a text in seconds, so the customer waits for you instead of calling the next plumber.",
      },
      {
        title: "Map-pack coverage",
        body:
          "A managed Google profile and real pages for the towns on your route, so you show up for \"plumber in Winter Park\" and not just your home city.",
      },
    ],
    searchTerms: [
      "emergency plumber near me",
      "water heater repair [city]",
      "drain cleaning [city]",
      "repipe specialist [city]",
    ],
    recommendedPlan: "booked",
  },
  {
    slug: "hvac",
    name: "HVAC",
    plural: "HVAC companies",
    metaTitle: "Marketing for HVAC Companies | Orlando, FL",
    metaDescription:
      "HVAC marketing built for Florida's season: Local Services Ads, Google Ads, map-pack SEO, maintenance-plan funnels and instant speed-to-lead. Orlando, FL.",
    h1: "Marketing for HVAC companies built for Florida heat.",
    lead:
      "In Central Florida, AC is an emergency purchase nine months a year. Your marketing should be ready for the day it hits 96 degrees — and scale back when it doesn't.",
    moment:
      "The unit died, the house is climbing through 85, and they're comparing three companies on a phone. Whoever answers fastest and looks most legitimate gets the appointment.",
    painPoints: [
      "Peak-season leads arrive faster than a shared inbox can handle",
      "No clear path for the big-ticket replacement customer vs. the quick repair",
      "Maintenance plans buried where nobody signs up",
      "Financing options not mentioned, so sticker shock kills the lead",
    ],
    emphasis: [
      {
        title: "Seasonal ad pacing",
        body:
          "Budgets that ramp with the heat and pull back in the shoulder months, so you're not paying peak prices for January clicks.",
      },
      {
        title: "Repair vs. replacement funnels",
        body:
          "The $180 repair and the $9,000 change-out get separate campaigns and landing pages — and separate cost-per-job numbers.",
      },
      {
        title: "Maintenance-plan growth",
        body:
          "Recurring revenue is the healthiest thing in an HVAC business. We market the plan as its own product, not a footnote.",
      },
      {
        title: "Speed-to-lead at peak",
        body:
          "Instant text-back on every call and form, so a hot week doesn't turn into fifty unanswered leads.",
      },
    ],
    searchTerms: [
      "ac repair near me",
      "ac replacement [city]",
      "emergency hvac [city]",
      "ac maintenance plan [city]",
    ],
    recommendedPlan: "full-engine",
  },
  {
    slug: "roofing",
    name: "Roofing",
    plural: "roofers",
    metaTitle: "Marketing for Roofing Companies | Florida",
    metaDescription:
      "Roofing marketing for high-ticket Florida leads: Google and LSA ads, storm and insurance SEO, real job-site content and speed-to-lead. Orlando and across Florida.",
    h1: "Marketing for roofers chasing high-ticket work.",
    lead:
      "A roofing lead can be worth twenty thousand dollars. That changes how much it's worth spending to win one — and how much a slow callback is costing you.",
    moment:
      "After a storm, or after a ceiling stain appears. They're nervous about cost, insurance, and whether you're a storm-chaser who'll vanish. Credibility is the whole game.",
    painPoints: [
      "Every competitor says 'free inspection' — nothing differentiates you",
      "No insurance-claim content, so you lose the customer who's confused",
      "Portfolio photos scattered or missing entirely",
      "High-value leads handled with the same urgency as a mailing list signup",
    ],
    emphasis: [
      {
        title: "Storm-ready ads",
        body:
          "Campaigns and landing pages that can switch on the day weather hits, with lead routing that can handle the spike.",
      },
      {
        title: "Insurance-claim content",
        body:
          "Pages and videos explaining how a Florida claim works. Being the company that explained it is often why you get called.",
      },
      {
        title: "Real job-site footage",
        body:
          "Drone shots, tear-offs and finished roofs from your actual jobs — the proof that separates you from a truck with a magnet on it.",
      },
      {
        title: "Reviews that keep climbing",
        body:
          "Automated requests after every job, because roofing buyers read reviews harder than almost anyone.",
      },
    ],
    searchTerms: [
      "roof replacement [city]",
      "roof leak repair near me",
      "storm damage roof [city]",
      "roofing insurance claim [city]",
    ],
    recommendedPlan: "full-engine",
  },
  {
    slug: "landscaping",
    name: "Landscaping & Lawn Care",
    plural: "landscapers",
    metaTitle: "Marketing for Landscapers & Lawn Care | Orlando, FL",
    metaDescription:
      "Landscaping and lawn care marketing built for recurring contracts: map-pack SEO, service-area targeting, before-and-after content and review generation. Orlando, FL.",
    h1: "Marketing for landscapers who want contracts, not one-offs.",
    lead:
      "Lawn care lives on route density and recurring revenue. Your marketing should fill the neighborhoods you already drive through — not send you forty minutes away.",
    moment:
      "Usually a homeowner who's tired of doing it themselves, or a property manager who needs a reliable vendor. Both want to know: do you cover me, what does it cost, and will you show up.",
    painPoints: [
      "Site sells one-time jobs when the money is in monthly contracts",
      "No clear service radius, so you field calls from 40 minutes away",
      "Beautiful work with nowhere to show it",
      "Commercial and residential lumped together, so neither feels spoken to",
    ],
    emphasis: [
      {
        title: "Route-density SEO",
        body:
          "Service-area pages and Google profile targeting for the neighborhoods you want, quietly filtering out the drives you don't.",
      },
      {
        title: "Recurring-first offers",
        body:
          "Monthly maintenance packaged and promoted as the obvious choice, not the one-time cleanup.",
      },
      {
        title: "Before-and-after content",
        body:
          "Your work is the sales pitch. Short videos and photos that make a yard transformation impossible to scroll past.",
      },
      {
        title: "Commercial vs. residential",
        body:
          "Two audiences, two paths. Property managers need different proof than homeowners do.",
      },
    ],
    searchTerms: [
      "lawn care service [city]",
      "landscaping company near me",
      "commercial landscaping [city]",
      "sod installation [city]",
    ],
    recommendedPlan: "found",
  },
  {
    slug: "med-spas",
    name: "Med Spas & Aesthetics",
    plural: "med spas",
    metaTitle: "Marketing for Med Spas & Aesthetic Clinics | Florida",
    metaDescription:
      "Med spa marketing built to book consultations: polished content, Instagram and Meta ads, treatment-page SEO and review management. Orlando and across Florida.",
    h1: "Marketing for med spas that fill the calendar.",
    lead:
      "Aesthetics is a considered, high-trust purchase. Your feed and your reviews are doing the reassuring long before anyone books a consult.",
    moment:
      "They've been thinking about it for months. They're comparing clinics, reading about the treatment, and quietly worried about looking overdone or getting hurt.",
    painPoints: [
      "No pricing anywhere, so people assume it's out of reach and leave",
      "Treatments listed as a menu with no explanation of what happens",
      "Booking buried behind a phone call nobody wants to make",
      "Design that doesn't match the premium price point",
    ],
    emphasis: [
      {
        title: "Content that reassures",
        body:
          "Treatment explainers, provider intros and the space itself — shot well, so people can picture walking in.",
      },
      {
        title: "Meta & Instagram ads",
        body:
          "Consultation campaigns aimed at the people already thinking about it, with offers that respect a premium price point.",
      },
      {
        title: "Treatment-page SEO",
        body:
          "A page per treatment that explains what actually happens, so you rank for the research searches, not just your name.",
      },
      {
        title: "Review management",
        body:
          "Every review answered, every happy client asked. Trust is the product.",
      },
    ],
    searchTerms: [
      "botox near me",
      "med spa [city]",
      "laser hair removal [city]",
      "filler consultation [city]",
    ],
    recommendedPlan: "seen",
  },
  {
    slug: "auto-detailing",
    name: "Auto Detailing",
    plural: "detailers",
    metaTitle: "Marketing for Auto Detailers | Orlando, FL",
    metaDescription:
      "Auto detailing marketing: short-form video of your best work, Google profile and map-pack SEO, booking-first funnels and review generation. Orlando, FL.",
    h1: "Marketing for detailers whose work sells itself on video.",
    lead:
      "Detailing is the most visual service there is. The right fifteen-second clip does more selling than any page of copy.",
    moment:
      "Either a new car owner protecting an investment, or an enthusiast who already knows the terminology and is judging whether you do too.",
    painPoints: [
      "Premium services priced like an add-on to a wash",
      "No package structure, so every inquiry becomes a custom quote",
      "Mobile service area unclear",
      "Before/after work living only on Instagram where it can't rank",
    ],
    emphasis: [
      {
        title: "Short-form video",
        body:
          "Paint correction, ceramic coats and interior resets filmed and edited for Reels and TikTok — the before-and-after is the ad.",
      },
      {
        title: "Package-first offers",
        body:
          "Clear packages and prices promoted everywhere, so people book the tier instead of asking for a quote.",
      },
      {
        title: "Map-pack visibility",
        body:
          "A managed Google profile with fresh photos every week, so you show up when someone searches \"detailing near me\".",
      },
      {
        title: "Reviews on autopilot",
        body:
          "An automated request after every detail, while the car still looks perfect.",
      },
    ],
    searchTerms: [
      "ceramic coating [city]",
      "mobile detailing near me",
      "paint correction [city]",
      "ppf installer [city]",
    ],
    recommendedPlan: "seen-lite",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
