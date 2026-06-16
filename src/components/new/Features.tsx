"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    title: "Voice-First Interactions",
    desc: "Speak to your 401(k) in natural language. No menus, no forms. Just tell the agent what you want and it handles the rest.",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: "AI-Chat Intelligence",
    desc: "Conversational AI that understands your complete retirement picture: balance, goals, contributions, and speaks in plain English.",
    color: "#22D3EE",
    glow: "rgba(34,211,238,0.35)",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Agent-As-Actions",
    desc: "AI agents don't just advise. They execute. Update contributions, trigger rebalances, and initiate rollovers on your behalf.",
    color: "#818CF8",
    glow: "rgba(129,140,248,0.35)",
  },
  {
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Minimal UI Philosophy",
    desc: "The best interface is the one you barely notice. Zero chrome, maximum insight. Retire the dashboard, embrace the conversation.",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.32)",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Outcomes Over Dashboards",
    desc: "We show you when you can retire, not how many charts you can ignore. Outcome-first design for humans, not accountants.",
    color: "#34D399",
    glow: "rgba(52,211,153,0.30)",
  },
];

function FeatureCard({
  f,
  delay,
  inView,
  isActive,
}: {
  f: (typeof features)[0];
  delay: number;
  inView: boolean;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative p-6 rounded-2xl cursor-default overflow-hidden"
      style={{
        background: isActive ? `${f.color}0D` : "#0D1528",
        border: `1px solid ${isActive ? `${f.color}55` : `${f.color}25`}`,
        boxShadow: isActive
          ? `0 0 32px ${f.glow}, 0 8px 32px rgba(0,0,0,0.4)`
          : "none",
        transition: "box-shadow 0.5s ease, border-color 0.5s ease, background 0.5s ease",
      }}
    >
      {/* Inner gradient wash — active or hover */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${f.color}09, transparent 65%)`,
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Active progress bar at bottom */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          style={{ background: f.color }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.4, ease: "linear" }}
        />
      )}

      {/* Icon */}
      <motion.div
        className="relative w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
        style={{ background: `${f.color}18` }}
        animate={isActive ? { scale: 1.12 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={f.color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={f.icon} />
        </svg>
      </motion.div>

      <h3
        className="relative text-[15px] font-semibold mb-2"
        style={{ color: isActive ? "white" : "rgba(255,255,255,0.85)", transition: "color 0.4s" }}
      >
        {f.title}
      </h3>
      <p className="relative text-[13px] text-white/45 leading-relaxed">{f.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);

  // Cycle through cards every 2.5s once section is in view
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveIdx((i) => (i + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      id="features"
      ref={ref}
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#070B14" }}
    >

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-white/[0.07] bg-white/[0.025]">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/40">The AI Stack</span>
          </div>
          <h2 className="font-bold tracking-[-0.035em] leading-[1.07] text-white mb-5" style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}>
            AI-Driven
            <br />
            <span className="animate-gradient-text">Retirement Experience</span>
          </h2>
          <p className="text-[15px] text-white/45 max-w-xl mx-auto leading-relaxed">
            One interface. No navigation. Just intelligence. The five pillars
            that make Core 3 the retirement portal participants actually use.
          </p>
        </motion.div>

        {/* Grid: 3 top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {features.slice(0, 3).map((f, i) => (
            <FeatureCard key={f.title} f={f} delay={0.1 + i * 0.09} inView={inView} isActive={activeIdx === i} />
          ))}
        </div>

        {/* 2 bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-2xl md:mx-auto">
          {features.slice(3).map((f, i) => (
            <FeatureCard key={f.title} f={f} delay={0.37 + i * 0.09} inView={inView} isActive={activeIdx === i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
