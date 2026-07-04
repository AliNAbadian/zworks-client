"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const Waves = dynamic(() => import("@/components/Waves"), { ssr: false });

const DEFAULT_WAVE_LINE = "rgba(193, 68, 14, 0.2)";

function getPrimaryWaveLineColor(): string {
  if (typeof window === "undefined") {
    return DEFAULT_WAVE_LINE;
  }

  const rgb = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-rgb")
    .trim();

  if (!rgb) {
    return DEFAULT_WAVE_LINE;
  }

  return `rgba(${rgb.replace(/\s+/g, ", ")}, 0.2)`;
}

const HeroBgBottomFade = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent via-background/70 to-background sm:h-40 lg:h-52"
  />
);

const HeroBg = () => {
  const reduceMotion = useReducedMotion();
  const [lineColor, setLineColor] = useState(DEFAULT_WAVE_LINE);

  useEffect(() => {
    setLineColor(getPrimaryWaveLineColor());
  }, []);

  if (reduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute start-0 top-0 -z-10 h-full min-h-full w-full overflow-hidden opacity-60 sm:opacity-100"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(var(--primary-rgb)/0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--primary-rgb)/0.06)_0%,transparent_45%)]" />
        <HeroBgBottomFade />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute start-0 top-0 -z-10 h-full min-h-full w-full overflow-hidden opacity-60 sm:opacity-100"
    >
      <Waves
        backgroundColor="transparent"
        className="opacity-90"
        lineColor={lineColor}
        maxCursorMove={80}
        showCursorDot={false}
        waveAmpX={28}
        waveAmpY={14}
        waveSpeedX={0.01}
        waveSpeedY={0.004}
        xGap={12}
        yGap={30}
      />
      <HeroBgBottomFade />
    </div>
  );
};

export default HeroBg;
