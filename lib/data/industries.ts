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
  /** Sections the build emphasizes for this trade. */
  emphasis: { title: string; body: string }[];
  searchTerms: string[];
  recommendedPlan: "starter" | "growth" | "pro";
};

export const industries: Industry[] = [
  {
    slug: "plumbers",
    name: "Plumbing",
    plural: "plumbers",
    metaTitle: "Websites for Plumbers | Orlando & Central Florida",
    metaDescription:
      "Websites for plumbing companies built to win emergency calls: click-to-call, service-area pages, instant lead alerts, and local SEO. Live in about a week.",
    h1: "Websites for plumbers who want the phone to ring.",
    lead:
      "Plumbing is an emergency business. Your site has one job: be the one they call while standing in an inch of water.",
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
        title: "Emergency-first layout",
        body:
          "Tap-to-call in the header, in the hero, and fixed on mobile. Hours and service area above the fold. Nothing between a panicked customer and your phone number.",
      },
      {
        title: "A page per job type",
        body:
          "Water heater replacement, drain cleaning, repiping, leak detection, sewer line. Each one ranks separately because each one is a different search.",
      },
      {
        title: "Service-area coverage",
        body:
          "Real pages for the towns on your route, so you show up for \"plumber in Winter Park\" and not just your home city.",
      },
      {
        title: "Instant after-hours alerts",
        body:
          "Overnight form fills hit your phone immediately. First callback in the morning usually wins the job.",
      },
    ],
    searchTerms: [
      "emergency plumber near me",
      "water heater repair [city]",
      "drain cleaning [city]",
      "repipe specialist [city]",
    ],
    recommendedPlan: "growth",
  },
  {
    slug: "hvac",
    name: "HVAC",
    plural: "HVAC companies",
    metaTitle: "Websites for HVAC Companies | Orlando, FL",
    metaDescription:
      "HVAC websites built for Florida's season: fast quotes, financing-friendly layout, maintenance plan signups, service-area pages, and instant lead alerts.",
    h1: "Websites for HVAC companies built for Florida heat.",
    lead:
      "In Central Florida, AC is not a comfort purchase — it's an emergency purchase, nine months a year. Your site should be built for the day it hits 96 degrees.",
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
        title: "Repair vs. replace paths",
        body:
          "Two different customers with two different budgets. We split the journey so the $180 repair and the $9,000 system change-out each get the page they need.",
      },
      {
        title: "Maintenance plan conversion",
        body:
          "Recurring revenue is the healthiest thing in an HVAC business. We give the plan its own page and put signup where people actually are.",
      },
      {
        title: "Peak-season lead handling",
        body:
          "Structured, instantly-routed leads so a hot week doesn't turn into fifty unread emails.",
      },
      {
        title: "Trust signals up front",
        body:
          "License number, brands you service, warranty terms, and financing availability — the four things people check before booking a big job.",
      },
    ],
    searchTerms: [
      "ac repair near me",
      "ac replacement [city]",
      "emergency hvac [city]",
      "ac maintenance plan [city]",
    ],
    recommendedPlan: "growth",
  },
  {
    slug: "roofing",
    name: "Roofing",
    plural: "roofers",
    metaTitle: "Websites for Roofing Companies | Florida",
    metaDescription:
      "Roofing websites built for high-ticket Florida leads: storm and insurance pages, free inspection funnels, gallery-ready layouts, and instant lead alerts.",
    h1: "Websites for roofers chasing high-ticket work.",
    lead:
      "A roofing lead can be worth twenty thousand dollars. That changes what your website needs to be — and how much a bad one is costing you.",
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
        title: "Insurance claim guidance",
        body:
          "A real page explaining how a Florida claim works. Being the company that explained it is often the reason you get called.",
      },
      {
        title: "Inspection funnel",
        body:
          "A low-friction path to the free inspection, because that's your actual product at the top of the funnel.",
      },
      {
        title: "Proof-heavy design",
        body:
          "Layouts built to carry job photos, licenses, warranty terms, and manufacturer certifications — the things that separate you from a truck with a magnet on it.",
      },
      {
        title: "Storm-response readiness",
        body:
          "Pages that can be updated fast when weather creates demand, and lead routing that can handle a spike.",
      },
    ],
    searchTerms: [
      "roof replacement [city]",
      "roof leak repair near me",
      "storm damage roof [city]",
      "roofing insurance claim [city]",
    ],
    recommendedPlan: "pro",
  },
  {
    slug: "landscaping",
    name: "Landscaping & Lawn Care",
    plural: "landscapers",
    metaTitle: "Websites for Landscapers & Lawn Care | Orlando, FL",
    metaDescription:
      "Landscaping and lawn care websites built for recurring contracts: service-area coverage, visual portfolios, quote funnels, and instant lead alerts.",
    h1: "Websites for landscapers who want contracts, not one-offs.",
    lead:
      "Lawn care lives on recurring revenue. Your website should be selling the route, not just the single cleanup.",
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
        title: "Recurring plan pricing",
        body:
          "Monthly maintenance packaged and priced on the page, so the recurring option is the obvious one.",
      },
      {
        title: "Visual-first layout",
        body:
          "Your work is the sales pitch. Fast-loading, properly optimized galleries that survive on a phone connection.",
      },
      {
        title: "Clear service radius",
        body:
          "Area pages that pull in the neighborhoods you want and quietly filter out the drives you don't.",
      },
      {
        title: "Commercial vs. residential split",
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
    recommendedPlan: "growth",
  },
  {
    slug: "med-spas",
    name: "Med Spas & Aesthetics",
    plural: "med spas",
    metaTitle: "Websites for Med Spas & Aesthetic Clinics | Florida",
    metaDescription:
      "Med spa websites built to book consultations: treatment pages, transparent pricing, booking-first layout, and instant lead alerts. Elegant and fast.",
    h1: "Websites for med spas that fill the calendar.",
    lead:
      "Aesthetics is a considered, high-trust purchase. Your site is doing the reassuring long before anyone walks in.",
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
        title: "A page per treatment",
        body:
          "What it is, what happens, downtime, who it suits, and what it costs. This is the content that ranks and the content that converts.",
      },
      {
        title: "Booking-first structure",
        body:
          "Consultation booking reachable from anywhere on the site, in one tap, with no phone call required.",
      },
      {
        title: "Price transparency",
        body:
          "Even a starting-from range dramatically reduces the drop-off from people who assume they can't afford it.",
      },
      {
        title: "Design that matches the price",
        body:
          "If you charge premium rates, a template betrays you. The visual quality of the site is part of the clinical impression.",
      },
    ],
    searchTerms: [
      "botox near me",
      "med spa [city]",
      "laser hair removal [city]",
      "filler consultation [city]",
    ],
    recommendedPlan: "pro",
  },
  {
    slug: "auto-detailing",
    name: "Auto Detailing",
    plural: "detailers",
    metaTitle: "Websites for Auto Detailers & Ceramic Coating | Florida",
    metaDescription:
      "Auto detailing websites built to book jobs: package pricing, ceramic coating and PPF pages, mobile-service areas, portfolio layouts, and instant alerts.",
    h1: "Websites for detailers selling more than a wash.",
    lead:
      "Ceramic coating and paint correction are four-figure services. If your site looks like a car wash, you'll get car-wash prices.",
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
        title: "Tiered package pricing",
        body:
          "Good/better/best on the page. It anchors value, filters tire-kickers, and stops you quoting from scratch every time.",
      },
      {
        title: "Pages for the high-ticket work",
        body:
          "Ceramic coating, paint correction, PPF, interior restoration — each one is its own search with its own buyer.",
      },
      {
        title: "Mobile service radius",
        body:
          "If you come to them, say exactly where. It's the first question and it should never require a phone call.",
      },
      {
        title: "Work that ranks",
        body:
          "Your before/afters on your own domain, optimized, instead of only on a platform you don't own.",
      },
    ],
    searchTerms: [
      "ceramic coating [city]",
      "mobile detailing near me",
      "paint correction [city]",
      "ppf installer [city]",
    ],
    recommendedPlan: "growth",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
