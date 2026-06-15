"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    color: "#6D28D9",
    iconBg: "#F5F3FF",
  },
];

export default function MobileSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
              fontWeight: 800,
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
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CORE 3.0 is now
              <br />
              in your pocket.
            </span>
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
            The all-new CORE 3.0 mobile app brings your retirement journey to you
            — anytime, anywhere.
          </p>

          {/* Feature rows */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  borderRadius: 14,
                  background: i === 0 ? "white" : "#F8F9FC",
                  border: i === 0 ? "1px solid rgba(109,40,217,0.12)" : "1px solid transparent",
                  boxShadow: i === 0 ? "0 2px 12px rgba(109,40,217,0.07)" : "none",
                  cursor: "default",
                  transition: "all 0.2s ease",
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
                    background: i === 0 ? f.color : "transparent",
                    border: `1.5px solid ${i === 0 ? f.color : "#E2E8F0"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={i === 0 ? "white" : "#94A3B8"}
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

        {/* RIGHT — real iPhone image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
