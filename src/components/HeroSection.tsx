"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";

/* ─── Animated Mesh Gradient Backdrop ─── */
function MeshBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: "#0A0F1A" }} />
      {/* Drifting orbs — warm orange tones */}
      <motion.div
        className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,149,0,0.35), transparent 65%)", filter: "blur(60px)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[10%] right-[-10%] w-[640px] h-[640px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,179,71,0.28), transparent 65%)", filter: "blur(60px)" }}
        animate={{ x: [0, -60, 40, 0], y: [0, 50, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[820px] h-[820px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(214,126,0,0.35), transparent 65%)", filter: "blur(70px)" }}
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[55%] w-[420px] h-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,149,0,0.30), transparent 65%)", filter: "blur(60px)" }}
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 pattern-grid-bright opacity-60" />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(10,15,26,0.6) 100%)" }} />
    </div>
  );
}

/* ─── Live Counter ─── */
function CountUp({ to, prefix = "", suffix = "", duration = 2, delay = 0 }: { to: number; prefix?: string; suffix?: string; duration?: number; delay?: number }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    const controls = animate(mv, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    });
    return () => controls.stop();
  }, [to, duration, delay, mv]);
  return <span className="tabular-nums">{prefix}{display}{suffix}</span>;
}

/* ─── Live Dashboard Mockup ─── */
function HeroDashboardMockup() {
  return (
    <div className="w-full overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0F1A 0%, #141A28 100%)", minHeight: 460 }}>
      <div className="flex h-full" style={{ minHeight: 460 }}>
        {/* Sidebar */}
        <div className="w-[210px] shrink-0 border-r border-white/[0.05] p-4 flex flex-col gap-1" style={{ background: "rgba(10,15,26,0.6)" }}>
          <div className="flex items-center gap-2 mb-6 px-2 pt-1">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-glow-blue" style={{ background: "#FF9500" }}>
              <span className="text-white font-bold text-[8px]">C3</span>
            </div>
            <span className="text-[12px] font-semibold text-white tracking-tight">Core 3</span>
          </div>
          {[
            { label: "Dashboard", active: true, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { label: "Investments", active: false, icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            { label: "Readiness", active: false, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10" },
            { label: "Core AI", active: false, icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
            { label: "Transactions", active: false, icon: "M7 16l-4-4m0 0l4-4m-4 4h18" },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer transition-all ${item.active ? "text-white" : "text-white/40 hover:bg-white/[0.04]"}`} style={item.active ? { background: "linear-gradient(90deg, rgba(255,149,0,0.22), rgba(255,179,71,0.12))", boxShadow: "inset 0 0 0 1px rgba(255,149,0,0.30)" } : {}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d={item.icon} /></svg>
              <span className="text-[11px] font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[13px] font-semibold text-white">Good morning, Sarah</div>
              <div className="text-[10px] text-white/40">Your retirement is on track</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[10px] text-[#34D399] font-medium">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="rounded-xl p-3.5 border border-white/[0.06]" style={{ background: "rgba(255,255,255,0.025)" }}>
              <div className="text-[9px] text-white/40 mb-1 uppercase tracking-wide">Balance</div>
              <div className="text-[18px] font-bold text-white tabular-nums"><CountUp to={142893} prefix="$" delay={1.5} /></div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[9px] text-[#34D399] font-semibold">+12.4%</span>
                <span className="text-[9px] text-white/30">YTD</span>
              </div>
            </div>
            <div className="rounded-xl p-3.5 border border-white/[0.06]" style={{ background: "rgba(255,255,255,0.025)" }}>
              <div className="text-[9px] text-white/40 mb-1 uppercase tracking-wide">Projected at 65</div>
              <div className="text-[18px] font-bold gradient-text-static tabular-nums">$1.2M</div>
              <div className="w-full h-1 bg-white/[0.06] rounded-full mt-2">
                <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,#FF9500,#FFB347,#FFCB7A)" }} initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1.6, delay: 1.8, ease: [0.16,1,0.3,1] }} />
              </div>
            </div>
            <div className="rounded-xl p-3.5 border border-white/[0.06]" style={{ background: "rgba(255,255,255,0.025)" }}>
              <div className="text-[9px] text-white/40 mb-1 uppercase tracking-wide">Readiness</div>
              <div className="flex items-end gap-1.5">
                <div className="text-[18px] font-bold text-[#34D399] tabular-nums">80</div>
                <div className="text-[9px] text-white/30 mb-0.5">/100</div>
              </div>
              <div className="text-[9px] text-[#34D399] font-semibold mt-0.5">On Track ✓</div>
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-xl p-4 border border-white/[0.06] mb-3" style={{ background: "rgba(255,255,255,0.025)" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-white">Portfolio Growth</span>
              <span className="text-[9px] text-white/40 px-2 py-0.5 rounded-full" style={{ background: "rgba(255,149,0,0.12)", border: "1px solid rgba(255,149,0,0.25)" }}>1Y</span>
            </div>
            <svg viewBox="0 0 300 80" className="w-full" style={{ height: 70 }}>
              <defs>
                <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF9500" stopOpacity="0.40" />
                  <stop offset="100%" stopColor="#FF9500" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="heroChartLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF9500" />
                  <stop offset="50%" stopColor="#FFB347" />
                  <stop offset="100%" stopColor="#FFCB7A" />
                </linearGradient>
              </defs>
              <motion.path d="M0 65 C30 60 50 55 80 45 C110 35 130 40 160 30 C190 20 210 25 240 15 C260 8 280 10 300 5 L300 80 L0 80 Z" fill="url(#heroChartGrad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.9 }} />
              <motion.path d="M0 65 C30 60 50 55 80 45 C110 35 130 40 160 30 C190 20 210 25 240 15 C260 8 280 10 300 5" fill="none" stroke="url(#heroChartLine)" strokeWidth="2" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.7, ease: [0.16,1,0.3,1] }}
                style={{ filter: "drop-shadow(0 0 6px rgba(255,149,0,0.55))" }} />
              <motion.circle cx="300" cy="5" r="4" fill="#FFB347" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3.6, type: "spring", stiffness: 300 }} style={{ filter: "drop-shadow(0 0 8px #FFB347)" }} />
            </svg>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Contribute", color: "#FF9500" },
              { label: "Invest", color: "#FFB347" },
              { label: "Transfer", color: "#D67E00" },
              { label: "Loan", color: "#34D399" },
            ].map((action) => (
              <div key={action.label} className="rounded-lg p-2.5 border border-white/[0.06] text-center hover:border-white/[0.15] transition-colors cursor-pointer" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="w-6 h-6 rounded-md mx-auto mb-1.5 flex items-center justify-center" style={{ backgroundColor: action.color + "20", boxShadow: `0 0 12px ${action.color}30` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: action.color }} />
                </div>
                <span className="text-[9px] text-white/60 font-medium">{action.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─── */
export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const mockupY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.06]);

  return (
    <section ref={ref} className="section-dark relative min-h-[115vh] flex flex-col items-center justify-center overflow-hidden">
      <MeshBackdrop />

      {/* Floating credibility chip */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16,1,0.3,1] }}
        className="absolute top-24 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-dark">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <span className="text-[12px] text-white/80 font-medium tracking-wide">Core 3 — Participant Portal v3.0 · Live in 2026</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32">

        {/* Kinetic headline */}
        <div className="mb-8">
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.6rem,7vw,6rem)] font-bold text-white leading-[0.98] tracking-[-0.045em]">
              Your retirement,
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.98] tracking-[-0.045em]">
              <span className="gradient-text">finally on autopilot.</span>
            </motion.h1>
          </div>
        </div>

        {/* Subheadline */}
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="text-[clamp(1.05rem,1.7vw,1.25rem)] text-white/55 max-w-2xl mx-auto mb-3 leading-relaxed">
          The AI-powered 401(k) portal that enrolls you in <span className="text-white/85 font-medium">5 minutes</span>,
          optimizes contributions automatically, and shows you exactly when you can retire.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }}
          className="text-[14px] text-white/35 mb-10">
          <span className="text-[#F59E0B] font-semibold">73% of Americans</span> aren't saving enough. We're fixing that.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="magnetic-btn group relative px-8 py-3.5 rounded-full text-[14px] font-semibold text-white overflow-hidden"
            style={{ background: "#FF9500", boxShadow: "0 4px 24px rgba(255,149,0,0.50), 0 0 0 1px rgba(255,255,255,0.1) inset" }}>
            <span className="relative z-10 flex items-center gap-2">
              Start enrolling — 5 minutes
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(120deg, #FFB347, #FF9500, #D67E00)" }} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="magnetic-btn px-8 py-3.5 rounded-full text-[14px] font-medium text-white/85 border border-white/15 hover:bg-white/[0.04] hover:border-white/25 transition-all flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            Watch 90-sec demo
          </motion.button>
        </motion.div>

        {/* Inline social proof */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0A0F1A]" style={{ background: `linear-gradient(135deg, hsl(${i*60+200},80%,60%), hsl(${i*60+260},70%,55%))` }} />
              ))}
            </div>
            <span className="text-[12px] text-white/55"><span className="text-white font-semibold">2.4M+</span> participants enrolled</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/15" />
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 .587l3.668 7.568L24 9.75l-6 5.875L19.336 24 12 19.897 4.664 24 6 15.625 0 9.75l8.332-1.595z"/></svg>
              ))}
            </div>
            <span className="text-[12px] text-white/55"><span className="text-white font-semibold">4.9</span> avg rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/15" />
          <span className="text-[12px] text-white/55">SOC 2 Type II · ERISA Compliant</span>
        </motion.div>
      </motion.div>

      {/* Product mockup */}
      <motion.div style={{ y: mockupY, scale: mockupScale }} className="relative z-10 mt-20 w-full max-w-[1040px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.6, ease: [0.16, 1, 0.3, 1] }} className="relative">
          {/* Glow behind */}
          <div className="absolute -inset-8 rounded-3xl opacity-60" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,149,0,0.40), rgba(214,126,0,0.28) 40%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="relative browser-chrome shadow-float">
            <div className="browser-chrome-bar">
              <div className="dots"><div className="dot" /><div className="dot" /><div className="dot" /></div>
              <div className="flex-1 ml-3">
                <div className="rounded-lg px-4 py-1.5 text-[11px] text-white/40 max-w-[280px] mx-auto text-center font-mono flex items-center justify-center gap-1.5" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  app.core3.com
                </div>
              </div>
            </div>
            <HeroDashboardMockup />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-2">
          <div className="w-1 h-1 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
