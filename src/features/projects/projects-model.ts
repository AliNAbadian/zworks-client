export type ProjectCategoryId =
  | "all"
  | "web"
  | "mobile"
  | "ui-ux"
  | "branding"
  | "growth"
  | "cloud";

export type ProjectFilter = {
  id: ProjectCategoryId;
  label: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryId: Exclude<ProjectCategoryId, "all">;
  date: string;
  href: string;
  ctaLabel: string;
  coverImage?: string;
  coverAlt?: string;
  featured?: boolean;
  tags: string[];
  metrics?: ProjectMetric[];
};

export type LensPillar = {
  id: string;
  title: string;
  description: string;
  icon: "telescope" | "layers" | "sparkles";
};

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
  suffix?: string;
};
