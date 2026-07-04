import type { Metadata } from "next";

import TeamPage from "@/features/team/components/team-page";
import { buildPageMetadata } from "@/lib/seo/site-seo";

export const metadata: Metadata = buildPageMetadata({
  title: "تیم تخصصی طراحی و توسعه وب",
  description:
    "آشنایی با تیم متخصص مارس در طراحی UI/UX، توسعه React/Next.js و پروژه‌های وب سازمانی — همراه شما از ایده تا محصول.",
  path: "/team",
  keywords: ["تیم توسعه وب", "شرکت طراحی وب"],
});

const page = () => {
  return <TeamPage />;
};

export default page;
