export type ServiceIcon =
  | "architecture"
  | "cicd"
  | "containerization"
  | "kubernetes"
  | "monitoring"
  | "automation";

export type BenefitIcon = "scalability" | "security" | "cost" | "deployment";

export type ArchitectureLayerIcon =
  | "users"
  | "load-balancer"
  | "app-servers"
  | "database"
  | "cdn";

export type CredibilityIcon =
  | "uptime"
  | "security"
  | "response"
  | "compliance"
  | "automation"
  | "monitoring";

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

export type ArchitectureLayer = {
  id: string;
  label: string;
  description: string;
  icon: ArchitectureLayerIcon;
};

export type TechBadge = {
  id: string;
  name: string;
};

export type CredibilityItem = {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: CredibilityIcon;
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
