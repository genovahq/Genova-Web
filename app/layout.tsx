import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Michroma, Sora, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

/*
 * Fonts are self-hosted by next/font. The original site pulled three families
 * from the Google Fonts CDN with a render-blocking <link>, which cost a
 * connection + stylesheet round-trip before any text could paint. This removes
 * both and adds automatic size-adjust fallbacks, so swapping the font in
 * doesn't shift the layout (CLS).
 */
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-michroma",
});

const sora = Sora({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Genova Web — AI-Powered Websites That Grow Your Business",
    // Every child page gets the brand appended automatically.
    template: "%s | Genova Web",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  keywords: [
    "website design Orlando",
    "small business website",
    "AI lead capture",
    "local SEO Orlando",
    "web design Florida",
    "lead generation website",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Genova Web — AI-Powered Websites That Grow Your Business",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Genova Web — AI-Powered Websites That Grow Your Business",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  // Never cap zoom — capping it fails WCAG 1.4.4.
  width: "device-width",
  initialScale: 1,
  themeColor: "#050507",
  colorScheme: "dark",
};

/*
 * GA4 measurement ID. Public by design — it ships in the client HTML on every
 * site that uses it, so there's nothing gained by hiding it in an env var.
 *
 * Gated to production deploys only. Without this, local dev sessions and
 * Vercel preview builds would fire real pageviews and quietly pollute the
 * reports with traffic that isn't customers. VERCEL_ENV is read at build time
 * in this server component, so no client bundle is affected.
 */
const GA_MEASUREMENT_ID = "G-MZFP57T56W";
const analyticsEnabled = process.env.VERCEL_ENV === "production";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${michroma.variable} ${sora.variable} ${inter.variable}`}
      /*
       * The inline script below adds `js` to this element's class list before
       * React hydrates, so the client className legitimately differs from the
       * server one. This is the documented escape hatch for that pattern (the
       * same one theme-switcher scripts use); it suppresses the warning for
       * this element's attributes only, not for any child content.
       */
      suppressHydrationWarning
    >
      <head>
        {/*
         * Adds html.js before first paint so the reveal animation's hidden
         * start state only ever applies when JS is actually running. Inline
         * and synchronous on purpose — it must beat the first paint or
         * content would flash.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <RevealProvider />
        <JsonLd data={organizationSchema()} id="schema-org" />
        <JsonLd data={websiteSchema()} id="schema-website" />
      </body>
      {analyticsEnabled && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
