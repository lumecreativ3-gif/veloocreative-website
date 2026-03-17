"use client";

import { motion } from "framer-motion";

const floatingCards = [
  {
    title: "Brand Design",
    sub: "Visual Identity",
    color: "rgba(27,79,228,0.1)",
    top: "15%",
    left: "6%",
    delay: 0,
    rotate: -6,
  },
  {
    title: "Motion & Video",
    sub: "Content Creation",
    color: "rgba(15,204,206,0.1)",
    top: "60%",
    left: "3%",
    delay: 0.4,
    rotate: 4,
  },
  {
    title: "Web & UX",
    sub: "Digital Experiences",
    color: "rgba(255,107,53,0.1)",
    top: "20%",
    right: "6%",
    delay: 0.2,
    rotate: 5,
  },
  {
    title: "Photography",
    sub: "Editorial & Product",
    color: "rgba(27,79,228,0.08)",
    top: "65%",
    right: "4%",
    delay: 0.6,
    rotate: -4,
  },
  {
    title: "Copywriting",
    sub: "Brand Storytelling",
    color: "rgba(15,204,206,0.08)",
    top: "42%",
    left: "8%",
    delay: 0.8,
    rotate: 3,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating decorative cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8 + card.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: card.top,
            left: card.left,
            right: card.right,
            zIndex: 1,
          }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="glass rounded-2xl px-5 py-4 w-44"
            style={{
              background: `rgba(255,255,255,0.65)`,
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.85)",
              transform: `rotate(${card.rotate}deg)`,
              boxShadow: "0 8px 32px rgba(27,79,228,0.08)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: card.color,
                border: "1px solid rgba(27,79,228,0.15)",
                marginBottom: 8,
              }}
            />
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                color: "#0a0a0a",
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                color: "#888",
                marginTop: 2,
              }}
            >
              {card.sub}
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-32 pt-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          style={{ border: "1px solid rgba(27,79,228,0.2)" }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#1B4FE4",
              boxShadow: "0 0 8px 2px rgba(27,79,228,0.5)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              color: "#1B4FE4",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Velo Creative
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(52px, 8vw, 112px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#0a0a0a",
            marginBottom: "28px",
          }}
        >
          Connect.{" "}
          <span style={{ color: "#1B4FE4" }}>Collaborate.</span>
          <br />
          Create.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#555",
            maxWidth: "620px",
            margin: "0 auto 44px",
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          The exclusive platform connecting ambitious brands with world-class creative
          professionals. Bring your vision to life with the perfect creative partner.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#get-started"
            className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
            style={{
              background: "linear-gradient(135deg, #1B4FE4, #4A72FF)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              minWidth: "160px",
            }}
          >
            <span className="relative z-10">Get Started</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #1340C0, #1B4FE4)" }}
            />
          </a>

          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 glass"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              color: "#0a0a0a",
              minWidth: "160px",
              textAlign: "center",
              border: "1px solid rgba(27,79,228,0.2)",
            }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 24,
              height: 38,
              borderRadius: 12,
              border: "2px solid rgba(27,79,228,0.3)",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              paddingTop: 6,
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                borderRadius: 2,
                background: "#1B4FE4",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
