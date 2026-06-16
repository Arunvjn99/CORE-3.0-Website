"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FEATURES = [
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    title: "Conversational AI",
    desc: "Get instant answers and personalized guidance anytime, anywhere.",
    color: "#7C3AED",
    iconBg: "#F5F3FF",
  },
  {
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-2.76 0-5 4.48-5 10s2.24 10 5 10 5-4.48 5-10S14.76 2 12 2zM2 12h20",
    title: "Multi-Language Support",
    desc: "Use the app in English or Spanish—your experience, your language.",
    color: "#3B82F6",
    iconBg: "#EFF6FF",
  },
  {
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    title: "Live Projections",
    desc: "See how changes today can shape your tomorrow in real time.",
    color: "#059669",
    iconBg: "#ECFDF5",
  },
  {
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 7v-4m0 0l-7-4m7 4l7-4",
    title: "Learning Hub",
    desc: "Explore bite-sized lessons and resources to build financial confidence.",
    color: "#EA580C",
    iconBg: "#FFF7ED",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Secure & Private",
    desc: "Bank-level security to keep your data and your future protected.",
    color: "#D97706",
    iconBg: "#FFFBEB",
  },
];

const PHONE_CARDS = [
  // 0 — Conversational AI
  (
    <div style={{ background: "white", borderRadius: 16, padding: "12px 16px", boxShadow: "0 8px 32px rgba(124,58,237,0.18)", minWidth: 200 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, paddingBottom: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="#7C3AED"><path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52l-5.62 3.97 2.09-6.26L3 8.26h6.91z" /></svg>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#111827" }}>CORE Intelligence</span>
      </div>
      <div style={{ background: "#7C3AED", borderRadius: "10px 10px 10px 3px", padding: "8px 12px", fontSize: 11, color: "white", marginBottom: 6, display: "inline-block" }}>How can I help you today?</div>
      <div style={{ background: "#F3F4F6", borderRadius: "10px 10px 3px 10px", padding: "8px 12px", fontSize: 11, color: "#374151", marginLeft: "auto", display: "block", textAlign: "right" }}>What&apos;s my retirement score?</div>
    </div>
  ),
  // 1 — Multi-Language
  (
    <div style={{ background: "white", borderRadius: 16, padding: "12px 16px", boxShadow: "0 8px 32px rgba(59,130,246,0.18)", minWidth: 180 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Language</div>
      <div style={{ display: "flex", gap: 8 }}>
        <div style={{ flex: 1, textAlign: "center", padding: "8px", borderRadius: 10, background: "#3B82F6", color: "white", fontSize: 12, fontWeight: 600 }}>EN 🇺🇸</div>
        <div style={{ flex: 1, textAlign: "center", padding: "8px", borderRadius: 10, background: "#F3F4F6", color: "#374151", fontSize: 12, fontWeight: 500 }}>ES 🇲🇽</div>
      </div>
    </div>
  ),
  // 2 — Live Projections
  (
    <div style={{ background: "white", borderRadius: 16, padding: "12px 16px", boxShadow: "0 8px 32px rgba(5,150,105,0.18)", minWidth: 190 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Live Projection</div>
      <div style={{ fontSize: 24, fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1 }}>$62,400</div>
      <div style={{ fontSize: 10, color: "#6B7280", marginBottom: 8 }}>Projected monthly income</div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 9px", borderRadius: 99, background: "#DCFCE7" }}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M18 15l-6-6-6 6" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span style={{ fontSize: 10, fontWeight: 600, color: "#16A34A" }}>+18% vs current plan</span>
      </div>
    </div>
  ),
  // 3 — Learning Hub
  (
    <div style={{ background: "white", borderRadius: 16, padding: "12px 16px", boxShadow: "0 8px 32px rgba(234,88,12,0.18)", minWidth: 200 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l9-5-9-5-9 5 9 5zm0 7v-4m0 0l-7-4m7 4l7-4" /></svg>
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#111827" }}>Today&apos;s Lesson</span>
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#111827", marginBottom: 3 }}>Understanding Your 401(k)</div>
      <div style={{ height: 4, borderRadius: 2, background: "#F3F4F6", overflow: "hidden" }}>
        <div style={{ width: "62%", height: "100%", background: "#EA580C", borderRadius: 2 }} />
      </div>
      <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 3 }}>62% complete</div>
    </div>
  ),
  // 4 — Secure & Private
  (
    <div style={{ background: "white", borderRadius: 16, padding: "12px 16px", boxShadow: "0 8px 32px rgba(217,119,6,0.18)", minWidth: 190 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "#FFFBEB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}>256-bit Encrypted</div>
          <div style={{ fontSize: 10, color: "#6B7280" }}>Bank-level security active</div>
        </div>
      </div>
    </div>
  ),
];

export default function MobileSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveIdx((i) => (i + 1) % FEATURES.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      style={{ background: "white", padding: "96px 24px", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="grid-mobile-section"
      >
        {/* LEFT — text + feature rows */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* New Launch badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 99,
              background: "linear-gradient(135deg, #ede9fe, #dbeafe)",
              border: "1px solid rgba(109,40,217,0.18)",
              marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 16 }}>🚀</span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: "#6D28D9",
              }}
            >
              New Launch
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.07,
              color: "#0F172A",
              marginBottom: 20,
            }}
          >
            And that&apos;s not all.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CORE 3.0
            </span>{" "}is now in
            <br />
            your pocket.
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#64748B",
              lineHeight: 1.75,
              maxWidth: 400,
              marginBottom: 36,
            }}
          >
            also has the following features:
          </p>

          {/* Feature rows */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  borderRadius: 14,
                  background: i === activeIdx ? "white" : "#F8F9FC",
                  border: i === activeIdx ? `1px solid ${f.color}30` : "1px solid transparent",
                  boxShadow: i === activeIdx ? `0 4px 24px ${f.color}40, 0 1px 6px ${f.color}20` : "none",
                  cursor: "default",
                  transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: f.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: i === activeIdx ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.25s ease",
                  }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={f.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={f.icon} />
                  </svg>
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>{f.title}</div>
                  <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{f.desc}</div>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: i === activeIdx ? f.color : "transparent",
                    border: `1.5px solid ${i === activeIdx ? f.color : "#E2E8F0"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.25s ease",
                  }}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={i === activeIdx ? "white" : "#94A3B8"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — iPhone image + animated overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              inset: -60,
              background:
                "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(99,102,241,0.15), rgba(59,130,246,0.08) 55%, transparent 75%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          {/* Phone image */}
          <Image
            src="/assets/iphone-home.png"
            alt="CORE 3.0 Mobile App"
            width={2276}
            height={3152}
            style={{
              width: "auto",
              height: "auto",
              maxHeight: 680,
              maxWidth: "100%",
              display: "block",
              position: "relative",
              filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.18))",
            }}
          />

          {/* Floating animated card — synced to active feature */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.94 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                top: "8%",
                right: "-5%",
                zIndex: 10,
                pointerEvents: "none",
              }}
            >
              {PHONE_CARDS[activeIdx]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid-mobile-section {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
