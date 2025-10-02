import FlowCards from "@/components/development/FlowCards";
import HeroSection from "@/components/development/HeroSection";
import OurWorkRoute from "@/components/development/OurWorkRoute";
import Portfolio from "@/components/development/Portfolio";
import CallToAction from "@/components/ui/CallToAction";
import HeroContent from "@/components/ui/development/HeroContent";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen font-iransans">
      <HeroSection>
        <HeroContent />
      </HeroSection>
      <OurWorkRoute />
      <FlowCards />
      <Portfolio />
      <CallToAction />
    </div>
  );
};

export default page;
