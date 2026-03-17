"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<
    "dots-appear" | "dots-split" | "dots-arc" | "dots-collide" | "logo-burst" | "prompt" | "done"
  >("dots-appear");
  const [clicked, setClicked] = useState(false);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Phase timeline
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setPhase("dots-split"), 455));
    timers.push(setTimeout(() => setPhase("dots-arc"), 910));
    timers.push(setTimeout(() => setPhase("dots-collide"), 1820));
    timers.push(setTimeout(() => setPhase("logo-burst"), 2275));
    timers.push(setTimeout(() => setPhase("prompt"), 2730));

    // Auto-transition after prompt appears
    autoTimerRef.current = setTimeout(() => {
      setPhase("done");
      setTimeout(onComplete, 600);
    }, 4160);

    return () => {
      timers.forEach(clearTimeout);
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
  }, [onComplete]);

  const handleClick = () => {
    if (phase === "prompt" || phase === "logo-burst") {
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
      setClicked(true);
      setPhase("done");
      setTimeout(onComplete, 600);
    }
  };

  // Dot positions per phase
  const topDotVariants = {
    "dots-appear": { x: 0, y: 0, opacity: 1, scale: 1 },
    "dots-split": { x: 0, y: -50, opacity: 1, scale: 1 },
    "dots-arc": { x: 0, y: -110, opacity: 1, scale: 1 },
    "dots-collide": { x: 0, y: 0, opacity: 1, scale: 1.4 },
    "logo-burst": { x: 0, y: 0, opacity: 0, scale: 3 },
    prompt: { x: 0, y: 0, opacity: 0, scale: 3 },
    done: { x: 0, y: 0, opacity: 0, scale: 3 },
  };

  const bottomDotVariants = {
    "dots-appear": { x: 0, y: 0, opacity: 1, scale: 1 },
    "dots-split": { x: 0, y: 50, opacity: 1, scale: 1 },
    "dots-arc": { x: 0, y: 110, opacity: 1, scale: 1 },
    "dots-collide": { x: 0, y: 0, opacity: 1, scale: 1.4 },
    "logo-burst": { x: 0, y: 0, opacity: 0, scale: 3 },
    prompt: { x: 0, y: 0, opacity: 0, scale: 3 },
    done: { x: 0, y: 0, opacity: 0, scale: 3 },
  };

  const showLogo = ["logo-burst", "prompt", "done"].includes(phase);
  const showPrompt = phase === "prompt";
  const isDone = phase === "done";

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="intro-overlay cursor-pointer"
          onClick={handleClick}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.46, ease: "easeInOut" }}
        >
          {/* Radial glow background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(27,79,228,0.10) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Dot stage */}
          <div
            style={{
              position: "relative",
              width: 0,
              height: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Top dot — clockwise arc: starts top, goes right, bottom, left, back to top */}
            <motion.div
              className="glow-dot"
              style={{ position: "absolute" }}
              animate={
                phase === "dots-arc"
                  ? {
                      x: [0, 110, 0, -110, 0],
                      y: [-50, 0, 110, 0, -110],
                      scale: 1,
                      opacity: 1,
                    }
                  : topDotVariants[phase]
              }
              transition={
                phase === "dots-arc"
                  ? { duration: 1.17, ease: "easeInOut" }
                  : phase === "dots-collide"
                  ? { duration: 0.29, ease: "easeIn" }
                  : phase === "logo-burst"
                  ? { duration: 0.20, ease: "easeOut" }
                  : { duration: 0.36, ease: "easeOut" }
              }
            />

            {/* Bottom dot — counter-clockwise arc */}
            <motion.div
              className="glow-dot"
              style={{ position: "absolute" }}
              animate={
                phase === "dots-arc"
                  ? {
                      x: [0, -110, 0, 110, 0],
                      y: [50, 0, -110, 0, 110],
                      scale: 1,
                      opacity: 1,
                    }
                  : bottomDotVariants[phase]
              }
              transition={
                phase === "dots-arc"
                  ? { duration: 1.17, ease: "easeInOut" }
                  : phase === "dots-collide"
                  ? { duration: 0.29, ease: "easeIn" }
                  : phase === "logo-burst"
                  ? { duration: 0.20, ease: "easeOut" }
                  : { duration: 0.36, ease: "easeOut" }
              }
            />

            {/* Collision flash */}
            <AnimatePresence>
              {phase === "dots-collide" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 4, opacity: [0, 1, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.33, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#1B4FE4",
                    boxShadow:
                      "0 0 80px 40px rgba(27,79,228,0.9), 0 0 200px 80px rgba(27,79,228,0.4)",
                    pointerEvents: "none",
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Logo burst */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.39, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0px",
                }}
              >
                {/* Flash ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 6, opacity: 0 }}
                  transition={{ duration: 0.46, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    border: "2px solid rgba(27,79,228,0.6)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ textAlign: "center" }}>
                  <img src="/1.png" alt="Velo Creative" style={{ height: "100px" }} />
                </div>

                {/* Subtle underline accent */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  style={{
                    height: 2,
                    background: "linear-gradient(90deg, transparent, #1B4FE4, transparent)",
                    marginTop: 12,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prompt */}
          <AnimatePresence>
            {showPrompt && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 0.7, 1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.52, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "rgba(27,79,228,0.75)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                tap to continue
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
