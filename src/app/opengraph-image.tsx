import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
          position: "relative",
        }}
      >
        {/* Marca arriba izq */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 72,
            display: "flex",
            gap: 14,
            alignItems: "center",
            color: "#111827",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: "1px solid #E5E7EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 20,
              background: "#fff",
            }}
          >
            EG
          </div>
          <span>Elias Gonzalez</span>
        </div>

        {/* Headline */}
        <div
          style={{
            width: 980,
            color: "#0b0b0f",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Building AI-powered SaaS products with clean UX and real-world workflows.
        </div>

        {/* URL abajo */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 72,
            color: "#6B7280",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          www.eliasgonzalez.io
        </div>
      </div>
    ),
    size
  );
}