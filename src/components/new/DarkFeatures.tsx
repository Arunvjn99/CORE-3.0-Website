"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const DARK = "#1f2025";
const PURPLE = "#7c3aed";

/* Reusable feature card wrapper */
function FeatureCard({
  children,
  delay = 0,
  bg = "#EBF0F8",
  minH = 560,
}: {
  children: React.ReactNode;
  delay?: number;
  bg?: string;
  minH?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: 24,
        overflow: "hidden",
        background: bg,
        display: "flex",
        alignItems: "stretch",
        minHeight: minH,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── AI Insight Card ──────────────────────────────────────────────────────── */
function AIInsightCard() {
  const chevron = "M9 18l6-6-6-6";

  return (
    <div
      style={{
        background: "white",
        borderRadius: 20,
        boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        padding: "20px 24px",
        width: "100%",
        maxWidth: 480,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 7,
          marginBottom: 16, paddingBottom: 14,
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="#7C3AED">
          <path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52l-5.62 3.97 2.09-6.26L3 8.26h6.91z" />
        </svg>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>AI Insight</span>
      </div>

      {/* Row 1 — orange / dollar */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "13px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FFF7ED", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 3 }}>
            Increase your contribution
          </div>
          <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>
            By $50/month, you could increase your monthly retirement income by{" "}
            <strong style={{ color: "#EA580C", fontWeight: 700 }}>$320.</strong>
          </div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
          <path d={chevron} />
        </svg>
      </div>

      {/* Row 2 — teal / shield-check */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "13px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#ECFDF5", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 3 }}>
            You may be eligible for more
          </div>
          <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>
            Review your employer match to maximize your retirement savings.
          </div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
          <path d={chevron} />
        </svg>
      </div>

      {/* Row 3 — purple / clock */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "13px 0" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F5F3FF", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 3 }}>
            Consider adjusting your goal
          </div>
          <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>
            Retiring at 62 may require a higher monthly savings rate.
          </div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
          <path d={chevron} />
        </svg>
      </div>
    </div>
  );
}

/* ── Dashboard UI Mockup ──────────────────────────────────────────────────── */
const SIDE_ITEMS = [
  {
    label: "Overview", active: true,
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Accounts",
    d: "M3 10h18M3 6h18M3 14h18M3 18h18",
  },
  {
    label: "Investments",
    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    label: "Transactions",
    d: "M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4",
  },
  {
    label: "Documents",
    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    label: "Profile",
    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
];

function DashboardMockup() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        display: "flex",
        overflow: "hidden",
        width: "100%",
        flexShrink: 0,
      }}
    >
      {/* Sidebar */}
      <div style={{ width: 118, flexShrink: 0, borderRight: "1px solid rgba(0,0,0,0.06)", paddingTop: 14, paddingBottom: 14 }}>
        {SIDE_ITEMS.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "7px 10px 7px 14px",
              fontSize: 11,
              fontWeight: item.active ? 600 : 400,
              color: item.active ? "#7C3AED" : "#9CA3AF",
              background: item.active ? "rgba(124,58,237,0.08)" : "transparent",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke={item.active ? "#7C3AED" : "#9CA3AF"}
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d={item.d} />
            </svg>
            {item.label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "16px 14px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 10 }}>
          Overview
        </div>

        {/* Trend chart */}
        <svg
          viewBox="0 0 140 44"
          width="100%"
          height="44"
          style={{ display: "block", marginBottom: 10 }}
        >
          <defs>
            <linearGradient id="dashChartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(234,88,12,0.18)" />
              <stop offset="100%" stopColor="rgba(234,88,12,0)" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path
            d="M0,38 C25,33 50,25 80,15 S120,5 140,2 L140,44 L0,44 Z"
            fill="url(#dashChartGrad)"
          />
          {/* Line */}
          <path
            d="M0,38 C25,33 50,25 80,15 S120,5 140,2"
            fill="none"
            stroke="#EA580C"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>

        <div style={{ fontSize: 8.5, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 3 }}>
          Retirement Readiness
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#111827", lineHeight: 1, marginBottom: 7 }}>
          72%
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 9px", borderRadius: 99, background: "#DCFCE7" }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#16A34A" }} />
          <span style={{ fontSize: 10, fontWeight: 600, color: "#16A34A" }}>On Track</span>
        </div>
      </div>
    </div>
  );
}

/* ── Chat UI Mockup ───────────────────────────────────────────────────────── */
function ChatMockup() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        padding: "16px",
        width: "100%",
        flexShrink: 0,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="#7C3AED">
          <path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52l-5.62 3.97 2.09-6.26L3 8.26h6.91z" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}>CORE Intelligence</span>
      </div>

      {/* Purple message */}
      <div
        style={{
          background: "#7C3AED",
          borderRadius: "14px 14px 14px 4px",
          padding: "10px 14px",
          fontSize: 12,
          fontWeight: 500,
          color: "white",
          marginBottom: 8,
          display: "inline-block",
          maxWidth: "92%",
        }}
      >
        How can I help you today?
      </div>

      {/* Gray reply */}
      <div
        style={{
          background: "#F3F4F6",
          borderRadius: "14px 14px 4px 14px",
          padding: "10px 14px",
          fontSize: 12,
          fontWeight: 500,
          color: "#374151",
          marginLeft: "auto",
          maxWidth: "92%",
        }}
      >
        How much should I save per month?
      </div>

      {/* Typing dots */}
      <div style={{ display: "flex", gap: 4, marginTop: 10, paddingLeft: 2 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#D1D5DB" }} />
        ))}
      </div>
    </div>
  );
}

