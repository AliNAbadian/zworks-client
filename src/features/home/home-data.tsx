import { Sprout, TabletSmartphone, Wallpaper } from "lucide-react";

export const HOME_POSITIVITIES_INTRO = [
  "مارس شریک دیجیتال شما در طراحی UI/UX، توسعه وب و رشد محصول است.",
  "از اپلیکیشن موبایل و سئو تا برندسازی، دیجیتال مارکتینگ، پشتیبانی و زیرساخت ابری — یک تیم برای کل مسیر.",
] as const;

export const homeFeatures = [
  {
    title: "طراحی و تجربه کاربری",
    description:
      "تحقیق کاربر، وایرفریم، پروتوتایپ و سیستم طراحی برای ساخت رابط‌هایی که کاربران دوست دارند از آن استفاده کنند.",
    imageUrl: "/images/abstractpattern.svg",
    Icon: Wallpaper,
    linkText: "مشاهده خدمات UI/UX",
    href: "/services/ui-ux",
  },
  {
    title: "توسعه وب و موبایل",
    description:
      "ساخت وب‌سایت شرکتی، پلتفرم‌های اختصاصی با React و Next.js و اپلیکیشن‌های Android و iOS با کیفیت آماده استقرار.",
    imageUrl: "/images/abstractpattern.svg",
    Icon: TabletSmartphone,
    linkText: "مشاهده خدمات توسعه",
    href: "/development",
  },
  {
    title: "رشد، سئو و نگهداری",
    description:
      "سئو فنی و محتوایی، دیجیتال مارکتینگ داده‌محور، پشتیبانی ۲۴ ساعته و زیرساخت ابری مقیاس‌پذیر برای رشد پایدار.",
    imageUrl: "/images/abstractpattern.svg",
    Icon: Sprout,
    linkText: "مشاهده خدمات سئو",
    href: "/services/seo",
  },
] as const;

export const HOME_SERVICES_INTRO =
  "از ایده تا راه‌اندازی و رشد؛ هشت حوزه تخصصی برای ساخت، بهبود و مقیاس‌پذیر کردن حضور دیجیتال کسب‌وکار شما." as const;

export const homeDesignServices = [
  { label: "طراحی UI/UX", href: "/services/ui-ux" },
  { label: "برندسازی و هویت بصری", href: "/services/branding" },
  { label: "سئو و بهینه‌سازی", href: "/services/seo" },
  { label: "دیجیتال مارکتینگ", href: "/services/marketing" },
] as const;

export const homeDevelopmentServices = [
  { label: "توسعه وب با React و Next.js", href: "/development" },
  { label: "اپلیکیشن موبایل", href: "/services/mobile-apps" },
  { label: "زیرساخت ابری و DevOps", href: "/services/cloud" },
  { label: "پشتیبانی و نگهداری", href: "/services/support" },
] as const;

export const HOME_PROJECTS_INTRO =
  "نمونه‌کارهای منتخب در حوزه وب، موبایل و رشد دیجیتال — برای هر مورد، خدمات مرتبط را ببینید." as const;

export const homeProjects = [
  {
    title: "پلتفرم فروش آنلاین B2B",
    description:
      "طراحی و توسعه فروشگاه اختصاصی با Next.js، پنل مدیریت سفارشات و یکپارچه‌سازی درگاه پرداخت برای رشد فروش عمده.",
    category: "توسعه وب",
    date: "خرداد ۱۴۰۴",
    href: "/development",
    ctaLabel: "مشاهده خدمات توسعه وب",
    categoryLabel: "دسته‌بندی:",
    dateLabel: "زمان اجرا",
  },
  {
    title: "اپلیکیشن موبایل خدمات",
    description:
      "اپلیکیشن Android و iOS با تجربه کاربری روان، اعلان push و اتصال API برای مدیریت خدمات و رزرو آنلاین.",
    category: "اپلیکیشن موبایل",
    date: "اردیبهشت ۱۴۰۴",
    href: "/services/mobile-apps",
    ctaLabel: "مشاهده خدمات اپلیکیشن",
    categoryLabel: "دسته‌بندی:",
    dateLabel: "زمان اجرا",
  },
  {
    title: "بازطراحی برند و سئو",
    description:
      "بازطراحی هویت بصری، بهینه‌سازی فنی سایت و استراتژی محتوا برای افزایش ترافیک ارگانیک و تقویت جایگاه برند.",
    category: "برندسازی و سئو",
    date: "فروردین ۱۴۰۴",
    href: "/services/branding",
    ctaLabel: "مشاهده خدمات برندسازی",
    categoryLabel: "دسته‌بندی:",
    dateLabel: "زمان اجرا",
  },
] as const;

