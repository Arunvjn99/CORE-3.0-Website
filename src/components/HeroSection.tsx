"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function DashboardMockup() {
  return (
    <div className="w-full bg-[#F7F7F5] rounded-b-lg overflow-hidden" style={{ minHeight: 420 }}>
      <div className="flex h-full" style={{ minHeight: 420 }}>
        {/* Sidebar */}
        <div className="w-[200px] shrink-0 bg-white border-r border-black/[0.05] p-4 flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-5 px-2 pt-1">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
              <span className="text-white font-bold text-[7px]">C3</span>
            </div>
            <span className="text-[11px] font-semibold text-[#0F0F0F]">Core 3</span>
          </div>
          {[
            { label: "Dashboard", active: true, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { label: "Investments", active: false, icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            { label: "Readiness", active: false, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
            { label: "Core AI", active: false, icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
            { label: "Transactions", active: false, icon: "M7 16l-4-4m0 0l4-4m-4 4h18" },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer transition-all ${item.active ? "bg-[#4F46E5]/[0.08] text-[#4F46E5]" : "text-[#8A8A8A] hover:bg-black/[0.03]"}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d={item.icon} /></svg>
              <span className={`text-[11px] font-medium`}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[13px] font-semibold text-[#0F0F0F]">Good morning, Sarah</div>
              <div className="text-[10px] text-[#8A8A8A]">Your retirement is on track</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white text-[9px] font-bold">S</div>
            </div>
          </div>

          {/* Top stat cards */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-xl p-3.5 border border-black/[0.05]">
              <div className="text-[9px] text-[#8A8A8A] mb-1 uppercase tracking-wide">Balance</div>
              <div className="text-[18px] font-bold text-[#0F0F0F] tabular-nums">$142,893</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[9px] text-[#059669] font-semibold">+12.4%</span>
                <span className="text-[9px] text-[#8A8A8A]">YTD</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3.5 border border-black/[0.05]">
              <div className="text-[9px] text-[#8A8A8A] mb-1 uppercase tracking-wide">Projected at 65</div>
              <div className="text-[18px] font-bold text-[#4F46E5] tabular-nums">$1.2M</div>
              <div className="w-full h-1 bg-[#F0F0EE] rounded-full mt-2">
                <div className="h-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full" style={{ width: "80%" }} />
              </div>
            </div>
            <div className="bg-white rounded-xl p-3.5 border border-black/[0.05]">
              <div className="text-[9px] text-[#8A8A8A] mb-1 uppercase tracking-wide">Readiness Score</div>
              <div className="flex items-end gap-1.5">
                <div className="text-[18px] font-bold text-[#059669] tabular-nums">80</div>
                <div className="text-[9px] text-[#8A8A8A] mb-0.5">/100</div>
              </div>
              <div className="text-[9px] text-[#059669] font-semibold mt-0.5">On Track ✓</div>
            </div>
          </div>

          {/* Chart area */}
          <div className="bg-white rounded-xl p-4 border border-black/[0.05] mb-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-[#0F0F0F]">Portfolio Growth</span>
              <span className="text-[9px] text-[#8A8A8A] bg-[#F3F3F0] px-2 py-0.5 rounded-full">1Y</span>
            </div>
            <svg viewBox="0 0 300 80" className="w-full" style={{ height: 70 }}>
              <defs>
                <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 65 C30 60 50 55 80 45 C110 35 130 40 160 30 C190 20 210 25 240 15 C260 8 280 10 300 5 L300 80 L0 80 Z" fill="url(#heroChartGrad)" />
              <path d="M0 65 C30 60 50 55 80 45 C110 35 130 40 160 30 C190 20 210 25 240 15 C260 8 280 10 300 5" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="300" cy="5" r="3" fill="#4F46E5" />
            </svg>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Contribute", color: "#4F46E5" },
              { label: "Invest", color: "#7C3AED" },
              { label: "Transfer", color: "#0891B2" },
              { label: "Loan", color: "#059669" },
            ].map((action) => (
              <div key={action.label} className="bg-white rounded-lg p-2.5 border border-black/[0.05] text-center hover:border-[#4F46E5]/20 transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-md mx-auto mb-1.5 flex items-center justify-center" style={{ backgroundColor: action.color + "15" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: action.color }} />
                </div>
                <span className="text-[9px] text-[#525252] font-medium">{action.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const mockupY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.05]);

  return (
    <section ref={ref} className="section-light relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[20%] w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #4F46E5, transparent 70%)" }} />
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #0891B2, transparent 70%)" }} />
        <div className="absolute bottom-[0%] left-[40%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-28">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-black/[0.06] bg-white/80 mb-10 shadow-card">
          <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
          <span className="text-[12px] text-[#525252] font-medium tracking-wide">Now available — Participant Portal 3.0</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-7">
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-bold text-[#0F0F0F] leading-[1.04] tracking-[-0.04em]">
              Retirement planning
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.04em]">
              <span className="gradient-text">people actually love.</span>
            </motion.h1>
          </div>
        </div>

        {/* Subheadline */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[clamp(1rem,1.8vw,1.2rem)] text-[#525252] max-w-xl mx-auto mb-10 leading-relaxed">
          Core 3 is the AI-powered 401(k) portal that turns enrollment, investing, and
          retirement readiness into an experience employees genuinely enjoy.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <motion.button whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(79,70,229,0.25)" }} whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full text-[14px] font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] shadow-[0_2px_12px_rgba(79,70,229,0.2)]">
            Request a demo
          </motion.button>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full text-[14px] font-medium text-[#525252] border border-black/[0.1] hover:border-black/[0.2] hover:bg-black/[0.02] transition-all duration-300 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            See it in action
          </motion.button>
        </motion.div>

        {/* Trust logos */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="mt-14 flex justify-center items-center gap-10">
          <span className="text-[11px] text-[#B5B5B5] tracking-wide uppercase">Trusted by</span>
          {["Vanguard", "Lincoln", "Ascend", "Congruent"].map((name) => (
            <span key={name} className="text-[14px] font-semibold text-black/[0.12] hover:text-black/[0.25] transition-colors duration-300 tracking-tight">{name}</span>
          ))}
        </motion.div>
      </motion.div>

      {/* Product mockup */}
      <motion.div style={{ y: mockupY, scale: mockupScale }} className="relative z-10 mt-16 w-full max-w-[960px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}>
          <div className="browser-chrome shadow-float">
            <div className="browser-chrome-bar">
              <div className="dots"><div className="dot" /><div className="dot" /><div className="dot" /></div>
              <div className="flex-1 ml-3">
                <div className="bg-black/[0.03] rounded-lg px-4 py-1.5 text-[11px] text-[#B5B5B5] max-w-[260px] mx-auto text-center font-mono flex items-center justify-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  app.core3.com
                </div>
              </div>
            </div>
            <DashboardMockup />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-12 bg-black/[0.03] blur-[30px] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-black/[0.12] rounded-full flex justify-center pt-2">
          <div className="w-1 h-1 bg-black/20 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
