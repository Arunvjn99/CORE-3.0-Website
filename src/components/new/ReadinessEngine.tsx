"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";

const TEAL  = "#22D3EE";
const GREEN = "#10B981";
const BLUE  = "#3B82F6";
const PURPLE= "#8B5CF6";
const PINK  = "#EC4899";
const YELLOW= "#F59E0B";

const SCORE_CYCLE = [
  { score: 80, status: "You're fully on track",       statusColor: GREEN,  statusIcon: "M20 6L9 17l-5-5" },
  { score: 65, status: "Getting there — keep going",  statusColor: YELLOW, statusIcon: "M12 9v4m0 4h.01" },
  { score: 92, status: "Excellent readiness",          statusColor: GREEN,  statusIcon: "M20 6L9 17l-5-5" },
  { score: 73, status: "On pace — small changes help", statusColor: TEAL,   statusIcon: "M12 9v4m0 4h.01" },
  { score: 88, status: "Almost there",                 statusColor: GREEN,  statusIcon: "M20 6L9 17l-5-5" },
];

// ── Decorative concentric arc rings ──────────────────────────────────────────
function ArcRings() {
  const radii = [340, 275, 215, 162, 115, 76];
  return (
    <div style={{
      position: "absolute", top: -90, right: -100,
      pointerEvents: "none", opacity: 0.5,
    }}>
      <svg width={460} height={460} viewBox="0 0 460 460">
        {radii.map((r, i) => (
          <circle
            key={i}
            cx={460} cy={0} r={r}
            fill="none"
            stroke={`rgba(59,130,246,${0.10 - i * 0.013})`}
            strokeWidth={1.6}
          />
        ))}
      </svg>
    </div>
  );
}

