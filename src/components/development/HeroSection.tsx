import React from "react";
import HeroBg from "../ui/HeroSection/HeroBg";
import SideStripes from "../ui/development/SideStripes";
import HeroContent from "../ui/development/HeroContent";
import RadialBackgrounds from "../ui/development/RadialBackgrounds";

const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative w-full mx-auto min-h-screen overflow-hidden">
      <div className="grid grid-cols-12 min-h-screen ">
        {/* Left stripes */}
        <div className="col-span-3">
          <SideStripes />
        </div>

        {/* Hero content */}
        {children}

        {/* Right stripes */}
        <div className="col-span-3">
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
