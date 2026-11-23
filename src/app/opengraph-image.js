import { ImageResponse } from "next/og"

export const alt = "Ayan Pathan | Full Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Generated at build time: dark card matching the site, used for link previews
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#3b82f6", fontSize: 30 }}>
          <div style={{ width: 56, height: 6, background: "#3b82f6", borderRadius: 3 }} />
          ayanpathan.me
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
            Ayan Pathan
          </div>
          <div style={{ fontSize: 52, color: "#a1a1aa", marginTop: 16 }}>
            Full Stack Developer
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#d4d4d8" }}>
          React · Next.js · React Native · Node.js · MongoDB
        </div>
      </div>
    ),
    { ...size }
  )
}
