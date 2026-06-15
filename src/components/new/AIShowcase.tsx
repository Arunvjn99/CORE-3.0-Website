"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AIShowcase() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="ai"
      ref={ref}
      className="relative overflow-hidden py-28 px-6"
      style={{ background: "#07090F" }}
    >
      {/* Soft ambient glow */}
      <div style={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, rgba(59,130,246,0.10) 0%, rgba(99,102,241,0.07) 40%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div className="relative max-w-3xl mx-auto text-center">

        {/* CORE sparkle icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}
        >
          <div style={{
            width: 56, height: 56,
            borderRadius: 16,
            background: "linear-gradient(135deg, #3B82F6 0%, #818CF8 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 48px rgba(59,130,246,0.40), 0 0 0 1px rgba(255,255,255,0.08)",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.15,
            color: "white",
            marginBottom: 20,
          }}
        >
          Go deeper with
          <br />
          <span style={{
            background: "linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            CORE Intelligence
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 16, color: "rgba(255,255,255,0.42)", lineHeight: 1.75, maxWidth: 460, margin: "0 auto" }}
        >
          Get personalized guidance and actionable advice on retirement from
          your own 24/7 AI coach.
        </motion.p>
      </div>
    </section>
  );
}
