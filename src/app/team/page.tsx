import type { Metadata } from "next";

import TeamPage from "@/features/team/components/team-page";

export const metadata: Metadata = {
  title: "تیم تخصصی | ZWORKS",
  description: "آشنایی با تیم طراحی و توسعه زی‌ورکس",
};

const page = () => {
  return <TeamPage />;
};

export default page;
