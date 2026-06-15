"use client";

import { motion } from "framer-motion";

const RECORDKEEPERS = [
  "Fidelity",
  "Empower",
  "Vanguard",
  "Schwab",
  "Principal",
  "T. Rowe Price",
  "Merrill Lynch",
  "Transamerica",
  "Nationwide",
  "Lincoln Financial",
];

// Duplicate for seamless loop
const ITEMS = [...RECORDKEEPERS, ...RECORDKEEPERS];

export default function RecordkeeperStrip() {
  return (
    <div
      className="relative py-8 overflow-hidden border-y border-white/[0.05]"
      style={{ background: "#070B14" }}
    >
      {/* Fade masks on edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #070B14, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #070B14, transparent)" }} />

      {/* Label */}
      <div className="flex items-center gap-5 mb-5 px-6 justify-center">
        <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(255,255,255,0.07)" }} />
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/25 font-semibold whitespace-nowrap">
          Plugs into your existing recordkeeper
        </span>
        <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Marquee track */}
      <div className="flex gap-0">
        <motion.div
          className="flex gap-12 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          style={{ willChange: "transform" }}
        >
          {ITEMS.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 whitespace-nowrap group cursor-default"
            >
              {/* Small brand mark dot */}
              <div
                className="w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(255,255,255,0.5)" }}
              />
              <span
                className="text-[13px] font-semibold text-white/30 group-hover:text-white/70 transition-colors duration-200 tracking-[0.01em]"
              >
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sub-line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center text-[11px] text-white/22 mt-5 tracking-wide"
      >
        No data migration. No rip-and-replace. Live in weeks.
      </motion.p>
    </div>
  );
}
