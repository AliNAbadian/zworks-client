import FeatureCard from "@/components/shared/ui/FeatureCard";

const features = [
  {
    title: "لورم ایپسوم",
    description: "لورم ایپسوم",
    imageUrl: "/images/abstractpattern.svg",
  },
  {
    title: "لورم ایپسوم",
    description: "لورم ایپسوم",
    imageUrl: "/images/abstractpattern.svg",
  },
  {
    title: "لورم ایپسوم",
    description: "لورم ایپسوم",
    imageUrl: "/images/abstractpattern.svg",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-12 w-full container divide-x-2 mx-auto my-10">
      {features.map((feature, index) => (
        <div key={index} className="col-span-4">
          <FeatureCard {...feature} />
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
