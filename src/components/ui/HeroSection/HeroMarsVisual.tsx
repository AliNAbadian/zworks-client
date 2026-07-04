"use client";

import dynamic from "next/dynamic";

const ShapeBlur = dynamic(() => import("@/components/ShapeBlur"), {
  ssr: false,
});

const HeroMarsVisual = () => {
  return (
    <div className="relative aspect-square w-full max-w-[420px]">
      <img
        alt=""
        aria-hidden="true"
        className="relative z-0 size-full object-contain p-6 drop-shadow-[0_20px_60px_rgb(var(--primary-rgb)/0.35)]"
        decoding="async"
        height={400}
        src="/images/hero-mars-logo.svg"
        width={400}
      />

      <div className="absolute inset-0 z-10 overflow-hidden rounded-[32px] mix-blend-screen opacity-85 [filter:sepia(1)_saturate(2.8)_hue-rotate(-15deg)]">
        <ShapeBlur
          borderSize={0.035}
          circleEdge={0.5}
          circleSize={0.32}
          roundness={0.55}
          shapeSize={0.95}
          variation={2}
        />
      </div>
    </div>
  );
};

export default HeroMarsVisual;
