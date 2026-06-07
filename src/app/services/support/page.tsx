import type { Metadata } from "next";

import SupportPage from "@/features/support/components/support-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "پشتیبانی و نگهداری وب‌سایت",
  description:
    "پشتیبانی حرفه‌ای وب‌سایت — مانیتورینگ، بکاپ‌گیری، به‌روزرسانی و امنیت مداوم برای عملکرد بدون وقفه سایت شما.",
  path: "/services/support",
  keywords: ["پشتیبانی سایت", "نگهداری وب سایت", "امنیت سایت"],
});

const page = () => {
  return <SupportPage />;
};

export default page;
