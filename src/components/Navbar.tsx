"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "AI", href: "#ai" },
  { label: "Experience", href: "#experience" },
  { label: "Platform", href: "#platform" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sentinel = document.getElementById("dark-start");
      if (sentinel) {
        setIsDark(sentinel.getBoundingClientRect().top < window.innerHeight * 0.4);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const textColor = isDark ? "text-white/90" : "text-[#0F0F0F]";
  const textMuted = isDark ? "text-white/40" : "text-[#8A8A8A]";
  const hoverText = isDark ? "hover:text-white" : "hover:text-[#0F0F0F]";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 rounded-2xl ${
        scrolled
          ? `${isDark ? "glass-dark" : "glass-light"} border ${isDark ? "border-white/[0.06]" : "border-black/[0.06]"} shadow-float w-[min(92%,880px)]`
          : "bg-transparent w-[min(92%,1100px)]"
      }`}
    >
      <div className="px-5 h-12 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-shadow duration-500">
            <span className="text-white font-bold text-[10px] tracking-wider">C3</span>
          </div>
          <span className={`text-[15px] font-semibold tracking-tight transition-colors duration-500 ${textColor}`}>Core 3</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleClick(link.href)}
              className={`px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 ${textMuted} ${hoverText} ${isDark ? "hover:bg-white/[0.06]" : "hover:bg-black/[0.04]"}`}>
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className={`text-[13px] font-medium transition-colors duration-300 ${textMuted} ${hoverText}`}>Sign in</button>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="px-5 py-1.5 rounded-full text-[13px] font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:shadow-[0_0_24px_rgba(79,70,229,0.25)] transition-shadow duration-300">
            Get a demo
          </motion.button>
        </div>

        <button className="md:hidden w-8 h-8 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="flex flex-col gap-[5px]">
            {[0, 1].map((i) => (
              <motion.div key={i} className={`w-[18px] h-[1.5px] rounded-full transition-colors duration-500 ${isDark ? "bg-white" : "bg-[#0F0F0F]"}`}
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
            className={`md:hidden ${isDark ? "glass-dark" : "glass-light"} border-t ${isDark ? "border-white/[0.06]" : "border-black/[0.06]"} overflow-hidden rounded-b-2xl`}>
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)}
                  className={`${textColor} text-[15px] font-medium text-left py-2.5 px-3 rounded-xl transition-colors ${isDark ? "hover:bg-white/[0.04]" : "hover:bg-black/[0.03]"}`}>
                  {link.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-black/[0.06]">
                <button className="w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white py-2.5 rounded-full text-[13px] font-semibold">Get a demo</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
