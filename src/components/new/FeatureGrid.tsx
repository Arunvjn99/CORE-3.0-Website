"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const CARD_BG = "#EBF0F8";

/* ── Brand Dashboard Mockup ──────────────────────────────────────────────── */
const METRICS_DATA = [
  { label: "Retirement Balance",  pct: 0.78, color: "#22C55E", value: "On Track",   pill: true,  pillBg: "#DCFCE7", pillColor: "#16A34A" },
  { label: "Annual Contribution", pct: 0.62, color: "#3B82F6", value: "8%",         pill: false },
  { label: "Employer Match",      pct: 0.85, color: "#374151", value: "$3,250",     pill: false },
  { label: "Retirement Age",      pct: 0.55, color: "#F59E0B", value: "64",         pill: false },
  { label: "Projected Income",    pct: 0.92, color: "#1f2025", value: "$62,400/mo", pill: false },
];

const ACTION_ITEMS = [
  { label: "Update\nContributions",          color: "#7C3AED", d: "M12 5v14M5 12h14" },
  { label: "View Investment\nPerformance",   color: "#3B82F6", d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { label: "Retirement\nProfile",            color: "#6D28D9", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "Benchmarks",                     color: "#059669", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Documents",                      color: "#DC2626", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Message\nCenter",                color: "#0891B2", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

function BrandDashboardMockup() {
  // Gauge math — 270° arc, r=38, viewBox 104×104
  const cx = 52, cy = 52, r = 38;
  const C = 2 * Math.PI * r;
  const arcLen = C * 0.75;
  const progressLen = arcLen * 0.80;

  const card = {
    background: "white",
    borderRadius: 14,
  } as const;

  /* scale: 578→462, 463→370 (≈ ×0.80) */
  const SCALE = 0.80;
  const W = Math.round(578 * SCALE); // 462
  const H = Math.round(463 * SCALE); // 370

  return (
    <div style={{ width: W, height: H, overflow: "hidden", flexShrink: 0 }}>
    <div style={{ width: 578, height: 463, display: "flex", flexDirection: "column", gap: 8, overflow: "hidden", transform: `scale(${SCALE})`, transformOrigin: "top left" }}>

      {/* ── Row 1: Metrics + Readiness ── */}
      <div style={{ display: "flex", gap: 8 }}>

        {/* Metrics panel */}
        <div style={{ ...card, flex: "0 0 57%", padding: "14px 16px" }}>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: "#111827", marginBottom: 10 }}>
            Account Overview
          </div>
          {METRICS_DATA.map((m) => (
            <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: m.color, flexShrink: 0 }} />
              <span style={{ fontSize: 9.5, color: "#6B7280", flex: 1, minWidth: 0 }}>{m.label}</span>
              <div style={{ width: 64, height: 3.5, borderRadius: 2, background: "#F3F4F6", overflow: "hidden", flexShrink: 0 }}>
                <div style={{ width: `${m.pct * 100}%`, height: "100%", background: m.color, borderRadius: 2 }} />
              </div>
              {m.pill ? (
                <div style={{ background: m.pillBg, color: m.pillColor, fontSize: 8.5, fontWeight: 700, padding: "2px 6px", borderRadius: 99, flexShrink: 0 }}>
                  {m.value}
                </div>
              ) : (
                <span style={{ fontSize: 9.5, fontWeight: 600, color: "#111827", flexShrink: 0, minWidth: 54, textAlign: "right" }}>{m.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Readiness gauge panel */}
        <div style={{ ...card, flex: 1, padding: "14px 12px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: "#111827", marginBottom: 8, alignSelf: "flex-start" }}>
            Retirement Readiness
          </div>
          <svg viewBox="0 0 104 104" width="84" height="84">
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F3F4F6" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={`${arcLen.toFixed(1)} ${(C - arcLen).toFixed(1)}`}
              transform={`rotate(135 ${cx} ${cy})`}
            />
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1f2025" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={`${progressLen.toFixed(1)} ${(C - progressLen).toFixed(1)}`}
              transform={`rotate(135 ${cx} ${cy})`}
            />
            <text x={cx} y={cy - 3} textAnchor="middle" dominantBaseline="middle" fontSize="19" fontWeight="700" fill="#111827">80</text>
            <text x={cx} y={cy + 11} textAnchor="middle" fontSize="6.5" fill="#9CA3AF" fontFamily="system-ui">out of 100</text>
          </svg>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 99, background: "#DCFCE7", marginBottom: 6 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#16A34A" }} />
            <span style={{ fontSize: 9, fontWeight: 600, color: "#16A34A" }}>On Track</span>
          </div>
          <p style={{ fontSize: 8.5, color: "#9CA3AF", textAlign: "center", lineHeight: 1.4, margin: 0 }}>
            You&apos;re right on track for a confident retirement, keep going
          </p>
        </div>
      </div>

      {/* ── Row 2: Live Projection chart ── */}
      <div style={{ ...card, padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 2 }}>
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 600, color: "#111827" }}>Live Projection</div>
            <div style={{ fontSize: 8.5, color: "#9CA3AF" }}>Shared Equity Projected</div>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "2px 8px", borderRadius: 99, background: "#DCFCE7" }}>
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
              <path d="M18 15l-6-6-6 6" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: 8.5, fontWeight: 600, color: "#16A34A" }}>+ 18% vs. current plan</span>
          </div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", marginBottom: 6 }}>$62,400</div>

        <svg viewBox="0 0 420 80" width="100%" style={{ flex: 1, minHeight: 0 }}>
          <defs>
            <linearGradient id="brandProjGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(139,92,246,0.20)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.01)" />
            </linearGradient>
          </defs>
          <path d="M8,72 C90,70 190,52 340,10 L340,74 L8,74 Z" fill="url(#brandProjGrad)" />
          <path d="M8,72 C90,70 190,60 340,36" fill="none" stroke="rgba(139,92,246,0.45)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8,72 C90,70 190,52 340,10"  fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeDasharray="5,4" strokeLinecap="round" />
          {([{ x: 8, l: "Today" }, { x: 120, l: "Age 50" }, { x: 230, l: "Age 60" }, { x: 340, l: "Retirement" }] as const).map(({ x, l }) => (
            <text key={l} x={x} y={79} textAnchor="middle" fontSize="7" fill="#9CA3AF" fontFamily="system-ui, sans-serif">{l}</text>
          ))}
        </svg>

        <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="14" height="6" viewBox="0 0 14 6"><line x1="0" y1="3" x2="14" y2="3" stroke="rgba(139,92,246,0.5)" strokeWidth="2" strokeLinecap="round" /></svg>
            <span style={{ fontSize: 8, color: "#9CA3AF" }}>Current Plan</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="14" height="6" viewBox="0 0 14 6"><line x1="0" y1="3" x2="14" y2="3" stroke="#7C3AED" strokeWidth="2" strokeDasharray="3,2" strokeLinecap="round" /></svg>
            <span style={{ fontSize: 8, color: "#9CA3AF" }}>Proposed Plan</span>
          </div>
        </div>
      </div>

      {/* ── Row 3: Action bar ── */}
      <div style={{ ...card, padding: "12px 16px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        {ACTION_ITEMS.map((item) => (
          <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: `${item.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.d} />
              </svg>
            </div>
            <span style={{ fontSize: 7.5, color: "#9CA3AF", textAlign: "center", lineHeight: 1.3, whiteSpace: "pre-line" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

function BrandCard({
  children,
  gradient,
  delay = 0,
  minH = 520,
}: {
  children: React.ReactNode;
  gradient: string;
  delay?: number;
  minH?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: 24,
        overflow: "hidden",
        background: `${gradient}, linear-gradient(90deg, ${CARD_BG} 0%, ${CARD_BG} 100%)`,
        minHeight: minH,
        position: "relative",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function FeatureGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      style={{ background: "white", padding: "80px 24px 96px" }}
    >
      <div style={{ maxWidth: 1376, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 65, textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 590,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#222326",
              marginBottom: 16,
            }}
          >
            Know where you stand.
            <br />
            See what&apos;s next.
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.5rem)",
              color: "rgba(31,32,37,0.6)",
              lineHeight: 1.3,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            Track your progress, explore opportunities, and make smarter
            retirement decisions with confidence.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Card 1 — Your brand. Our platform. */}
          <BrandCard
            delay={0.1}
            minH={657}
            gradient="radial-gradient(ellipse 80% 80% at 75% 100%, rgba(185,166,255,0.4) 0%, rgba(185,166,255,0) 64%)"
          >
            <div
              className="feature-card-row"
              style={{ display: "flex", alignItems: "center", minHeight: 657 }}
            >
              {/* Left: dashboard mockup */}
              <div
                style={{
                  flex: "0 0 auto",
                  padding: "32px 16px 32px 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BrandDashboardMockup />
              </div>

              {/* Right: text */}
              <div style={{ flex: 1, padding: "40px 72px 40px 24px" }}>
                <h3
                  style={{
                    fontSize: "clamp(2.2rem, 3.2vw, 3.6rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.04em",
                    lineHeight: 1.05,
                    color: "#1a1a2e",
                    marginBottom: 20,
                  }}
                >
                  Your brand.
                  <br />
                  Our platform.
                </h3>
                <p
                  style={{
                    fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                    color: "rgba(31,32,37,0.6)",
                    lineHeight: 1.6,
                    maxWidth: 380,
                  }}
                >
                  Create a fully branded participant experience that reflects
                  your identity while delivering the intelligence and innovation
                  of CORE 3.0
                </p>
              </div>
            </div>
          </BrandCard>

          {/* Card 2 — Watch your future change in real time. */}
          <div id="readiness">
          <BrandCard
            delay={0.18}
            gradient="radial-gradient(ellipse 80% 80% at 25% 100%, rgba(131,227,222,0.4) 0%, rgba(131,227,222,0) 64%)"
          >
            <div
              className="feature-card-row"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 520,
              }}
            >
              <div style={{ flex: 1, padding: "40px 48px 40px 80px" }}>
                <h3
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 4rem)",
                    fontWeight: 590,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: "#222326",
                    marginBottom: 16,
                    maxWidth: 394,
                  }}
                >
                  Watch your future change in real time.
                </h3>
                <p
                  style={{
                    fontSize: "clamp(1rem, 1.2vw, 1.5rem)",
                    color: "rgba(31,32,37,0.6)",
                    lineHeight: 1.3,
                    maxWidth: 453,
                  }}
                >
                  Every decision instantly updates your projected outcome.
                </p>
              </div>
              <div
                style={{
                  flex: "0 0 48%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 48px 24px 24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "10% 20%",
                    background:
                      "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)",
                    filter: "blur(32px)",
                    pointerEvents: "none",
                  }}
                />
                <Image
                  src="/assets/image-1373.png"
                  alt="Retirement Readiness on iPhone"
                  width={518}
                  height={540}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 518,
                    display: "block",
                    position: "relative",
                    filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
                  }}
                />
              </div>
            </div>
          </BrandCard>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .feature-card-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
