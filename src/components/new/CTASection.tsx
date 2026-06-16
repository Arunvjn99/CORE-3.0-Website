"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LIVE_APP = "https://corethreepointo.netlify.app/login";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headLine1Ref = useRef<HTMLDivElement>(null);
  const headLine2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const trigger = { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" };

    gsap.fromTo(headLine1Ref.current,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0, ease: "power3.out", scrollTrigger: trigger }
    );
    gsap.fromTo(headLine2Ref.current,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 0.1, scrollTrigger: trigger }
    );
    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", delay: 0.25, scrollTrigger: trigger }
    );
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.38, scrollTrigger: trigger }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f8f9fc 0%, #ffffff 40%, #f4f3ff 100%)",
        padding: "112px 24px",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 65% at 50% 30%, rgba(109,40,217,0.055) 0%, rgba(59,130,246,0.04) 45%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
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
          <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}>
            <div ref={headLine1Ref} style={{ opacity: 0 }}>Ready When</div>
          </span>
          <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}>
            <div ref={headLine2Ref} style={{ opacity: 0 }}>You Are</div>
          </span>
        </h2>

        <p
          ref={subtitleRef}
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.5rem)",
            color: "rgba(31,32,37,0.6)",
            maxWidth: 758,
            margin: "0 auto 40px",
            lineHeight: 1.3,
            opacity: 0,
          }}
        >
          The next-generation
          <br />
          401(k) portal is ready. Try the AI agent in under 5 minutes.
        </p>

        <div ref={ctaRef} style={{ opacity: 0 }}>
          <motion.a
            href={LIVE_APP}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 40px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #3B82F6 0%, #818CF8 50%, #22D3EE 100%)",
              color: "white",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(59,130,246,0.28)",
            }}
          >
            Access Core 3 Portal
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
