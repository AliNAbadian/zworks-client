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
