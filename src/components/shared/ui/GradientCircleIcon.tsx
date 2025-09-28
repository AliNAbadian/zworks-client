import { ReactNode } from "react";

interface GradientCircleIconProps {
  icon: ReactNode;
  className?: string;
  outerSize?: string;
  middleSize?: string;
  innerSize?: string;
  color?: string; // ✅ new prop for gradient color
}

const GradientCircleIcon: React.FC<GradientCircleIconProps> = ({
  icon,
  className = "",
  outerSize = "w-22 h-22",
  middleSize = "w-18 h-18",
  innerSize = "w-14 h-14",
  color = "from-primary/40", // ✅ default if not provided
}) => {
  return (
    <div className={`flex flex-row items-center justify-center ${className}`}>
      <div
        className={`bg-gradient-to-b ${color} to-transparent rounded-full ${outerSize} flex flex-row items-center justify-center`}
      >
        <div
          className={`bg-gradient-to-b ${color} to-transparent rounded-full ${middleSize} flex flex-row items-center justify-center`}
        >
          <div
            className={`bg-gradient-to-b ${color} to-transparent rounded-full ${innerSize} flex flex-row items-center justify-center`}
          >
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientCircleIcon;
