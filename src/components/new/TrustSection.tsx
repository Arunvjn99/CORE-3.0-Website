"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CERTS = [
  {
    title: "SOC 2 Type II",
    desc: "Independently audited security controls",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    color: "#3B82F6",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    title: "ERISA Compliant",
    desc: "Full DOL & IRS regulatory adherence",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    color: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
  {
    title: "256-bit Encryption",
    desc: "Bank-level data protection, end-to-end",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    title: "WCAG 2.1 AA",
    desc: "Accessible to every employee, every ability",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
  {
    title: "Multi-Language",
    desc: "English, Spanish, French, Hindi, Mandarin",
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-2.761 0-5 4.477-5 10s2.239 10 5 10 5-4.477 5-10-2.239-10-5-10zM2 12h20",
    color: "#6D28D9",
    bg: "#F5F3FF",
    border: "#C4B5FD",
  },
  {
    title: "99.99% Uptime SLA",
    desc: "Enterprise-grade reliability, guaranteed",
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
  },
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trust"
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "112px 24px",
        background: "white",
      }}
    >
      {/* Radial gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 65% at 50% 0%, rgba(109,40,217,0.055) 0%, rgba(59,130,246,0.035) 45%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 99,
              background: "white",
              border: "1px solid rgba(109,40,217,0.18)",
              boxShadow: "0 2px 8px rgba(109,40,217,0.06)",
              marginBottom: 32,
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6D28D9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase" as const,
                color: "#6D28D9",
              }}
            >
              Trust &amp; Compliance
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.06,
              color: "#0F172A",
              marginBottom: 20,
            }}
          >
            Built for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 60%, #6D28D9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              enterprise-grade trust.
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              color: "#64748B",
              lineHeight: 1.75,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            $2.4 trillion in retirement assets are watching. We&apos;ve engineered every
            layer to keep them safe.
          </p>
        </motion.div>

        {/* 3 × 2 cert cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="trust-grid"
        >
          {CERTS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "24px 24px",
                borderRadius: 16,
                background: "white",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                cursor: "default",
                transition: "box-shadow 0.25s, transform 0.25s",
                minHeight: 98,
              }}
              whileHover={{ y: -4, boxShadow: `0 16px 48px rgba(0,0,0,0.09), 0 0 0 1.5px ${c.color}30` }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={c.color}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={c.icon} />
                </svg>
              </div>

              {/* Text */}
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>
                  {c.title}
                </div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 12,
            color: "#94A3B8",
          }}
        >
          Independently audited · Department of Labor ERISA standards · AES-256 encryption at rest and in transit
        </motion.p>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
