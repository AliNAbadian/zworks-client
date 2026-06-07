import React from "react";
import HeroBg from "../ui/HeroSection/HeroBg";
import SideStripes from "../ui/development/SideStripes";
import HeroContent from "../ui/development/HeroContent";
import RadialBackgrounds from "../ui/development/RadialBackgrounds";

const HeroSection = () => {
  return (
    <section className="relative w-full mx-auto min-h-screen overflow-hidden">
      <div className="grid min-h-screen grid-cols-12">
        <div className="col-span-3 hidden lg:block">
          <SideStripes />
        </div>

        <HeroContent />

        <div className="col-span-3 hidden lg:block">
          <SideStripes />
        </div>
      </div>

      {/* Radial glow effects */}
      <RadialBackgrounds />

      {/* Background */}
      <HeroBg />
    </section>
  );
};

export default HeroSection;
