"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const transactions = [
  {
    title: "Loan Request",
    desc: "Borrow up to 50% of your vested balance — interactive calculator, instant eligibility, no paperwork.",
    gradient: "from-[#F59E0B] to-[#F43F5E]",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5 1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5"/></svg>,
    stats: "$50K max",
  },
  {
    title: "Withdrawal",
    desc: "Hardship, in-service, or age-59½ distributions — guided by eligibility rules with fee transparency.",
    gradient: "from-[#F43F5E] to-[#8B5CF6]",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7"/><path d="M5 19h14"/></svg>,
    stats: "7 types",
  },
  {
    title: "Fund Transfer",
    desc: "Move money between investment options with real-time impact analysis on portfolio allocation.",
    gradient: "from-[#3B82F6] to-[#22D3EE]",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M7 16l-4-4 4-4"/><path d="M3 12h18"/><path d="M17 8l4 4-4 4"/></svg>,
    stats: "Instant",
  },
  {
    title: "Rollover",
    desc: "Consolidate outside accounts with document upload, validation, and allocation assignment.",
    gradient: "from-[#10B981] to-[#22D3EE]",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4v16h16"/><path d="M4 20l6-6 4 4 6-8"/></svg>,
    stats: "5-step",
  },
];

export default function TransactionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-dark relative py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(245,158,11,0.04) 0%, transparent 60%)"
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.22)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" style={{ boxShadow: "0 0 8px #F59E0B" }} />
            <span className="text-[12px] font-semibold text-[#FBBF24] tracking-wider uppercase">Transactions</span>
          </motion.div>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-5">
            Every financial move,{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] via-[#F43F5E] to-[#8B5CF6] bg-clip-text text-transparent">guided end-to-end.</span>
          </h2>
          <p className="text-[16px] text-white/55 leading-relaxed">
            Loans, withdrawals, rollovers, fund transfers — every transaction with real-time eligibility checks,
            tax impact preview, and zero PDF wrangling.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {transactions.map((tx, i) => (
            <motion.div key={tx.title} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-white/[0.06] p-7 bento-card overflow-hidden hover:border-white/[0.15]" style={{ background: "rgba(255,255,255,0.025)" }}>
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tx.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`} />
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${tx.gradient} rounded-full opacity-0 group-hover:opacity-[0.08] blur-3xl transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tx.gradient} p-[1px]`}>
                    <div className="w-full h-full rounded-xl flex items-center justify-center text-white/70 group-hover:text-white transition-colors duration-300" style={{ background: "#0A0E27" }}>
                      {tx.icon}
                    </div>
                  </div>
                  <span className={`text-[12px] font-bold bg-gradient-to-r ${tx.gradient} bg-clip-text text-transparent`}>{tx.stats}</span>
                </div>
                <h3 className="text-[18px] font-semibold text-white mb-2 tracking-tight">{tx.title}</h3>
                <p className="text-[13px] text-white/30 leading-relaxed group-hover:text-white/45 transition-colors duration-300">{tx.desc}</p>

                {/* Animated progress line on hover */}
                <div className="mt-5 h-[2px] bg-white/[0.03] rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${tx.gradient} w-0 group-hover:w-full transition-all duration-700 ease-out`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
