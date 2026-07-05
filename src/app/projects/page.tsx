import type { Metadata } from "next";

import ProjectsPage from "@/features/projects/components/projects-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "نمونه‌کارها و پروژه‌ها",
  description:
    "مرور نمونه‌کارهای مارس در توسعه وب، اپلیکیشن موبایل، UI/UX، برندسازی، سئو و زیرساخت ابری — هر پروژه با رویکرد کنجکاوی و نوآوری.",
  path: "/projects",
  keywords: [
    "نمونه کار",
    "پورتفولیو",
    "پروژه‌های وب",
    "نمونه کار طراحی",
    "مارس",
  ],
});

const page = () => {
  return <ProjectsPage />;
};

export default page;
