import type { Metadata } from "next";

import FlowCards from "@/components/development/FlowCards";
import HeroSection from "@/components/development/HeroSection";
import OurWorkRoute from "@/components/development/OurWorkRoute";
import Portfolio from "@/components/development/Portfolio";
import CallToAction from "@/components/ui/CallToAction";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "خدمات توسعه وب و طراحی سایت",
  description:
    "توسعه وب حرفه‌ای با React، Next.js و وردپرس. طراحی سایت شرکتی، فروشگاهی و SaaS — از ایده تا تحویل توسط تیم تخصصی زی‌ورکس.",
  path: "/development",
  keywords: [
    "توسعه وب",
    "خدمات توسعه وب",
    "React",
    "Next.js",
    "وردپرس",
    "ساخت وب سایت حرفه‌ای",
  ],
});

const page = () => {
  return (
    <div className="min-h-screen font-iransans">
      <HeroSection />
      <OurWorkRoute />
      <FlowCards />
      <Portfolio />
      <CallToAction />
    </div>
  );
};

export default page;
