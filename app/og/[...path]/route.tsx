import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const WIDTH = 1200;
const HEIGHT = 630;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const type = path?.[0] || "home";
  const { searchParams } = new URL(req.url);

  // Blog OG
  if (type === "blog") {
    const title = searchParams.get("title") || "Growth Edge Blog";
    const category = searchParams.get("category") || "Insurance";
    const date = searchParams.get("date") || "";

    return new ImageResponse(
      (
        <div
          style={{
            width: WIDTH,
            height: HEIGHT,
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(135deg, #2D3F2D 0%, #3A4D3A 30%, #4A5D4A 60%, #1A1A1A 100%)",
            padding: "60px 70px",
            fontFamily: "system-ui, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(245, 242, 235, 0.06)",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -120,
              left: -60,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "rgba(245, 242, 235, 0.04)",
              display: "flex",
            }}
          />

          {/* Top bar — brand + category */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#F5F2EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#4A5D4A",
                }}
              >
                G
              </div>
              <span style={{ fontSize: 22, fontWeight: 600, color: "#F5F2EB", letterSpacing: "-0.02em" }}>
                Growth Edge
              </span>
            </div>
            <div
              style={{
                display: "flex",
                background: "rgba(245, 242, 235, 0.15)",
                borderRadius: 24,
                padding: "8px 20px",
                fontSize: 15,
                fontWeight: 600,
                color: "#F5F2EB",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
              }}
            >
              {category}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <h1
              style={{
                fontSize: title.length > 50 ? 44 : 52,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
                maxWidth: 900,
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#F5F2EB",
                  display: "flex",
                }}
              />
              <span style={{ fontSize: 16, color: "rgba(245, 242, 235, 0.7)" }}>
                growthedge.in
              </span>
            </div>
            {date && (
              <span style={{ fontSize: 15, color: "rgba(245, 242, 235, 0.6)" }}>
                {date}
              </span>
            )}
          </div>
        </div>
      ),
      { width: WIDTH, height: HEIGHT },
    );
  }

  // Contact OG
  if (type === "contact") {
    return new ImageResponse(
      (
        <div
          style={{
            width: WIDTH,
            height: HEIGHT,
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(145deg, #F5F2EB 0%, #EBE7DE 50%, #DDD9D0 100%)",
            padding: "60px 70px",
            fontFamily: "system-ui, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Olive accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: "linear-gradient(90deg, #4A5D4A, #3A4D3A)",
              display: "flex",
            }}
          />

          {/* Decorative element */}
          <div
            style={{
              position: "absolute",
              right: 60,
              top: "50%",
              transform: "translateY(-50%)",
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "3px solid rgba(74, 93, 74, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                border: "3px solid rgba(74, 93, 74, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "rgba(74, 93, 74, 0.06)",
                  display: "flex",
                }}
              />
            </div>
          </div>

          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#4A5D4A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 800,
                color: "#F5F2EB",
              }}
            >
              G
            </div>
            <span style={{ fontSize: 22, fontWeight: 600, color: "#1A1A1A", letterSpacing: "-0.02em" }}>
              Growth Edge
            </span>
          </div>

          {/* Content */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: 60, maxWidth: 650 }}>
            <h1
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
              }}
            >
              Get Expert Insurance Advice
            </h1>
            <p
              style={{
                fontSize: 22,
                color: "#6B6B6B",
                lineHeight: 1.5,
                marginTop: 20,
              }}
            >
              Free consultation · No obligations · IRDAI-compliant guidance
            </p>
          </div>

          {/* Bottom */}
          <div style={{ display: "flex", marginTop: "auto", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4A5D4A",
                display: "flex",
              }}
            />
            <span style={{ fontSize: 16, color: "#6B6B6B" }}>growthedge.in/contact</span>
          </div>
        </div>
      ),
      { width: WIDTH, height: HEIGHT },
    );
  }

  // Default: Home OG image
  return new ImageResponse(
    (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #2D3F2D 0%, #3A4D3A 25%, #4A5D4A 50%, #1A1A1A 100%)",
          padding: "60px 70px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(245, 242, 235, 0.05)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(245, 242, 235, 0.03)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 200,
            right: 100,
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "2px solid rgba(245, 242, 235, 0.08)",
            display: "flex",
          }}
        />

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: "#F5F2EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              color: "#4A5D4A",
            }}
          >
            G
          </div>
          <span style={{ fontSize: 26, fontWeight: 600, color: "#F5F2EB", letterSpacing: "-0.02em" }}>
            Growth Edge
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            gap: 20,
            maxWidth: 800,
          }}
        >
          <h1
            style={{
              fontSize: 58,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Your Health Deserves The Best Protection
          </h1>
          <p
            style={{
              fontSize: 22,
              color: "rgba(245, 242, 235, 0.7)",
              lineHeight: 1.5,
              maxWidth: 600,
            }}
          >
            Expert insurance advisory in India. Health, Life & Motor Insurance — 400+ families protected.
          </p>
        </div>

        {/* Bottom bar — stats */}
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {[
            { value: "400+", label: "Families" },
            { value: "₹50Cr+", label: "Claims Settled" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: "#F5F2EB" }}>{stat.value}</span>
              <span style={{ fontSize: 14, color: "rgba(245, 242, 235, 0.5)" }}>{stat.label}</span>
            </div>
          ))}
          <div style={{ display: "flex", marginLeft: "auto", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#F5F2EB",
                display: "flex",
              }}
            />
            <span style={{ fontSize: 16, color: "rgba(245, 242, 235, 0.6)" }}>growthedge.in</span>
          </div>
        </div>
      </div>
    ),
    { width: WIDTH, height: HEIGHT },
  );
}