// ── Gauge inside phone screen ─────────────────────────────────────────────────
function PhoneGauge({ value, inView }: { value: number; inView: boolean }) {
  const R  = 58;
  const sw = 7;
  const nr = R - sw / 2;
  const circ = 2 * Math.PI * nr;
  const prog = useMotionValue(0);
  const dash = useTransform(prog, (v) => circ - (v / 100) * circ);
  const [disp, setDisp] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(prog, value, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisp(Math.round(v)),
    });
    return ctrl.stop;
  }, [inView, value, prog]);

  return (
    <div style={{ position: "relative", width: R * 2, height: R * 2 }}>
      <svg
        width={R * 2} height={R * 2}
        style={{ transform: "rotate(-90deg)" }}
      >
        <defs>
          <linearGradient id="pgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor={GREEN} />
            <stop offset="100%" stopColor={TEAL}  />
          </linearGradient>
        </defs>
        <circle cx={R} cy={R} r={nr} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={sw} />
        <motion.circle
          cx={R} cy={R} r={nr}
          fill="none"
          stroke="url(#pgGrad)"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeDasharray={circ}
          style={{ strokeDashoffset: dash }}
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column" as const,
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ fontSize: 8, color: "rgba(255,255,255,0.38)", letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 2 }}>
          Score
        </div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <motion.span
            key={value}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            style={{
              fontSize: 32, fontWeight: 800, lineHeight: 1,
              background: `linear-gradient(135deg, ${GREEN}, ${TEAL})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}
          >
            {disp}
          </motion.span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", marginLeft: 2 }}>/100</span>
        </div>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function ReadinessEngine() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [cycleIdx, setCycleIdx] = useState(0);
  const current = SCORE_CYCLE[cycleIdx];

  const [rate, setRate]     = useState(8);
  const projection          = Math.round(1_200_000 * (rate / 8));
  const [projShown, setProjShown] = useState(0);
  const projMotion          = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCycleIdx((i) => (i + 1) % SCORE_CYCLE.length), 4000);
    return () => clearInterval(id);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(projMotion, projection, {
      duration: 0.7, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setProjShown(Math.round(v)),
    });
    return ctrl.stop;
  }, [inView, projection, projMotion]);

  const fmt = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${(n / 1000).toFixed(0)}K`;

  const features = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      label: "Live score updates",
      desc:  "Readiness score adjusts instantly as you change contribution rate",
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      label: "Inflation-adjusted projections",
      desc:  "Balance forecasts account for real-world purchasing power over decades",
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      label: "Auto-escalation modeling",
      desc:  "See the compounding power of annual +1% contribution increases",
    },
  ];

  return (
    <section
      id="readiness"
      ref={ref}
      className="relative overflow-hidden py-24 px-6"
      style={{ background: "linear-gradient(155deg, #EAF2FF 0%, #F2F7FF 55%, #EDF5FF 100%)" }}
    >
      {/* Concentric arc rings — top-right corner */}
      <ArcRings />

      {/* Bottom ambient wash */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 220,
        background: "linear-gradient(0deg, rgba(219,234,254,0.28), transparent)",
        pointerEvents: "none",
      }} />

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ══════════ LEFT — phone + floating cards ══════════ */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", width: 360, height: 490, flexShrink: 0 }}
        >

          {/* ── Floating card: Contribution Rate (upper-right) ── */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{
              position: "absolute", top: 50, right: 0, zIndex: 20,
              background: "white",
              borderRadius: 16,
              padding: "14px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.9) inset",
              border: "1px solid rgba(0,0,0,0.05)",
              width: 158,
            }}
          >
            <div style={{ fontSize: 9, color: "#94A3B8", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 7 }}>
              Contribution Rate
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 9 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: BLUE, lineHeight: 1 }}>{rate}</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: BLUE }}>%</span>
              <span style={{ fontSize: 11, color: GREEN, fontWeight: 600, marginLeft: "auto" }}>▲ Active</span>
            </div>
            <input
              type="range" min={1} max={25} value={rate}
              onChange={(e) => setRate(parseInt(e.target.value))}
              style={{
                width: "100%", height: 4, borderRadius: 4,
                appearance: "none" as const, WebkitAppearance: "none" as const,
                background: `linear-gradient(90deg, ${BLUE} ${(rate / 25) * 100}%, #E2E8F0 ${(rate / 25) * 100}%)`,
                cursor: "pointer",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#CBD5E1", marginTop: 4 }}>
              <span>1%</span><span>25%</span>
            </div>
          </motion.div>

          {/* ── Phone frame — centred in container ── */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 200,
            height: 420,
            background: "linear-gradient(180deg, #0D1628 0%, #0A1020 100%)",
            borderRadius: 38,
            border: "8px solid #1C2A42",
            boxShadow: [
              "0 48px 100px rgba(0,0,0,0.28)",
              "0 0 0 1px rgba(255,255,255,0.06)",
              "inset 0 0 0 1px rgba(255,255,255,0.03)",
            ].join(", "),
            overflow: "hidden",
          }}>
            {/* Dynamic island */}
            <div style={{
              position: "absolute", top: 10, left: "50%",
              transform: "translateX(-50%)",
              width: 70, height: 20,
              background: "#000", borderRadius: 10, zIndex: 10,
            }} />

            {/* Side buttons */}
            <div style={{ position: "absolute", right: -10, top: 90, width: 5, height: 40, background: "#1C2A42", borderRadius: "0 4px 4px 0" }} />
            <div style={{ position: "absolute", left: -10, top: 80, width: 5, height: 28, background: "#1C2A42", borderRadius: "4px 0 0 4px" }} />
            <div style={{ position: "absolute", left: -10, top: 118, width: 5, height: 28, background: "#1C2A42", borderRadius: "4px 0 0 4px" }} />

            {/* Screen content */}
            <div style={{
              paddingTop: 40, paddingLeft: 14, paddingRight: 14,
              height: "100%",
              display: "flex", flexDirection: "column" as const, alignItems: "center",
              overflowY: "hidden" as const,
            }}>
              {/* App bar */}
              <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "white", letterSpacing: "-0.01em" }}>CORE 3.0</span>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.09)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8">
                    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
              </div>

              {/* Gauge */}
              <PhoneGauge value={current.score} inView={inView} />

              {/* Status pill */}
              <motion.div
                key={cycleIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  marginTop: 10,
                  display: "inline-flex", alignItems: "center", gap: 5,
                  padding: "5px 11px", borderRadius: 20,
                  background: `${current.statusColor}18`,
                  border: `1px solid ${current.statusColor}32`,
                  color: current.statusColor,
                  fontSize: 9, fontWeight: 700,
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d={current.statusIcon} />
                </svg>
                {current.status}
              </motion.div>

              {/* Thin divider */}
              <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.05)", margin: "14px 0" }} />

              {/* Rate bar */}
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.32)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Contribution</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: TEAL }}>{rate}%</span>
              </div>
              <div style={{ width: "100%", height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 3, marginBottom: 14 }}>
                <div style={{ height: "100%", width: `${(rate / 25) * 100}%`, background: `linear-gradient(90deg, ${TEAL}, ${GREEN})`, borderRadius: 3 }} />
              </div>

              {/* Projected balance pill */}
              <div style={{
                width: "100%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "10px 12px",
              }}>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 4 }}>
                  Projected at 65
                </div>
                <motion.div
                  key={projection}
                  initial={{ opacity: 0.7, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: 22, fontWeight: 800,
                    background: `linear-gradient(135deg, ${PURPLE}, ${PINK})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}
                >
                  {fmt(projShown)}
                </motion.div>
              </div>

              {/* Toggle row */}
              <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.32)" }}>Auto-escalation</span>
                <div style={{ width: 28, height: 15, borderRadius: 8, background: `${GREEN}33`, display: "flex", alignItems: "center", padding: "0 2px", justifyContent: "flex-end" }}>
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: GREEN }} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Floating card: Projected Balance (lower-left) ── */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              position: "absolute", bottom: 55, left: 0, zIndex: 20,
              background: "white",
              borderRadius: 16,
              padding: "14px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.9) inset",
              border: "1px solid rgba(0,0,0,0.05)",
              width: 148,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
              <motion.div
                style={{ width: 7, height: 7, borderRadius: "50%", background: PURPLE, boxShadow: `0 0 8px ${PURPLE}88` }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span style={{ fontSize: 9, color: "#94A3B8", textTransform: "uppercase" as const, letterSpacing: "0.12em" }}>
                Projected
              </span>
            </div>
            <motion.div
              key={projection}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              style={{
                fontSize: 22, fontWeight: 800,
                background: `linear-gradient(135deg, #7C3AED, ${PINK})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
              }}
            >
              {fmt(projShown)}
            </motion.div>
            <div style={{ fontSize: 10, color: "#94A3B8", marginTop: 3 }}>at age 65</div>
          </motion.div>
        </motion.div>

        {/* ══════════ RIGHT — text content ══════════ */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col flex-1"
        >
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 99,
            background: "rgba(16,185,129,0.09)", border: "1px solid rgba(16,185,129,0.24)",
            marginBottom: 22, width: "fit-content",
          }}>
            <motion.span
              style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, display: "block" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: GREEN }}>
              Readiness Engine
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.07,
            letterSpacing: "-0.035em",
            color: "#0F172A",
            marginBottom: 20,
          }}>
            Watch your future
            <br />
            <span style={{
              background: `linear-gradient(135deg, ${GREEN} 0%, ${TEAL} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              change in real time.
            </span>
          </h2>

          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.75, maxWidth: 440, marginBottom: 36 }}>
            Every decision instantly updates your projected outcome.
            Drag the slider. See the impact. Make the call.
          </p>

          {/* Feature rows */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                style={{ display: "flex", gap: 14 }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", marginBottom: 3 }}>{f.label}</div>
                  <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
            style={{ display: "flex", gap: 24, marginTop: 36 }}
          >
            {[
              { label: "Avg readiness lift", value: "+18pts" },
              { label: "Contribution boost",  value: "+2.4%" },
              { label: "Participants guided", value: "2.1M+"  },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em" }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
