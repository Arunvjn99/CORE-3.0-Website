"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PURPLE = "#6D28D9";
const PURPLE_MID = "#7C3AED";
const ORANGE = "#EA580C";

function IconCircle({ d }: { d: string }) {
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center mb-7 shrink-0"
      style={{ background: `${ORANGE}12`, border: `1.5px solid ${ORANGE}35` }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </div>
  );
}

// ── Section 1: Language ───────────────────────────────────────────────────────
function LanguageSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#EFEBFF" }}>
      {/* Wireframe globe background */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none" style={{ width: "50%" }}>
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none" className="opacity-[0.18]" style={{ transform: "translateX(20%)" }}>
          <circle cx="240" cy="240" r="190" stroke={PURPLE} strokeWidth="1.2" />
          <ellipse cx="240" cy="240" rx="85" ry="190" stroke={PURPLE} strokeWidth="1" />
          <ellipse cx="240" cy="240" rx="160" ry="190" stroke={PURPLE} strokeWidth="0.8" />
          <ellipse cx="240" cy="240" rx="190" ry="75" stroke={PURPLE} strokeWidth="1" />
          <ellipse cx="240" cy="240" rx="190" ry="130" stroke={PURPLE} strokeWidth="0.8" />
          <line x1="50" y1="240" x2="430" y2="240" stroke={PURPLE} strokeWidth="0.8" />
          <line x1="240" y1="50" x2="240" y2="430" stroke={PURPLE} strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <IconCircle d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-2.76 0-5 4.48-5 10s2.24 10 5 10 5-4.48 5-10S14.76 2 12 2zM2 12h20" />
          <h2 className="font-bold leading-tight text-gray-900 mb-5" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", letterSpacing: "-0.025em" }}>
            Speak your language.<br />Plan with confidence.
          </h2>
          <p className="text-gray-500 leading-relaxed mb-9 max-w-sm" style={{ fontSize: "15px" }}>
            CORE 3.0 is available in both English and Spanish, so every participant can understand, navigate, and take action in the language they prefer.
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: PURPLE_MID }}>
              English <span className="text-base">🇺🇸</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold transition-opacity hover:opacity-80"
              style={{ border: `1.5px solid ${PURPLE_MID}`, color: PURPLE_MID, background: "white" }}>
              Español <span className="text-base">🇲🇽</span>
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col gap-5 items-start">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3.5 px-5 py-4 self-start"
            style={{ background: "white", boxShadow: "0 12px 40px rgba(0,0,0,0.10)", borderRadius: "20px 20px 20px 5px", maxWidth: 300 }}>
            <span className="text-[14px] font-medium text-gray-900 leading-snug">Hello! Let&apos;s plan your retirement.</span>
            <span className="text-2xl shrink-0">🇺🇸</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3.5 px-5 py-4 self-end"
            style={{ background: PURPLE_MID, boxShadow: "0 12px 40px rgba(109,40,217,0.28)", borderRadius: "20px 20px 5px 20px", maxWidth: 300 }}>
            <span className="text-[14px] font-medium text-white leading-snug">¡Hola! Planeemos su retiro.</span>
            <span className="text-2xl shrink-0">🇲🇽</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 2: Choose how you interact ────────────────────────────────────────
function InteractSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#FFF8F3" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <IconCircle d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          <h2 className="font-bold leading-tight text-gray-900 mb-5" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", letterSpacing: "-0.025em" }}>
            Choose how<br />you interact.
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-sm" style={{ fontSize: "15px" }}>
            Use the traditional experience with intuitive menus and dashboards, or chat with <span className="font-semibold" style={{ color: PURPLE_MID }}>CORE Intelligence</span> for instant answers and personalized assistance.
          </p>
        </motion.div>

        {/* RIGHT — dual mockup */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center gap-3">
          {/* Traditional UI card */}
          <div className="flex-1 rounded-2xl overflow-hidden" style={{ background: "white", boxShadow: "0 16px 48px rgba(0,0,0,0.10)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <div className="flex">
              {/* Sidebar */}
              <div className="w-28 border-r border-gray-100 p-3 shrink-0" style={{ background: "#FAFAFA" }}>
                {[
                  { label: "Overview", active: true, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { label: "Accounts", active: false, icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
                  { label: "Investments", active: false, icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { label: "Transactions", active: false, icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                  { label: "Documents", active: false, icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { label: "Profile", active: false, icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 px-2 py-2 rounded-lg mb-0.5 text-[10px] font-medium"
                    style={{ background: item.active ? `${PURPLE_MID}15` : "transparent", color: item.active ? PURPLE_MID : "#9CA3AF" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                    {item.label}
                  </div>
                ))}
              </div>
              {/* Main */}
              <div className="p-3 flex-1 min-w-0">
                <div className="text-[11px] font-bold text-gray-800 mb-2">Overview</div>
                {/* Mini sparkline */}
                <svg width="100%" height="36" viewBox="0 0 100 36" preserveAspectRatio="none" className="mb-3">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={ORANGE} stopOpacity="0.25" />
                      <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,30 L15,24 L30,20 L45,22 L60,14 L75,9 L90,6 L100,3 L100,36 L0,36Z" fill="url(#chartFill)" />
                  <path d="M0,30 L15,24 L30,20 L45,22 L60,14 L75,9 L90,6 L100,3" fill="none" stroke={ORANGE} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div className="text-[9px] text-gray-400 uppercase tracking-wide mb-0.5">Retirement Readiness</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[17px] font-bold text-gray-900">72%</span>
                  <span className="flex items-center gap-1 text-[9px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "#DCFCE7", color: "#16A34A" }}>
                    <span className="w-1 h-1 rounded-full bg-green-500 inline-block" /> On Track
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* OR divider */}
          <div className="text-[13px] font-bold text-gray-400 shrink-0">or</div>

          {/* AI chat card */}
          <div className="flex-1 rounded-2xl overflow-hidden" style={{ background: "white", boxShadow: "0 16px 48px rgba(0,0,0,0.10)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <div className="px-3 py-2.5 border-b border-gray-100 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={PURPLE_MID} strokeWidth="2">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <span className="text-[11px] font-semibold text-gray-700">CORE Intelligence</span>
            </div>
            <div className="p-3 space-y-2.5 min-h-[140px]">
              <div className="flex justify-start">
                <div className="text-[10px] leading-relaxed px-3 py-2 rounded-xl max-w-[80%] text-white font-medium"
                  style={{ background: PURPLE_MID, borderBottomLeftRadius: 4 }}>
                  How can I help you today?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-[10px] leading-relaxed px-3 py-2 rounded-xl max-w-[80%] text-gray-700"
                  style={{ background: "#F3F4F6", borderBottomRightRadius: 4 }}>
                  How much should I save per month?
                </div>
              </div>
              <div className="flex gap-1 pt-1 pl-1">
                {[0, 1, 2].map((i) => (
                  <motion.span key={i} className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#D1D5DB" }}
                    animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.18 }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 3: AI Guidance ────────────────────────────────────────────────────
function AIGuideSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const insights = [
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Increase your contribution",
      desc: "By $50/month, you could increase your monthly retirement income by",
      highlight: "$320",
      color: ORANGE,
    },
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "You may be eligible for more",
      desc: "Review your employer match to maximize your retirement savings.",
      highlight: null,
      color: "#0EA5E9",
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Consider adjusting your goal",
      desc: "Retiring at 62 may require a higher monthly savings rate.",
      highlight: null,
      color: PURPLE_MID,
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#FFF2F6" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <IconCircle d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          <h2 className="font-bold leading-tight text-gray-900 mb-5" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", letterSpacing: "-0.025em" }}>
            AI that guides,<br />not just answers.
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-sm" style={{ fontSize: "15px" }}>
            Get personalized insights and proactive recommendations based on your goals, savings progress, and life events—so you always know your next best step.
          </p>
        </motion.div>

        {/* RIGHT — AI insight panel */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="rounded-2xl overflow-hidden" style={{ background: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.10)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={PURPLE_MID} strokeWidth="2">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <span className="text-[13px] font-semibold text-gray-800">AI Insight</span>
            </div>
            <div className="divide-y divide-gray-50">
              {insights.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-4 px-5 py-4 group cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-gray-900 mb-0.5">{item.title}</div>
                    <div className="text-[12px] text-gray-500 leading-relaxed">
                      {item.desc}
                      {item.highlight && (
                        <span className="font-bold ml-1" style={{ color: ORANGE }}>{item.highlight}.</span>
                      )}
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" className="shrink-0 mt-1 group-hover:stroke-gray-400 transition-colors">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 4: Projection ─────────────────────────────────────────────────────
function ProjectionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#F0F3FF" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <IconCircle d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zm11.89-10.07L14.5 8.31 9 13.74l.89.89.89.89 5.43-5.43 1.88-1.88a2.85 2.85 0 000-4.04 2.85 2.85 0 00-4.04 0z" />
          <h2 className="font-bold leading-tight text-gray-900 mb-5" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)", letterSpacing: "-0.025em" }}>
            See tomorrow,<br />today.
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-sm" style={{ fontSize: "15px" }}>
            Live projections update in real time as you adjust contributions, retirement age, or goals—so every decision you make is backed by clarity.
          </p>
        </motion.div>

        {/* RIGHT — projection chart card */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="rounded-2xl p-6" style={{ background: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.10)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <div className="flex items-start justify-between mb-1">
              <span className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide">Retirement Projection</span>
            </div>
            <div className="flex items-end justify-between mb-5">
              <div>
                <div className="text-[2.2rem] font-bold leading-none text-gray-900 tabular-nums">
                  $1,842<span className="text-[1.1rem] text-gray-500 font-medium">/mo</span>
                </div>
                <div className="text-[12px] text-gray-400 mt-1">Projected monthly income</div>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[12px] font-semibold"
                style={{ background: "#DCFCE7", color: "#16A34A" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 10l7-7 7 7M5 21l7-7 7 7" />
                </svg>
                18%
                <span className="text-[10px] font-normal text-green-600 ml-0.5">vs. current plan</span>
              </div>
            </div>

            {/* Chart */}
            <div className="relative">
              <svg width="100%" height="140" viewBox="0 0 400 140" preserveAspectRatio="none" className="overflow-visible">
                <defs>
                  <linearGradient id="proposedFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={PURPLE_MID} stopOpacity="0.18" />
                    <stop offset="100%" stopColor={PURPLE_MID} stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="currentFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Proposed plan area */}
                <motion.path
                  d="M0,130 C60,128 120,110 180,85 S300,35 400,15 L400,140 L0,140Z"
                  fill="url(#proposedFill)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                {/* Current plan area */}
                <motion.path
                  d="M0,130 C60,128 120,115 180,100 S300,68 400,50 L400,140 L0,140Z"
                  fill="url(#currentFill)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                {/* Current plan line */}
                <motion.path
                  d="M0,130 C60,128 120,115 180,100 S300,68 400,50"
                  fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
                {/* Proposed plan line */}
                <motion.path
                  d="M0,130 C60,128 120,110 180,85 S300,35 400,15"
                  fill="none" stroke={PURPLE_MID} strokeWidth="2.5" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />
                {/* Endpoint dots */}
                <motion.circle cx="400" cy="15" r="5" fill={PURPLE_MID}
                  initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 1.6, type: "spring" }} style={{ transformOrigin: "400px 15px" }} />
                <motion.circle cx="400" cy="50" r="4" fill="#A78BFA"
                  initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 1.7, type: "spring" }} style={{ transformOrigin: "400px 50px" }} />
              </svg>

              {/* End labels */}
              <div className="absolute right-0 top-0 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                  style={{ background: PURPLE_MID }}>$1,842</div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                  style={{ background: "#A78BFA" }}>$1,562</div>
              </div>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between text-[11px] text-gray-400 mt-2 px-1">
              <span>Today</span><span>Age 50</span><span>Age 60</span><span>Retirement</span>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-5 mt-4 pt-4 border-t border-gray-100">
              {[{ color: PURPLE_MID, label: "Proposed Plan" }, { color: "#A78BFA", label: "Current Plan", dashed: true }].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className="w-5 h-[2px]" style={{ background: l.color, borderTop: l.dashed ? `2px dashed ${l.color}` : undefined, borderBottom: "none", background: "none", borderColor: l.color, borderStyle: l.dashed ? "dashed" : "solid", borderTopWidth: 2, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }} />
                  <span className="text-[11px] text-gray-500">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function FeatureSections() {
  return (
    <>
      <LanguageSection />
      <InteractSection />
      <AIGuideSection />
      <ProjectionSection />
    </>
  );
}
