"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── colour tokens ─────────────────────────────────────────────────────────────
const PURPLE = "#6D28D9";
const BLUE   = "#4F46E5";
const GREEN  = "#22C55E";
const TEAL   = "#14B8A6";
const ORANGE = "#F97316";

// ── metric rows shown in the dashboard panel ──────────────────────────────────
const METRICS = [
  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "Retirement Balance",  progress: 82, color: GREEN,   valueText: "On Track",    valueColor: GREEN },
  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    label: "Annual Contribution", progress: 56, color: "#3B82F6", valueText: "8%",         valueColor: "#2563EB" },
  { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Employer Match",      progress: 48, color: "#7C3AED", valueText: "$3,250",      valueColor: "#7C3AED" },
  { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    label: "Retirement Age",      progress: 70, color: ORANGE,  valueText: "65",          valueColor: ORANGE },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    label: "Projected Income",    progress: 78, color: TEAL,    valueText: "$62,400/mo",  valueColor: TEAL },
];

// ── action bar icons ──────────────────────────────────────────────────────────
const ACTIONS = [
  { icon: "M12 4v16m8-8H4",                                                                                                                                   label: "Update\nContributions" },
  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",                                                                                                                  label: "View Investment\nPerformance" },
  { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",                                                                            label: "Retirement\nProfile" },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: "Beneficiaries" },
  { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",                          label: "Documents" },
  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",                                           label: "Message\nCenter" },
];

// ── left-side feature list ────────────────────────────────────────────────────
const FEATURES = [
  { icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z", text: "Custom logos and brand assets" },
  { icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", text: "Light & dark theme customization" },
  { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", text: "Branded domains" },
  { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", text: "Personalized participant experiences" },
  { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", text: "No development required" },
];

// ── 270° speedometer gauge ────────────────────────────────────────────────────
function RetirementGauge({ value = 80 }: { value?: number }) {
  const cx = 65, cy = 70, r = 52;
  const startDeg = 135;          // 7-o'clock in SVG coords
  const totalSweep = 270;

  const pt = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const bgStart = pt(startDeg);
  const bgEnd   = pt(45);        // 135 + 270 − 360 = 45 (5-o'clock)
  const fillEndDeg = startDeg + (value / 100) * totalSweep;
  const fillEnd    = pt(fillEndDeg > 360 ? fillEndDeg - 360 : fillEndDeg);
  const fillLarge  = ((value / 100) * totalSweep > 180) ? 1 : 0;

  return (
    <svg width={130} height={130} viewBox="0 0 130 130">
      <defs>
        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* track */}
      <path
        d={`M ${bgStart.x.toFixed(1)} ${bgStart.y.toFixed(1)} A ${r} ${r} 0 1 1 ${bgEnd.x.toFixed(1)} ${bgEnd.y.toFixed(1)}`}
        fill="none" stroke="#E8EDF5" strokeWidth={10} strokeLinecap="round"
      />
      {/* fill */}
      <path
        d={`M ${bgStart.x.toFixed(1)} ${bgStart.y.toFixed(1)} A ${r} ${r} 0 ${fillLarge} 1 ${fillEnd.x.toFixed(1)} ${fillEnd.y.toFixed(1)}`}
        fill="none" stroke="url(#gaugeGrad)" strokeWidth={10} strokeLinecap="round"
      />
      {/* centre value */}
      <text x="65" y="62" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="28" fontWeight="800" fill="#0F172A">{value}</text>
      <text x="65" y="78" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10"  fill="#94A3B8">out of 100</text>
    </svg>
  );
}

// ── area chart paths ──────────────────────────────────────────────────────────
const W = 460, H = 110;
const currentPath  = `M 0 ${H} C 120 95 290 82 ${W} 60 L ${W} ${H} Z`;
const proposedPath = `M 0 ${H} C 110 76 270 52 ${W} 28 L ${W} ${H} Z`;
const currentLine  = `M 0 ${H - 10} C 120 85 290 72 ${W} 50`;
const proposedLine = `M 0 ${H - 10} C 110 66 270 42 ${W} 18`;

// ── sub-components ────────────────────────────────────────────────────────────
function MetricsCard({ inView }: { inView: boolean }) {
  return (
    <div style={{ background: "white", borderRadius: 16, border: "1px solid #F1F5F9", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", padding: "20px 20px 8px", flex: 1, minWidth: 0 }}>
      {METRICS.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, x: 14 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}
        >
          {/* icon */}
          <div style={{ width: 32, height: 32, borderRadius: 9, background: `${m.color}14`, border: `1px solid ${m.color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d={m.icon} />
            </svg>
          </div>
          {/* label + bar */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 4 }}>{m.label}</div>
            <div style={{ height: 5, borderRadius: 3, background: "#F1F5F9" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${m.progress}%` } : {}}
                transition={{ duration: 0.9, delay: 0.35 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: "100%", borderRadius: 3, background: m.color }}
              />
            </div>
          </div>
          {/* value */}
          <div style={{ fontSize: 13, fontWeight: 700, color: m.valueColor, flexShrink: 0, minWidth: 64, textAlign: "right" as const }}>{m.valueText}</div>
          {/* arrow */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function ReadinessCard({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      style={{ background: "white", borderRadius: 16, border: "1px solid #F1F5F9", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", padding: "20px 16px 16px", display: "flex", flexDirection: "column" as const, alignItems: "center", minWidth: 186 }}
    >
      {/* header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>Retirement Readiness</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
      </div>
      {/* gauge */}
      <RetirementGauge value={80} />
      {/* on track pill */}
      <div style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 99, background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN, display: "block" }} />
        <span style={{ fontSize: 11, fontWeight: 700, color: GREEN }}>On Track</span>
      </div>
      <p style={{ fontSize: 11, color: "#94A3B8", textAlign: "center" as const, lineHeight: 1.55, marginTop: 10, padding: "0 4px" }}>
        You&apos;re right on track for a confident retirement. Keep going!
      </p>
    </motion.div>
  );
}

function ProjectionCard({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.42 }}
      style={{ background: "white", borderRadius: 16, border: "1px solid #F1F5F9", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", padding: "18px 20px 14px", overflow: "hidden" }}
    >
      {/* header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>Live Projection</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
          </div>
          <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>Monthly Income (Projected)</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginTop: 4 }}>$62,400</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 99, padding: "5px 10px" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          <span style={{ fontSize: 11, fontWeight: 700, color: GREEN }}>18%</span>
          <span style={{ fontSize: 10, color: "#64748B" }}>vs. current plan</span>
        </div>
      </div>

      {/* area chart */}
      <div style={{ overflow: "hidden", borderRadius: 8 }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
          <defs>
            <linearGradient id="propGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#C7D2FE" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#C7D2FE" stopOpacity={0.04} />
            </linearGradient>
            <linearGradient id="currGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#E0E7FF" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#E0E7FF" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          {/* proposed fill area */}
          <path d={proposedPath} fill="url(#propGrad)" />
          {/* current fill area */}
          <path d={currentPath}  fill="url(#currGrad)" />
          {/* proposed line */}
          <path d={proposedLine} fill="none" stroke="#6366F1" strokeWidth={2} strokeLinecap="round" strokeDasharray="6 3" />
          {/* current line */}
          <path d={currentLine}  fill="none" stroke="#818CF8" strokeWidth={1.5} strokeLinecap="round" />
        </svg>
      </div>

      {/* x-axis labels */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        {["Today", "Age 50", "Age 60", "Retirement"].map(l => (
          <span key={l} style={{ fontSize: 10, color: "#94A3B8" }}>{l}</span>
        ))}
      </div>

      {/* legend */}
      <div style={{ display: "flex", gap: 16, marginTop: 10, justifyContent: "center" }}>
        {[{ color: "#818CF8", dash: false, label: "Current Plan" }, { color: "#6366F1", dash: true, label: "Proposed Plan" }].map(lg => (
          <div key={lg.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <svg width={22} height={6}>
              <line x1="0" y1="3" x2="22" y2="3" stroke={lg.color} strokeWidth={2} strokeDasharray={lg.dash ? "5 3" : undefined} strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 10, color: "#64748B" }}>{lg.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ActionBar({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.55 }}
      style={{ background: "white", borderRadius: 16, border: "1px solid #F1F5F9", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", padding: "14px 20px", display: "flex", justifyContent: "space-around" }}
    >
      {ACTIONS.map(a => (
        <div key={a.label} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 6, cursor: "pointer" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F5F3FF", border: "1px solid #EDE9FE", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={a.icon} />
            </svg>
          </div>
          <span style={{ fontSize: 9, color: "#64748B", textAlign: "center" as const, lineHeight: 1.35, whiteSpace: "pre-line" as const }}>{a.label}</span>
        </div>
      ))}
    </motion.div>
  );
}

// ── main export ───────────────────────────────────────────────────────────────
export default function WhiteLabelSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 px-6"
      style={{ background: "linear-gradient(170deg, #F4F3FF 0%, #FFFFFF 45%, #F0F4FF 100%)" }}
    >
      {/* ambient glow */}
      <div style={{ position: "absolute", top: "10%", left: "30%", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(109,40,217,0.05), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[390px_1fr] gap-12 lg:gap-16 items-start">

        {/* ══ LEFT — text ══ */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:sticky lg:top-24"
        >
          {/* badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 99, background: "#F5F3FF", border: "1px solid #DDD6FE", marginBottom: 24 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="2" strokeLinecap="round">
              <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: PURPLE }}>
              White Labeling Application
            </span>
          </div>

          {/* headline — stacked like image */}
          <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", color: "#0F172A", marginBottom: 22 }}>
            Your brand.
            <br />
            <span style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Our platform.
            </span>
            <br />
            Their future.
          </h2>

          <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.75, marginBottom: 32, maxWidth: 360 }}>
            CORE 3.0 adapts to your identity with customizable branding, themes, domains, and experiences. Deliver a trusted participant experience that feels uniquely yours while leveraging the power of CORE Intelligence behind the scenes.
          </p>

          {/* feature list */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: "1px solid #F1F5F9" }}
              >
                <div style={{ width: 32, height: 32, borderRadius: 9, background: "#F5F3FF", border: "1px solid #EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <span style={{ fontSize: 14, color: "#334155", fontWeight: 500 }}>{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══ RIGHT — dashboard mockup ══ */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}
        >
          {/* top row: metrics + readiness */}
          <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
            <MetricsCard inView={inView} />
            <ReadinessCard inView={inView} />
          </div>

          {/* live projection chart */}
          <ProjectionCard inView={inView} />

          {/* action bar */}
          <ActionBar inView={inView} />
        </motion.div>

      </div>
    </section>
  );
}
