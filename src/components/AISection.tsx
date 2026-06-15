"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const chatMessages = [
  { role: "user" as const, text: "How much can I borrow from my 401(k)?" },
  { role: "ai" as const, text: "Based on your vested balance of $142,893, you can borrow up to $50,000. Here's a live calculator:" },
];

function TypingDots() {
  return (
    <div className="flex gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-[#818CF8]"
          animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />
      ))}
    </div>
  );
}

function LoanCalculator() {
  const [amount, setAmount] = useState(25000);
  const monthly = Math.round((amount * 1.045) / 60);
  return (
    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mt-3 rounded-xl p-4"
      style={{ background: "linear-gradient(135deg, rgba(255,149,0,0.10), rgba(214,126,0,0.06))", border: "1px solid rgba(255,149,0,0.22)" }}>
      <div className="flex justify-between items-center mb-3">
        <span className="text-[12px] text-white/50">Loan Amount</span>
        <span className="text-[16px] font-bold text-white tabular-nums">${amount.toLocaleString()}</span>
      </div>
      <input type="range" min={5000} max={50000} step={1000} value={amount}
        onChange={(e) => setAmount(Number(e.target.value))} className="w-full mb-3" />
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg p-2.5 border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="text-[10px] text-white/35 mb-0.5">Monthly</div>
          <div className="text-[14px] font-semibold text-[#60A5FA] tabular-nums">${monthly}/mo</div>
        </div>
        <div className="rounded-lg p-2.5 border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="text-[10px] text-white/35 mb-0.5">Rate</div>
          <div className="text-[14px] font-semibold text-[#FFB347]">4.5% APR</div>
        </div>
      </div>
    </motion.div>
  );
}

function AIFeatureCards() {
  const cards = [
    { title: "Loan Calculator", desc: "Instant eligibility + live payment preview", color: "#FF9500", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
    { title: "Contribution Impact", desc: "See take-home pay change in real time", color: "#FFB347", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { title: "Plan Comparison", desc: "Traditional vs Roth — AI tax analysis", color: "#D67E00", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { title: "Enrollment Wizard", desc: "5-minute guided setup with AI nudges", color: "#34D399", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {cards.map((c) => (
        <div key={c.title} className="group rounded-xl border border-white/[0.06] p-3.5 hover:border-white/[0.14] bento-card cursor-pointer" style={{ background: "rgba(255,255,255,0.025)" }}>
          <div className="w-9 h-9 rounded-lg mb-2.5 flex items-center justify-center" style={{ backgroundColor: c.color + "20", boxShadow: `0 0 16px ${c.color}25`, border: `1px solid ${c.color}30` }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="2" strokeLinecap="round"><path d={c.icon} /></svg>
          </div>
          <div className="text-[12px] font-semibold text-white mb-0.5">{c.title}</div>
          <div className="text-[10px] text-white/45 leading-snug">{c.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default function AISection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [msgCount, setMsgCount] = useState(0);
  const [showCalc, setShowCalc] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setMsgCount(1), 800);
    const t2 = setTimeout(() => setShowTyping(true), 1600);
    const t3 = setTimeout(() => { setShowTyping(false); setMsgCount(2); }, 2800);
    const t4 = setTimeout(() => setShowCalc(true), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [inView]);

  return (
    <>
      <div id="dark-start" />
      <section id="ai" ref={ref} className="section-dark relative py-28 overflow-hidden">
        <div className="absolute inset-0 pattern-dots-dark opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 50% 50% at 25% 50%, rgba(255,149,0,0.14) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 40%, rgba(214,126,0,0.12) 0%, transparent 55%)"
        }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — feature description + cards */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ background: "rgba(214,126,0,0.08)", border: "1px solid rgba(214,126,0,0.22)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFB347]" style={{ boxShadow: "0 0 8px #FFB347" }} />
                <span className="text-[12px] font-semibold text-[#FFB347] tracking-wider uppercase">Core AI</span>
              </div>
              <h2 className="text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-5">
                Ask anything.{" "}
                <span className="bg-gradient-to-r from-[#D67E00] via-[#FF9500] to-[#FFB347] bg-clip-text text-transparent">
                  Do everything.
                </span>
              </h2>
              <p className="text-[16px] text-white/55 leading-relaxed mb-8">
                Core AI understands plain English. Ask <em className="text-white/75 not-italic">&ldquo;Can I afford to retire at 60?&rdquo;</em> —
                get an instant projection. Ask about loan limits, contribution impacts, or Roth conversions —
                get answers with interactive calculators right in the chat.
              </p>
              <AIFeatureCards />
            </motion.div>

            {/* Right: Chat demo */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-float gradient-border" style={{ background: "linear-gradient(180deg,#0A0F1A,#141A28)" }}>
                {/* Header */}
                <div className="px-5 py-3.5 border-b border-white/[0.04] flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-glow-purple" style={{ background: "linear-gradient(135deg,#FF9500,#FFB347,#D67E00)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-[#0A0F1A]" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white">Core AI</div>
                    <div className="text-[10px] text-[#34D399]">Online · &lt; 1s response</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 min-h-[320px] flex flex-col gap-3">
                  <AnimatePresence>
                    {msgCount >= 1 && (
                      <motion.div initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4 }} className="self-end max-w-[80%]">
                        <div className="rounded-2xl rounded-br-md px-4 py-2.5 text-[13px] text-white font-medium" style={{ background: "linear-gradient(120deg,#FF9500,#FFB347,#D67E00)", boxShadow: "0 4px 16px rgba(255,149,0,0.3)" }}>
                          {chatMessages[0].text}
                        </div>
                      </motion.div>
                    )}
                    {showTyping && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="self-start">
                        <div className="bg-white/[0.04] rounded-2xl rounded-bl-md px-4 py-3 border border-white/[0.06]"><TypingDots /></div>
                      </motion.div>
                    )}
                    {msgCount >= 2 && (
                      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }} className="self-start max-w-[85%]">
                        <div className="bg-white/[0.04] rounded-2xl rounded-bl-md px-4 py-2.5 border border-white/[0.06]">
                          <p className="text-[13px] text-white/60">{chatMessages[1].text}</p>
                          {showCalc && <LoanCalculator />}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Input */}
                <div className="px-5 pb-5">
                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] px-4 py-3" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <span className="text-[13px] text-white/30 flex-1">Ask Core AI anything…</span>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#FF9500,#D67E00)", boxShadow: "0 0 16px rgba(255,149,0,0.5)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
