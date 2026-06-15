"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LIVE_APP = "https://corethreepointo.netlify.app/login";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f8f9fc 0%, #ffffff 40%, #f4f3ff 100%)",
        padding: "112px 24px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 65% at 50% 30%, rgba(109,40,217,0.055) 0%, rgba(59,130,246,0.04) 45%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 590,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#222326",
              marginBottom: 24,
            }}
          >
            Ready When You Are
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.5rem)",
              color: "rgba(31,32,37,0.6)",
              maxWidth: 758,
              margin: "0 auto 40px",
              lineHeight: 1.3,
            }}
          >
            The next-generation
            <br />
            401(k) portal is ready. Try the AI agent in under 5 minutes.
          </motion.p>

          <motion.a
            href={LIVE_APP}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.32, duration: 0.7 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 40px",
              borderRadius: 999,
              background:
                "linear-gradient(135deg, #3B82F6 0%, #818CF8 50%, #22D3EE 100%)",
              color: "white",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(59,130,246,0.28)",
            }}
          >
            Access Core 3 Portal
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
