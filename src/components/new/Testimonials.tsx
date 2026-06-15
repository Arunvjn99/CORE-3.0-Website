"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const QUOTES = [
  {
    text: "Our call volume dropped 40% in the first month. Participants get answers instantly and our HR team can focus on what matters.",
    name: "Michael Torres",
    role: "VP, Benefits",
    company: "Clearwater Financial",
    color: "#3B82F6",
    initials: "MT",
  },
  {
    text: "I asked it when I could retire, it modeled three scenarios in seconds and updated my contribution. I didn't believe it was real.",
    name: "Sarah Chen",
    role: "Participant",
    company: "Enrolled via Acme Corp 401(k)",
    color: "#22D3EE",
    initials: "SC",
  },
  {
    text: "We went from demo to live in six weeks. The integration with our existing recordkeeper was seamless. Our plan sponsors love it.",
    name: "James Okafor",
    role: "Director, Retirement Products",
    company: "Meridian Plan Services",
    color: "#818CF8",
    initials: "JO",
  },
];

function Stars({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={color} stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#080C14" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(59,130,246,0.06), transparent 65%)",
      }} />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-white/[0.07] bg-white/[0.025]">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/40">What they say</span>
          </div>
          <h2
            className="font-bold tracking-[-0.04em] leading-[1.06] text-white"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Trusted by plan sponsors.
            <br />
            <span className="text-white/35">Loved by participants.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative p-7 rounded-2xl flex flex-col"
              style={{
                background: "#0D1528",
                border: `1px solid ${q.color}18`,
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${q.color}22, 0 8px 28px rgba(0,0,0,0.4)`;
                (e.currentTarget as HTMLElement).style.borderColor = `${q.color}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = `${q.color}18`;
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${q.color}60, transparent)` }}
              />

              <Stars color={q.color} />

              <blockquote className="text-[14px] text-white/65 leading-relaxed flex-1 mb-6">
                &ldquo;{q.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[12px] font-bold"
                  style={{ background: `${q.color}20`, color: q.color }}
                >
                  {q.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">{q.name}</div>
                  <div className="text-[11px] text-white/35">{q.role} · {q.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
