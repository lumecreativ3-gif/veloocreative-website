"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const FORMS = {
  creator: "https://docs.google.com/forms/d/e/1FAIpQLSfJuEi1meIoct91bvuYaFCP84ZBvvHg3lyX18U053spyO2c4A/viewform?embedded=true",
  business: "https://docs.google.com/forms/d/e/1FAIpQLSf_Anj0holOEtRqjvnRgKV9IkQGuVlcHbZQdGz2Hv4xP_wsBw/viewform?embedded=true",
};

export default function InquirySection() {
  const [active, setActive] = useState<"creator" | "business">("creator");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="inquiry"
      className="relative py-24 px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(5,13,45,0.96) 0%, rgba(5,13,45,0.98) 100%)",
      }}
    >
      {/* Background dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: "50%",
            background: i % 4 === 0 ? "#1B4FE4" : "rgba(255,255,255,0.12)",
            top: `${10 + (i * 19) % 80}%`,
            left: `${5 + (i * 27) % 90}%`,
          }}
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1B4FE4",
              marginBottom: "12px",
            }}
          >
            Get Involved
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Tell Us About Yourself
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              marginTop: "12px",
            }}
          >
            Whether you're a creator or a business — we want to hear from you.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div
            style={{
              display: "inline-flex",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "4px",
              gap: "4px",
            }}
          >
            {(["creator", "business"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 28px",
                  borderRadius: "9px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textTransform: "capitalize",
                  background: active === tab ? "#1B4FE4" : "transparent",
                  color: active === tab ? "#ffffff" : "rgba(255,255,255,0.45)",
                }}
              >
                {tab === "creator" ? "I'm a Creator" : "I'm a Business"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Form embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7 }}
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(27,79,228,0.2)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <iframe
            key={active}
            src={FORMS[active]}
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{ display: "block", background: "transparent" }}
            title={`${active === "creator" ? "Creator" : "Business"} Inquiry Form`}
          >
            Loading…
          </iframe>
        </motion.div>
      </div>
    </section>
  );
}
