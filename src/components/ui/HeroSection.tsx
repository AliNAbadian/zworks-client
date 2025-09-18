import { ActionButtons } from "@/components/shared/ui/ActionButtons";
import { Button } from "@/components/ui/button";
import HeroBg from "@/components/ui/HeroSection/HeroBg";
import HeroMeta from "@/components/ui/HeroSection/HeroMeta";
import { CloudLightning } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <HeroMeta />
      <HeroBg />
    </section>
  );
};

export default HeroSection;
