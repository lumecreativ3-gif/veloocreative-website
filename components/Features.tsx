"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "◉",
    title: "Project Management",
    desc: "Post projects, browse opportunities, manage work in one intuitive dashboard. Everything your creative workflow needs.",
    color: "#1B4FE4",
  },
  {
    icon: "✦",
    title: "AI-Powered Matching",
    desc: "Intelligent partner matching connects you with creatives who align with your vision, budget, and timeline.",
    color: "#0FCCCE",
  },
  {
    icon: "◈",
    title: "Pitch Rooms",
    desc: "Competitive pitch challenges where creatives showcase their best ideas and brands discover bold, fresh perspectives.",
    color: "#FF6B35",
  },
  {
    icon: "▦",
    title: "Content Tracker",
    desc: "Visual kanban boards to track project progress, deliverables, and milestones from brief to final delivery.",
    color: "#1B4FE4",
  },
  {
    icon: "◎",
    title: "Direct Messaging",
    desc: "Seamless, contextual communication built into every project — no more scattered email threads.",
    color: "#0FCCCE",
  },
  {
    icon: "⬡",
    title: "Exclusive Community",
    desc: "Invite-only network of verified brands and vetted creative professionals who care about quality.",
    color: "#FF6B35",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1B4FE4",
              display: "block",
              marginBottom: 16,
            }}
          >
            Platform Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
            Everything You Need<br />
            <span style={{ color: "#1B4FE4" }}>to Collaborate</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            Powerful features designed for seamless creative partnerships.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="feature-card group relative rounded-3xl p-7 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.62)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.85)",
                boxShadow: "0 4px 24px rgba(27,79,228,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${feat.color}14`,
                  border: `1px solid ${feat.color}28`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: 20,
                  color: feat.color,
                  transition: "background 0.3s",
                }}
                className="group-hover:bg-opacity-20"
              >
                {feat.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "17px",
                  color: "#0a0a0a",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {feat.title}
              </h3>

              {/* Desc */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.7,
                }}
              >
                {feat.desc}
              </p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 30% 0%, ${feat.color}0d 0%, transparent 60%)`,
                }}
              />

              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${feat.color}50, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
