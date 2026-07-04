"use client";

import GradualBlur from "@/components/GradualBlur";
import { useReducedMotion } from "motion/react";

const ViewportBottomBlur = () => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <GradualBlur
      preset="page-footer"
      responsive
      target="page"
      zIndex={40}
      className="pb-[env(safe-area-inset-bottom,0px)] lg:pb-0"
      mobileHeight="5rem"
      tabletHeight="7rem"
      desktopHeight="10rem"
    />
  );
};

export default ViewportBottomBlur;
