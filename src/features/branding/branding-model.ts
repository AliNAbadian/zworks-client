export type ServiceIcon =
  | "brand-strategy"
  | "logo-design"
  | "visual-identity"
  | "typography"
  | "color-systems"
  | "brand-guidelines";

export type BenefitIcon =
  | "trust"
  | "differentiation"
  | "recognition"
  | "consistency";

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

export type CaseStudyItem = {
  id: string;
  title: string;
  industry: string;
  description: string;
  gradient: string;
};
