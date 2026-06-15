"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-dark relative py-32 overflow-hidden">
      {/* Animated mesh */}
      <div className="absolute inset-0 mesh-bg-animated opacity-50" />
      <div className="absolute inset-0 pattern-grid opacity-25" />

      {/* Floating orbs */}
      <motion.div className="absolute top-[15%] left-[12%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,149,0,0.25) 0%, transparent 70%)", filter: "blur(60px)" }}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[15%] right-[12%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(214,126,0,0.28) 0%, transparent 70%)", filter: "blur(60px)" }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute top-[40%] left-[45%] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,179,71,0.22) 0%, transparent 70%)", filter: "blur(50px)" }}
        animate={{ y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.06] pointer-events-none" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}}
          transition={{ duration: 1.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.05] pointer-events-none" />

        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 glass-dark">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="text-[12px] font-semibold text-white/85 tracking-wide">Limited 2026 onboarding slots remaining</span>
          </div>

          <h2 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-white tracking-[-0.045em] leading-[1.04] mb-6">
            Stop wondering if you&apos;ll <br className="hidden sm:block" />
            <span className="gradient-text">retire on time.</span>
          </h2>
          <p className="text-[clamp(1rem,1.6vw,1.2rem)] text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you&apos;re an employee starting at zero or a plan sponsor protecting thousands —
            Core 3 turns retirement from a worry into a plan.
          </p>

          {/* Dual-path CTAs */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            <motion.div whileHover={{ y: -4 }} className="group relative rounded-2xl p-6 text-left overflow-hidden gradient-border"
              style={{ background: "linear-gradient(135deg, rgba(255,149,0,0.10), rgba(255,179,71,0.06))" }}>
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "radial-gradient(circle,#FF9500,transparent 70%)", filter: "blur(30px)" }} />
              <div className="relative z-10">
                <div className="text-[11px] font-semibold text-[#60A5FA] tracking-wider uppercase mb-2">For Employees</div>
                <div className="text-[20px] font-bold text-white mb-2">Enroll in 5 minutes</div>
                <div className="text-[13px] text-white/55 mb-5">Build your AI-guided retirement plan. Free for participants.</div>
                <button className="magnetic-btn w-full px-5 py-3 rounded-xl text-[13px] font-semibold text-white flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(120deg,#FF9500,#FFB347)", boxShadow: "0 6px 24px rgba(255,149,0,0.4)" }}>
                  Start enrolling
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </button>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="group relative rounded-2xl p-6 text-left overflow-hidden gradient-border"
              style={{ background: "linear-gradient(135deg, rgba(214,126,0,0.10), rgba(179,105,0,0.06))" }}>
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "radial-gradient(circle,#D67E00,transparent 70%)", filter: "blur(30px)" }} />
              <div className="relative z-10">
                <div className="text-[11px] font-semibold text-[#FFB347] tracking-wider uppercase mb-2">For Employers · HR</div>
                <div className="text-[20px] font-bold text-white mb-2">Book a demo</div>
                <div className="text-[13px] text-white/55 mb-5">30-min walkthrough · ROI report · pilot in 11 days.</div>
                <button className="magnetic-btn w-full px-5 py-3 rounded-xl text-[13px] font-semibold text-white flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(120deg,#D67E00,#B36900)", boxShadow: "0 6px 24px rgba(214,126,0,0.4)" }}>
                  Talk to sales
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {["No credit card required", "Free 60-day pilot", "SOC 2 Type II compliant", "ERISA approved"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
              <span className="text-[12px] text-white/45">{t}</span>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md flex items-center justify-center shadow-glow-blue" style={{ background: "linear-gradient(135deg,#FF9500,#FFB347,#D67E00)" }}>
                <span className="text-white font-bold text-[8px]">C3</span>
              </div>
              <span className="text-[13px] text-white/55">Core 3 Participant Portal v3.0</span>
            </div>
            <div className="flex gap-6 text-[12px] text-white/30">
              <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white/60 transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-white/60 transition-colors cursor-pointer">Security</span>
              <span className="hover:text-white/60 transition-colors cursor-pointer">Status</span>
              <span className="hover:text-white/60 transition-colors cursor-pointer">Contact</span>
            </div>
            <span className="text-[12px] text-white/25">© 2026 Core 3 · Made for the next generation of savers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
