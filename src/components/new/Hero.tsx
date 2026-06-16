"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headLine1Ref = useRef<HTMLDivElement>(null);
  const headLine2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Line 1 reveal
    tl.fromTo(
      headLine1Ref.current,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0 }
    )
    // Line 2 reveal
    .fromTo(
      headLine2Ref.current,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0 },
      "-=0.78"
    )
    // Subtitle
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    // Image panel rise
    .fromTo(
      imageWrapRef.current,
      { opacity: 0, y: 72 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      "-=0.35"
    );

    // Parallax: image scrolls up at 0.3× speed (Bevel-style)
    gsap.to(imageInnerRef.current, {
      yPercent: -14,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
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
        <div style={{ position:"absolute", top:-100, right:-60, width:740, height:580, background:"radial-gradient(ellipse, rgba(251,113,133,0.32) 0%, rgba(253,186,116,0.18) 45%, transparent 70%)", filter:"blur(72px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:80, left:-100, width:680, height:540, background:"radial-gradient(ellipse, rgba(94,234,212,0.28) 0%, rgba(125,211,252,0.18) 50%, transparent 72%)", filter:"blur(72px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:60, left:"26%", width:700, height:500, background:"radial-gradient(ellipse, rgba(196,181,253,0.30) 0%, rgba(167,139,250,0.14) 50%, transparent 72%)", filter:"blur(68px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:360, right:"6%", width:560, height:440, background:"radial-gradient(ellipse, rgba(253,224,71,0.20) 0%, rgba(251,191,36,0.10) 55%, transparent 72%)", filter:"blur(64px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:-20, left:"36%", width:600, height:400, background:"radial-gradient(ellipse, rgba(147,197,253,0.24) 0%, transparent 70%)", filter:"blur(60px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:400, left:"10%", width:480, height:380, background:"radial-gradient(ellipse, rgba(134,239,172,0.22) 0%, transparent 70%)", filter:"blur(64px)", borderRadius:"50%" }} />
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 24px 0",
          textAlign: "center",
        }}
      >
        {/* Headline — two masked lines (Bevel shutter reveal) */}
        <h1
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#111827",
            maxWidth: 900,
            margin: "0 auto 24px",
          }}
        >
          {/* Line 1 */}
          <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em" }}>
            <div ref={headLine1Ref} style={{ display: "block" }}>
              Reimagining the Participant Experience
            </div>
          </span>
          {/* Line 2 */}
          <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em" }}>
            <div ref={headLine2Ref} style={{ display: "block" }}>
              With{" "}
              <span
                style={{
                  background: "linear-gradient(130deg, #509BF1 0%, #071DC7 35%, #6B67F8 65%, #3F5FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Smarter Retirement Planning
              </span>
            </div>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: "clamp(0.875rem, 1.15vw, 1.125rem)",
            color: "rgba(31,32,37,0.6)",
            lineHeight: 1.3,
            maxWidth: 856,
            margin: "0 auto 64px",
            opacity: 0,
          }}
        >
          A modern 401(k) experience powered by AI that makes retirement
          planning feel as clear and natural as checking your phone.
        </p>

        {/* ── Hero banner image with parallax ── */}
        <div ref={imageWrapRef} style={{ display: "flex", justifyContent: "center", position: "relative", opacity: 0 }}>
          {/* Ambient glow */}
          <div style={{ position:"absolute", bottom:-20, left:"10%", right:"10%", height:100, background:"radial-gradient(ellipse, rgba(80,155,241,0.22) 0%, rgba(107,103,248,0.12) 50%, transparent 75%)", filter:"blur(40px)", pointerEvents:"none" }} />
          <div
            ref={imageInnerRef}
            style={{
              width: "100%",
              maxWidth: 760,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 2px 0 rgba(0,0,0,0.06), 0 24px 80px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.07)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/hero-dashboard.png"
              alt="CORE 3.0 participant portal dashboard"
              width={1024}
              height={818}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section { padding-top: 72px !important; }
        }
      `}</style>
    </section>
  );
}
