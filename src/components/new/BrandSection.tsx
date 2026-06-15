"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* Individual card wrapper — own inView so off-screen stagger works */
function DashCard({
  delay,
  children,
  style,
}: {
  delay: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.28, ease: "easeOut" } }}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        background: "white",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
        cursor: "default",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function BrandSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#EBF0F8",
        padding: "88px 24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1376,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 72,
          alignItems: "center",
        }}
        className="brand-section-grid"
      >
        {/* ── LEFT: stacked dashboard cards ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          {/* Row 1 — two side-by-side cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <DashCard delay={0.05}>
              <Image
                src="/assets/dashboard-metrics.png"
                alt="Retirement Balance"
                width={3304}
                height={1407}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </DashCard>

            <DashCard delay={0.14}>
              <Image
                src="/assets/readiness-gauge.png"
                alt="Retirement Readiness 80/100"
                width={1352}
                height={1056}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </DashCard>
          </div>

          {/* Row 2 — full-width projection chart */}
          <DashCard delay={0.24}>
            <Image
              src="/assets/projection-chart.png"
              alt="Live Projection"
              width={1920}
              height={1457}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </DashCard>

          {/* Row 3 — quick action bar */}
          <DashCard delay={0.34}>
            <Image
              src="/assets/action-bar.png"
              alt="Quick Actions"
              width={3304}
              height={386}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </DashCard>
        </div>

        {/* ── RIGHT: text ── */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              color: "#111827",
              marginBottom: 24,
            }}
          >
            Your brand.
            <br />
            Our platform.
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: "#374151",
              lineHeight: 1.8,
              maxWidth: 400,
            }}
          >
            Create a fully branded participant experience that reflects your
            identity while delivering the intelligence and innovation of CORE 3.0
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .brand-section-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
