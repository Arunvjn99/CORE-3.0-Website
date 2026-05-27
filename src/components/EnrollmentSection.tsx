"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Plan Selection", desc: "Choose between Traditional, Roth, or both based on AI tax-bracket analysis.", gradient: "from-[#4F46E5] to-[#7C3AED]" },
  { num: "02", title: "Contribution Rate", desc: "Set your % with live take-home pay preview. See employer match instantly.", gradient: "from-[#7C3AED] to-[#0891B2]" },
  { num: "03", title: "Investment Strategy", desc: "Pick model portfolios or build your own. Risk-adjusted for your target date.", gradient: "from-[#0891B2] to-[#059669]" },
  { num: "04", title: "Auto-Increase", desc: "Set a 1% annual auto-escalation. Small moves that compound dramatically.", gradient: "from-[#059669] to-[#4F46E5]" },
  { num: "05", title: "Readiness Check", desc: "See your live score and projected balance. Adjust before you commit.", gradient: "from-[#4F46E5] to-[#E11D48]" },
  { num: "06", title: "Review & Confirm", desc: "Everything on one screen. Confirm and you're enrolled in under 5 minutes.", gradient: "from-[#E11D48] to-[#D97706]" },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E11D48]/20 bg-[#E11D48]/[0.06] mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FB7185]" />
            <span className="text-[12px] font-semibold text-[#FB7185] tracking-wider uppercase">Enrollment</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-4">
            Six steps. Five minutes.{" "}
            <span className="bg-gradient-to-r from-[#FB7185] via-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Zero confusion.</span>
          </h2>
          <p className="text-[16px] text-white/35 leading-relaxed">
            A guided enrollment journey that adapts to every choice. No PDFs. No meetings. No friction.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 bento-card overflow-hidden hover:border-white/[0.1]">
              <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${step.gradient} rounded-full opacity-0 group-hover:opacity-[0.06] blur-3xl transition-opacity duration-700`} />
              <div className="relative z-10">
                <span className={`text-[11px] font-bold tracking-wider bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>STEP {step.num}</span>
                <h3 className="text-[16px] font-semibold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-[13px] text-white/30 leading-relaxed group-hover:text-white/45 transition-colors">{step.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.02]">
                <motion.div className={`h-full bg-gradient-to-r ${step.gradient}`}
                  initial={{ width: "0%" }} animate={inView ? { width: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 0.4 + i * 0.12 }} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }} className="flex justify-center mt-8 gap-2 items-center">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-[12px] text-white/20">Average enrollment time: 4 min 32 sec</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
