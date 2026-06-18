import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Machive – Business Software & Automation That Helps You Grow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "24px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#6366f1",
            }}
          />
          <span
            style={{
              color: "#a5b4fc",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Business Software &amp; Automation
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "900",
            color: "#f8fafc",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Grow Faster with{" "}
          <span style={{ color: "#818cf8" }}>Custom Software</span>
          {" & Automation"}
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            maxWidth: "700px",
            lineHeight: 1.5,
            marginBottom: "48px",
          }}
        >
          Lead-generation websites, business software, automation systems, and
          AI solutions. Built end-to-end by a senior engineer.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { stat: "6+", label: "Years Building" },
            { stat: "300+", label: "Sites Powered" },
            { stat: "10x", label: "Faster Operations" },
          ].map((item) => (
            <div
              key={item.stat}
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "900",
                  color: "#818cf8",
                }}
              >
                {item.stat}
              </span>
              <span style={{ fontSize: "14px", color: "#64748b" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "96px",
            fontSize: "20px",
            fontWeight: "700",
            color: "#475569",
            letterSpacing: "0.05em",
          }}
        >
          machive.in
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
