"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const LightPillar = dynamic(() => import("@/components/LightPillar"), {
  ssr: false,
});

const LandingLightPillar = () => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 mask-[linear-gradient(to_bottom,black_55%,transparent_100%)]"
    >
      <LightPillar
        bottomColor="#6B2808"
        glowAmount={0.004}
        intensity={0.75}
        mixBlendMode="screen"
        noiseIntensity={0.35}
        pillarHeight={0.45}
        pillarRotation={12}
        pillarWidth={2.8}
        quality="medium"
        rotationSpeed={0.22}
        topColor="#E8734A"
      />
    </div>
  );
};

export default LandingLightPillar;
