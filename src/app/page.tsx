import { Button } from "@/components/ui/button";
import CallToAction from "@/components/ui/CallToAction";
import FAQ from "@/components/ui/FAQ";
import HeroSection from "@/components/ui/HeroSection";
import OurProjects from "@/components/ui/OurProjects";
import Positivities from "@/components/ui/Positivities";
import Services from "@/components/ui/Services";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Positivities />
      <Services />
      <OurProjects />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default page;
