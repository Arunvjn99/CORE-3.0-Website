"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Dashboard", href: "#features" },
  { label: "AI", href: "#ai" },
  { label: "Readiness", href: "#experience" },
  { label: "For Employers", href: "#employers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 rounded-2xl ${
        scrolled
          ? "glass-dark border border-white/[0.08] shadow-float w-[min(92%,900px)]"
          : "bg-transparent w-[min(92%,1100px)]"
      }`}
    >
      <div className="px-5 h-13 py-2 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-shadow duration-500 group-hover:shadow-glow-blue"
            style={{ background: "linear-gradient(135deg,#3B82F6,#22D3EE,#8B5CF6)" }}>
            <span className="text-white font-bold text-[10px] tracking-wider">C3</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-white">Core 3</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleClick(link.href)}
              className="px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 text-white/55 hover:text-white hover:bg-white/[0.06]">
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-[13px] font-medium transition-colors duration-300 text-white/55 hover:text-white">Sign in</button>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="px-5 py-1.5 rounded-full text-[13px] font-semibold text-white transition-shadow duration-300"
            style={{ background: "linear-gradient(120deg,#3B82F6,#22D3EE,#8B5CF6)", boxShadow: "0 2px 12px rgba(59,130,246,0.35)" }}>
            Enroll now
          </motion.button>
        </div>

        <button className="md:hidden w-8 h-8 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="flex flex-col gap-[5px]">
            {[0, 1].map((i) => (
              <motion.div key={i} className="w-[18px] h-[1.5px] rounded-full bg-white"
                animate={mobileOpen ? (i === 0 ? { rotate: 45, y: 3.25 } : { rotate: -45, y: -3.25 }) : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }} />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden glass-dark border-t border-white/[0.06] overflow-hidden rounded-b-2xl">
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)}
                  className="text-white/85 text-[15px] font-medium text-left py-2.5 px-3 rounded-xl transition-colors hover:bg-white/[0.04]">
                  {link.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-white/[0.06]">
                <button className="w-full text-white py-2.5 rounded-full text-[13px] font-semibold"
                  style={{ background: "linear-gradient(120deg,#3B82F6,#22D3EE,#8B5CF6)" }}>
                  Enroll now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
