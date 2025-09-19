import { Button } from "@/components/ui/button";
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
    </div>
  );
};

export default page;
