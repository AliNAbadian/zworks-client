import type { Metadata } from "next";

export const SITE_NAME = "زی‌ورکس";
export const SITE_NAME_EN = "ZWORKS";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://zworks.ir";

export const DEFAULT_KEYWORDS = [
  "طراحی وب سایت",
  "طراحی وب‌سایت",
  "توسعه وب",
  "خدمات توسعه وب",
  "شرکت طراحی وب",
  "ساخت وب سایت حرفه‌ای",
  "طراحی سایت شرکتی",
  "توسعه اپلیکیشن وب",
  "طراحی UI/UX",
  "زی ورکس",
  "ZWORKS",
  "React",
  "Next.js",
  "وردپرس",
  "دیجیتال مارکتینگ",
  "سئو",
  "برندسازی",
] as const;

export const DEFAULT_DESCRIPTION =
  "زی‌ورکس؛ شرکت طراحی و توسعه وب حرفه‌ای. طراحی وب‌سایت، توسعه React/Next.js، UI/UX، سئو و دیجیتال مارکتینگ — ساخت سایت شرکتی و اپلیکیشن وب با کیفیت enterprise.";

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  titleAbsolute?: boolean;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  titleAbsolute = false,
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath || "/"}`;

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "fa_IR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — شرکت طراحی و توسعه وب حرفه‌ای`,
    template: `%s | ${SITE_NAME} — طراحی و توسعه وب`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...DEFAULT_KEYWORDS],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — شرکت طراحی و توسعه وب حرفه‌ای`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — شرکت طراحی و توسعه وب حرفه‌ای`,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const SITEMAP_ROUTES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/development", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/plans", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/team", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  {
    path: "/services/mobile-apps",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/services/ui-ux",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  { path: "/services/seo", changeFrequency: "monthly" as const, priority: 0.7 },
  {
    path: "/services/branding",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/services/marketing",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/services/support",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/services/cloud",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
] as const;
