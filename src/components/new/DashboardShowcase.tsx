"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

function AnimatedNum({ target, duration = 1.4, inView }: {
  target: number; duration?: number; inView: boolean;
}) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const ctrl = animate(0, target, {
      duration, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return ctrl.stop;
  }, [inView, target, duration]);
  return <>{Math.round(val).toLocaleString()}</>;
}

const HIGHLIGHTS = [
  "Real-time balance and YTD performance at a glance",
  "Auto-calculated readiness score, updated live",
  "Projected retirement balance based on your contributions",
  "Quick actions: contribute, invest, transfer, loan",
];

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden w-full"
      style={{
        background: "#0B1120",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 48px 96px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]"
        style={{ background: "rgba(255,255,255,0.025)" }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-full text-[10px] text-white/20 flex items-center gap-1.5"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            core3.app/dashboard
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="dashboard"
      ref={ref}
      className="relative overflow-hidden flex items-center"
      style={{ background: "#070B14", minHeight: "100vh" }}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)", filter: "blur(80px)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-white/[0.07] bg-white/[0.025]">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/40">Dashboard</span>
          </div>
          <h2
            className="font-bold tracking-[-0.04em] leading-[1.04] text-white mb-7"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            See your complete
            <br />retirement picture.
          </h2>
          <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-white/45 leading-relaxed mb-10 max-w-md">
            Balance, contributions, and readiness surfaced by AI the moment
            you need them. No navigation. No menus. Just answers.
          </p>
          <ul className="space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.09 }}
                className="flex items-start gap-3 text-[14px] text-white/55"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(59,130,246,0.14)" }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {h}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — BROWSER MOCKUP */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-12 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 55% 45%, rgba(59,130,246,0.22), rgba(129,140,248,0.12) 50%, transparent 70%)",
              filter: "blur(55px)",
            }} />

          <BrowserFrame>
            <div className="p-5 space-y-3">
              {/* Balance */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="p-5 rounded-xl"
                style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.12)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-white/30 font-semibold mb-1.5">Total Balance</div>
                    <div className="text-[2rem] font-bold text-white leading-none tabular-nums">
                      $<AnimatedNum target={142893} inView={inView} />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[12px] font-semibold" style={{ color: "#34D399" }}>+12.4% YTD</div>
                    <div className="text-[10px] text-white/25 mt-0.5">vs. benchmark</div>
                  </div>
                </div>
                <svg width="100%" height="40" viewBox="0 0 100 28" preserveAspectRatio="none">
                  <motion.path
                    d="M0,22 L12,18 L24,14 L36,17 L48,10 L60,7 L72,9 L84,4 L100,1"
                    fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 0.75 } : {}}
                    transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                {/* Readiness */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.44 }}
                  className="p-4 rounded-xl flex flex-col items-center"
                  style={{ background: "rgba(52,211,153,0.05)", border: "1px solid rgba(52,211,153,0.12)" }}
                >
                  <div className="relative w-[60px] h-[60px] mb-2">
                    <svg width="60" height="60" className="-rotate-90">
                      <defs>
                        <linearGradient id="rdg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#34D399" />
                          <stop offset="100%" stopColor="#22D3EE" />
                        </linearGradient>
                      </defs>
                      <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
                      <motion.circle cx="30" cy="30" r="24" fill="none"
                        stroke="url(#rdg)" strokeWidth="5" strokeLinecap="round"
                        strokeDasharray={150.8}
                        initial={{ strokeDashoffset: 150.8 }}
                        animate={inView ? { strokeDashoffset: 150.8 * 0.2 } : {}}
                        transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{ filter: "drop-shadow(0 0 5px #22D3EE55)" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[14px] font-bold text-white">80</span>
                    </div>
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.12em] text-white/30 font-semibold">Readiness</div>
                  <div className="text-[10px] mt-0.5 font-semibold" style={{ color: "#34D399" }}>On track ✓</div>
                </motion.div>

                {/* Projection */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.52 }}
                  className="p-4 rounded-xl"
                  style={{ background: "rgba(192,132,252,0.05)", border: "1px solid rgba(192,132,252,0.12)" }}
                >
                  <div className="text-[9px] uppercase tracking-[0.12em] text-white/30 font-semibold mb-1.5">Projected at 65</div>
                  <div className="text-[1.4rem] font-bold leading-none tabular-nums mb-2"
                    style={{ background: "linear-gradient(135deg,#C084FC,#F472B6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    $1.2M
                  </div>
                  <div className="flex items-end gap-[2px] h-8">
                    {[28,38,32,50,45,62,72,100].map((h, i) => (
                      <motion.div key={i} className="flex-1 rounded-sm"
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.62 + i * 0.04 }}
                        style={{ originY: 1, background: `rgba(192,132,252,${0.2 + h * 0.004})`, height: `${h}%` }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Account bar */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-3.5 rounded-xl flex items-center justify-between"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div>
                  <div className="text-[12px] font-semibold text-white">Sarah&apos;s Account</div>
                  <div className="text-[10px] text-white/30">Acme Corp 401(k) · 8% contribution · Auto-escalating</div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0"
                  style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.18)" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                  <span className="text-[9px] text-[#34D399] font-medium">Live</span>
                </div>
              </motion.div>
            </div>
          </BrowserFrame>
        </motion.div>
      </div>
    </section>
  );
}