/* ── Language Globe Illustration ─────────────────────────────────────────── */
function LanguageGlobeIllustration({ lang }: { lang: "en" | "es" }) {
  const G = "rgba(109,40,217,0.18)";

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1", maxWidth: 480 }}>
      {/* Wireframe globe */}
      <svg
        viewBox="0 0 480 480"
        fill="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <circle cx="240" cy="240" r="196"  stroke={G} strokeWidth="1.2" />
        <ellipse cx="240" cy="240" rx="90"  ry="196" stroke={G} strokeWidth="1" />
        <ellipse cx="240" cy="240" rx="166" ry="196" stroke={G} strokeWidth="0.8" />
        <ellipse cx="240" cy="240" rx="196" ry="78"  stroke={G} strokeWidth="1" />
        <ellipse cx="240" cy="240" rx="196" ry="136" stroke={G} strokeWidth="0.8" />
        <line x1="44"  y1="240" x2="436" y2="240" stroke={G} strokeWidth="0.8" />
        <line x1="240" y1="44"  x2="240" y2="436" stroke={G} strokeWidth="0.8" />
      </svg>

      {/* English bubble — upper left */}
      <motion.div
        animate={{
          opacity: lang === "en" ? 1 : 0.55,
          scale:   lang === "en" ? 1 : 0.97,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: "30%",
          left: "4%",
          background: "white",
          borderRadius: 18,
          padding: "15px 20px",
          boxShadow: "0 10px 36px rgba(0,0,0,0.11), 0 2px 8px rgba(0,0,0,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 15,
          fontWeight: 600,
          color: "#111827",
          whiteSpace: "nowrap",
        }}
      >
        Hello! Let&apos;s plan your retirement.
        <span style={{ fontSize: 20 }}>🇺🇸</span>
      </motion.div>

      {/* Spanish bubble — lower right */}
      <motion.div
        animate={{
          opacity: lang === "es" ? 1 : 0.55,
          scale:   lang === "es" ? 1 : 0.97,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: "27%",
          right: "4%",
          background: "#7C3AED",
          borderRadius: 18,
          padding: "15px 20px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 15,
          fontWeight: 600,
          color: "white",
          whiteSpace: "nowrap",
        }}
      >
        ¡Hola! Planeemos su retiro.
        <span style={{ fontSize: 20 }}>🇲🇽</span>
      </motion.div>
    </div>
  );
}

