import FeaturesGrid from "@/components/ui/Positivities/FeatureGrid";
import PositiveHeader from "@/components/ui/Positivities/PositiveHeader";
import React from "react";

const Positivities = () => {
  return (
    <section className="h-screen w-full font-iransans my-8">
      <PositiveHeader />
      <FeaturesGrid />
      <div className="border container mx-auto"></div>
      <FeaturesGrid />
    </section>
  );
};

export default Positivities;
