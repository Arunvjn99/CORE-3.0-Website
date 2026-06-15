"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsStrip() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6"
      style={{ background: "white" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.15,
            color: "#0F172A",
            marginBottom: 20,
          }}
        >
          Know where you stand.
          <br />
          See what&apos;s next.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 16,
            color: "#64748B",
            lineHeight: 1.75,
            maxWidth: 460,
            margin: "0 auto",
          }}
        >
          Track your progress, explore opportunities, and make smarter retirement
          decisions with confidence.
        </motion.p>
      </div>
    </section>
  );
}
