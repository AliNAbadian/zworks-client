import { FeatureCardProps } from "@/types/components";
import { Stars } from "lucide-react"; // make sure you have this import

const FeatureCard = ({
  title,
  description,
  iconSize = 36,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-y-6 w-full p-8">
      <div
        className="bg-base h-[10vh] w-[5vw] rounded-full border-10 border-content-gray bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/images/abstractpattern.svg')` }}
      >
        <Stars size={iconSize} className="text-primary m-auto" />
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-content-gray">{description}</p>
    </div>
  );
};

export default FeatureCard;
