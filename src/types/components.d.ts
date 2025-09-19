export interface FeatureCardProps {
  title: string;
  description: string;
  iconSize?: number;
  linkText?: string;
  linkIcon?: React.ReactNode;
}

export interface LinkButtonProps {
  href: string;
  linkText: string;
  linkIcon: ReactNode;
  className?: string;
}

export interface GradientCircleIconProps {
  icon: ReactNode;
  className?: string;
  outerSize?: string;
  middleSize?: string;
  innerSize?: string;
}

export interface ServicesCardProps {
  titleIcon: ReactNode;
  titleText: string;
  backgroundImage?: string;
  className?: string;
  children?: ReactNode;
}

export interface IRadialEffectProps {
  size?: string;
  className?: string;
  color?: string;
  transparency?: number;
}
