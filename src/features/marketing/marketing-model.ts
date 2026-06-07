export type ServiceIcon =
  | "google-ads"
  | "social-media"
  | "lead-generation"
  | "conversion"
  | "analytics"
  | "performance";

export type BenefitIcon = "sales" | "acquisition" | "roi" | "awareness";

export type KpiIcon =
  | "traffic"
  | "conversion"
  | "roi"
  | "leads"
  | "cost"
  | "satisfaction";

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

export type KpiStat = {
  id: string;
  value: string;
  label: string;
  icon: KpiIcon;
};

export type SuccessStory = {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  result: string;
  metrics: { value: string; label: string }[];
  gradient: string;
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
};
