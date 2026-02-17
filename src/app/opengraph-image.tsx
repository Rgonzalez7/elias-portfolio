import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Elias Gonzalez — Full-Stack Engineer";
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
        {/* gradient wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex", // ✅ aunque no tenga hijos, no molesta
            background:
              "radial-gradient(900px 500px at 20% 20%, rgba(122,108,255,0.18), transparent 55%), radial-gradient(900px 500px at 80% 30%, rgba(167,226,230,0.22), transparent 60%)",
          }}
        />

        {/* top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            position: "relative",
          }}
        >
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
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em" }}>
              Elias Gonzalez
            </div>
            <div style={{ display: "flex", fontSize: 18, color: "rgba(10,10,10,0.65)" }}>
              Full-Stack • AI workflows • Clean UX
            </div>
          </div>
        </div>

        {/* center */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative", maxWidth: 980 }}>
          {/* pill */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(10,10,10,0.10)",
              background: "rgba(255,255,255,0.65)",
              fontSize: 16,
              color: "rgba(10,10,10,0.70)",
              marginBottom: 22,
            }}
          >
            <div style={{ display: "flex", width: 8, height: 8, borderRadius: 999, background: "#10b981" }} />
            <div style={{ display: "flex" }}>Available for remote — Full-Stack / AI workflows</div>
          </div>

          {/* ✅ headline (sin <br/>) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.05em",
            }}
          >
            <div style={{ display: "flex" }}>Building AI-powered SaaS products</div>
            <div style={{ display: "flex" }}>with clean UX & real-world workflows.</div>
          </div>

          <div
            style={{
              display: "flex",
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
          <div style={{ display: "flex" }}>eliasgonzalez.io</div>
          <div style={{ display: "flex" }}>Guibbo • AI training platform</div>
        </div>
      </div>
    ),
    { ...size }
  );
}