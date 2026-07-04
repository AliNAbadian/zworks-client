import LinkButton from "@/components/shared/ui/LinkButton";
import { FeatureCardProps } from "@/types/components";
import { ArrowLeft } from "lucide-react";

const FeatureCard = ({
  title,
  description,
  href,
  linkText = "مشاهده بیشتر",
  linkIcon = <ArrowLeft />,
  iconSize = 36,
  Icon,
}: FeatureCardProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-6 p-5 sm:p-8">
      <div
        className="bg-base flex h-[10vh] w-[22vw] items-center justify-center rounded-full border-10 border-content-gray bg-cover bg-center lg:w-[5vw]"
        style={{ backgroundImage: `url('/images/abstractpattern.svg')` }}
      >
        <Icon size={iconSize} className="m-auto text-primary" />
      </div>
      <h3 className="text-center text-lg font-semibold text-balance">{title}</h3>
      <p className="text-center text-content-gray">{description}</p>
      <LinkButton
        className="my-4"
        href={href}
        linkIcon={linkIcon}
        linkText={linkText}
      />
    </div>
  );
};

export default FeatureCard;
