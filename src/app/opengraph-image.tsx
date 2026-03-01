import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nexum — The Trust Layer for AI Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(242, 153, 74, 0.14) 0%, transparent 70%), " +
            "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(242, 153, 74, 0.08) 0%, transparent 60%), " +
            "radial-gradient(ellipse 40% 40% at 80% 20%, rgba(242, 153, 74, 0.06) 0%, transparent 50%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`v${i}`}
            style={{
              position: "absolute",
              top: 0,
              left: `${(i + 1) * (1200 / 13)}px`,
              width: "1px",
              height: "100%",
              background: "rgba(255, 255, 255, 0.025)",
            }}
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`h${i}`}
            style={{
              position: "absolute",
              top: `${(i + 1) * (630 / 7)}px`,
              left: 0,
              width: "100%",
              height: "1px",
              background: "rgba(255, 255, 255, 0.025)",
            }}
          />
        ))}

        {/* Accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(242, 153, 74, 0.5), transparent)",
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
              fontSize: "64px",
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
              fontSize: "64px",
              fontWeight: 600,
              color: "#F2994A",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            for AI Agents.
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            fontSize: "22px",
            color: "#A1A1A1",
            marginTop: "28px",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          On-chain identity, discovery, payments, and reputation on Solana.
        </span>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "15px", color: "#6B6B6B" }}>Built on Solana</span>
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#F2994A",
            }}
          />
          <span style={{ fontSize: "15px", color: "#6B6B6B" }}>nexum.so</span>
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#F2994A",
            }}
          />
          <span style={{ fontSize: "15px", color: "#6B6B6B" }}>
            github.com/nexum-so
          </span>
        </div>

        {/* Accent line bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(242, 153, 74, 0.3), transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
