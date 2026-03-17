"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#050d20",
        borderTop: "1px solid rgba(27,79,228,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <img src="/1.png" alt="Velo Creative" style={{ height: "48px" }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              © 2026 Velo Creative. All rights reserved.
            </p>
          </div>

          {/* Social dots (decorative) */}
          <div className="flex gap-3">
            {["◉", "◈", "✦"].map((icon, i) => (
              <div
                key={i}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(27,79,228,0.1)",
                  border: "1px solid rgba(27,79,228,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-6 items-center">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(27,79,228,0.3), transparent)",
            marginTop: 32,
          }}
        />

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            color: "rgba(255,255,255,0.15)",
            textAlign: "center",
            marginTop: 20,
            letterSpacing: "0.05em",
          }}
        >
          Built for the creative community · veloocreative.com
        </p>
      </div>
    </footer>
  );
}
