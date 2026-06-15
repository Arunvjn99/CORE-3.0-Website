"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Total Balance", value: "$142,893", sub: "+12.4% YTD", color: "#34D399" },
  { label: "Projected at 65", value: "$1.2M", sub: "On pace", color: "#FFB347" },
  { label: "Readiness Score", value: "80/100", sub: "On Track", color: "#34D399" },
  { label: "Contribution Rate", value: "8%", sub: "Auto-escalating", color: "#FFB347" },
];

const allocations = [
  { label: "US Equities", pct: 45, color: "#FF9500" },
  { label: "International", pct: 25, color: "#FFB347" },
  { label: "Bonds", pct: 20, color: "#D67E00" },
  { label: "Cash", pct: 10, color: "#34D399" },
];

const actions = [
  { label: "Contribute", color: "#FF9500" },
  { label: "Invest", color: "#FFB347" },
  { label: "Transfer", color: "#D67E00" },
  { label: "Loan", color: "#F59E0B" },
  { label: "Withdraw", color: "#F43F5E" },
];

const activities = [
  { desc: "Contribution processed", amount: "+$480", date: "Today", color: "#34D399" },
  { desc: "Investment return", amount: "+$1,204", date: "Yesterday", color: "#FFB347" },
  { desc: "Fund rebalance", amount: "—", date: "3 days ago", color: "rgba(255,255,255,0.4)" },
];

