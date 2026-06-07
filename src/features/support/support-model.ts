export type ServiceIcon =
  | "bug-fix"
  | "monitoring"
  | "backup"
  | "speed"
  | "updates"
  | "security";

export type BenefitIcon = "risk" | "security" | "performance" | "support";

export type PlanIcon = "basic" | "professional" | "enterprise";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type BenefitItem = {
  id: string;
  title: string;
  description: string;
  icon: BenefitIcon;
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
};

export type SupportPlan = {
  id: string;
  title: string;
  price: string;
  priceLabel: string;
  audience: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  icon: PlanIcon;
};
