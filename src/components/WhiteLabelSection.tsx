"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  { name: "Ascend", primary: "#3B82F6", accent: "#60A5FA", bg: "rgba(59,130,246,0.08)" },
  { name: "Vanguard", primary: "#F43F5E", accent: "#FB7185", bg: "rgba(244,63,94,0.08)" },
  { name: "Lincoln", primary: "#22D3EE", accent: "#67E8F9", bg: "rgba(34,211,238,0.08)" },
  { name: "Congruent", primary: "#8B5CF6", accent: "#A78BFA", bg: "rgba(139,92,246,0.08)" },
];

const employerBenefits = [
  { label: "94%", desc: "enrollment completion rate", color: "#34D399" },
  { label: "3.2×", desc: "higher contribution rates", color: "#22D3EE" },
  { label: "$0", desc: "to participants — fully white-label", color: "#A78BFA" },
  { label: "11 days", desc: "from kickoff to live deployment", color: "#F59E0B" },
];

export default function WhiteLabelSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeBrand, setActiveBrand] = useState(0);
  const brand = brands[activeBrand];

  return (
    <section id="employers" ref={ref} className="section-dark relative py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-25" />
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${brand.primary}15, transparent 60%)`,
        transition: "background 0.8s",
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
            style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.22)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" style={{ boxShadow: "0 0 8px #22D3EE" }} />
            <span className="text-[12px] font-semibold text-[#67E8F9] tracking-wider uppercase">For Employers · HR · Plan Sponsors</span>
          </motion.div>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-5">
            Your brand.{" "}
            <span className="bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Our platform.</span>{" "}
            Their future.
          </h2>
          <p className="text-[16px] text-white/55 leading-relaxed">
            Drop Core 3 into your benefits stack under your colors, logo, and domain. Boost participation,
            slash HR support tickets, and finally hit your safe-harbor targets — without touching code.
          </p>
        </motion.div>

        {/* Employer ROI strip */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {employerBenefits.map((b, i) => (
            <motion.div key={b.label} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="rounded-2xl p-5 border border-white/[0.06] text-center bento-card"
              style={{ background: "rgba(255,255,255,0.025)" }}>
              <div className="text-[28px] font-bold tabular-nums" style={{ color: b.color, textShadow: `0 0 24px ${b.color}50` }}>{b.label}</div>
              <div className="text-[11px] text-white/55 mt-1">{b.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand switcher */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-3 mb-10">
          {brands.map((b, i) => (
            <motion.button key={b.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              onClick={() => setActiveBrand(i)}
              className={`px-5 py-2.5 rounded-xl text-[13px] font-semibold border transition-all duration-500 ${
                i === activeBrand ? "text-white" : "text-white/40 border-white/[0.06] hover:border-white/[0.12]"
              }`}
              style={i === activeBrand ? { background: b.primary + "20", borderColor: b.primary + "50", boxShadow: `0 0 24px ${b.primary}30` } : { background: "rgba(255,255,255,0.02)" }}>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: b.primary, boxShadow: `0 0 8px ${b.primary}` }} />
                {b.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }} className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-8 rounded-3xl blur-2xl opacity-50" style={{ background: `radial-gradient(ellipse, ${brand.primary}40, transparent 70%)`, transition: "background 0.8s" }} />
          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-float" style={{ background: "linear-gradient(180deg,#0A0E27,#0F1531)" }}>
            <div className="px-4 py-3 flex items-center gap-2 border-b border-white/[0.05]">
              <div className="flex gap-1.5">
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex-1 ml-3">
                <div className="rounded-lg px-3 py-1 text-[11px] text-white/35 max-w-[260px] mx-auto text-center font-mono" style={{ background: "rgba(255,255,255,0.04)" }}>
                  401k.{brand.name.toLowerCase()}.com
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[13px] font-bold shadow-glow-blue"
                  animate={{ backgroundColor: brand.primary, boxShadow: `0 0 24px ${brand.primary}80` }} transition={{ duration: 0.5 }}>
                  {brand.name[0]}
                </motion.div>
                <div>
                  <div className="text-[14px] font-semibold text-white">{brand.name} Retirement Portal</div>
                  <div className="text-[10px] text-white/45">Powered by Core 3 · White-label deployment</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-4 border border-white/[0.06]" style={{ background: brand.bg, transition: "background 0.5s" }}>
                  <div className="text-[11px] text-white/45 mb-1">Your Balance</div>
                  <div className="text-[22px] font-bold text-white tabular-nums">$142,893</div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div className="h-full rounded-full"
                      animate={{ backgroundColor: brand.primary, width: "72%", boxShadow: `0 0 8px ${brand.primary}` }}
                      transition={{ duration: 0.8 }} />
                  </div>
                </div>
                <div className="rounded-xl p-4 border border-white/[0.06]" style={{ background: "rgba(255,255,255,0.025)" }}>
                  <div className="text-[11px] text-white/45 mb-1">Readiness</div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="relative w-12 h-12">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                        <motion.circle cx="18" cy="18" r="14" fill="none" strokeWidth="3" strokeDasharray="88"
                          animate={{ stroke: brand.primary, strokeDashoffset: 88 * 0.2 }} transition={{ duration: 0.8 }} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-white">80</div>
                    </div>
                    <motion.span className="text-[11px] font-semibold" animate={{ color: brand.primary }} transition={{ duration: 0.5 }}>On Track</motion.span>
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-4 gap-2">
                  {["Contribute", "Invest", "Transfer", "Loan"].map((label) => (
                    <div key={label} className="rounded-lg p-2.5 text-center border border-white/[0.06]" style={{ background: "rgba(255,255,255,0.02)" }}>
                      <motion.div className="w-6 h-6 rounded-md mx-auto mb-1 flex items-center justify-center"
                        animate={{ backgroundColor: brand.primary + "20" }} transition={{ duration: 0.5 }}>
                        <motion.div className="w-1.5 h-1.5 rounded-sm" animate={{ backgroundColor: brand.primary }} transition={{ duration: 0.5 }} />
                      </motion.div>
                      <div className="text-[10px] text-white/55">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Employer CTAs */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="magnetic-btn px-7 py-3 rounded-full text-[14px] font-semibold text-white"
            style={{ background: "linear-gradient(120deg,#22D3EE,#3B82F6,#8B5CF6)", boxShadow: "0 6px 24px rgba(34,211,238,0.35)" }}>
            Book a 30-min demo with our team
          </motion.button>
          <button className="px-7 py-3 rounded-full text-[14px] font-medium text-white/70 border border-white/15 hover:bg-white/[0.04]">
            Download the employer ROI report (PDF)
          </button>
        </motion.div>
      </div>
    </section>
  );
}
