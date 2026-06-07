import LinkButton from "@/components/shared/ui/LinkButton";
import { FeatureCardProps } from "@/types/components";
import { ArrowLeft } from "lucide-react";

const FeatureCard = ({
  title,
  description,
  linkText = "مشاهده بیشتر",
  linkIcon = <ArrowLeft />,
  iconSize = 36,
  Icon
}: FeatureCardProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-6 p-5 sm:p-8">
      <div
        className="bg-base h-[10vh] lg:w-[5vw] w-[22vw] rounded-full border-10 border-content-gray bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/images/abstractpattern.svg')` }}
      >
        <Icon size={iconSize} className="text-primary m-auto" />
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-content-gray">{description}</p>
      <LinkButton
        href="/about"
        linkText={linkText}
        linkIcon={linkIcon}
        className="my-4"
      />
    </div>
  );
};

export default FeatureCard;