export default function DashboardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="features" ref={ref} className="section-dark relative py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,149,0,0.12) 0%, transparent 60%)"
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5" style={{ background: "rgba(255,149,0,0.08)", border: "1px solid rgba(255,149,0,0.2)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF9500]" />
            <span className="text-[12px] font-semibold text-[#60A5FA] tracking-wider uppercase">Live Dashboard</span>
          </div>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-5">
            Everything at a glance.{" "}
            <span className="gradient-text-static">Nothing hidden.</span>
          </h2>
          <p className="text-[16px] text-white/50 leading-relaxed max-w-xl mx-auto">
            Balance, contributions, investments, readiness — all on one screen, all in real time.
            No more digging through PDFs to understand your future.
          </p>
        </motion.div>

        {/* Full dashboard panel */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-float gradient-border"
          style={{ background: "linear-gradient(180deg, #0A0F1A 0%, #141A28 100%)" }}>

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-glow-blue" style={{ background: "linear-gradient(135deg,#FF9500,#FFB347,#D67E00)" }}>
                <span className="text-white font-bold text-[9px]">C3</span>
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white">Sarah Johnson</div>
                <div className="text-[10px] text-white/45">Acme Corp 401(k) · ID #84203</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[10px] text-[#34D399] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Live · Updated 2s ago
              </span>
            </div>
          </div>

          {/* Stat cards row */}
          <div className="grid grid-cols-4 gap-0 border-b border-white/[0.06]">
            {stats.map((s, i) => (
              <div key={s.label} className={`p-5 ${i < 3 ? "border-r border-white/[0.06]" : ""}`}>
                <div className="text-[10px] text-white/40 uppercase tracking-wider mb-2">{s.label}</div>
                <div className="text-[24px] font-bold tabular-nums text-white">{s.value}</div>
                <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold" style={{ color: s.color }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 15l-6-6-6 6"/></svg>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-12 divide-x divide-white/[0.06]">
            {/* Chart - left 7 cols */}
            <div className="col-span-7 p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="text-[13px] font-semibold text-white">Portfolio Growth</div>
                <div className="flex gap-1">
                  {["1M","6M","1Y","All"].map((t, i) => (
                    <button key={`time-${t}`} className={`text-[10px] px-3 py-1 rounded-lg font-medium transition-all ${i===2 ? "text-white" : "text-white/40 hover:bg-white/5"}`}
                      style={i===2 ? { background: "linear-gradient(90deg,#FF9500,#D67E00)" } : {}}>{t}</button>
                  ))}
                </div>
              </div>
              <svg viewBox="0 0 500 140" className="w-full" style={{ height: 130 }}>
                <defs>
                  <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF9500" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#FF9500" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="dashLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF9500" />
                    <stop offset="50%" stopColor="#FFB347" />
                    <stop offset="100%" stopColor="#D67E00" />
                  </linearGradient>
                </defs>
                {[35,70,105].map((y, idx) => (
                  <line key={`grid-${idx}`} x1="0" y1={y} x2="500" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="6 4" />
                ))}
                <motion.path d="M0 120 C50 110 90 100 140 86 C190 72 220 80 270 62 C320 44 350 50 390 32 C420 18 460 15 500 6 L500 140 L0 140 Z" fill="url(#dashGrad)"
                  initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.6 }} />
                <motion.path d="M0 120 C50 110 90 100 140 86 C190 72 220 80 270 62 C320 44 350 50 390 32 C420 18 460 15 500 6" fill="none" stroke="url(#dashLine)" strokeWidth="2.5" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.4, ease: [0.16,1,0.3,1] }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(255,149,0,0.5))" }} />
                <circle cx="500" cy="6" r="4" fill="#FFB347" style={{ filter: "drop-shadow(0 0 8px #FFB347)" }} />
                <circle cx="500" cy="6" r="10" fill="#FFB347" fillOpacity="0.15" />
                <rect x="398" y="-2" width="98" height="22" rx="6" fill="#141A28" stroke="rgba(255,179,71,0.3)" strokeWidth="1" />
                <text x="447" y="13" textAnchor="middle" fill="#FFB347" fontSize="10" fontWeight="700">$142,893</text>
                {["Jan","Mar","May","Jul","Sep","Nov"].map((m, i) => (
                  <text key={`month-${m}`} x={i * 100} y="135" fill="rgba(255,255,255,0.3)" fontSize="9" textAnchor="middle">{m}</text>
                ))}
              </svg>

              {/* Allocation row */}
              <div className="mt-5 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[12px] font-semibold text-white">Portfolio Allocation</div>
                  <button className="text-[10px] font-semibold flex items-center gap-1" style={{ color: "#60A5FA" }}>Rebalance →</button>
                </div>
                <div className="flex rounded-full overflow-hidden h-2.5 mb-3 gap-[1.5px]" style={{ background: "rgba(255,255,255,0.04)" }}>
                  {allocations.map(a => (
                    <motion.div key={`alloc-bar-${a.label}`}
                      style={{ backgroundColor: a.color, boxShadow: `0 0 8px ${a.color}60` }}
                      initial={{ width: 0 }} animate={inView ? { width: `${a.pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.7 + a.pct * 0.01 }} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {allocations.map(a => (
                    <div key={`alloc-label-${a.label}`} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: a.color, boxShadow: `0 0 6px ${a.color}` }} />
                      <span className="text-[10px] text-white/55">{a.label}</span>
                      <span className="text-[10px] font-semibold text-white">{a.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel - 5 cols */}
            <div className="col-span-5 flex flex-col divide-y divide-white/[0.06]">
              {/* Quick actions */}
              <div className="p-5">
                <div className="text-[11px] font-semibold text-white mb-3">Quick Actions</div>
                <div className="grid grid-cols-5 gap-1.5">
                  {actions.map(a => (
                    <div key={`action-${a.label}`} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ backgroundColor: a.color + "18", border: `1px solid ${a.color}30`, boxShadow: `0 0 12px ${a.color}20` }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: a.color, boxShadow: `0 0 6px ${a.color}` }} />
                      </div>
                      <span className="text-[8px] text-white/50 text-center">{a.label}</span>
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
                      <svg width="72" height="72" viewBox="0 0 72 72">
                        <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
                        <motion.circle cx="36" cy="36" r={r} fill="none" stroke="#34D399" strokeWidth="5"
                          strokeLinecap="round" strokeDasharray={c}
                          initial={{ strokeDashoffset: c }} animate={inView ? { strokeDashoffset: c - (score / 100) * c } : {}}
                          transition={{ duration: 1.8, delay: 0.8, ease: [0.16,1,0.3,1] }}
                          transform="rotate(-90 36 36)" style={{ filter: "drop-shadow(0 0 8px rgba(52,211,153,0.6))" }} />
                        <text x="36" y="40" textAnchor="middle" fill="white" fontSize="15" fontWeight="700">{score}</text>
                      </svg>
                    );
                  })()}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-white">Readiness Score</div>
                  <div className="text-[10px] text-[#34D399] font-semibold mt-0.5">On Track ✓</div>
                  <div className="text-[10px] text-white/45 mt-0.5">Projected $1.2M at age 65</div>
                </div>
              </div>

              {/* Recent activity */}
              <div className="p-5 flex-1">
                <div className="text-[11px] font-semibold text-white mb-3">Recent Activity</div>
                <div className="space-y-2.5">
                  {activities.map((a) => (
                    <div key={`activity-${a.desc}`} className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-white font-medium">{a.desc}</div>
                        <div className="text-[9px] text-white/40">{a.date}</div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { title: "AI Readiness Engine", desc: "Every change instantly recalculates your projected retirement balance and score.", gradient: "from-[#FF9500] to-[#D67E00]" },
            { title: "Smart Rebalancing", desc: "One-click portfolio rebalancing with real-time impact preview before you commit.", gradient: "from-[#FFB347] to-[#34D399]" },
            { title: "Guided Workflows", desc: "Loans, withdrawals, and rollovers — step-by-step, eligibility-checked, friction-free.", gradient: "from-[#D67E00] to-[#F43F5E]" },
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="group rounded-2xl p-5 bento-card border border-white/[0.06] hover:border-white/[0.12]"
              style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className={`h-[2px] w-10 bg-gradient-to-r ${f.gradient} rounded-full mb-4 group-hover:w-full transition-all duration-700`} />
              <h3 className="text-[15px] font-semibold text-white mb-1.5">{f.title}</h3>
              <p className="text-[12px] text-white/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
