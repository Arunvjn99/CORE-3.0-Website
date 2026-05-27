"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  { name: "Ascend", primary: "#6366f1", accent: "#818cf8", bg: "rgba(99,102,241,0.06)" },
  { name: "Vanguard", primary: "#dc2626", accent: "#ef4444", bg: "rgba(220,38,38,0.06)" },
  { name: "Lincoln", primary: "#0d9488", accent: "#14b8a6", bg: "rgba(13,148,136,0.06)" },
  { name: "Congruent", primary: "#7c3aed", accent: "#8b5cf6", bg: "rgba(124,58,237,0.06)" },
];

export default function WhiteLabelSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeBrand, setActiveBrand] = useState(0);
  const brand = brands[activeBrand];

  return (
    <section id="platform" ref={ref} className="section-dark relative py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-grid-fine opacity-20" />
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${brand.primary}08, transparent 60%)`,
        transition: "background 0.8s",
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[12px] font-semibold text-cyan-400 tracking-wider uppercase">White Label</span>
          </motion.div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-5">
            Your brand.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Our platform.</span>
          </h2>
          <p className="text-[17px] text-white/35 leading-relaxed">
            Deploy under any brand — colors, logos, and identity switch at runtime. One platform, infinite identities.
          </p>
        </motion.div>

        {/* Brand switcher */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }} className="flex justify-center gap-3 mb-12">
          {brands.map((b, i) => (
            <motion.button key={b.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              onClick={() => setActiveBrand(i)}
              className={`px-5 py-2.5 rounded-xl text-[13px] font-semibold border transition-all duration-500 ${
                i === activeBrand
                  ? "text-white border-white/[0.1]"
                  : "text-white/30 border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08]"
              }`}
              style={i === activeBrand ? { backgroundColor: b.primary + "20", borderColor: b.primary + "30" } : {}}>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: b.primary }} />
                {b.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }} className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-px rounded-2xl blur-sm" style={{ background: `linear-gradient(135deg, ${brand.primary}30, transparent 50%)`, transition: "background 0.8s" }} />
          <div className="relative rounded-2xl border border-white/[0.06] bg-[#0A0A12] overflow-hidden shadow-float">
            {/* Browser bar */}
            <div className="px-4 py-3 flex items-center gap-2 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.06]" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.06]" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/[0.06]" />
              </div>
              <div className="flex-1 ml-3">
                <div className="bg-white/[0.04] rounded-lg px-3 py-1 text-[11px] text-white/20 max-w-[240px] mx-auto text-center font-mono">
                  {brand.name.toLowerCase()}.core3.com
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <motion.div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold"
                  animate={{ backgroundColor: brand.primary }} transition={{ duration: 0.5 }}>
                  {brand.name[0]}
                </motion.div>
                <span className="text-[14px] font-semibold text-white/80">{brand.name} Retirement Portal</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-4 border border-white/[0.04]" style={{ background: brand.bg, transition: "background 0.5s" }}>
                  <div className="text-[11px] text-white/30 mb-1">Your Balance</div>
                  <div className="text-[22px] font-bold text-white tabular-nums">$142,893</div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                    <motion.div className="h-full rounded-full" animate={{ backgroundColor: brand.primary, width: "72%" }}
                      transition={{ duration: 0.8 }} />
                  </div>
                </div>
                <div className="rounded-xl p-4 border border-white/[0.04] bg-white/[0.02]">
                  <div className="text-[11px] text-white/30 mb-1">Readiness</div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="relative w-12 h-12">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                        <motion.circle cx="18" cy="18" r="14" fill="none" strokeWidth="3" strokeDasharray="88"
                          animate={{ stroke: brand.primary, strokeDashoffset: 88 * 0.2 }} transition={{ duration: 0.8 }} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white">80</div>
                    </div>
                    <motion.span className="text-[11px] font-semibold" animate={{ color: brand.primary }} transition={{ duration: 0.5 }}>On Track</motion.span>
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-4 gap-2">
                  {["Contribute", "Invest", "Transfer", "Loan"].map((label) => (
                    <div key={label} className="rounded-lg p-2 text-center border border-white/[0.04] bg-white/[0.01]">
                      <motion.div className="w-5 h-5 rounded-md mx-auto mb-1" animate={{ backgroundColor: brand.primary + "15" }} transition={{ duration: 0.5 }}>
                        <div className="w-full h-full flex items-center justify-center">
                          <motion.div className="w-1.5 h-1.5 rounded-sm" animate={{ backgroundColor: brand.primary }} transition={{ duration: 0.5 }} />
                        </div>
                      </motion.div>
                      <div className="text-[9px] text-white/30">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
