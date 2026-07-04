"use client";

import LandingLightPillar from "@/features/home/components/landing-light-pillar";
import HeroMeta from "@/components/ui/HeroSection/HeroMeta";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const HeroScrollSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 100],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.85],
    [1, reduceMotion ? 1 : 0.25],
  );
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, reduceMotion ? 1 : 0],
  );

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ opacity: backgroundOpacity }}
      >
        <LandingLightPillar />
      </motion.div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }}>
        <HeroMeta />
      </motion.div>
    </section>
  );
};

export default HeroScrollSection;
