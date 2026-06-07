export type ServiceIcon =
  | "user-research"
  | "wireframing"
  | "user-flow"
  | "prototyping"
  | "design-systems"
  | "usability-testing";

export type BenefitIcon =
  | "conversion"
  | "retention"
  | "satisfaction"
  | "professional"
  | "trust";

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

export type ShowcaseItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
};
