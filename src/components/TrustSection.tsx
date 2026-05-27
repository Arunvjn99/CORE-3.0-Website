"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const badges = [
  { label: "OTP Authentication", desc: "Secure two-factor verification", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, gradient: "from-indigo-500 to-violet-500" },
  { label: "Row-Level Security", desc: "Supabase RLS on every query", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, gradient: "from-cyan-500 to-emerald-500" },
  { label: "WCAG 2.1 AA", desc: "Accessible to all users", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>, gradient: "from-emerald-500 to-indigo-500" },
  { label: "Multi-Language", desc: "English, Spanish, French", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, gradient: "from-violet-500 to-rose-500" },
  { label: "Dark Mode", desc: "System-aware theme switching", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>, gradient: "from-amber-500 to-rose-500" },
  { label: "99.9% Uptime", desc: "Enterprise-grade reliability", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, gradient: "from-rose-500 to-indigo-500" },
];

const logos = ["Vanguard", "Lincoln", "Ascend", "Congruent"];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-dark relative py-32 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 60%)"
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-5">
            Built for{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">enterprise trust.</span>
          </h2>
          <p className="text-[17px] text-white/35 leading-relaxed">
            Security, accessibility, and reliability baked into every layer.
          </p>
        </motion.div>

        {/* Badges grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
          {badges.map((b, i) => (
            <motion.div key={b.label} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="group flex items-center gap-4 rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${b.gradient} p-[1px] shrink-0`}>
                <div className="w-full h-full rounded-lg bg-[#0A0A12] flex items-center justify-center text-white/50 group-hover:text-white/80 transition-colors">
                  {b.icon}
                </div>
              </div>
              <div>
                <div className="text-[14px] font-semibold text-white/80">{b.label}</div>
                <div className="text-[12px] text-white/25">{b.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo cloud */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <p className="text-center text-[12px] text-white/20 tracking-wider uppercase mb-6">Trusted by leading retirement providers</p>
          <div className="flex justify-center gap-12 items-center">
            {logos.map((name, i) => (
              <motion.div key={name} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-[16px] font-bold text-white/[0.08] hover:text-white/[0.15] transition-colors duration-500 tracking-wide">
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
