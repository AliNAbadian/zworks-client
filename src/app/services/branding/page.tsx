import type { Metadata } from "next";

import BrandingPage from "@/features/branding/components/branding-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "برندسازی و هویت بصری",
  description:
    "خدمات برندسازی حرفه‌ای — طراحی لوگو، هویت بصری و استراتژی برند برای متمایز شدن در بازار دیجیتال.",
  path: "/services/branding",
  keywords: ["برندسازی", "هویت بصری", "طراحی لوگو", "برند"],
});

const page = () => {
  return <BrandingPage />;
};

export default page;
