import type { Metadata } from "next";

import CallToAction from "@/components/ui/CallToAction";
import FAQ from "@/components/ui/FAQ";
import HeroSection from "@/components/ui/HeroSection";
import OurProjects from "@/components/ui/OurProjects";
import Positivities from "@/components/ui/Positivities";
import Services from "@/components/ui/Services";
import { JsonLd } from "@/components/shared/JsonLd";
import { webDevelopmentServiceSchema } from "@/lib/seo/json-ld-schemas";
import { buildPageMetadata, SITE_NAME } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: `${SITE_NAME} — طراحی وب‌سایت و توسعه React/Next.js`,
  description:
    "مارس؛ طراحی وب سایت حرفه‌ای، توسعه وب با React و Next.js، UI/UX، سئو و برندسازی. ساخت سایت شرکتی و اپلیکیشن وب برای رشد کسب‌وکار شما.",
  path: "/",
  titleAbsolute: true,
  keywords: [
    "شرکت طراحی وب",
    "ساخت وب سایت حرفه‌ای",
    "طراحی سایت شرکتی",
  ],
});

const page = () => {
  return (
    <>
      <JsonLd data={webDevelopmentServiceSchema} />
      <div className="overflow-x-hidden">
        <HeroSection />
        <Positivities />
        <Services />
        <OurProjects />
        <FAQ />
        <CallToAction />
      </div>
    </>
  );
};

export default page;
