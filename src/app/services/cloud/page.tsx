import type { Metadata } from "next";

import CloudPage from "@/features/cloud/components/cloud-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "زیرساخت ابری و DevOps",
  description:
    "طراحی و مدیریت زیرساخت ابری — Cloud Architecture، CI/CD، Kubernetes و DevOps برای استارتاپ‌ها و SaaS.",
  path: "/services/cloud",
  keywords: ["زیرساخت ابری", "DevOps", "Cloud", "Kubernetes"],
});

const page = () => {
  return <CloudPage />;
};

export default page;
