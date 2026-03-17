"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    number: "1",
    title: "THE PROBLEM",
    body: "Small businesses need creative support but traditional agencies are too expensive. Creatives have real skills yet struggle to access paid opportunities. Platforms feel oversaturated and transactional.",
    accent: "#1B4FE4",
    icon: "⚡",
  },
  {
    number: "2",
    title: "SOLUTION",
    body: "VELO exists to make creative work valued and trusted. We match vetted talent with real needs based on story, timing, and budget. Collaboration made simple, affordable, and genuinely human.",
    accent: "#0FCCCE",
    icon: "✦",
  },
  {
    number: "3",
    title: "OUR MISSION",
    body: "To build a more human creative economy where creators are valued, fairly compensated, and supported, and where local businesses can grow, stay visible, and truly thrive.",
    accent: "#FF6B35",
    icon: "◈",
  },
];

export default function ProblemSolutionMission() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
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
            Why Velo
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Big number backdrop */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "20px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "140px",
                  lineHeight: 1,
                  color: card.accent,
                  opacity: 0.07,
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              >
                {card.number}
              </div>

              {/* Glass card */}
              <div
                className="feature-card relative z-10 rounded-3xl p-8 h-full"
                style={{
                  background: "rgba(255,255,255,0.62)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.85)",
                  boxShadow: "0 8px 40px rgba(27,79,228,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                {/* Accent line */}
                <div
                  style={{
                    width: 40,
                    height: 3,
                    borderRadius: 2,
                    background: card.accent,
                    marginBottom: 24,
                  }}
                />

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "0.15em",
                    color: card.accent,
                    marginBottom: 16,
                    textTransform: "uppercase",
                  }}
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    color: "#444",
                    lineHeight: 1.75,
                    fontWeight: 400,
                  }}
                >
                  {card.body}
                </p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 80% at 50% 0%, ${card.accent}10 0%, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
