"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-dark relative py-32 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute inset-0 pattern-dots opacity-10" />

      {/* Floating orbs */}
      <motion.div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
        animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
        animate={{ y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Decorative ring */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.04] pointer-events-none" />

        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-6">
            Ready to reimagine{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">retirement?</span>
          </h2>
          <p className="text-[18px] text-white/35 max-w-xl mx-auto mb-10 leading-relaxed">
            Give your participants the experience they deserve. Modern, intelligent, and beautifully crafted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(99,102,241,0.3)" }} whileTap={{ scale: 0.97 }}
              className="relative px-10 py-4 rounded-full text-[15px] font-semibold text-white overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Request a Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full text-[15px] font-medium text-white/50 border border-white/[0.08] hover:text-white/80 hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all duration-500">
              View Documentation
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center gap-8">
          {["No credit card required", "Free pilot program", "SOC 2 compliant"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-indigo-400/60" />
              <span className="text-[12px] text-white/20">{t}</span>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-[8px]">C3</span>
              </div>
              <span className="text-[13px] text-white/30">Core 3 Participant Portal</span>
            </div>
            <div className="flex gap-6 text-[12px] text-white/15">
              <span className="hover:text-white/30 transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white/30 transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-white/30 transition-colors cursor-pointer">Security</span>
              <span className="hover:text-white/30 transition-colors cursor-pointer">Contact</span>
            </div>
            <span className="text-[12px] text-white/10">&copy; 2026 Core 3</span>
          </div>
        </div>
      </div>
    </section>
  );
}
