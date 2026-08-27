import { ImageResponse } from "next/og";

export const alt = "Junhao Zhao — Junior Solutions Engineer at ElcanoTek";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#E9EEF5",
          background: "#0A0F16",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", color: "#7DB6FF", fontSize: 28 }}>
          junhaozhao.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-3px" }}>Junhao Zhao</div>
          <div style={{ marginTop: 18, fontSize: 36, color: "#94A5BA" }}>
            Junior Solutions Engineer at ElcanoTek
          </div>
          <div style={{ marginTop: 34, width: 140, height: 5, background: "#4D9CFF" }} />
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#64748B" }}>
          AI agents · developer tools · data-intensive systems
        </div>
      </div>
    ),
    size,
  );
}
