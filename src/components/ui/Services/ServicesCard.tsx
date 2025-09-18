import { ReactNode } from "react";
import GradientCircleIcon from "@/components/shared/ui/GradientCircleIcon";
import LinkButton from "@/components/shared/ui/LinkButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServicesCardProps } from "@/types/components";

const ServicesCard: React.FC<ServicesCardProps> = ({
  titleIcon,
  titleText,
  backgroundImage = "/images/abstractbg.svg",
  className = "",
  children,
}) => {
  return (
    <Card
      className={`w-full mx-auto h-full bg-base/50 ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <CardHeader className="text-white">
        <CardTitle>
          <GradientCircleIcon icon={titleIcon} />
        </CardTitle>
        <CardDescription className="font-black text-2xl text-white text-center py-4">
          {titleText}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">{children}</CardContent>
    </Card>
  );
};

export default ServicesCard;
