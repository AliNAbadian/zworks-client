import FeatureCard from "@/components/shared/ui/FeatureCard";
import { homeFeatures } from "@/features/home/home-data";

const FeaturesGrid = () => {
  return (
    <div className="container mx-auto my-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 md:divide-x-2">
      {homeFeatures.map((feature, index) => (
        <div key={index} className="md:col-span-1">
          <FeatureCard {...feature} />
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
