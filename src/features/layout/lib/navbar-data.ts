import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Code2,
  FolderKanban,
  Headphones,
  Megaphone,
  Palette,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

export type NavbarServiceLink = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export type NavbarServiceCategory = {
  id: string;
  label: string;
  tagline: string;
  links: NavbarServiceLink[];
};

export type NavbarLink = {
  href: string;
  label: string;
  matchPaths?: string[];
};

export const NAVBAR_STUDIO = {
  badge: "آماده همکاری",
  tagline: "آزمایشگاه دیجیتال",
} as const;

export const NAVBAR_MEGA_MENU = {
  eyebrow: "اکوسیستم خدمات",
  title: "از ایده تا رشد",
  subtitle: "هر مسیر، یک تیم — طراحی، ساخت و مقیاس‌پذیری در یک جریان.",
  featured: {
    href: "/projects",
    label: "کاوش نمونه‌کارها",
    description: "پروژه‌های واقعی با رویکرد کنجکاوی و اثر قابل اندازه‌گیری.",
    icon: FolderKanban,
    cta: "مشاهده پورتفولیو",
  },
} as const;

export const navbarServiceCategories: NavbarServiceCategory[] = [
  {
    id: "design",
    label: "طراحی و برند",
    tagline: "قبل از یک خط کد",
    links: [
      {
        href: "/services/ui-ux",
        label: "طراحی UI/UX",
        description: "تحقیق کاربر، وایرفریم و سیستم طراحی",
        icon: Palette,
      },
      {
        href: "/services/branding",
        label: "برندسازی",
        description: "هویت بصری و زبان طراحی برند",
        icon: Sparkles,
      },
    ],
  },
  {
    id: "build",
    label: "ساخت محصول",
    tagline: "از MVP تا scale",
    links: [
      {
        href: "/development",
        label: "توسعه وب",
        description: "React، Next.js و پلتفرم‌های اختصاصی",
        icon: Code2,
      },
      {
        href: "/services/mobile-apps",
        label: "اپلیکیشن موبایل",
        description: "Android و iOS با تجربه کاربری روان",
        icon: Smartphone,
      },
      {
        href: "/services/cloud",
        label: "زیرساخت ابری",
        description: "DevOps، استقرار و مقیاس‌پذیری",
        icon: Cloud,
      },
      {
        href: "/services/support",
        label: "پشتیبانی",
        description: "نگهداری، مانیتورینگ و به‌روزرسانی",
        icon: Headphones,
      },
    ],
  },
  {
    id: "grow",
    label: "رشد دیجیتال",
    tagline: "دیده شدن و ماندگاری",
    links: [
      {
        href: "/services/seo",
        label: "سئو و بهینه‌سازی",
        description: "رشد ترافیک ارگانیک و فنی",
        icon: Search,
      },
      {
        href: "/services/marketing",
        label: "دیجیتال مارکتینگ",
        description: "استراتژی محتوا و کمپین‌های داده‌محور",
        icon: Megaphone,
      },
    ],
  },
];

export const navbarLinks: NavbarLink[] = [
  { href: "/projects", label: "پروژه‌ها", matchPaths: ["/projects"] },
  { href: "/team", label: "تیم تخصصی", matchPaths: ["/team"] },
  { href: "/plans", label: "پلن‌ها", matchPaths: ["/plans"] },
];

export const isNavbarLinkActive = (pathname: string, item: NavbarLink): boolean => {
  if (item.matchPaths?.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return true;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
};

export const isNavbarServiceActive = (pathname: string): boolean =>
  pathname.startsWith("/services") || pathname === "/development";

export const isNavbarServiceLinkActive = (
  pathname: string,
  href: string,
): boolean => pathname === href || pathname.startsWith(`${href}/`);
