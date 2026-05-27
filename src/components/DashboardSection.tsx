"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Total Balance", value: "$142,893", sub: "+12.4% YTD", color: "#4F46E5", up: true },
  { label: "Projected at 65", value: "$1.2M", sub: "On pace", color: "#059669", up: true },
  { label: "Readiness Score", value: "80/100", sub: "On Track", color: "#059669", up: true },
  { label: "Contribution Rate", value: "8%", sub: "Auto-escalating", color: "#7C3AED", up: null },
];

const allocations = [
  { label: "US Equities", pct: 45, color: "#4F46E5" },
  { label: "International", pct: 25, color: "#0891B2" },
  { label: "Bonds", pct: 20, color: "#7C3AED" },
  { label: "Cash", pct: 10, color: "#059669" },
];

const actions = [
  { label: "Contribute", color: "#4F46E5" },
  { label: "Invest", color: "#7C3AED" },
  { label: "Transfer", color: "#0891B2" },
  { label: "Loan", color: "#D97706" },
  { label: "Withdraw", color: "#E11D48" },
];

const activities = [
  { desc: "Contribution processed", amount: "+$480", date: "Today", color: "#059669" },
  { desc: "Investment return", amount: "+$1,204", date: "Yesterday", color: "#4F46E5" },
  { desc: "Fund rebalance", amount: "—", date: "3 days ago", color: "#8A8A8A" },
];

