"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CoreLogo from "./CoreLogo";

const LIVE_APP = "https://corethreepointo.netlify.app/login";

const NAV_LINKS = [
  { label: "Dashboard", href: "#features" },
  { label: "Core AI", href: "#core-ai" },
  { label: "Readiness", href: "#readiness" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center" style={{ paddingTop: 16, paddingLeft: 24, paddingRight: 24 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px",
          borderRadius: 32,
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.60)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)"
            : "0 2px 16px rgba(0,0,0,0.06)",
          transition: "background 0.3s, box-shadow 0.3s",
          width: "100%",
          maxWidth: 800,
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "flex", alignItems: "center", flexShrink: 0, background: "none", border: "none", cursor: "pointer", padding: "0 12px" }}
        >
          <CoreLogo height={24} variant="dark" />
        </button>

        <div className="hidden md:flex items-center" style={{ gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: 14, fontWeight: 500, color: "#79797c", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1f2025")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#79797c")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={LIVE_APP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center"
          style={{
            padding: "8px 16px",
            borderRadius: 128,
            background: "#1f2025",
            color: "#ebf0f8",
            fontSize: 16,
            fontWeight: 510,
            textDecoration: "none",
            transition: "opacity 0.2s",
            flexShrink: 0,
            letterSpacing: "-0.32px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Visit Portal
        </a>

        <button
          className="md:hidden flex flex-col items-center justify-center gap-[5px]"
          style={{ width: 36, height: 36, background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            style={{ display: "block", height: 1.5, width: 18, background: "#1f2025", borderRadius: 2 }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            style={{ display: "block", height: 1.5, width: 18, background: "#1f2025", borderRadius: 2 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 24,
              right: 24,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column" as const,
              gap: 12,
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ fontSize: 16, fontWeight: 500, color: "#1f1f24", textDecoration: "none", padding: "8px 0" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={LIVE_APP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 20px",
                borderRadius: 12,
                background: "#1f2025",
                color: "#ebf0f8",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Visit Portal
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
