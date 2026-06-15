"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";

export default function ReadinessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState(0);
  const motionScore = useMotionValue(0);
  const displayScore = useTransform(motionScore, (v) => Math.round(v));

  const phases = [
    { score: 42, contribution: 3, label: "Where most Americans start", color: "#F43F5E", balance: "$380K", warn: "$820K short of your goal" },
    { score: 65, contribution: 6, label: "A small change, big impact", color: "#F59E0B", balance: "$720K", warn: "Just 3% more to hit target" },
    { score: 80, contribution: 8, label: "You're fully on track ✓", color: "#10B981", balance: "$1.2M", warn: "Retire confidently at 65" },
  ];

  useEffect(() => {
    if (!inView) return;
    const timers = [
      setTimeout(() => { setPhase(0); animate(motionScore, 42, { duration: 1.2 }); }, 500),
      setTimeout(() => { setPhase(1); animate(motionScore, 65, { duration: 1 }); }, 3000),
      setTimeout(() => { setPhase(2); animate(motionScore, 80, { duration: 1 }); }, 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView, motionScore]);

  const circumference = 2 * Math.PI * 120;
  const dashOffset = circumference - (phases[phase].score / 100) * circumference;
  const currentPhase = phases[phase];

  return (
    <section id="experience" ref={ref} className="section-dark relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 50% 40% at 50% 50%, ${currentPhase.color}18 0%, transparent 60%)`,
        transition: "background 1s"
      }} />
      <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.22)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" style={{ boxShadow: "0 0 8px #10B981" }} />
            <span className="text-[12px] font-semibold text-[#34D399] tracking-wider uppercase">Readiness Engine</span>
          </div>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-5">
            Watch your future{" "}
            <span className="gradient-text-money">change in real time.</span>
          </h2>
          <p className="text-[16px] text-white/55 leading-relaxed">
            Every decision — contribution rate, investment mix, auto-escalation — instantly updates your projected outcome.
            <span className="block mt-2 text-white/35">Drag the slider. See the impact. Make the call.</span>
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Gauge */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }} className="relative">
            <div className="absolute -inset-12 rounded-full animate-pulse-glow"
              style={{ background: `radial-gradient(circle, ${currentPhase.color}30, transparent 70%)`, filter: "blur(20px)", transition: "background 1s" }} />
            <svg width="260" height="260" viewBox="0 0 280 280">
              <defs>
                <linearGradient id="readinessGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={currentPhase.color} />
                  <stop offset="100%" stopColor={currentPhase.score >= 80 ? "#FFB347" : currentPhase.color} />
                </linearGradient>
              </defs>
              <circle cx="140" cy="140" r="120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
              <circle cx="140" cy="140" r="120" fill="none" stroke="url(#readinessGrad)" strokeWidth="10" strokeLinecap="round"
                strokeDasharray={circumference} strokeDashoffset={dashOffset} transform="rotate(-90 140 140)"
                style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.34,1.56,0.64,1), stroke 0.5s" }}
                filter={`drop-shadow(0 0 16px ${currentPhase.color}80)`} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div className="text-[52px] font-bold text-white tabular-nums leading-none">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <motion.span>{displayScore as any}</motion.span>
              </motion.div>
              <div className="text-[13px] text-white/20 mt-1">out of 100</div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }} className="max-w-sm w-full">
            <AnimatePresence mode="wait">
              <motion.div key={phase} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentPhase.color, boxShadow: `0 0 12px ${currentPhase.color}60` }} />
                  <span className="text-[14px] font-semibold" style={{ color: currentPhase.color }}>{currentPhase.label}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="rounded-xl border border-white/[0.08] p-4" style={{ background: "rgba(255,255,255,0.025)" }}>
                    <div className="text-[11px] text-white/40 mb-1">Contribution Rate</div>
                    <div className="text-[26px] font-bold text-white tabular-nums">{currentPhase.contribution}%</div>
                    <div className="w-full h-1.5 bg-white/[0.05] rounded-full mt-2 overflow-hidden">
                      <motion.div className="h-full rounded-full" style={{ backgroundColor: currentPhase.color, boxShadow: `0 0 8px ${currentPhase.color}` }}
                        animate={{ width: `${currentPhase.contribution * 5}%` }} transition={{ duration: 0.8 }} />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] p-4" style={{ background: "rgba(255,255,255,0.025)" }}>
                    <div className="text-[11px] text-white/40 mb-1">Projected at 65</div>
                    <div className="text-[26px] font-bold gradient-text-static tabular-nums">{currentPhase.balance}</div>
                    <div className="text-[10px] mt-1" style={{ color: currentPhase.color }}>{currentPhase.warn}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Phase dots */}
            <div className="flex gap-2">
              {phases.map((p, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i <= phase ? "w-8" : "w-1.5"}`}
                  style={{ backgroundColor: i <= phase ? p.color : "rgba(255,255,255,0.1)" }} />
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
