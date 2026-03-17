"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function YourCreativityMatters() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="creatives"
      ref={ref}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Soft tinted background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(27,79,228,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Megaphone / abstract icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 22,
            background: "rgba(27,79,228,0.08)",
            border: "1px solid rgba(27,79,228,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "36px",
            margin: "0 auto 32px",
          }}
        >
          📣
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#1B4FE4",
            display: "block",
            marginBottom: 20,
          }}
        >
          For Every Creative
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(38px, 6vw, 72px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#0a0a0a",
            marginBottom: 28,
          }}
        >
          YOUR CREATIVITY
          <br />
          <span style={{ color: "#1B4FE4" }}>MATTERS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#555",
            lineHeight: 1.8,
            maxWidth: 640,
            margin: "0 auto 32px",
          }}
        >
          Velo Creative is more than a platform — it's a curated ecosystem where creative
          excellence meets ambitious vision. We believe the best work happens when brands
          and creatives truly understand each other, move at the same pace, and build
          something they're both proud of.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            color: "#777",
            lineHeight: 1.8,
            maxWidth: 540,
            margin: "0 auto 48px",
          }}
        >
          Your craft deserves to be seen, valued, and rewarded. Velo is where that happens.
          We're building the future of creative work — and we want you in it.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 52,
          }}
        >
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              style={{
                width: i === 1 ? 40 : 8,
                height: 2,
                borderRadius: 1,
                background: i === 1 ? "#1B4FE4" : "rgba(27,79,228,0.3)",
              }}
            />
          ))}
        </motion.div>

        {/* Glass info boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "Vetted Community", icon: "✓" },
            { label: "Fair Compensation", icon: "◈" },
            { label: "Real Opportunities", icon: "✦" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl px-5 py-4 flex items-center gap-3"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.85)",
              }}
            >
              <span style={{ color: "#1B4FE4", fontSize: "18px" }}>{item.icon}</span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#0a0a0a",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
