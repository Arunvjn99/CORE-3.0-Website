"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Plan Selection", desc: "Traditional, Roth, or both — AI suggests the optimal mix from your tax bracket.", gradient: "from-[#3B82F6] to-[#22D3EE]" },
  { num: "02", title: "Contribution Rate", desc: "Set your % with live take-home pay preview. See employer match capture instantly.", gradient: "from-[#22D3EE] to-[#8B5CF6]" },
  { num: "03", title: "Investment Strategy", desc: "Pick a target-date portfolio or build your own. Risk-adjusted by AI.", gradient: "from-[#8B5CF6] to-[#6D28D9]" },
  { num: "04", title: "Auto-Increase", desc: "1% annual escalation. Tiny moves that compound into hundreds of thousands.", gradient: "from-[#6D28D9] to-[#3B82F6]" },
  { num: "05", title: "Readiness Check", desc: "See your live score and projected balance. Tweak before you commit.", gradient: "from-[#3B82F6] to-[#10B981]" },
  { num: "06", title: "Review & Confirm", desc: "Everything on one screen. Confirm — and you're enrolled in under 5 minutes.", gradient: "from-[#10B981] to-[#34D399]" },
];

export default function EnrollmentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-dark relative py-28 overflow-hidden">
      <div className="absolute inset-0 pattern-dots-dark opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.22)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" style={{ boxShadow: "0 0 8px #F59E0B" }} />
            <span className="text-[12px] font-semibold text-[#FBBF24] tracking-wider uppercase">5-Minute Enrollment</span>
          </div>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-4">
            Six steps. Five minutes.{" "}
            <span className="gradient-text-static">Zero confusion.</span>
          </h2>
          <p className="text-[16px] text-white/55 leading-relaxed">
            The average 401(k) enrollment takes <span className="text-white line-through">38 days</span> <span className="text-[#34D399] font-semibold">— ours takes 4 minutes 32 seconds.</span> No PDFs. No HR meetings. No jargon. Just clarity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              className="group relative rounded-2xl border border-white/[0.06] p-6 bento-card overflow-hidden hover:border-white/[0.15]" style={{ background: "rgba(255,255,255,0.025)" }}>
              <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${step.gradient} rounded-full opacity-0 group-hover:opacity-[0.12] blur-3xl transition-opacity duration-700`} />
              <div className="relative z-10">
                <span className={`text-[11px] font-bold tracking-wider bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>STEP {step.num}</span>
                <h3 className="text-[17px] font-semibold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-[13px] text-white/45 leading-relaxed group-hover:text-white/65 transition-colors">{step.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.02]">
                <motion.div className={`h-full bg-gradient-to-r ${step.gradient}`}
                  initial={{ width: "0%" }} animate={inView ? { width: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 0.4 + i * 0.12 }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }} className="flex justify-center mt-12">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="magnetic-btn group relative px-9 py-3.5 rounded-full text-[14px] font-semibold text-white overflow-hidden"
            style={{ background: "linear-gradient(120deg,#F59E0B,#F43F5E,#8B5CF6)", boxShadow: "0 6px 30px rgba(245,158,11,0.35)" }}>
            <span className="relative z-10 flex items-center gap-2">
              Enroll now — start your 5 minutes
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </motion.button>
        </motion.div>
        <p className="text-center text-[11px] text-white/30 mt-4">Average completion: 4 min 32 sec · 94% finish on first try</p>
      </div>
    </section>
  );
}
