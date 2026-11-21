export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  /** The package this service is sold as, shown as a tag. */
  packageName?: string;
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

/*
 * Order matters: this is the order on /services and the homepage. The three
 * retainers lead, because they're the core of the agency offer.
 *
 * Slug history: /services/ai-lead-capture became /services/speed-to-lead
 * (redirect in next.config.ts).
 */
export const services: Service[] = [
  {
    slug: "local-seo",
    navLabel: "Local SEO",
    packageName: "Found",
    title: "Local SEO & Google Business Profile",
    metaTitle: "Local SEO for Contractors in Orlando, FL",
    metaDescription:
      "Local SEO for Orlando home-service businesses: Google Business Profile management, service-area pages, citations and review generation. Found — $1,500/mo.",
    kicker: "Local SEO · Found",
    h1: 'Own the map pack when someone nearby searches "near me".',
    lead:
      "Somebody typing \"roofer near me\" isn't researching — they have a problem right now and a phone in their hand. Found puts you in the top three when they look.",
    problem: {
      heading: "Why you're invisible on the map",
      body:
        "Google ranks local results on relevance, distance and prominence. Most contractors lose on relevance and prominence for boring, fixable reasons: a half-finished Google Business Profile, a site that never says which towns it serves, inconsistent listings across directories, and far fewer reviews than the company ranking above them.",
    },
    included: [
      {
        title: "Google Business Profile, managed",
        body:
          "Categories, services, photos, Q&A and weekly updates — kept complete and consistent with your website. The single biggest lever in the map pack.",
      },
      {
        title: "New pages every month",
        body:
          "Real service and service-area pages for the jobs and towns you actually want, written for the customer first. Not a keyword list in the footer.",
      },
      {
        title: "Citations & NAP clean-up",
        body:
          "Your name, address and phone consistent across the directories Google cross-checks. Inconsistency quietly costs rankings.",
      },
      {
        title: "Review generation",
        body:
          "An automated request after every job, so your review count and recency keep climbing without you remembering to ask.",
      },
      {
        title: "Technical SEO, ongoing",
        body:
          "Speed, schema markup, crawlability and on-page fixes — the unglamorous half that everything else depends on.",
      },
      {
        title: "Genova Care included",
        body:
          "Hosting, monitoring and unlimited content edits on a Genova-built site are part of the retainer.",
      },
    ],
    outcomes: [
      "A complete, actively managed Google Business Profile",
      "A page for every service and every town you want work in",
      "Reviews arriving every week, not every few months",
      "A monthly report on rankings, calls and form leads",
    ],
    faq: [
      {
        q: "How long until I rank?",
        a: "Profile and technical fixes can move the map pack in weeks. Competitive terms take months — which is why Found has a 6-month minimum. Anyone promising a #1 spot by a date is guessing, and we won't.",
      },
      {
        q: "Do you guarantee results?",
        a: "No. No honest SEO does. We guarantee the work — the profile, the pages, the reviews system, the fixes — and a monthly report of what it produced.",
      },
      {
        q: "I serve five towns. Do I need five sites?",
        a: "No — one site with a genuine page per area. Duplicate sites for the same business compete with each other and can hurt you.",
      },
    ],
    inPlans: "Found — $1,500/mo, 6-month minimum. Included in Full Engine.",
  },
  {
    slug: "paid-ads",
    navLabel: "Google & LSA Ads",
    packageName: "Booked",
    title: "Google Ads & Local Services Ads",
    metaTitle: "Google Ads & LSA Management for Contractors | Orlando",
    metaDescription:
      "Google Search Ads and Local Services Ads management for Orlando contractors, with landing pages, call tracking and speed-to-lead. Booked — $1,500/mo, ad spend never marked up.",
    kicker: "Paid ads · Booked",
    h1: "Calls this month, not someday.",
    lead:
      "SEO compounds over months. Ads put you at the top of Google tomorrow. Booked runs Google Search and Local Services Ads to the number that matters — cost per booked job.",
    problem: {
      heading: "Why most contractor ad accounts leak money",
      body:
        "Broad keywords matching to job seekers and DIY searches. Every ad pointing at the homepage. No call tracking, so nobody knows which clicks became jobs. And leads that wait hours for a callback while the homeowner books someone else. The ads aren't the problem — everything around them is.",
    },
    included: [
      {
        title: "Google Search Ads",
        body:
          "Tight, high-intent keywords, aggressive negatives, and ads written for the job — built, managed and optimized every week.",
      },
      {
        title: "Local Services Ads",
        body:
          "Google Guaranteed setup and management: budgets, service areas, lead disputes and the review strategy that moves you up the LSA rankings.",
      },
      {
        title: "Landing pages per campaign",
        body:
          "A dedicated page for each campaign instead of dumping paid clicks on your homepage. One message, one action.",
      },
      {
        title: "Call & conversion tracking",
        body:
          "Every call and form traced back to the campaign and keyword that produced it, so budget goes where the jobs come from.",
      },
      {
        title: "Speed-to-lead built in",
        body:
          "Every new lead gets an instant text back, so you're first to respond even when you're on a roof.",
      },
      {
        title: "Meta ads, if you want them",
        body:
          "Facebook and Instagram campaigns for remodels, seasonal offers and retargeting — +$500/mo on top of Booked.",
      },
    ],
    outcomes: [
      "Ads at the top of Google for the jobs you want",
      "Every call and form tied to the campaign that produced it",
      "A cost per lead and cost per booked job you can actually see",
      "No lead waiting hours for a reply",
    ],
    faq: [
      {
        q: "How much should I spend on ads?",
        a: "Most local contractors start between $1,500 and $5,000 a month, depending on trade and service area. We'll recommend a number on the first call based on your job value and capacity — and tell you if it's too little to be worth it.",
      },
      {
        q: "Do you take a cut of my ad spend?",
        a: "No. Google and Meta bill you directly, in accounts you own. Our fee is flat. Only above $10,000/mo in spend does it move to 10% of spend.",
      },
      {
        q: "I only want Local Services Ads.",
        a: "That's Booked LSA — $750/mo for LSA management alone, built for contractors who don't need a full Search campaign.",
      },
    ],
    inPlans: "Booked — $1,500/mo + ad spend. Meta +$500/mo. Booked LSA from $750/mo.",
  },
  {
    slug: "content-social",
    navLabel: "Content & Social",
    packageName: "Seen",
    title: "Content Production & Social Media",
    metaTitle: "Social Media & Video Content for Contractors | Orlando",
    metaDescription:
      "Monthly on-site shoots, short-form video, photos and managed posting for Orlando home-service businesses. Seen — $3,500/mo. Seen Lite for local brands from $1,800/mo.",
    kicker: "Content & social · Seen",
    h1: "Show the work. Every week. Without filming it yourself.",
    lead:
      "Homeowners check your Instagram, your Facebook and your Google photos before they call. Seen fills all of them with real footage of your crew and your jobs — shot, edited and posted for you.",
    problem: {
      heading: "The empty-feed problem",
      body:
        "Your last post was eight months ago. Your Google photos are a logo and a blurry truck. Meanwhile the competitor down the road posts before-and-afters every week — and looks like the bigger, safer company even when they aren't. You don't have a content problem. You have a time problem.",
    },
    included: [
      {
        title: "A monthly on-site shoot",
        body:
          "We come to your jobs and film the work, the crew and the results. Real footage beats stock every time.",
      },
      {
        title: "8 short-form videos a month",
        body:
          "Edited, captioned and sized for Reels, TikTok and Shorts — before-and-afters, walkthroughs, tips and crew stories.",
      },
      {
        title: "20–30 photos a month",
        body:
          "Edited photography for your website, Google profile, ads and socials.",
      },
      {
        title: "Managed posting",
        body:
          "Scheduled and posted across Instagram, Facebook and TikTok, plus weekly Google Business Profile posts.",
      },
      {
        title: "Nextdoor presence",
        body:
          "Neighborhood posts where homeowners ask each other who to hire.",
      },
      {
        title: "Review management",
        body:
          "Reviews monitored and answered across Google and Facebook, so every one gets a reply.",
      },
    ],
    outcomes: [
      "A feed that shows real work every week",
      "Photos and video your ads and website can use too",
      "A Google profile that looks active, not abandoned",
      "Zero hours of your week spent filming or posting",
    ],
    faq: [
      {
        q: "Do I need to be on camera?",
        a: "Only if you want to be. Plenty of the best-performing content is the work itself — before-and-afters, process, results. We'll plan around whoever is comfortable.",
      },
      {
        q: "I'm not a contractor. Is this for me?",
        a: "Seen Lite ($1,800/mo) is built for cafés, shops, detailers and local brands: a monthly shoot, 4 videos, 10 photos and 8–12 posts.",
      },
      {
        q: "Can I try it before committing?",
        a: "Yes — book a Content Day ($2,500). If you start Seen within 30 days, $1,000 of it comes off your first month.",
      },
    ],
    inPlans: "Seen — $3,500/mo. Seen Lite from $1,800/mo. Included in Full Engine.",
  },
  {
    slug: "speed-to-lead",
    navLabel: "Speed to Lead",
    packageName: "Lead Leak Fix",
    title: "Speed-to-Lead Automation",
    metaTitle: "Missed-Call Text-Back & Speed-to-Lead | Genova Web",
    metaDescription:
      "Missed-call text-back, instant lead follow-up and automated review requests for local businesses. Built into every Genova website, or retrofitted onto yours with Lead Leak Fix.",
    kicker: "Speed to lead · Lead Leak Fix",
    h1: "The lead you answer first is usually the lead you win.",
    lead:
      "You're on a job when the phone rings. By the time you call back, they've booked someone else. Speed-to-lead automation answers in seconds — every call, every form, every time.",
    problem: {
      heading: "Why most leads die",
      body:
        "A missed call goes to voicemail nobody checks until evening. A form lands in an inbox you look at tomorrow. Homeowners call two or three companies and hire whoever gets back first. The marketing did its job — the follow-up didn't exist. That's the leak.",
    },
    included: [
      {
        title: "Missed-call text-back",
        body:
          "Every missed call gets a text within seconds — so the conversation starts before they dial the next company.",
      },
      {
        title: "Instant lead follow-up",
        body:
          "Form leads get an immediate, personal reply and land on your phone with the details you need to call back.",
      },
      {
        title: "Automated review requests",
        body:
          "A request goes out after every job, so happy customers actually leave the review.",
      },
      {
        title: "Lead alerts",
        body:
          "Phone and email alerts the second a lead arrives, with name, job and contact details as clean fields.",
      },
      {
        title: "Works on your existing site",
        body:
          "Lead Leak Fix installs on WordPress, Wix, Squarespace and most other platforms — no rebuild needed.",
      },
      {
        title: "Monitored",
        body:
          "We watch the pipeline. If texting or alerts ever stop working, we find out before you lose a week of leads.",
      },
    ],
    outcomes: [
      "Every missed call answered in seconds",
      "Every form lead replied to before they call a competitor",
      "More reviews, without you asking",
      "You find out if the pipeline breaks — from us, not from silence",
    ],
    faq: [
      {
        q: "Is this included in a new website?",
        a: "Yes — automated lead response is built into every Genova website. Lead Leak Fix is for businesses that want to keep their existing site and add the system to it.",
      },
      {
        q: "Why is there a monthly fee?",
        a: "The $149/mo covers the dedicated phone number, text messaging and automation running costs, plus monitoring so it never silently breaks.",
      },
      {
        q: "Does this replace me talking to customers?",
        a: "No, and it shouldn't. It buys you time and holds the lead so you can be the one who calls back. The human conversation closes the job.",
      },
    ],
    inPlans: "Lead Leak Fix — $1,500 setup + $149/mo. Built into every Genova website.",
  },
  {
    slug: "website-design",
    navLabel: "Websites",
    title: "Website Design & Development",
    metaTitle: "Contractor & Small Business Website Design | Orlando, FL",
    metaDescription:
      "Custom-coded websites for Orlando contractors and local businesses, built to turn ad and search traffic into booked jobs. Speed-to-lead included. From $1,250.",
    kicker: "Websites",
    h1: "The website every other channel sends traffic to.",
    lead:
      "SEO, ads and social all end in the same place: your website. If it's slow or confusing, every dollar spent getting people there leaks out. We build the version that converts.",
    problem: {
      heading: "The problem with a pretty website",
      body:
        "A site can look modern and still lose you work. If a visitor can't tell in five seconds what you do, where you do it and how to reach you, they leave and call the next result — and the ad click you paid for is gone.",
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
          "Most local searches happen on a phone, often on bad signal. We design the small screen first.",
      },
      {
        title: "Fast by construction",
        body:
          "Custom-coded, not a bloated template. Speed is a ranking factor, an ad Quality Score factor and a conversion factor.",
      },
      {
        title: "Copy that does work",
        body:
          "Written around what your customer actually worries about — price, timeline, whether you'll show up.",
      },
      {
        title: "Speed-to-lead included",
        body:
          "Automated lead response is built into every build, from Starter up.",
      },
      {
        title: "Yours to keep",
        body:
          "You own the site, the code and the domain. No proprietary builder holding it hostage.",
      },
    ],
    outcomes: [
      "A visitor can tell what you do and where within five seconds",
      "Every screen has one obvious next step",
      "Loads fast on a phone with two bars",
      "Ready for SEO and ad traffic from day one",
    ],
    faq: [
      {
        q: "Do I need to write the content?",
        a: "No. The intake gives us enough to write the first draft. You review and correct it — that's usually faster than starting from a blank page.",
      },
      {
        q: "What if I already have a website?",
        a: "We can rebuild on your existing domain and keep the URLs that already rank. Or, if the site is fine, keep it and add Lead Leak Fix instead.",
      },
      {
        q: "Is a website included in any retainer?",
        a: "Full Engine includes a Growth website build once you pass month six.",
      },
    ],
    inPlans: "Starter $1,250 · Growth $2,950 · Pro $4,950, one time.",
  },
  {
    slug: "care-plans",
    navLabel: "Care Plans",
    title: "Website Care Plans",
    metaTitle: "Website Maintenance & Care Plans | Genova Web",
    metaDescription:
      "Managed hosting, SSL, daily backups, uptime and lead-system monitoring, and unlimited content edits. Hosting from $50/mo, Genova Care from $149/mo — month to month.",
    kicker: "Website care",
    h1: "Launch is day one. Care is every day after.",
    lead:
      "A website either gets attention or slowly stops working — hosting lapses, forms silently break, and the hours on the site stay wrong for a year.",
    problem: {
      heading: "The slow decay nobody warns you about",
      body:
        "The most expensive website failure isn't a crash — it's the contact form that stopped delivering in March and you noticed in June. Sites drift. Care plans exist so somebody is actually looking.",
    },
    included: [
      {
        title: "Managed hosting & backups",
        body:
          "Fast managed hosting, SSL, daily backups and security handled. Available on its own for $50/mo, or included in Genova Care.",
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
          "A quick quarterly look at what's working and what to fix next. Plain English, not a 40-page PDF.",
      },
    ],
    outcomes: [
      "Site stays fast, secure and online",
      "Broken lead capture gets caught in hours, not months",
      "Your content stays current without you touching code",
      "You never think about hosting or uptime again",
    ],
    faq: [
      {
        q: "Am I locked into a contract?",
        a: "No. Care plans are month to month. Cancel whenever — you keep the site.",
      },
      {
        q: "Is Care included in any retainer?",
        a: "Yes — Genova Care is included in Found and Full Engine.",
      },
      {
        q: "What counts as a content edit?",
        a: "Text changes, swapping photos, updating hours or prices, adding a service, publishing a promo. Structural redesigns are quoted separately.",
      },
    ],
    inPlans: "Hosting $50/mo · Genova Care $149/mo. Care included in Found and Full Engine.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
