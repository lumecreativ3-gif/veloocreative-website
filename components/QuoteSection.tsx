"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(5,13,45,0.96) 0%, rgba(5,13,45,0.96) 92%, transparent 100%)",
      }}
    >
      {/* Background particle dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: "50%",
            background: i % 4 === 0 ? "#1B4FE4" : "rgba(255,255,255,0.15)",
            top: `${10 + (i * 17) % 80}%`,
            left: `${5 + (i * 23) % 90}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Opening quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(80px, 12vw, 160px)",
            color: "#1B4FE4",
            lineHeight: 0.7,
            display: "block",
            marginBottom: 0,
            opacity: 0.8,
          }}
        >
          "
        </motion.div>

        {/* Main text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 6vw, 80px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            marginTop: -20,
          }}
        >
          WHERE COMMUNITY
          <br />
          <span style={{ color: "#1B4FE4" }}>MEETS</span> CREATIVITY
        </motion.h2>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(80px, 12vw, 160px)",
            color: "#1B4FE4",
            lineHeight: 0.5,
            display: "block",
            textAlign: "right",
            opacity: 0.8,
            marginTop: 0,
          }}
        >
          "
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            height: 2,
            background: "linear-gradient(90deg, transparent, #1B4FE4, transparent)",
            margin: "32px auto 28px",
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Velo Creative — veloocreative.com
        </motion.p>
      </div>
    </section>
  );
}
