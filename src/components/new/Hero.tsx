"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const LIVE_APP = "https://corethreepointo.netlify.app/login";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        background: "#FFFFFF",
        overflow: "hidden",
        position: "relative",
        paddingTop: 96,
        paddingBottom: 0,
      }}
    >
      {/* ── Aurora gradient blobs ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {/* Coral / rose — top right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -60,
            width: 740,
            height: 580,
            background:
              "radial-gradient(ellipse, rgba(251,113,133,0.32) 0%, rgba(253,186,116,0.18) 45%, transparent 70%)",
            filter: "blur(72px)",
            borderRadius: "50%",
          }}
        />
        {/* Teal / cyan — left */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: -100,
            width: 680,
            height: 540,
            background:
              "radial-gradient(ellipse, rgba(94,234,212,0.28) 0%, rgba(125,211,252,0.18) 50%, transparent 72%)",
            filter: "blur(72px)",
            borderRadius: "50%",
          }}
        />
        {/* Lavender — center */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: "26%",
            width: 700,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(196,181,253,0.30) 0%, rgba(167,139,250,0.14) 50%, transparent 72%)",
            filter: "blur(68px)",
            borderRadius: "50%",
          }}
        />
        {/* Warm yellow — lower right */}
        <div
          style={{
            position: "absolute",
            top: 360,
            right: "6%",
            width: 560,
            height: 440,
            background:
              "radial-gradient(ellipse, rgba(253,224,71,0.20) 0%, rgba(251,191,36,0.10) 55%, transparent 72%)",
            filter: "blur(64px)",
            borderRadius: "50%",
          }}
        />
        {/* Sky blue — top center */}
        <div
          style={{
            position: "absolute",
            top: -20,
            left: "36%",
            width: 600,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(147,197,253,0.24) 0%, transparent 70%)",
            filter: "blur(60px)",
            borderRadius: "50%",
          }}
        />
        {/* Green — bottom left */}
        <div
          style={{
            position: "absolute",
            top: 400,
            left: "10%",
            width: 480,
            height: 380,
            background:
              "radial-gradient(ellipse, rgba(134,239,172,0.22) 0%, transparent 70%)",
            filter: "blur(64px)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2.4rem, 5.2vw, 4.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#111827",
            maxWidth: 900,
            margin: "0 auto 24px",
          }}
        >
          Reimagining the Participant Experience
          <br />
          Through{" "}
          <span
            style={{
              background:
                "linear-gradient(130deg, #509BF1 0%, #071DC7 35%, #6B67F8 65%, #3F5FFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Conversational AI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.5rem)",
            color: "rgba(31,32,37,0.6)",
            lineHeight: 1.3,
            maxWidth: 856,
            margin: "0 auto 36px",
          }}
        >
          A modern 401(k) experience powered by AI that makes retirement
          planning feel as clear and natural as checking your phone.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.22 }}
          style={{ marginBottom: 64 }}
        >
          <a
            href={LIVE_APP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 30px",
              borderRadius: 99,
              background: "#111827",
              color: "#F9FAFB",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.20)",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Visit Portal
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </motion.div>

        {/* ── Hero banner image ── */}
        <motion.div
          initial={{ opacity: 0, y: 52 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "center", position: "relative" }}
        >
          {/* Soft ambient glow */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: "10%",
              right: "10%",
              height: 100,
              background:
                "radial-gradient(ellipse, rgba(80,155,241,0.22) 0%, rgba(107,103,248,0.12) 50%, transparent 75%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              width: "100%",
              maxWidth: 1024,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow:
                "0 2px 0 rgba(0,0,0,0.06), 0 24px 80px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.07)",
              position: "relative",
            }}
          >
            <Image
              src="/assets/hero-dashboard.png"
              alt="CORE 3.0 participant portal dashboard"
              width={1024}
              height={818}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-top: 72px !important;
          }
        }
      `}</style>
    </section>
  );
}
