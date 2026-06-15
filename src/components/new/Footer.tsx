import CoreLogo from "./CoreLogo";

const LIVE_APP = "https://corethreepointo.netlify.app/login";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1f2025",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column" as const,
          gap: 32,
        }}
      >
        {/* Top row: logo + links + compliance */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap" as const,
            gap: 20,
          }}
        >
          {/* Logo + version */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <CoreLogo height={22} variant="light" />
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(255,255,255,0.40)",
                letterSpacing: "0.02em",
              }}
            >
              Core 3 Participant Portal v3.0
            </span>
          </div>

          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              alignItems: "center",
              gap: 6,
            }}
          >
            {[
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
              { label: "Security", href: "#trust" },
            ].map((l, i) => (
              <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && (
                  <span style={{ color: "rgba(255,255,255,0.12)", fontSize: 13 }}>·</span>
                )}
                <a
                  href={l.href}
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  {l.label}
                </a>
              </span>
            ))}
          </nav>

          {/* Compliance tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              color: "rgba(255,255,255,0.22)",
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            SOC 2 · ERISA · 256-bit TLS
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            © 2026 Core 3 · All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
