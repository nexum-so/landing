import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nexum — The Trust Layer for AI Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0A0A0A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(242, 153, 74, 0.12)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(242, 153, 74, 0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#F2994A",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0A0A0A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2" />
              <path d="M20 14h2" />
              <path d="M15 13v2" />
              <path d="M9 13v2" />
            </svg>
          </div>
          <span style={{ fontSize: "32px", fontWeight: 600, color: "#EDEDED" }}>
            Nexum
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#EDEDED",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            The Trust Layer
          </span>
          <span
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#F2994A",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            for AI Agents.
          </span>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "36px",
          }}
        >
          {["Identity", "Discovery", "Payments", "Reputation"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                border: "1px solid #2A2A2A",
                background: "#161616",
                color: "#A1A1A1",
                fontSize: "16px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "16px", color: "#6B6B6B" }}>nexum.so</span>
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#F2994A",
            }}
          />
          <span style={{ fontSize: "16px", color: "#6B6B6B" }}>@nexum_so</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
