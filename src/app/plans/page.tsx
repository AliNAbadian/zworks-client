import type { Metadata } from "next";

import PlansPage from "@/features/plans/components/plans-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "پلن‌ها و قیمت طراحی وب‌سایت",
  description:
    "پکیج‌های طراحی وب‌سایت وردپرس و توسعه اختصاصی React/Next.js. قیمت‌گذاری شفاف برای سایت شرکتی، فروشگاهی و SaaS.",
  path: "/plans",
  keywords: ["قیمت طراحی وب سایت", "پکیج طراحی سایت", "وردپرس", "React"],
});

const page = () => {
  return <PlansPage />;
};

export default page;
