import { ImageResponse } from "next/og";

/**
 * Dynamic Open Graph card, generated at build time.
 * The original site had no OG image at all, so every share on Facebook,
 * LinkedIn, iMessage, WhatsApp, or Slack rendered as a bare grey link.
 *
 * System fonts only — no network fetch, so this can't fail the build.
 */

export const alt = "Genova Web — AI-Powered Websites That Grow Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 84px",
          background: "#050507",
          position: "relative",
        }}
      >
        {/* Brand glow, matching the site's radial washes */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: "radial-gradient(circle, rgba(123,47,190,0.55), rgba(123,47,190,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "radial-gradient(circle, rgba(123,47,190,0.3), rgba(123,47,190,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 26,
            letterSpacing: 2,
            marginBottom: 40,
          }}
        >
          <span style={{ color: "#EDEDF2", fontWeight: 700 }}>GENOVA</span>
          <span style={{ color: "#A45CE8", fontWeight: 700 }}>WEB</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.08,
            color: "#EDEDF2",
          }}
        >
          <span>Turn more visitors into</span>
          <span style={{ color: "#A45CE8" }}>paying customers.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 27,
            color: "#8A8A96",
            maxWidth: 880,
            lineHeight: 1.45,
          }}
        >
          High-converting websites with built-in AI lead capture. Live in under two weeks, from $750.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginTop: 48,
            fontSize: 22,
            color: "#5E5E68",
          }}
        >
          <span>genovaweb.com</span>
          {/* A plain circle, not a ◆ glyph and not a rotated square:
              - the glyph makes Satori fetch a dynamic font (needs network)
              - transform:rotate() intermittently fails resvg rasterization,
                which broke this build nondeterministically. A borderRadius
                circle rasterizes reliably. */}
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 10,
              background: "#7B2FBE",
            }}
          />
          <span>Orlando, FL</span>
        </div>
      </div>
    ),
    size
  );
}
