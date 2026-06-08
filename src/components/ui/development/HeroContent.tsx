import { DEVELOPMENT_HERO } from "@/features/development/development-data";
import React from "react";

const HeroContent = () => {
  return (
    <div className="relative col-span-12 flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4 py-24 font-iransans lg:col-span-6 lg:min-h-screen lg:py-32">
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-y-8 text-center lg:gap-y-10">
        <h1 className="text-4xl font-black text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-gray-400">{DEVELOPMENT_HERO.titleHighlight}</span>{" "}
          {DEVELOPMENT_HERO.titleMain}
        </h1>
        <h2 className="z-10 max-w-3xl text-base leading-relaxed text-gray-500 sm:text-lg">
          {DEVELOPMENT_HERO.description}
        </h2>
      </div>
    </div>
  );
};

export default HeroContent;
