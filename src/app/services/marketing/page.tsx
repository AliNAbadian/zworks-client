import type { Metadata } from "next";

import MarketingPage from "@/features/marketing/components/marketing-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "دیجیتال مارکتینگ داده‌محور",
  description:
    "دیجیتال مارکتینگ حرفه‌ای — کمپین‌های هدفمند، تبلیغات آنلاین و استراتژی محتوا برای جذب مشتری و افزایش فروش.",
  path: "/services/marketing",
  keywords: ["دیجیتال مارکتینگ", "تبلیغات آنلاین", "بازاریابی دیجیتال"],
});

const page = () => {
  return <MarketingPage />;
};

export default page;
