"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const badges = [
  { label: "SOC 2 Type II", desc: "Independently audited security controls", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>, gradient: "from-[#3B82F6] to-[#8B5CF6]" },
  { label: "ERISA Compliant", desc: "Full DOL & IRS regulatory adherence", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, gradient: "from-[#22D3EE] to-[#3B82F6]" },
  { label: "256-bit Encryption", desc: "Bank-level data protection, end-to-end", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, gradient: "from-[#8B5CF6] to-[#6D28D9]" },
  { label: "WCAG 2.1 AA", desc: "Accessible to every employee, every ability", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>, gradient: "from-[#10B981] to-[#22D3EE]" },
  { label: "Multi-Language", desc: "English, Spanish, French, Hindi, Mandarin", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, gradient: "from-[#8B5CF6] to-[#F43F5E]" },
  { label: "99.99% Uptime SLA", desc: "Enterprise-grade reliability, guaranteed", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, gradient: "from-[#F59E0B] to-[#F43F5E]" },
];

const logos = ["Vanguard", "Lincoln", "Ascend", "Congruent", "Fidelity", "Empower"];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-dark relative py-32 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.10) 0%, transparent 60%)"
      }} />
      <div className="absolute inset-0 pattern-grid opacity-25" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.22)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" style={{ boxShadow: "0 0 8px #3B82F6" }} />
            <span className="text-[12px] font-semibold text-[#60A5FA] tracking-wider uppercase">Trust & Compliance</span>
          </div>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-5">
            Built for{" "}
            <span className="gradient-text-static">enterprise-grade trust.</span>
          </h2>
          <p className="text-[16px] text-white/55 leading-relaxed">
            $2.4 trillion in retirement assets are watching. We&apos;ve engineered every layer to keep them safe.
          </p>
        </motion.div>

        {/* Badges grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
          {badges.map((b, i) => (
            <motion.div key={b.label} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="group flex items-center gap-4 rounded-xl border border-white/[0.06] p-4 hover:border-white/[0.14] transition-all duration-300" style={{ background: "rgba(255,255,255,0.025)" }}>
              <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${b.gradient} p-[1px] shrink-0`}>
                <div className="w-full h-full rounded-lg flex items-center justify-center text-white/70 group-hover:text-white transition-colors" style={{ background: "#0A0E27" }}>
                  {b.icon}
                </div>
              </div>
              <div>
                <div className="text-[14px] font-semibold text-white">{b.label}</div>
                <div className="text-[12px] text-white/45">{b.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo cloud */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <p className="text-center text-[12px] text-white/35 tracking-wider uppercase mb-6">Trusted by leading retirement providers</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 items-center">
            {logos.map((name, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-[18px] font-bold text-white/[0.18] hover:text-white/[0.35] transition-colors duration-500 tracking-tight">
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
