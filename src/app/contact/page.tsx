import type { Metadata } from "next";

import ContactPage from "@/features/contact/components/contact-page";

export const metadata: Metadata = {
  title: "ارتباط با ما | ZWORKS",
  description: "فرم تماس با تیم زی‌ورکس برای شروع پروژه شما",
};

const page = () => {
  return <ContactPage />;
};

export default page;
