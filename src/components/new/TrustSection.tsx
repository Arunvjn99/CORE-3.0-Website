"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CERTS = [
  { title: "SOC 2 Type II", desc: "Independently audited security controls", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE" },
  { title: "ERISA Compliant", desc: "Full DOL & IRS regulatory adherence", icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z", color: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
  { title: "256-bit Encryption", desc: "Bank-level data protection, end-to-end", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  { title: "WCAG 2.1 AA", desc: "Accessible to every employee, every ability", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  { title: "Multi-Language", desc: "English, Spanish, French, Hindi, Mandarin", icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-2.761 0-5 4.477-5 10s2.239 10 5 10 5-4.477 5-10-2.239-10-5-10zM2 12h20", color: "#6D28D9", bg: "#F5F3FF", border: "#C4B5FD" },
  { title: "99.99% Uptime SLA", desc: "Enterprise-grade reliability, guaranteed", icon: "M22 12h-4l-3 9L9 3l-3 9H2", color: "#EA580C", bg: "#FFF7ED", border: "#FED7AA" },
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const trigger = { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none none" };

    gsap.fromTo(badgeRef.current,
      { opacity: 0, scale: 0.85, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "back.out(1.4)", scrollTrigger: trigger }
    );

    gsap.fromTo(headRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.1, scrollTrigger: trigger }
    );

    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.22, scrollTrigger: trigger }
    );

    // Grid cards stagger (Bevel-style)
    const cards = gridRef.current?.querySelectorAll(".cert-card");
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 32, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65,
          ease: "power2.out",
          stagger: { amount: 0.5, grid: [2, 3], from: "start" },
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", toggleActions: "play none none none" },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="trust"
      ref={sectionRef}
      style={{ position: "relative", overflow: "hidden", padding: "112px 24px", background: "white" }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 65% at 50% 0%, rgba(109,40,217,0.055) 0%, rgba(59,130,246,0.035) 45%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            ref={badgeRef}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 99,
              background: "white", border: "1px solid rgba(109,40,217,0.18)",
              boxShadow: "0 2px 8px rgba(109,40,217,0.06)",
              marginBottom: 32, opacity: 0,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#6D28D9" }}>
              Trust &amp; Compliance
            </span>
          </div>

          <div ref={headRef} style={{ opacity: 0 }}>
            <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.06, color: "#0F172A", marginBottom: 20 }}>
              Built for{" "}
              <span style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 60%, #6D28D9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                enterprise-grade trust.
              </span>
            </h2>
          </div>

          <p ref={subtitleRef} style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", color: "#64748B", lineHeight: 1.75, maxWidth: 520, margin: "0 auto", opacity: 0 }}>
            Protecting participant data and retirement journeys at every step
          </p>
        </div>

        <div
          ref={gridRef}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
          className="trust-grid"
        >
          {CERTS.map((c) => (
            <div
              key={c.title}
              className="cert-card"
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "24px 24px", borderRadius: 16,
                background: "white", border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                cursor: "default",
                transition: "box-shadow 0.25s, transform 0.25s",
                minHeight: 98, opacity: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.09), 0 0 0 1.5px ${c.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: c.bg, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={c.icon} />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) { .trust-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .trust-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
