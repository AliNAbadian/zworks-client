"use client";

import {
  noMotionVariants,
  scrollRevealTransition,
  scrollRevealVariantMap,
  scrollViewport,
  type ScrollRevealVariant,
} from "@/features/home/lib/scroll-animation";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type MotionTag = "div" | "section" | "article";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
  duration?: number;
  as?: MotionTag;
};

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
} as const;

export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration,
  as = "div",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motionTags[as];

  return (
    <MotionComponent
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={reduceMotion ? noMotionVariants : scrollRevealVariantMap[variant]}
      transition={{
        ...scrollRevealTransition,
        delay,
        ...(duration ? { duration } : {}),
      }}
    >
      {children}
    </MotionComponent>
  );
}
