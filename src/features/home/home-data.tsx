import { Sprout, TabletSmartphone, Wallpaper } from "lucide-react";

export const HOME_POSITIVITIES_INTRO =
  "زی‌ورکس شریک دیجیتال شماست؛ از طراحی UI/UX و توسعه وب با React و Next.js تا اپلیکیشن موبایل، سئو، برندسازی، دیجیتال مارکتینگ، پشتیبانی و زیرساخت ابری — همه‌چیز برای رشد محصول و کسب‌وکار شما." as const;

export const homeFeatures = [
  {
    title: "طراحی و تجربه کاربری",
    description:
      "تحقیق کاربر، وایرفریم، پروتوتایپ و سیستم طراحی برای ساخت رابط‌هایی که کاربران دوست دارند از آن استفاده کنند.",
    imageUrl: "/images/abstractpattern.svg",
    Icon: Wallpaper,
  },
  {
    title: "توسعه وب و موبایل",
    description:
      "ساخت وب‌سایت شرکتی، پلتفرم‌های اختصاصی با React و Next.js و اپلیکیشن‌های Android و iOS با کیفیت production-ready.",
    imageUrl: "/images/abstractpattern.svg",
    Icon: TabletSmartphone,
  },
  {
    title: "رشد، سئو و نگهداری",
    description:
      "سئو فنی و محتوایی، دیجیتال مارکتینگ داده‌محور، پشتیبانی ۲۴ ساعته و زیرساخت ابری مقیاس‌پذیر برای رشد پایدار.",
    imageUrl: "/images/abstractpattern.svg",
    Icon: Sprout,
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
  "نمونه‌ای از پروژه‌های واقعی در حوزه وب، موبایل و رشد دیجیتال که با تیم زی‌ورکس طراحی و اجرا شده‌اند." as const;

export const homeProjects = [
  {
    title: "پلتفرم فروش آنلاین B2B",
    description:
      "طراحی و توسعه فروشگاه اختصاصی با Next.js، پنل مدیریت سفارشات و یکپارچه‌سازی درگاه پرداخت برای رشد فروش عمده.",
    category: "توسعه وب",
    date: "خرداد ۱۴۰۴",
    href: "/development",
    ctaLabel: "مشاهده جزئیات پروژه",
    categoryLabel: "دسته بندی:",
    dateLabel: "زمان اجرا",
  },
  {
    title: "اپلیکیشن موبایل خدمات",
    description:
      "اپلیکیشن Android و iOS با تجربه کاربری روان، اعلان‌های push و اتصال به API برای مدیریت خدمات و رزرو آنلاین.",
    category: "اپلیکیشن موبایل",
    date: "اردیبهشت ۱۴۰۴",
    href: "/services/mobile-apps",
    ctaLabel: "مشاهده جزئیات پروژه",
    categoryLabel: "دسته بندی:",
    dateLabel: "زمان اجرا",
  },
  {
    title: "بازطراحی برند و سئو",
    description:
      "بازطراحی هویت بصری، بهینه‌سازی فنی سایت و استراتژی محتوا برای افزایش ترافیک ارگانیک و تقویت جایگاه برند.",
    category: "برندسازی و سئو",
    date: "فروردین ۱۴۰۴",
    href: "/services/branding",
    ctaLabel: "مشاهده جزئیات پروژه",
    categoryLabel: "دسته بندی:",
    dateLabel: "زمان اجرا",
  },
] as const;

export const HOME_FAQ_INTRO =
  "پاسخ سوالات رایج درباره خدمات، فرآیند همکاری، زمان‌بندی و نحوه شروع پروژه با زی‌ورکس." as const;

export const homeFaqItems = [
  {
    title: "چه خدماتی ارائه می‌دهید؟",
    content:
      "توسعه وب با React و Next.js، طراحی UI/UX، اپلیکیشن موبایل، سئو، برندسازی، دیجیتال مارکتینگ، پشتیبانی و نگهداری وب‌سایت و زیرساخت ابری.",
  },
  {
    title: "فرآیند شروع پروژه چگونه است؟",
    content:
      "ابتدا جلسه مشاوره رایگان برگزار می‌شود، نیازها و اهداف شما بررسی می‌شود، سپس پیشنهاد فنی، زمان‌بندی و برآورد هزینه ارائه و پس از تأیید، اجرا آغاز می‌شود.",
  },
  {
    title: "مدت زمان اجرای پروژه چقدر است؟",
    content:
      "بسته به پیچیدگی پروژه متفاوت است؛ وب‌سایت شرکتی معمولاً ۲ تا ۶ هفته، اپلیکیشن موبایل ۶ تا ۱۲ هفته و پلتفرم‌های اختصاصی بیشتر زمان می‌برند.",
  },
  {
    title: "از چه فناوری‌هایی استفاده می‌کنید؟",
    content:
      "در توسعه وب از React، Next.js و TypeScript استفاده می‌کنیم؛ برای موبایل React Native یا توسعه native؛ و برای زیرساخت، سرویس‌های ابری مدرن با رویکرد DevOps.",
  },
  {
    title: "آیا پشتیبانی پس از تحویل دارید؟",
    content:
      "بله. پشتیبانی فنی، رفع باگ، به‌روزرسانی امنیتی، مانیتورینگ و بهینه‌سازی سرعت در قالب پلن‌های ماهانه یا سالانه قابل ارائه است.",
  },
  {
    title: "هزینه پروژه چگونه محاسبه می‌شود؟",
    content:
      "بر اساس دامنه کار، فناوری، زمان‌بندی و سطح طراحی برآورد می‌شود. پس از جلسه مشاوره، پیش‌فاکتور شفاف با جزئیات فازها ارائه می‌گردد.",
  },
  {
    title: "آیا امکان توسعه مرحله‌ای وجود دارد؟",
    content:
      "بله. بسیاری از مشتریان با نسخه MVP شروع می‌کنند و قابلیت‌های جدید را در فازهای بعدی اضافه می‌کنند؛ این رویکرد برای استارتاپ‌ها بسیار مقرون‌به‌صرفه است.",
  },
  {
    title: "چگونه با تیم شما ارتباط برقرار کنم؟",
    content:
      "از طریق صفحه تماس با ما، درخواست مشاوره رایگان یا تماس مستقیم. تیم ما در کوتاه‌ترین زمان پاسخگو خواهد بود.",
  },
] as const;

export const HOME_CTA = {
  title: "آماده‌اید پروژه بعدی‌تان را شروع کنید؟",
  description:
    "از مشاوره رایگان تا اجرای کامل؛ تیم زی‌ورکس در کنار شماست تا بهترین راهکار دیجیتال را برای کسب‌وکارتان پیاده‌سازی کند.",
  actionHint: "همین حالا با ما تماس بگیرید یا جلسه مشاوره رایگان رزرو کنید.",
} as const;
