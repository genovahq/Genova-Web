import {
  storeStartingPrice,
  storePlans,
  catalogImport,
  storeCare,
  type Plan,
} from "./plans";

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
  /** Builds priced outside the three tiers show a "starting at" line in the hero. */
  startingAt?: number;
  /** Slug in `portfolio` (lib/data/proof.ts) to feature as a live example. */
  featuredWork?: { slug: string; heading: string; body: string };
  /** Optional "what comes next" block, e.g. pointing a store at traffic. */
  nextStep?: { kicker: string; heading: string; body: string; cta: string; href: string };
  /** Package cards rendered on the service page (online stores). */
  tiers?: { kicker: string; title: string; lead: string; plans: Plan[]; notes: { label: string; text: string }[] };
};

export const services: Service[] = [
  {
    slug: "website-design",
    navLabel: "Website Design",
    title: "Website Design & Development",
    metaTitle: "Small Business Website Design | Orlando, FL",
    metaDescription:
      "Custom small-business website design built to convert, not just look good. Mobile-first, fast, and live in under two weeks. Orlando, FL and across Florida.",
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
    slug: "online-stores",
    navLabel: "Online Stores",
    title: "Online Store Design & Build",
    metaTitle: "Online Store & Shopify Website Design | Orlando, FL",
    metaDescription:
      "Custom online stores built on Shopify for Orlando and Florida businesses: product catalog setup, secure checkout, shipping and taxes, plus quote requests for big-ticket items.",
    kicker: "Online stores",
    h1: "Stores built to sell, not just to look good.",
    lead:
      "A store is a website with a cash register attached — and the register is the part that has to work every single time. We custom-code storefronts on Shopify that are easy to buy from and easy for you to run.",
    problem: {
      heading: "Why most small stores don't sell",
      body:
        "Most small online stores are a theme with products dropped in. Photos are inconsistent, product pages don't answer the questions buyers actually have, checkout asks for too much, and shipping costs show up as a surprise on the last step. Every one of those is a point where someone with their card out closes the tab.",
    },
    included: [
      {
        title: "Custom storefront",
        body:
          "A design built around your brand and your products — not a stock theme with your logo swapped in. Mobile-first, because that's where most people buy.",
      },
      {
        title: "Product catalog setup",
        body:
          "Products, variants, collections, and descriptions structured so customers can find what they want fast. Large catalogs can be imported in bulk — priced by size.",
      },
      {
        title: "Checkout that converts",
        body:
          "Shopify's secure checkout with cards, Apple Pay, and Google Pay. Shipping rates and sales tax set up properly, so the total at the end is the total they expected.",
      },
      {
        title: "Quote requests for big items",
        body:
          "Not everything belongs in a cart. High-ticket or configured products can route to a quote form instead — and those leads hit your inbox the second they land.",
      },
      {
        title: "Built to be found",
        body:
          "Product and collection pages with real titles, descriptions, and product schema, so Google — and AI search — can show your products, not just your homepage.",
      },
      {
        title: "Easy to run day to day",
        body:
          "Orders, inventory, and fulfillment run from Shopify's dashboard and app. Prefer not to touch it? We can handle product updates for you after launch.",
      },
    ],
    outcomes: [
      "A store that looks like your brand, not a template",
      "Product pages that answer buyers' questions before they ask",
      "No surprise costs at checkout",
      "Big-ticket inquiries captured, not lost",
    ],
    faq: [
      {
        q: "Why Shopify?",
        a: "It handles the parts that must never break — payments, security, checkout — and it's easy to run without a developer. We design and build the store on top of it. If your business genuinely needs something fully custom, we'll tell you and quote that instead.",
      },
      {
        q: "Are there ongoing costs?",
        a: `Yes, and we'd rather say so up front: Shopify charges its own monthly plan plus card processing fees, paid to Shopify directly. Store Care is optional at $${storeCare.price}/mo if you want us handling updates. The store account, products, design, and domain are yours — if you ever leave us, the store stays with you.`,
      },
      {
        q: "How long does a store take?",
        a: "Usually two to four weeks, depending mostly on how many products there are and how ready the photos and descriptions are. We'll give you a firm timeline with the quote.",
      },
      {
        q: "I have hundreds of products. Is that a problem?",
        a: `No. Big catalogs get imported in bulk rather than entered one by one. Launch Store includes up to 100 products and Custom Store up to 250; beyond that it's $${catalogImport.perProduct} per product.`,
      },
      {
        q: "Can I sell some things online and quote others?",
        a: "Yes — that's a common setup for equipment and supply businesses. Smaller items go in the cart; larger or configured items go through a quote request that reaches you instantly.",
      },
    ],
    inPlans: "Two store packages, or a custom quote for larger builds. Payments 50% up front, 50% on delivery.",
    startingAt: storeStartingPrice,
    tiers: {
      kicker: "Store packages",
      title: "Two ways to launch your store.",
      lead: "Both are custom-coded, not a template with your logo swapped in. Need headless, a migration, or inventory integrations? We'll quote it.",
      plans: storePlans,
      notes: [
        {
          label: "Bigger catalog?",
          text: `Extra products import at $${catalogImport.perProduct} per product ($${catalogImport.minimum} minimum).`,
        },
        {
          label: `Store Care — $${storeCare.price}/mo.`,
          text: `About ${storeCare.hours} hours a month of product, banner and promo updates, plus monthly app and theme checks and a short report. Month to month. You pay Shopify directly.`,
        },
      ],
    },
    featuredWork: {
      slug: "ss-equipment-solutions",
      heading: "Cart for the small stuff. Quotes for the big stuff.",
      body:
        "S&S Equipment Solutions sells parts and supplies through an online cart that ships anywhere in the US, while full commercial and rehab equipment routes through a quote request that covers delivery and installation.",
    },
    nextStep: {
      kicker: "After launch",
      heading: "A store nobody visits doesn't sell.",
      body:
        "Launch is when the real work starts. We can run the Google ads, shoot the product photos and video, and manage the social posting that sends buyers to your store — tell us where you want to grow and we'll scope it with your build.",
      cta: "Talk about growing it",
      href: "/contact",
    },
  },
  {
    slug: "ai-lead-capture",
    navLabel: "AI Lead Capture",
    title: "AI Lead Capture",
    metaTitle: "AI Lead Capture for Local Businesses | Genova Web",
    metaDescription:
      "Never let an inquiry go cold. Our AI Lead Capture Assistant sends every website lead to your inbox instantly, organized and ready to call back.",
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
          "The moment someone submits, the details hit your inbox. No dashboard to remember to log into.",
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
          "We connect it and watch what you're actually ranking for, so you can see which searches bring real inquiries. Guessing is not a strategy.",
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
      "Managed hosting, SSL, daily backups, uptime and lead-system monitoring, and unlimited content edits. Hosting from $50/mo, Genova Care from $149/mo — month to month.",
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
        body:
          "Fast managed hosting, SSL, daily backups, and security patching handled — not your problem. Available on its own for $50/mo, or included in Genova Care.",
      },
      {
        title: "Uptime & lead monitoring",
        body:
          "We watch the site and the lead pipeline. If either goes down, we find out first and fix it.",
      },
      {
        title: "Content edits",
        body:
          "Unlimited content edits on Genova Care — new service, new price, new hours, a swapped photo. Send it, we ship it.",
      },
      {
        title: "Quarterly check-in",
        body:
          "A quick quarterly look at what's working on your site and what to fix next. Plain English, not a 40-page PDF.",
      },
    ],
    outcomes: [
      "Site stays fast, secure, and online",
      "Broken lead capture gets caught in hours, not months",
      "Your content stays current without you touching code",
      "You never think about hosting, security, or uptime again",
    ],
    faq: [
      {
        q: "Am I locked into a contract?",
        a: "No. Care plans are month to month. Cancel whenever — you keep the site.",
      },
      {
        q: "Do I have to take a care plan?",
        a: "No. It's optional on every build. If you just need the site online, hosting on its own is $50/mo. Genova Care at $149/mo adds lead-system monitoring, unlimited content edits, and a quarterly check-in. Pro includes three months of Genova Care so you can judge it before deciding.",
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
    inPlans: "Optional on all plans. 3 months of Genova Care included with Pro.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