/* ── Retirement Projection Chart ─────────────────────────────────────────── */
function RetirementProjectionChart() {
  // SVG coordinate constants
  const VW = 374;
  const VH = 150;
  const cx0 = 8;   // chart left x
  const cx1 = 284; // chart right x (where lines end / circles sit)
  const cy0 = 14;  // proposed plan end y (top)
  const cy1 = 122; // both lines start y (bottom)

  // Cubic bezier paths — flat start, steep rise near right edge
  const proposed = `M${cx0},${cy1} C${cx0 + 100},${cy1} ${cx0 + 195},${cy0 + 20} ${cx1},${cy0}`;
  const current  = `M${cx0},${cy1} C${cx0 + 100},${cy1} ${cx0 + 195},${cy0 + 55} ${cx1},${cy0 + 42}`;
  const fillArea = `${proposed} L${cx1},${cy1 + 2} L${cx0},${cy1 + 2} Z`;

  // X-axis label positions
  const xLabels = [
    { x: cx0,                             label: "Today" },
    { x: cx0 + (cx1 - cx0) * 0.33,       label: "Age 50" },
    { x: cx0 + (cx1 - cx0) * 0.66,       label: "Age 60" },
    { x: cx1,                             label: "Retirement" },
  ];

  return (
    <div
      style={{
        background: "white",
        borderRadius: 18,
        padding: "22px 22px 16px",
        boxShadow:
          "0 6px 40px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)",
        width: "100%",
      }}
    >
      {/* ── Header ── */}
      <div style={{ marginBottom: 10 }}>
        <p
          style={{
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9CA3AF",
            margin: "0 0 5px",
          }}
        >
          Retirement Projection
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 3,
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#111827",
              lineHeight: 1,
            }}
          >
            $1,842
          </span>
          <span style={{ fontSize: 15, color: "#6B7280", fontWeight: 500 }}>
            /mo
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>
            Projected monthly income
          </span>

          {/* Green badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "3px 10px",
              borderRadius: 99,
              background: "#DCFCE7",
            }}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 15l-6-6-6 6"
                stroke="#16A34A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{ fontSize: 10.5, fontWeight: 700, color: "#16A34A" }}
            >
              18% vs. current plan
            </span>
          </div>
        </div>
      </div>

      {/* ── SVG Chart ── */}
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        style={{ width: "100%", overflow: "visible" }}
      >
        <defs>
          <linearGradient id="retProjGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(139,92,246,0.22)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.02)" />
          </linearGradient>
        </defs>

        {/* Gradient fill area under proposed plan */}
        <path d={fillArea} fill="url(#retProjGrad)" />

        {/* Current plan — dashed */}
        <path
          d={current}
          fill="none"
          stroke="rgba(139,92,246,0.45)"
          strokeWidth="2"
          strokeDasharray="5,4"
          strokeLinecap="round"
        />

        {/* Proposed plan — solid */}
        <path
          d={proposed}
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Endpoint circles */}
        <circle cx={cx1} cy={cy0}      r="4" fill="#7C3AED" />
        <circle cx={cx1} cy={cy0 + 42} r="4" fill="rgba(139,92,246,0.6)" />

        {/* $1,842 pill */}
        <rect x={cx1 + 9} y={cy0 - 9}      width="58" height="18" rx="9" fill="#7C3AED" />
        <text
          x={cx1 + 38} y={cy0 + 4}
          textAnchor="middle"
          fontSize="9.5"
          fill="white"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          $1,842
        </text>

        {/* $1,562 pill */}
        <rect x={cx1 + 9} y={cy0 + 33} width="58" height="18" rx="9" fill="rgba(139,92,246,0.55)" />
        <text
          x={cx1 + 38} y={cy0 + 46}
          textAnchor="middle"
          fontSize="9.5"
          fill="white"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          $1,562
        </text>

        {/* X-axis labels */}
        {xLabels.map(({ x, label }) => (
          <text
            key={label}
            x={x}
            y={VH - 2}
            textAnchor="middle"
            fontSize="9"
            fill="#9CA3AF"
            fontFamily="system-ui, sans-serif"
          >
            {label}
          </text>
        ))}
      </svg>

      {/* ── Legend ── */}
      <div style={{ display: "flex", gap: 16, marginTop: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="18" height="8" viewBox="0 0 18 8">
            <line
              x1="0" y1="4" x2="18" y2="4"
              stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"
            />
          </svg>
          <span style={{ fontSize: 10, color: "#9CA3AF" }}>Proposed Plan</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="18" height="8" viewBox="0 0 18 8">
            <line
              x1="0" y1="4" x2="18" y2="4"
              stroke="rgba(139,92,246,0.5)" strokeWidth="2"
              strokeDasharray="4,3" strokeLinecap="round"
            />
          </svg>
          <span style={{ fontSize: 10, color: "#9CA3AF" }}>Current Plan</span>
        </div>
      </div>
    </div>
  );
}

