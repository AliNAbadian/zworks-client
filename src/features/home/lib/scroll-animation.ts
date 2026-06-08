import type { Transition, Variant, ViewportOptions } from "motion/react";

export const scrollViewport: ViewportOptions = {
  once: true,
  margin: "-10% 0px -8% 0px",
  amount: 0.2,
};

export const scrollRevealTransition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeUpVariants: Record<string, Variant> = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Record<string, Variant> = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleInVariants: Record<string, Variant> = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInStartVariants: Record<string, Variant> = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

export const slideInEndVariants: Record<string, Variant> = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
};

export const noMotionVariants: Record<string, Variant> = {
  hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
  visible: { opacity: 1, y: 0, x: 0, scale: 1 },
};

export type ScrollRevealVariant =
  | "fadeUp"
  | "fadeIn"
  | "scaleIn"
  | "slideInStart"
  | "slideInEnd";

export const scrollRevealVariantMap = {
  fadeUp: fadeUpVariants,
  fadeIn: fadeInVariants,
  scaleIn: scaleInVariants,
  slideInStart: slideInStartVariants,
  slideInEnd: slideInEndVariants,
} as const;