export const HOME_FAQ_INTRO =
  "پاسخ سوالات رایج درباره خدمات، فرآیند همکاری، زمان‌بندی و نحوه شروع پروژه با مارس." as const;

export const homeFaqItems = [
  {
    id: "faq-services",
    title: "چه خدماتی ارائه می‌دهید؟",
    content:
      "توسعه وب با React و Next.js، طراحی UI/UX، اپلیکیشن موبایل، سئو، برندسازی، دیجیتال مارکتینگ، پشتیبانی و نگهداری وب‌سایت و زیرساخت ابری.",
  },
  {
    id: "faq-process",
    title: "فرآیند شروع پروژه چگونه است؟",
    content:
      "ابتدا جلسه مشاوره رایگان رزرو کنید. پس از بررسی نیازها و اهدافتان، پیشنهاد فنی، زمان‌بندی و برآورد هزینه دریافت می‌کنید و با تأیید شما اجرا آغاز می‌شود.",
  },
  {
    id: "faq-timeline",
    title: "مدت زمان اجرای پروژه چقدر است؟",
    content:
      "بسته به پیچیدگی پروژه متفاوت است؛ وب‌سایت شرکتی معمولاً ۲ تا ۶ هفته، اپلیکیشن موبایل ۶ تا ۱۲ هفته و پلتفرم‌های اختصاصی بیشتر زمان می‌برند.",
  },
  {
    id: "faq-tech",
    title: "از چه فناوری‌هایی استفاده می‌کنید؟",
    content:
      "پروژه‌های وب با React، Next.js و TypeScript توسعه داده می‌شوند؛ برای موبایل React Native یا توسعه native؛ و برای زیرساخت، سرویس‌های ابری مدرن با رویکرد DevOps.",
  },
  {
    id: "faq-support",
    title: "آیا پشتیبانی پس از تحویل دارید؟",
    content:
      "بله. پشتیبانی فنی، رفع باگ، به‌روزرسانی امنیتی، مانیتورینگ و بهینه‌سازی سرعت در قالب پلن‌های ماهانه یا سالانه قابل ارائه است.",
  },
  {
    id: "faq-pricing",
    title: "هزینه پروژه چگونه محاسبه می‌شود؟",
    content:
      "بر اساس دامنه کار، فناوری، زمان‌بندی و سطح طراحی برآورد می‌شود. پس از جلسه مشاوره، پیش‌فاکتور شفاف با جزئیات فازها دریافت می‌کنید.",
  },
  {
    id: "faq-phases",
    title: "آیا امکان توسعه مرحله‌ای وجود دارد؟",
    content:
      "بله. بسیاری از مشتریان با نسخه MVP شروع می‌کنند و قابلیت‌های جدید را در فازهای بعدی اضافه می‌کنند؛ این رویکرد برای استارتاپ‌ها بسیار مقرون‌به‌صرفه است.",
  },
  {
    id: "faq-contact",
    title: "چگونه با تیم شما ارتباط برقرار کنم؟",
    content:
      "از صفحه تماس درخواست مشاوره ثبت کنید یا تماس بگیرید — پاسخ معمولاً ظرف ۲۴ ساعت.",
  },
] as const;

export const HOME_CTA = {
  title: "آماده‌اید پروژه بعدی‌تان را شروع کنید؟",
  description:
    "از مشاوره رایگان تا اجرای کامل؛ بهترین راهکار دیجیتال را برای بودجه، زمان و اهداف کسب‌وکارتان دریافت کنید.",
} as const;
