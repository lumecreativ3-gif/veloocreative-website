"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GetStartedCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const buttons = [
    {
      label: "For Companies",
      href: "#",
      style: "primary",
    },
    {
      label: "For Creatives",
      href: "#",
      style: "secondary",
    },
    {
      label: "Contact Us",
      href: "#contact",
      style: "ghost",
    },
  ];

  return (
    <section
      id="get-started"
      ref={ref}
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Section background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(27,79,228,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Glass card container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden text-center py-16 px-8 lg:px-16"
          style={{
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.85)",
            boxShadow:
              "0 20px 80px rgba(27,79,228,0.1), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          {/* Decorative corner accents */}
          {[
            { top: 20, left: 20 },
            { top: 20, right: 20 },
            { bottom: 20, left: 20 },
            { bottom: 20, right: 20 },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                ...pos,
                width: 20,
                height: 20,
                borderTop: i < 2 ? "2px solid rgba(27,79,228,0.2)" : undefined,
                borderBottom: i >= 2 ? "2px solid rgba(27,79,228,0.2)" : undefined,
                borderLeft: i % 2 === 0 ? "2px solid rgba(27,79,228,0.2)" : undefined,
                borderRight: i % 2 === 1 ? "2px solid rgba(27,79,228,0.2)" : undefined,
              }}
            />
          ))}

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
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
            Join Velo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
              marginBottom: 20,
            }}
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#666",
              maxWidth: 520,
              margin: "0 auto 48px",
              lineHeight: 1.7,
            }}
          >
            Join the exclusive Velo Creative community. Companies can sign up directly;
            creatives join by invite.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          >
            <a
              href="#"
              className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
              style={{
                background: "linear-gradient(135deg, #1B4FE4, #4A72FF)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "15px",
                minWidth: 160,
                textAlign: "center",
              }}
            >
              For Companies
            </a>

            <a
              href="#"
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(27,79,228,0.08)",
                border: "1px solid rgba(27,79,228,0.25)",
                color: "#1B4FE4",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "15px",
                minWidth: 160,
                textAlign: "center",
              }}
            >
              For Creatives
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.08)",
                color: "#444",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "15px",
                minWidth: 160,
                textAlign: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              Contact Us
            </a>
          </motion.div>

          {/* Fine print */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "#aaa",
              marginTop: 28,
            }}
          >
            No credit card required to explore · Creatives join by referral
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
