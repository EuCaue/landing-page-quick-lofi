import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Quick Lofi: lofi in your GNOME top bar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.svg"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 36,
          padding: "0 96px",
          background: "#222226",
          color: "#ffffff",
        }}
      >
        <img src={`data:image/svg+xml;base64,${logo}`} width={128} height={128} alt="" />
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>Quick Lofi</div>
        <div style={{ fontSize: 40, color: "rgba(255,255,255,0.7)" }}>
          Lofi in your GNOME top bar. GNOME 46 to 50.
        </div>
        <div style={{ display: "flex", height: 10, width: 160, borderRadius: 5, background: "#2190a4" }} />
      </div>
    ),
    size,
  );
}
