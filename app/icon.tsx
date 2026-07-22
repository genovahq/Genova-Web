import { ImageResponse } from "next/og";

/** Favicon: the "G" mark in brand purple on the site's near-black. */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050507",
          color: "#A45CE8",
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        G
      </div>
    ),
    size
  );
}
