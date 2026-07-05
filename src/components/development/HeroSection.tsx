import React from "react";
import HeroBg from "../ui/HeroSection/HeroBg";
import SideStripes from "../ui/development/SideStripes";
import HeroContent from "../ui/development/HeroContent";

const HeroSection = () => {
  return (
    <section className="relative mx-auto min-h-[calc(100vh-3.5rem)] w-full overflow-hidden lg:min-h-screen">
      <div className="grid min-h-[calc(100vh-3.5rem)] grid-cols-12 lg:min-h-screen">
        <div className="col-span-3 hidden lg:block">
          <SideStripes />
        </div>

        <HeroContent />

        <div className="col-span-3 hidden lg:block">
          <SideStripes />
        </div>
      </div>

      <HeroBg />
    </section>
  );
};

export default HeroSection;