export default function DashboardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="features" ref={ref} className="section-light relative py-28 overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4F46E5]/15 bg-[#4F46E5]/[0.04] mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
            <span className="text-[12px] font-semibold text-[#4F46E5] tracking-wider uppercase">Dashboard</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-[#0F0F0F] tracking-[-0.03em] leading-[1.12] mb-4">
            Everything at a glance —{" "}
            <span className="gradient-text-static">nothing hidden.</span>
          </h2>
          <p className="text-[16px] text-[#525252] leading-relaxed max-w-xl mx-auto">
            Balance, contributions, investments, readiness score, quick actions, and activity — all on one screen, all live.
          </p>
        </motion.div>

        {/* Full dashboard panel */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-white border border-black/[0.06] shadow-card overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.05] bg-[#FAFAF8]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
                <span className="text-white font-bold text-[8px]">C3</span>
              </div>
              <div>
                <div className="text-[12px] font-semibold text-[#0F0F0F]">Sarah Johnson</div>
                <div className="text-[10px] text-[#8A8A8A]">Acme Corp 401(k)</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[10px] text-[#059669] font-semibold bg-[#059669]/10 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                Live
              </span>
            </div>
          </div>

          {/* Stat cards row */}
          <div className="grid grid-cols-4 gap-0 border-b border-black/[0.05]">
            {stats.map((s, i) => (
              <div key={s.label} className={`p-5 ${i < 3 ? "border-r border-black/[0.05]" : ""}`}>
                <div className="text-[10px] text-[#8A8A8A] uppercase tracking-wider mb-2">{s.label}</div>
                <div className="text-[22px] font-bold tabular-nums" style={{ color: s.color === "#059669" ? "#0F0F0F" : "#0F0F0F" }}>{s.value}</div>
                <div className={`flex items-center gap-1 mt-1 text-[11px] font-semibold`} style={{ color: s.color }}>
                  {s.up === true && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 15l-6-6-6 6"/></svg>}
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-12 divide-x divide-black/[0.05]">
            {/* Chart - left 7 cols */}
            <div className="col-span-7 p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="text-[13px] font-semibold text-[#0F0F0F]">Portfolio Growth</div>
                <div className="flex gap-1">
                  {["1M","6M","1Y","All"].map((t, i) => (
                    <button key={`time-${t}`} className={`text-[10px] px-2.5 py-1 rounded-lg font-medium transition-all ${i===2 ? "bg-[#4F46E5] text-white" : "text-[#8A8A8A] hover:bg-black/5"}`}>{t}</button>
                  ))}
                </div>
              </div>
              <svg viewBox="0 0 500 140" className="w-full" style={{ height: 130 }}>
                <defs>
                  <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[35,70,105].map((y, idx) => (
                  <line key={`grid-${idx}`} x1="0" y1={y} x2="500" y2={y} stroke="#E8E8E4" strokeWidth="0.5" strokeDasharray="6 4" />
                ))}
                <path d="M0 120 C50 110 90 100 140 86 C190 72 220 80 270 62 C320 44 350 50 390 32 C420 18 460 15 500 6 L500 140 L0 140 Z" fill="url(#dashGrad)" />
                <path d="M0 120 C50 110 90 100 140 86 C190 72 220 80 270 62 C320 44 350 50 390 32 C420 18 460 15 500 6" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="500" cy="6" r="4" fill="#4F46E5" />
                <circle cx="500" cy="6" r="9" fill="#4F46E5" fillOpacity="0.12" />
                <rect x="398" y="-2" width="98" height="22" rx="6" fill="#0F0F0F" />
                <text x="447" y="13" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">$142,893</text>
                {/* x-axis labels */}
                {["Jan","Mar","May","Jul","Sep","Nov"].map((m, i) => (
                  <text key={`month-${m}`} x={i * 100} y="135" fill="#B5B5B5" fontSize="9" textAnchor="middle">{m}</text>
                ))}
              </svg>

              {/* Allocation row */}
              <div className="mt-5 pt-5 border-t border-black/[0.05]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[12px] font-semibold text-[#0F0F0F]">Portfolio Allocation</div>
                  <button className="text-[10px] text-[#4F46E5] font-semibold">Rebalance →</button>
                </div>
                <div className="flex rounded-full overflow-hidden h-2 mb-3 gap-[1.5px]">
                  {allocations.map(a => <div key={`alloc-bar-${a.label}`} style={{ width: `${a.pct}%`, backgroundColor: a.color }} />)}
                </div>
                <div className="flex gap-4">
                  {allocations.map(a => (
                    <div key={`alloc-label-${a.label}`} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: a.color }} />
                      <span className="text-[10px] text-[#525252]">{a.label}</span>
                      <span className="text-[10px] font-semibold text-[#0F0F0F]">{a.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel - 5 cols */}
            <div className="col-span-5 flex flex-col divide-y divide-black/[0.05]">
              {/* Quick actions */}
              <div className="p-5">
                <div className="text-[11px] font-semibold text-[#0F0F0F] mb-3">Quick Actions</div>
                <div className="grid grid-cols-5 gap-1.5">
                  {actions.map(a => (
                    <div key={`action-${a.label}`} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                      <div className="w-9 h-9 rounded-xl border border-black/[0.05] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-sm" style={{ backgroundColor: a.color + "10" }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: a.color }} />
                      </div>
                      <span className="text-[8px] text-[#8A8A8A] text-center">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Readiness gauge */}
              <div className="p-5 flex items-center gap-4">
                <div className="relative shrink-0">
                  {(() => {
                    const score = 80; const r = 28; const c = 2 * Math.PI * r;
                    return (
                      <svg width="68" height="68" viewBox="0 0 68 68">
                        <circle cx="34" cy="34" r={r} fill="none" stroke="#F0F0EE" strokeWidth="5" />
                        <circle cx="34" cy="34" r={r} fill="none" stroke="#059669" strokeWidth="5"
                          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (score / 100) * c}
                          transform="rotate(-90 34 34)" style={{ filter: "drop-shadow(0 0 4px rgba(5,150,105,0.3))" }} />
                        <text x="34" y="37" textAnchor="middle" fill="#0F0F0F" fontSize="13" fontWeight="700">{score}</text>
                      </svg>
                    );
                  })()}
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[#0F0F0F]">Readiness Score</div>
                  <div className="text-[10px] text-[#059669] font-semibold mt-0.5">On Track ✓</div>
                  <div className="text-[9px] text-[#8A8A8A] mt-0.5">Projected $1.2M at age 65</div>
                </div>
              </div>

              {/* Recent activity */}
              <div className="p-5 flex-1">
                <div className="text-[11px] font-semibold text-[#0F0F0F] mb-3">Recent Activity</div>
                <div className="space-y-2.5">
                  {activities.map((a) => (
                    <div key={`activity-${a.desc}`} className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-[#0F0F0F] font-medium">{a.desc}</div>
                        <div className="text-[9px] text-[#8A8A8A]">{a.date}</div>
                      </div>
                      <span className="text-[11px] font-semibold tabular-nums" style={{ color: a.color }}>{a.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature highlights below */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[
            { title: "AI Readiness Engine", desc: "Every change instantly recalculates your projected retirement balance and score.", gradient: "from-[#4F46E5] to-[#7C3AED]" },
            { title: "Smart Rebalancing", desc: "One-click portfolio rebalancing with real-time impact preview before you commit.", gradient: "from-[#0891B2] to-[#059669]" },
            { title: "Guided Workflows", desc: "Loans, withdrawals, and rollovers guided step-by-step with eligibility checks.", gradient: "from-[#D97706] to-[#E11D48]" },
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="group rounded-2xl bg-white border border-black/[0.06] p-5 bento-card hover:shadow-card-hover">
              <div className={`h-[2px] w-10 bg-gradient-to-r ${f.gradient} rounded-full mb-4 group-hover:w-full transition-all duration-700`} />
              <h3 className="text-[14px] font-semibold text-[#0F0F0F] mb-1.5">{f.title}</h3>
              <p className="text-[12px] text-[#8A8A8A] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
