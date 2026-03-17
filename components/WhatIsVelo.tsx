"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", label: "Create Your Profile", desc: "Showcase your work, skills, and creative style in minutes." },
  { num: "02", label: "Discover or Post", desc: "Browse live projects or post your brief to attract top creatives." },
  { num: "03", label: "AI Matches Partners", desc: "Our intelligent engine surfaces the most aligned collaborators." },
  { num: "04", label: "Collaborate & Create", desc: "Work together seamlessly with built-in tools for every stage." },
];

export default function WhatIsVelo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-28 px-6 lg:px-8 overflow-hidden">
      {/* Section background tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(27,79,228,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* Left — What is Velo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1B4FE4",
              }}
            >
              The Platform
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
                marginTop: 12,
                marginBottom: 24,
              }}
            >
              WHAT IS<br />
              <span style={{ color: "#1B4FE4" }}>VELO?</span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#555",
                lineHeight: 1.75,
              }}
            >
              Velo Creative is an invite-only platform where vetted creative professionals
              meet ambitious brands. We cut through the noise with intelligent matching,
              curated opportunities, and tools that make creative work feel effortless.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#555",
                lineHeight: 1.75,
                marginTop: 16,
              }}
            >
              Whether you're a startup needing your first brand identity or an established
              business searching for ongoing creative partners — Velo is where vision
              meets execution.
            </p>

            <motion.a
              href="#features"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 mt-8 font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                color: "#1B4FE4",
              }}
            >
              Explore Features
              <span style={{ fontSize: "18px" }}>→</span>
            </motion.a>
          </motion.div>

          {/* Center — NEW NEW NEW stacked text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-center justify-center py-8"
            style={{ gap: "4px" }}
          >
            {["NEW", "NEW", "NEW", "NEW", "NEW"].map((word, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(42px, 5.5vw, 72px)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  WebkitTextStroke: "2px #1B4FE4",
                  color: "transparent",
                  transform: `translateX(${(i - 2) * 8}px)`,
                  opacity: 1 - i * 0.12,
                }}
              >
                {word}
              </motion.div>
            ))}

            {/* Accent dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#1B4FE4",
                boxShadow: "0 0 16px 4px rgba(27,79,228,0.4)",
                marginTop: 16,
              }}
            />
          </motion.div>

          {/* Right — How it works steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1B4FE4",
              }}
            >
              How It Works
            </span>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#0a0a0a",
                marginTop: 12,
                marginBottom: 32,
              }}
            >
              Four simple steps<br />to collaboration.
            </h3>

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                  className="group flex gap-5 items-start py-5"
                  style={{
                    borderBottom: i < steps.length - 1 ? "1px solid rgba(27,79,228,0.08)" : "none",
                  }}
                >
                  {/* Step number */}
                  <div
                    style={{
                      minWidth: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "rgba(27,79,228,0.08)",
                      border: "1px solid rgba(27,79,228,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "12px",
                      color: "#1B4FE4",
                      letterSpacing: "0.05em",
                      transition: "background 0.3s, border-color 0.3s",
                    }}
                    className="group-hover:bg-[rgba(27,79,228,0.15)]"
                  >
                    {step.num}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0a0a0a",
                        marginBottom: 4,
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        color: "#777",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
