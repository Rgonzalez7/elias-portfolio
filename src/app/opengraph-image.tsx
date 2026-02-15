import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Elias Gonzalez — EG";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { width, height } = size;

  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          color: "#0a0a0a",
          position: "relative",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        {/* subtle gradient wash (Apple-ish) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 20% 20%, rgba(122,108,255,0.18), transparent 55%), radial-gradient(900px 500px at 80% 30%, rgba(167,226,230,0.22), transparent 60%)",
          }}
        />

        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, position: "relative" }}>
          {/* EG mark */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0a0a0a",
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
            }}
          >
            EG
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em" }}>
              Elias Gonzalez
            </div>
            <div style={{ fontSize: 18, color: "rgba(10,10,10,0.65)" }}>
              Full-Stack • AI workflows • Clean UX
            </div>
          </div>
        </div>

        {/* center */}
        <div style={{ position: "relative", maxWidth: 980 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(10,10,10,0.10)",
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(10px)",
              fontSize: 16,
              color: "rgba(10,10,10,0.70)",
              marginBottom: 22,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#10b981",
              }}
            />
            Available for remote — Full-Stack / AI workflows
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.05em",
            }}
          >
            Building AI-powered SaaS products
            <br />
            with clean UX & real-world workflows.
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 22,
              lineHeight: 1.35,
              color: "rgba(10,10,10,0.70)",
              maxWidth: 860,
            }}
          >
            Scalable web apps, automation, and product-driven development.
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            color: "rgba(10,10,10,0.55)",
            fontSize: 18,
          }}
        >
          <div>eliasgonzalez.io</div>
          <div>Guibbo • AI training platform</div>
        </div>
      </div>
    ),
    { ...size }
  );
}