import type { Metadata } from "next";

import MobileAppsPage from "@/features/mobile-apps/components/mobile-apps-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "طراحی و توسعه اپلیکیشن موبایل",
  description:
    "طراحی و توسعه اپلیکیشن Android و iOS حرفه‌ای — از ایده تا انتشار در مارکت‌ها. همراه با طراحی UI/UX و توسعه وب زی‌ورکس.",
  path: "/services/mobile-apps",
  keywords: ["اپلیکیشن موبایل", "توسعه اپلیکیشن", "Android", "iOS"],
});

const page = () => {
  return <MobileAppsPage />;
};

export default page;
