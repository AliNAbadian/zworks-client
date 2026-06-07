import type { Metadata } from "next";

import SeoPage from "@/features/seo/components/seo-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "سئو و بهینه‌سازی موتور جستجو",
  description:
    "خدمات سئو حرفه‌ای برای رتبه‌گیری در گوگل — افزایش ترافیک ارگانیک، بهینه‌سازی فنی و محتوا برای وب‌سایت شما.",
  path: "/services/seo",
  keywords: ["سئو", "SEO", "بهینه سازی سایت", "رتبه گوگل"],
});

const page = () => {
  return <SeoPage />;
};

export default page;
