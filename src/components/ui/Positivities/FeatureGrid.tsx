import FeatureCard from "@/components/shared/ui/FeatureCard";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { homeFeatures } from "@/features/home/home-data";

const FeaturesGrid = () => {
  return (
    <div className="container mx-auto my-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 md:divide-x-2">
      {homeFeatures.map((feature, index) => (
        <ScrollReveal
          key={feature.title}
          className="md:col-span-1"
          delay={index * 0.12}
          variant="fadeUp"
        >
          <FeatureCard {...feature} />
        </ScrollReveal>
      ))}
    </div>
  );
};

export default FeaturesGrid;
