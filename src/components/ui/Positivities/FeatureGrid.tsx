import FeatureCard from "@/components/shared/ui/FeatureCard";

const features = [
  {
    title: "لورم ایپسوم",
    description:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون وسطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    imageUrl: "/images/abstractpattern.svg",
  },
  {
    title: "لورم ایپسوم",
    description:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون وسطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    imageUrl: "/images/abstractpattern.svg",
  },
  {
    title: "لورم ایپسوم",
    description:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون وسطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
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
