export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  /** <title> — keep under ~60 chars before the brand suffix. */
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  lead: string;
  /** The problem this service exists to solve, in the customer's words. */
  problem: { heading: string; body: string };
  included: { title: string; body: string }[];
  outcomes: string[];
  faq: { q: string; a: string }[];
  inPlans: string;
};

export const services: Service[] = [
  {
    slug: "website-design",
    navLabel: "Website Design",
    title: "Website Design & Development",
    metaTitle: "Small Business Website Design | Orlando, FL",
    metaDescription:
      "Custom small-business website design built to convert, not just look good. Mobile-first, fast, and live in about a week. Orlando, FL and across Florida.",
    kicker: "Website design",
    h1: "Websites built to sell, not just to sit there.",
    lead:
      "Most small-business sites are digital business cards. Yours should be a salesperson — one that works every hour you're asleep, on the road, or under a sink.",
    problem: {
      heading: "The problem with a pretty website",
      body:
        "A site can look modern and still lose you work. If a visitor lands on your homepage and can't tell in five seconds what you do, where you do it, and how to reach you, they leave and call the next result. Design that doesn't drive an action is decoration you paid for.",
    },
    included: [
      {
        title: "One page, one job",
        body:
          "Every page is structured around a single action — contacting you. Clear hierarchy, obvious calls to action, nothing competing for attention.",
      },
      {
        title: "Mobile-first, genuinely",
        body:
          "Most local searches happen on a phone, often on bad signal. We build the small screen first, then scale up — so the version most of your customers see is the version we designed hardest.",
      },
      {
        title: "Fast by construction",
        body:
          "Static rendering, optimized images, and self-hosted fonts. Speed is a ranking factor and a conversion factor, so it isn't something we bolt on at the end.",
      },
      {
        title: "Copy that does work",
        body:
          "We write the page around what your customer is actually worried about — price, timeline, whether you'll show up — instead of filling space with industry adjectives.",
      },
      {
        title: "Accessible by default",
        body:
          "Real contrast ratios, keyboard navigation, labelled forms, and reduced-motion support. It widens your audience and it's what Google's own guidelines reward.",
      },
      {
        title: "Yours to keep",
        body:
          "You own the site and the domain. No proprietary builder, no hostage situation if you ever want to move on.",
      },
    ],
    outcomes: [
      "A visitor can tell what you do and where within five seconds",
      "Every screen has one obvious next step",
      "Loads fast on a phone with two bars",
      "Reads and ranks properly in Google",
    ],
    faq: [
      {
        q: "Do I need to write the content?",
        a: "No. The 10-question intake gives us enough to write the first draft. You review and correct it — that's usually faster than starting from a blank page.",
      },
      {
        q: "Can you match my existing branding?",
        a: "Yes. Send whatever you have — logo, truck wrap, business card — and we build around it. If you don't have branding yet, we'll set a simple, consistent look.",
      },
      {
        q: "What if I already have a website?",
        a: "We can rebuild on your existing domain and keep the URLs that already rank, so you don't lose the search traffic you've built up.",
      },
    ],
    inPlans: "Included in every plan, from Starter up.",
  },
  {
    slug: "ai-lead-capture",
    navLabel: "AI Lead Capture",
    title: "AI Lead Capture",
    metaTitle: "AI Lead Capture for Local Businesses | Genova Web",
    metaDescription:
      "Never let an inquiry go cold. Our AI Lead Capture Assistant sends every website lead to your phone and inbox instantly, organized and ready to call back.",
    kicker: "AI lead capture",
    h1: "The lead you answer first is usually the lead you win.",
    lead:
      "A form that quietly drops an email into a folder you check on Sunday is how jobs get lost. Every Genova build ships with an assistant that routes inquiries the second they land.",
    problem: {
      heading: "Why most leads die",
      body:
        "Someone fills in your form at 7pm. You see it at noon the next day. By then they've already called two other companies and booked one. The website did its job — the follow-up didn't exist. Speed of response is the part of lead generation nobody sells you, and it's the part that decides who gets paid.",
    },
    included: [
      {
        title: "Instant routing",
        body:
          "The moment someone submits, the details hit your phone and your inbox. No dashboard to remember to log into.",
      },
      {
        title: "Structured, not messy",
        body:
          "Name, business, phone, email, what they want, and which plan or service they were looking at — captured as clean fields, not a wall of free text.",
      },
      {
        title: "An organized lead inbox",
        body:
          "Every inquiry lands in one place, in order, so nothing gets buried under receipts and newsletters. Included from Growth up.",
      },
      {
        title: "Spam-resistant",
        body:
          "Honeypot and validation filtering so you're responding to real people, not bots harvesting your form.",
      },
      {
        title: "Monitored, not fire-and-forget",
        body:
          "On a Care plan we watch the lead pipeline itself. If it ever stops delivering, we find out before you lose a week of inquiries.",
      },
      {
        title: "Tuned over time",
        body:
          "On Care+ we adjust what the assistant asks for based on which questions actually correlate with booked work.",
      },
    ],
    outcomes: [
      "Leads reach you in seconds, not hours",
      "Every inquiry arrives with the context you need to call back",
      "Nothing gets lost in a shared inbox",
      "You find out if the pipeline breaks — from us, not from silence",
    ],
    faq: [
      {
        q: "Does this replace me talking to customers?",
        a: "No, and it shouldn't. It captures and routes the inquiry so you can be the one who calls back fast. The human conversation is the part that closes the job.",
      },
      {
        q: "Where do the leads actually go?",
        a: "Your phone and your email by default. If you use a CRM, we can route there too.",
      },
      {
        q: "Is it included or an add-on?",
        a: "Included in every plan, including Starter. It's the part of the build that makes the rest of it pay for itself.",
      },
    ],
    inPlans: "Included in every plan. Organized lead inbox from Growth up.",
  },
  {
    slug: "local-seo",
    navLabel: "Local SEO",
    title: "Local SEO & Google Business Profile",
    metaTitle: 'Local SEO Services in Orlando, FL | Win "Near Me" Searches',
    metaDescription:
      'Local SEO for Orlando small businesses: Google Business Profile setup, "near me" optimization, service-area pages, and Search Console monitoring.',
    kicker: "Local SEO",
    h1: 'Show up when someone nearby searches "near me".',
    lead:
      "Local search is the highest-intent traffic a service business can get. Somebody typing \"plumber near me\" isn't researching — they have a problem right now and a phone in their hand.",
    problem: {
      heading: "Why you're invisible on the map",
      body:
        "Google decides local rankings on relevance, distance, and prominence. Most small businesses lose on relevance and prominence for boring, fixable reasons: an unclaimed Google Business Profile, a site that never states which cities it serves, no structured data telling Google what kind of business it is, and no page targeting the specific service someone searched for.",
    },
    included: [
      {
        title: "Google Business Profile setup",
        body:
          "Claimed, categorized, filled out properly, and consistent with your website. This is the single biggest lever in the map pack and it's usually half-done or missing.",
      },
      {
        title: "Structured data",
        body:
          "Schema markup that tells Google exactly what you are, where you operate, what you charge, and what you offer — so you're eligible for rich results instead of a plain blue link.",
      },
      {
        title: "Service-area pages",
        body:
          "Real pages for the places you actually work, with content specific to each. Not a keyword list in the footer — Google has ignored that trick for a decade.",
      },
      {
        title: "A page per service",
        body:
          "One page per thing you sell, so each can rank for its own search instead of all of them competing on a single homepage.",
      },
      {
        title: "Technical foundation",
        body:
          "Clean titles and descriptions, canonical URLs, a real sitemap, fast Core Web Vitals, and crawlable HTML. The unglamorous half that everything else depends on.",
      },
      {
        title: "Search Console monitoring",
        body:
          "We connect it, watch what you're actually ranking for, and act on it monthly on Care+. Guessing is not a strategy.",
      },
    ],
    outcomes: [
      "A complete, consistent Google Business Profile",
      "A page for every service and every area you serve",
      "Schema markup on every page",
      "Visibility into which searches bring you real inquiries",
    ],
    faq: [
      {
        q: "How long until I rank?",
        a: "Technical fixes and a Business Profile can move the map pack in weeks. Competitive organic terms take months. Anyone promising a #1 spot on a date is guessing, and we won't.",
      },
      {
        q: "Do you guarantee results?",
        a: "No. No honest SEO does. What we guarantee is the work: the profile, the pages, the schema, the monitoring, and a monthly report of what actually happened.",
      },
      {
        q: "I serve five towns. Do I need five sites?",
        a: "No — one site with a genuine page per area. Duplicate sites for the same business compete with each other and can hurt you.",
      },
    ],
    inPlans: "SEO foundation on Starter. Full local SEO from Growth up.",
  },
  {
    slug: "care-plans",
    navLabel: "Care Plans",
    title: "Website Care Plans",
    metaTitle: "Website Maintenance & Care Plans | Genova Web",
    metaDescription:
      "Managed hosting, security, backups, uptime monitoring, content edits, and monthly SEO optimization. Genova Care from $297/mo, Care+ from $597/mo.",
    kicker: "Ongoing care",
    h1: "Launch is day one. Care is every day after.",
    lead:
      "A website is not a thing you finish. It's a thing that either gets attention or slowly stops working — hosting lapses, plugins rot, contact forms silently break, and competitors publish while you don't.",
    problem: {
      heading: "The slow decay nobody warns you about",
      body:
        "The most expensive website failure isn't a crash — it's the contact form that stopped delivering in March and you noticed in June. Sites drift. Care plans exist so somebody is actually looking.",
    },
    included: [
      {
        title: "Managed hosting & backups",
        body: "Fast hosting, daily backups, SSL, and security patching handled — not your problem.",
      },
      {
        title: "Uptime & lead monitoring",
        body:
          "We watch the site and the lead pipeline. If either goes down, we find out first and fix it.",
      },
      {
        title: "Content edits",
        body:
          "Two edits a month on Care, five on Care+. New service, new price, new hours — send it, we ship it.",
      },
      {
        title: "Monthly reporting",
        body:
          "What traffic did, where leads came from, and what we'd do next. Plain English, not a 40-page PDF.",
      },
      {
        title: "Monthly SEO optimization",
        body:
          "On Care+: ongoing on-page work, Search Console monitoring, and acting on the searches you're nearly ranking for.",
      },
      {
        title: "Strategy time",
        body: "Quarterly call on Care, priority access on Care+. Someone who knows your site, on hand.",
      },
      {
        title: "New systems as they launch",
        body:
          "Small improvements and automations are included free while your membership is active. Major new systems come at an exclusive member discount.",
      },
    ],
    outcomes: [
      "Site stays fast, secure, and online",
      "Broken lead capture gets caught in hours, not months",
      "Your content stays current without you touching code",
      "Steady SEO progress instead of a one-time push",
    ],
    faq: [
      {
        q: "Am I locked into a contract?",
        a: "No. Care plans are month to month. Cancel whenever — you keep the site.",
      },
      {
        q: "Do I have to take a care plan?",
        a: "No. It's optional on every build. If you just need the site online, hosting on its own is $50/mo. Genova Care at $297/mo includes that hosting plus maintenance, monitoring, edits, and reporting. Pro includes three months of Care+ so you can judge it before deciding.",
      },
      {
        q: "What does hosting cost if I don't want a care plan?",
        a: "$50/mo for managed hosting and SSL — the site stays online and secure, and that's it. You can move up to a care plan later, or move the site elsewhere entirely; you own it either way.",
      },
      {
        q: "What counts as a content edit?",
        a: "Text changes, swapping photos, updating hours or prices, adding a service, publishing a promo. Structural redesigns are quoted separately.",
      },
    ],
    inPlans: "Optional on all plans. 3 months of Care+ included with Pro.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
