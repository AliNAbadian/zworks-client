import type {
  BenefitItem,
  ProcessStep,
  ServiceItem,
  SupportPlan,
} from "@/features/support/support-model";

export const SUPPORT_HERO = {
  eyebrow: "پشتیبانی و نگهداری",
  headline: "پشتیبانی حرفه‌ای برای وب‌سایت شما",
  description:
    "نگهداری، امنیت و بهینه‌سازی مداوم برای عملکرد بدون وقفه.",
  primaryCta: { label: "درخواست پشتیبانی", href: "/contact" },
  secondaryCta: { label: "مشاهده پلن‌ها", href: "#plans" },
} as const;

export const SUPPORT_SERVICES_INTRO = {
  title: "خدمات پشتیبانی و نگهداری",
  subtitle:
    "از رفع خطا تا امنیت و بهینه‌سازی — وب‌سایت شما همیشه در بهترین وضعیت باقی می‌ماند.",
} as const;

export const serviceItems: ServiceItem[] = [
  {
    id: "bug-fix",
    title: "رفع خطاها",
    description:
      "شناسایی و رفع سریع باگ‌ها، خطاهای سرور و مشکلات عملکردی قبل از تأثیر بر تجربه کاربران.",
    icon: "bug-fix",
  },
  {
    id: "monitoring",
    title: "مانیتورینگ",
    description:
      "پایش ۲۴ ساعته uptime، سرعت و سلامت سرور با هشدار فوری در صورت بروز اختلال.",
    icon: "monitoring",
  },
  {
    id: "backup",
    title: "بکاپ‌گیری",
    description:
      "پشتیبان‌گیری منظم و خودکار از فایل‌ها و پایگاه داده با امکان بازیابی سریع.",
    icon: "backup",
  },
  {
    id: "speed",
    title: "بهینه‌سازی سرعت",
    description:
      "بهبود زمان بارگذاری، کش، فشرده‌سازی و بهینه‌سازی منابع برای تجربه سریع‌تر.",
    icon: "speed",
  },
  {
    id: "updates",
    title: "بروزرسانی سیستم",
    description:
      "به‌روزرسانی امن هسته، افزونه‌ها و وابستگی‌ها بدون از دست دادن پایداری سایت.",
    icon: "updates",
  },
  {
    id: "security",
    title: "امنیت وب‌سایت",
    description:
      "اسکن آسیب‌پذیری، فایروال، SSL و محافظت در برابر حملات رایج وب.",
    icon: "security",
  },
];

export const SUPPORT_BENEFITS_INTRO = {
  title: "مزایای پشتیبانی حرفه‌ای",
  subtitle:
    "با نگهداری مداوم، ریسک downtime کاهش می‌یابد و امنیت و عملکرد سایت در سطح بالایی حفظ می‌شود.",
} as const;

export const benefitItems: BenefitItem[] = [
  {
    id: "risk",
    title: "کاهش ریسک",
    description:
      "پیشگیری از خرابی‌های ناگهانی و از دست رفتن داده با نگهداری پیشگیرانه و پشتیبان‌گیری منظم.",
    icon: "risk",
  },
  {
    id: "security",
    title: "افزایش امنیت",
    description:
      "محافظت مداوم در برابر تهدیدات، پچ‌های امنیتی به‌موقع و نظارت بر نقاط آسیب‌پذیر.",
    icon: "security",
  },
  {
    id: "performance",
    title: "عملکرد بهتر",
    description:
      "بهینه‌سازی مستمر سرعت و پایداری برای تجربه کاربری روان و رتبه بهتر در موتورهای جستجو.",
    icon: "performance",
  },
  {
    id: "support",
    title: "پشتیبانی سریع",
    description:
      "پاسخگویی سریع به درخواست‌ها و رفع مشکلات در کوتاه‌ترین زمان ممکن.",
    icon: "support",
  },
];

export const SUPPORT_PROCESS_INTRO = {
  title: "فرآیند پشتیبانی",
  subtitle:
    "از ارزیابی اولیه تا گزارش‌گیری منظم — یک چرخه شفاف و قابل پیگیری برای نگهداری وب‌سایت شما.",
} as const;

