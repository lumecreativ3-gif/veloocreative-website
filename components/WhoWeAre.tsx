"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "100+", label: "Creative Professionals", sub: "Vetted & verified talent" },
  { value: "50+", label: "Verified Brands", sub: "From startups to enterprises" },
  { value: "200+", label: "Successful Projects", sub: "And counting" },
];

export default function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="who-we-are"
      ref={ref}
      className="relative py-28 px-6 lg:px-8 overflow-hidden section-dark"
    >
      {/* Subtle animated gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 70% at 80% 20%, rgba(27,79,228,0.2) 0%, transparent 60%), " +
            "radial-gradient(ellipse 50% 50% at 10% 80%, rgba(15,204,206,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
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
                color: "#4A72FF",
                display: "block",
                marginBottom: 16,
              }}
            >
              Our Story
            </span>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 5vw, 60px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: 32,
              }}
            >
              Who We Are
            </h2>

            <div className="flex flex-col gap-5">
              {[
                "Velo Creative is a curated ecosystem built by creatives, for creatives. We know what it feels like to be talented and overlooked — or to have budget for a project but no way to find the right collaborator.",
                "We built Velo to change that. Our platform is a living, breathing community where relationships matter more than résumés. Every creative is vetted. Every brand is verified. Every collaboration is supported end-to-end.",
                "From a brand strategy session to a full campaign launch — Velo is the partner that makes it happen. We're not just a marketplace. We're a creative movement.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                className="group relative rounded-2xl p-7 overflow-hidden"
                style={{
                  background: "rgba(27,79,228,0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(27,79,228,0.3)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(27,79,228,0.2)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(27,79,228,0.2) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div className="relative z-10 flex items-center gap-6">
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(40px, 5vw, 56px)",
                      color: "#ffffff",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      minWidth: 120,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#ffffff",
                        marginBottom: 4,
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                </div>

                {/* Blue accent dot */}
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#1B4FE4",
                    boxShadow: "0 0 12px 3px rgba(27,79,228,0.5)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
