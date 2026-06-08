import { ScrollReveal } from "@/components/shared/scroll-reveal";
import FeaturesGrid from "@/components/ui/Positivities/FeatureGrid";
import PositiveHeader from "@/components/ui/Positivities/PositiveHeader";

const Positivities = () => {
  return (
    <section className="min-h-screen w-full font-iransans my-8">
      <ScrollReveal>
        <PositiveHeader />
      </ScrollReveal>
      <FeaturesGrid />
    </section>
  );
};

export default Positivities;
