import type { Metadata } from "next";

import UiUxPage from "@/features/ui-ux/components/ui-ux-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "طراحی UI/UX حرفه‌ای",
  description:
    "طراحی رابط و تجربه کاربری UI/UX مدرن برای وب و موبایل — تحقیق کاربر، وایرفریم و دیزاین سیستم توسط تیم زی‌ورکس.",
  path: "/services/ui-ux",
  keywords: ["طراحی UI", "طراحی UX", "تجربه کاربری", "رابط کاربری"],
});

const page = () => {
  return <UiUxPage />;
};

export default page;
