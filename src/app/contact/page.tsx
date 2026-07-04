import type { Metadata } from "next";

import ContactPage from "@/features/contact/components/contact-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "تماس با مارس — مشاوره طراحی وب",
  description:
    "برای مشاوره رایگان طراحی وب‌سایت، توسعه React/Next.js یا سئو با تیم مارس تماس بگیرید. فرم تماس آنلاین — پاسخ سریع.",
  path: "/contact",
  keywords: ["مشاوره طراحی وب", "سفارش طراحی سایت"],
});

const page = () => {
  return <ContactPage />;
};

export default page;
