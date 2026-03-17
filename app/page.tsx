"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolutionMission from "@/components/ProblemSolutionMission";
import WhatIsVelo from "@/components/WhatIsVelo";
import Features from "@/components/Features";
import WhoWeAre from "@/components/WhoWeAre";
import QuoteSection from "@/components/QuoteSection";
import YourCreativityMatters from "@/components/YourCreativityMatters";
import GetStartedCTA from "@/components/GetStartedCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Intro animation overlay */}
      <AnimatePresence>
        {!introComplete && (
          <IntroAnimation onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main site */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated gradient background — fixed, always present */}
            <div className="gradient-bg" aria-hidden="true" />

            <Navigation />

            <main>
              <Hero />
              <ProblemSolutionMission />
              <WhatIsVelo />
              <Features />
              <WhoWeAre />
              <QuoteSection />
              <YourCreativityMatters />
              <GetStartedCTA />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
