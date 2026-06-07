export type ServiceIcon =
  | "technical"
  | "keyword"
  | "content"
  | "on-page"
  | "off-page"
  | "local";

export type ResultIcon = "traffic" | "rankings" | "leads" | "sales";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type ResultItem = {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: ResultIcon;
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
