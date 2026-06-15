"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    label: "Complex Journeys",
    desc: "Enrollment, rebalancing, and withdrawals require too many steps, logins, and forms. Participants give up before they finish.",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.30)",
  },
  {
    icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
    label: "Low Engagement",
    desc: "73% of participants never log in after initial enrollment. They're completely disconnected from their own retirement.",
    color: "#22D3EE",
    glow: "rgba(34,211,238,0.28)",
  },
  {
    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "Limited Context",
    desc: "Generic advice that doesn't reflect a participant's actual balance, goals, or life situation. One size fits nobody.",
    color: "#818CF8",
    glow: "rgba(129,140,248,0.30)",
  },
  {
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    label: "High Support Burden",
    desc: "Basic questions overwhelm HR and support teams at $12+ per call average. Questions that AI could answer in seconds.",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.28)",
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#0A1020" }}
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(59,130,246,0.07), transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-white/[0.07] bg-white/[0.025]">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/40">Why it matters</span>
          </div>
          <h2 className="font-bold tracking-[-0.035em] leading-[1.07] text-white mb-5" style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}>
            The Problem
            <br />
            We&apos;re Solving
          </h2>
          <p className="text-[15px] text-white/45 max-w-xl mx-auto leading-relaxed">
            The current 401(k) experience is broken. Complex, static, and
            completely disconnected from how people actually think about money
            and retirement.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative flex gap-4 p-6 rounded-2xl overflow-hidden"
              style={{
                background: "#0D1528",
                border: `1px solid ${p.color}20`,
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 28px ${p.glow}, 0 6px 24px rgba(0,0,0,0.4)`;
                (e.currentTarget as HTMLElement).style.borderColor = `${p.color}45`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = `${p.color}20`;
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(180deg, ${p.color}, ${p.color}44)` }}
              />

              {/* Hover glow wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse 70% 55% at 0% 50%, ${p.color}08, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                style={{ background: `${p.color}18` }}
                whileHover={{ scale: 1.12, rotate: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 14 }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={p.color}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={p.icon} />
                </svg>
              </motion.div>

              <div className="relative">
                <h3 className="text-[15px] font-semibold text-white mb-1.5">
                  {p.label}
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
