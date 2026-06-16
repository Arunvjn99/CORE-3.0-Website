"use client";

import { useState, useEffect, useRef } from "react";
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
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);
      // Bevel-style: hide on scroll-down past 80px, reveal on scroll-up
      if (y > 80) {
        setHidden(y > lastY.current + 4);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 inset-x-0 z-50 flex justify-center"
      style={{ paddingTop: 16, paddingLeft: 24, paddingRight: 24 }}
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
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

        {/* Desktop nav links with Bevel underline hover */}
        <div className="hidden md:flex items-center" style={{ gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#79797c",
                textDecoration: "none",
                position: "relative",
                paddingBottom: 2,
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1f2025")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#79797c")}
            >
              {link.label}
              {/* Bevel underline: scaleX 0→1 from right on hover */}
              <span
                className="nav-underline"
                style={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  right: 0,
                  height: 1.5,
                  background: "#1f2025",
                  transform: "scaleX(0)",
                  transformOrigin: "right",
                  transition: "transform 0.55s cubic-bezier(0.19,1,0.22,1)",
                  borderRadius: 2,
                }}
              />
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
            transition: "opacity 0.2s, transform 0.2s",
            flexShrink: 0,
            letterSpacing: "-0.32px",
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
        </a>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                onClick={() => setMobileOpen(false)}
                style={{ fontSize: 16, fontWeight: 500, color: "#1f1f24", textDecoration: "none", padding: "8px 0" }}
              >
                {link.label}
              </motion.a>
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

      <style jsx global>{`
        .nav-link:hover .nav-underline {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </motion.nav>
  );
}