export const processSteps: ProcessStep[] = [
  {
    id: "assessment",
    step: 1,
    title: "ارزیابی سیستم",
    description:
      "بررسی وضعیت فعلی سرور، امنیت، سرعت و زیرساخت برای شناسایی نقاط بهبود.",
  },
  {
    id: "monitoring",
    step: 2,
    title: "مانیتورینگ",
    description:
      "راه‌اندازی پایش مداوم uptime، عملکرد و هشدارهای خودکار برای هر اختلال.",
  },
  {
    id: "maintenance",
    step: 3,
    title: "نگهداری",
    description:
      "اجرای به‌روزرسانی‌ها، بکاپ‌گیری، رفع خطا و بهینه‌سازی‌های دوره‌ای.",
  },
  {
    id: "reporting",
    step: 4,
    title: "گزارش‌گیری",
    description:
      "ارائه گزارش‌های شفاف از وضعیت سایت، اقدامات انجام‌شده و پیشنهادهای بهبود.",
  },
];

export const SUPPORT_PLANS_INTRO = {
  title: "پلن‌های پشتیبانی",
  subtitle:
    "پلنی متناسب با نیاز کسب‌وکار خود انتخاب کنید — از مانیتورینگ پایه تا پشتیبانی سازمانی با SLA.",
} as const;

export const supportPlans: SupportPlan[] = [
  {
    id: "basic",
    title: "پایه",
    price: "۲,۵۰۰,۰۰۰",
    priceLabel: "ماهانه / تومان",
    audience: "مانیتورینگ و به‌روزرسانی‌های ضروری برای سایت‌های کوچک",
    features: [
      "مانیتورینگ uptime هفتگی",
      "به‌روزرسانی هسته و افزونه‌ها",
      "بکاپ‌گیری ماهانه",
      "پاسخگویی تا ۴۸ ساعت",
      "گزارش ماهانه وضعیت",
    ],
    ctaLabel: "درخواست پلن پایه",
    ctaHref: "/contact",
    icon: "basic",
  },
  {
    id: "professional",
    title: "حرفه‌ای",
    price: "۵,۵۰۰,۰۰۰",
    priceLabel: "ماهانه / تومان",
    audience: "پشتیبانی کامل با پاسخ سریع، بکاپ روزانه و امنیت پیشرفته",
    features: [
      "مانیتورینگ ۲۴/۷ با هشدار فوری",
      "بکاپ‌گیری روزانه خودکار",
      "اسکن امنیتی هفتگی",
      "بهینه‌سازی سرعت ماهانه",
      "پاسخگویی تا ۱۲ ساعت",
      "رفع خطاهای اولویت‌دار",
    ],
    ctaLabel: "درخواست پلن حرفه‌ای",
    ctaHref: "/contact",
    highlighted: true,
    badge: "محبوب‌ترین",
    icon: "professional",
  },
  {
    id: "enterprise",
    title: "سازمانی",
    price: "تماس بگیرید",
    priceLabel: "قیمت اختصاصی",
    audience: "SLA تضمینی، پشتیبانی ۲۴/۷ و مدیر اختصاصی برای سازمان‌ها",
    features: [
      "SLA با uptime ۹۹.۹٪",
      "پشتیبانی ۲۴/۷ و مدیر اختصاصی",
      "بکاپ real-time و disaster recovery",
      "ممیزی امنیتی و penetration test",
      "پاسخگویی تا ۲ ساعت",
      "گزارش‌گیری هفتگی و جلسات دوره‌ای",
    ],
    ctaLabel: "درخواست مشاوره سازمانی",
    ctaHref: "/contact",
    icon: "enterprise",
  },
];

export const SUPPORT_CTA = {
  title: "آرامش خاطر با پشتیبانی حرفه‌ای",
  description:
    "وب‌سایت شما سرمایه‌ی کسب‌وکارتان است. با پشتیبانی مداوم، امنیت و uptime را تضمین کنید و با خیال راحت روی رشد تمرکز کنید.",
  primaryCta: { label: "درخواست پشتیبانی", href: "/contact" },
  secondaryCta: { label: "مشاوره رایگان", href: "/contact" },
} as const;
