export type ComparisonRating = "excellent" | "good" | "limited";

export type PricingPackage = {
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
  variant?: "wordpress" | "professional" | "custom";
};

export type ComparisonRow = {
  id: string;
  label: string;
  wordpress: string;
  custom: string;
  wordpressRating: ComparisonRating;
  customRating: ComparisonRating;
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