export default function DarkFeatures() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <section style={{ background: DARK, overflow: "hidden" }} id="core-ai">
      {/* ── CORE AI spotlight ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 72,
          paddingBottom: 0,
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", width: 340, height: 260 }}
        >
          <Image
            src="/assets/hero-core-ai.png"
            alt="CORE AI"
            width={688}
            height={496}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
              display: "block",
            }}
          />
        </motion.div>
      </div>

      {/* ── Section heading ── */}
      <div
        ref={headerRef}
        style={{
          textAlign: "center",
          padding: "48px 24px 72px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "white",
            marginBottom: 20,
          }}
        >
          Go deeper with
          <br />
          <span
            style={{
              background:
                "linear-gradient(115deg, #3B82F6 0%, #22D3EE 50%, #A855F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CORE Intelligence
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Get personalized guidance and actionable advice on retirement from
          your own 24/7 coach.
        </motion.p>
      </div>

      {/* ── Feature cards ── */}
      <div
        style={{
          maxWidth: 1376,
          margin: "0 auto",
          padding: "0 24px 96px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* ── Card 1: Speak your language ── */}
        <FeatureCard delay={0} bg="#EFEBFF" minH={620}>
          {/* Left: text + lang toggle */}
          <div
            style={{
              flex: "0 0 46%",
              padding: "64px 48px 64px 72px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(2.2rem, 3.2vw, 3.2rem)",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                color: "#1a1a2e",
                marginBottom: 20,
              }}
            >
              Speak your language.
              <br />
              Plan with confidence.
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#1F1F24",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 380,
                opacity: 0.65,
              }}
            >
              Core 3.0 is available in both English and Spanish, so every
              participant can understand, navigate, and take action in the
              language they prefer.
            </p>

            {/* Language toggle — pill buttons */}
            <div style={{ display: "flex", gap: 10 }}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setLang("en")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 99,
                  background: lang === "en" ? PURPLE : "white",
                  color: lang === "en" ? "white" : PURPLE,
                  border: `2px solid ${lang === "en" ? PURPLE : "rgba(124,58,237,0.30)"}`,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: lang === "en" ? "0 4px 16px rgba(124,58,237,0.28)" : "none",
                }}
              >
                English <span>🇺🇸</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setLang("es")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 99,
                  background: lang === "es" ? PURPLE : "white",
                  color: lang === "es" ? "white" : PURPLE,
                  border: `2px solid ${lang === "es" ? PURPLE : "rgba(124,58,237,0.30)"}`,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: lang === "es" ? "0 4px 16px rgba(124,58,237,0.28)" : "none",
                }}
              >
                Español <span>🇲🇽</span>
              </motion.button>
            </div>
          </div>

          {/* Right: globe + chat bubbles illustration */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: "40px 48px 40px 16px",
              position: "relative",
            }}
          >
            <LanguageGlobeIllustration lang={lang} />
          </div>
        </FeatureCard>

        {/* ── Card 2: Choose how you interact ── */}
        <FeatureCard delay={0.08} bg="linear-gradient(135deg, #ECE8FF 0%, #FDE0D4 100%)" minH={620}>
          {/* Left: text */}
          <div
            style={{
              flex: "0 0 44%",
              padding: "64px 48px 64px 72px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(2.2rem, 3.2vw, 3.2rem)",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                color: "#1a1a2e",
                marginBottom: 20,
              }}
            >
              Choose how
              <br />
              you interact.
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#1F1F24",
                lineHeight: 1.7,
                maxWidth: 380,
                opacity: 0.65,
              }}
            >
              Use the traditional experience with intuitive menus and
              dashboards, or chat with{" "}
              <strong style={{ fontWeight: 700, opacity: 1 }}>
                CORE Intelligence
              </strong>{" "}
              for instant answers and personalised assistance.
            </p>
          </div>

          {/* Right: dashboard + OR + chat */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              padding: "28px 20px 28px 12px",
              overflow: "hidden",
              minWidth: 0,
            }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              style={{ flex: "1 1 0", minWidth: 0 }}
            >
              <DashboardMockup />
            </motion.div>

            {/* OR divider */}
            <div
              style={{
                flexShrink: 0,
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "white",
                border: "1px solid rgba(0,0,0,0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 600,
                color: "#9CA3AF",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            >
              or
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              style={{ flex: "1 1 0", minWidth: 0 }}
            >
              <ChatMockup />
            </motion.div>
          </div>
        </FeatureCard>

        {/* ── Card 3: AI that guides ── */}
        <FeatureCard delay={0.12} bg="linear-gradient(135deg, #EDE8FF 0%, #FFE4DC 100%)" minH={620}>
          {/* Left: text */}
          <div
            style={{
              flex: "0 0 44%",
              padding: "64px 48px 64px 72px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(2.2rem, 3.2vw, 3.2rem)",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                color: "#1a1a2e",
                marginBottom: 20,
              }}
            >
              AI that guides,
              <br />
              not just answers.
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#1F1F24",
                lineHeight: 1.7,
                maxWidth: 380,
                opacity: 0.65,
              }}
            >
              Get personalized insights and proactive recommendations based
              on your goals, savings progress, and life events, so you always
              know your next best step.
            </p>
          </div>

          {/* Right: AI Insight card */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "40px 56px 40px 16px",
              overflow: "hidden",
            }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%", maxWidth: 480 }}
            >
              <AIInsightCard />
            </motion.div>
          </div>
        </FeatureCard>

        {/* ── Card 4: See tomorrow, today ── */}
        <FeatureCard delay={0.16} bg="linear-gradient(135deg, #EEF2FF 0%, #E4E8FF 100%)" minH={620}>
          {/* Left: text */}
          <div
            style={{
              flex: "0 0 44%",
              padding: "64px 48px 64px 72px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(2.2rem, 3.2vw, 3.2rem)",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                color: "#1a1a2e",
                marginBottom: 20,
              }}
            >
              See tomorrow,
              <br />
              today.
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#1F1F24",
                lineHeight: 1.7,
                maxWidth: 380,
                opacity: 0.65,
              }}
            >
              Live projections update in real time as you adjust contributions,
              retirement age, or goals, so every decision you make is backed
              by clarity.
            </p>
          </div>

          {/* Right: Retirement Projection Chart */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 56px 40px 16px",
              overflow: "hidden",
            }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%", maxWidth: 480 }}
            >
              <RetirementProjectionChart />
            </motion.div>
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}
