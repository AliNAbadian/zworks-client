import { SITE_NAME, SITE_NAME_EN } from "@/lib/seo/site-seo";

export const FOOTER_TAGLINE =
  "طراحی و توسعه وب، اپلیکیشن موبایل، UI/UX، سئو، برندسازی و دیجیتال مارکتینگ — همراه رشد دیجیتال کسب‌وکار شما." as const;

export const FOOTER_COPYRIGHT = `تمامی حقوق این وب‌سایت متعلق به ${SITE_NAME} (${SITE_NAME_EN}) محفوظ است.` as const;

export const footerColumns = [
  {
    title: "خدمات طراحی",
    links: [
      { label: "طراحی UI/UX", href: "/services/ui-ux" },
      { label: "برندسازی", href: "/services/branding" },
      { label: "سئو و بهینه‌سازی", href: "/services/seo" },
      { label: "دیجیتال مارکتینگ", href: "/services/marketing" },
    ],
  },
  {
    title: "خدمات توسعه",
    links: [
      { label: "توسعه وب", href: "/development" },
      { label: "اپلیکیشن موبایل", href: "/services/mobile-apps" },
      { label: "زیرساخت ابری", href: "/services/cloud" },
      { label: "پشتیبانی و نگهداری", href: "/services/support" },
    ],
  },
  {
    title: "شرکت",
    links: [
      { label: "تیم تخصصی", href: "/team" },
      { label: "پلن‌ها و قیمت‌گذاری", href: "/plans" },
      { label: "نمونه کارها", href: "/projects" },
      { label: "صفحه اصلی", href: "/" },
    ],
  },
  {
    title: "ارتباط با ما",
    links: [
      { label: "تماس با ما", href: "/contact" },
      { label: "مشاوره رایگان", href: "/contact" },
      { label: "درخواست پروژه", href: "/contact" },
    ],
  },
] as const;

export const footerSocialLinks = [
  { label: "توییتر", href: "#" },
  { label: "اینستاگرام", href: "#" },
  { label: "لینکدین", href: "#" },
] as const;

export const footerLegalLinks = [
  { label: "حریم خصوصی", href: "#" },
  { label: "شرایط استفاده", href: "#" },
  { label: "سیاست کوکی", href: "#" },
] as const;

export const FOOTER_LOGO_ALT = `لوگوی ${SITE_NAME} — شرکت طراحی و توسعه وب` as const;
