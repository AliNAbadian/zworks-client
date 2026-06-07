export type ServiceIcon =
  | "android"
  | "ios"
  | "flutter"
  | "react-native"
  | "ui-ux"
  | "publishing";

export type BenefitIcon =
  | "engagement"
  | "access"
  | "sales"
  | "branding"
  | "notifications";

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

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
