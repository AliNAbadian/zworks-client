import type {
  BenefitItem,
  KpiStat,
  ProcessStep,
  ServiceItem,
  SuccessStory,
} from "@/features/marketing/marketing-model";

export const MARKETING_HERO = {
  eyebrow: "دیجیتال مارکتینگ",
  headline: "رشد سریع‌تر با دیجیتال مارکتینگ داده‌محور",
  description:
    "کمپین‌های هدفمند برای جذب مشتریان بیشتر و افزایش درآمد.",
  primaryCta: { label: "دریافت مشاوره", href: "/contact" },
  secondaryCta: { label: "بررسی استراتژی", href: "#kpi" },
} as const;

export const MARKETING_SERVICES_INTRO = {
  title: "خدمات دیجیتال مارکتینگ",
  subtitle:
    "از تبلیغات گوگل تا بهینه‌سازی تبدیل — استراتژی‌های داده‌محور برای رشد قابل اندازه‌گیری کسب‌وکار شما.",
} as const;

export const serviceItems: ServiceItem[] = [
  {
    id: "google-ads",
    title: "Google Ads",
    description:
      "مدیریت کمپین‌های جستجو، نمایشی و ریمارکتینگ گوگل با هدف‌گیری دقیق، بهینه‌سازی بودجه و حداکثرسازی بازگشت سرمایه.",
    icon: "google-ads",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description:
      "استراتژی محتوا، تبلیغات هدفمند و مدیریت کمپین در اینستاگرام، لینکدین و سایر پلتفرم‌ها برای افزایش تعامل و آگاهی برند.",
    icon: "social-media",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "طراحی قیف‌های جذب لید، لندینگ پیج‌های تبدیل‌محور و کمپین‌های هدفمند برای جمع‌آوری مشتریان بالقوه باکیفیت.",
    icon: "lead-generation",
  },
  {
    id: "conversion",
    title: "Conversion Optimization",
    description:
      "تحلیل رفتار کاربر، A/B تست و بهینه‌سازی مسیر تبدیل برای افزایش نرخ خرید، ثبت‌نام و درخواست مشاوره.",
    icon: "conversion",
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "پیاده‌سازی و تحلیل Google Analytics، ردیابی رویدادها، داشبوردهای سفارشی و گزارش‌دهی شفاف برای تصمیم‌گیری داده‌محور.",
    icon: "analytics",
  },
  {
    id: "performance",
    title: "Performance Marketing",
    description:
      "کمپین‌های عملکردمحور با تمرکز بر CPA، ROAS و KPIهای واقعی — هر ریال بودجه به سمت نتیجه قابل اندازه‌گیری هدایت می‌شود.",
    icon: "performance",
  },
];

export const MARKETING_BENEFITS_INTRO = {
  title: "مزایای دیجیتال مارکتینگ",
  subtitle:
    "با استراتژی‌های هدفمند و داده‌محور، مشتریان جدید جذب کنید، فروش را افزایش دهید و بازگشت سرمایه را بهبود بخشید.",
} as const;

export const benefitItems: BenefitItem[] = [
  {
    id: "sales",
    title: "افزایش فروش",
    description:
      "کمپین‌های بهینه‌شده مخاطبان آماده خرید را به سمت محصولات و خدمات شما هدایت می‌کنند و درآمد را به‌صورت پایدار بالا می‌برند.",
    icon: "sales",
  },
  {
    id: "acquisition",
    title: "جذب مشتری جدید",
    description:
      "با هدف‌گیری دقیق در گوگل و شبکه‌های اجتماعی، مشتریان جدیدی را که به دنبال راه‌حل شما هستند پیدا و جذب می‌کنیم.",
    icon: "acquisition",
  },
  {
    id: "roi",
    title: "بهبود ROI",
    description:
      "تحلیل مستمر داده‌ها و بهینه‌سازی کمپین‌ها، هزینه جذب را کاهش و بازگشت سرمایه تبلیغاتی را به حداکثر می‌رساند.",
    icon: "roi",
  },
  {
    id: "awareness",
    title: "افزایش آگاهی برند",
    description:
      "حضور مؤثر در کانال‌های دیجیتال، برند شما را در ذهن مخاطب هدف ماندگار می‌کند و اعتماد و شناخت را تقویت می‌کند.",
    icon: "awareness",
  },
];

export const MARKETING_KPI_INTRO = {
  title: "نتایج قابل اندازه‌گیری",
  subtitle:
    "هر کمپین با KPIهای شفاف اجرا می‌شود — رشد واقعی که در گزارش‌ها و داشبورد قابل مشاهده است.",
} as const;

export const kpiStats: KpiStat[] = [
  {
    id: "traffic",
    value: "+۱۵۰٪",
    label: "افزایش ترافیک",
    icon: "traffic",
  },
  {
    id: "conversion",
    value: "+۸۵٪",
    label: "بهبود نرخ تبدیل",
    icon: "conversion",
  },
  {
    id: "roi",
    value: "۳x",
    label: "بازگشت سرمایه",
    icon: "roi",
  },
  {
    id: "leads",
    value: "+۲۰۰",
    label: "لید ماهانه",
    icon: "leads",
  },
  {
    id: "cost",
    value: "-۴۵٪",
    label: "کاهش هزینه جذب",
    icon: "cost",
  },
  {
    id: "satisfaction",
    value: "۹۸٪",
    label: "رضایت مشتریان",
    icon: "satisfaction",
  },
];

export const MARKETING_SUCCESS_STORIES_INTRO = {
  title: "داستان‌های موفقیت",
  subtitle:
    "نمونه‌ای از پروژه‌هایی که با استراتژی دیجیتال مارکتینگ داده‌محور، رشد ملموس و قابل اندازه‌گیری ایجاد کردیم.",
} as const;

export const successStories: SuccessStory[] = [
  {
    id: "novin-shop",
    client: "فروشگاه نوین",
    industry: "خرده‌فروشی آنلاین",
    challenge:
      "هزینه بالای تبلیغات با نرخ تبدیل پایین و عدم شناخت دقیق کانال‌های مؤثر فروش.",
    result:
      "با بهینه‌سازی کمپین‌های Google Ads و ریمارکتینگ، ترافیک باکیفیت افزایش یافت و فروش به‌صورت پایدار رشد کرد.",
    metrics: [
      { value: "+۱۸۰٪", label: "رشد فروش" },
      { value: "۴.۲x", label: "ROAS" },
    ],
    gradient:
      "linear-gradient(135deg, rgb(var(--primary-rgb)/0.55) 0%, rgba(4,40,39,0.95) 45%, rgba(3,18,28,0.95) 100%)",
  },
  {
    id: "arman-clinic",
    client: "کلینیک آرمان",
    industry: "خدمات درمانی",
    challenge:
      "رقابت شدید در جذب بیمار جدید و وابستگی به معرفی دهان‌به‌دهان بدون سیستم دیجیتال.",
    result:
      "با کمپین‌های لید جنریشن و بهینه‌سازی لندینگ پیج، درخواست‌های مشاوره و نوبت‌دهی آنلاین به‌طور چشمگیری افزایش یافت.",
    metrics: [
      { value: "+۲۴۰", label: "لید ماهانه" },
      { value: "+۶۵٪", label: "نرخ تبدیل" },
    ],
    gradient:
      "linear-gradient(135deg, rgba(0,120,215,0.45) 0%, rgba(4,30,50,0.95) 50%, rgba(3,18,28,0.95) 100%)",
  },
  {
    id: "pars-edu",
    client: "آکادمی پارس",
    industry: "آموزش آنلاین",
    challenge:
      "هزینه بالای جذب دانشجو در شبکه‌های اجتماعی و عدم بازگشت سرمایه مناسب از تبلیغات.",
    result:
      "با استراتژی Performance Marketing و تست A/B مداوم، CPA کاهش یافت و ثبت‌نام دوره‌ها با بودجه بهینه‌شده رشد کرد.",
    metrics: [
      { value: "-۵۲٪", label: "کاهش CPA" },
      { value: "+۳۲۰٪", label: "ثبت‌نام" },
    ],
    gradient:
      "linear-gradient(135deg, rgba(120,80,220,0.45) 0%, rgba(30,20,60,0.95) 50%, rgba(3,18,28,0.95) 100%)",
  },
];

export const MARKETING_PROCESS_INTRO = {
  title: "فرآیند دیجیتال مارکتینگ",
  subtitle:
    "از تحلیل بازار تا بهینه‌سازی مستمر — هر مرحله با داده واقعی و گزارش شفاف پیش می‌رود.",
} as const;

export const processSteps: ProcessStep[] = [
  {
    id: "analysis",
    step: 1,
    title: "تحلیل بازار",
    description:
      "بررسی رقبا، تحلیل مخاطب هدف، ممیزی کانال‌های فعلی و شناسایی فرصت‌های رشد با داده‌های واقعی.",
  },
  {
    id: "strategy",
    step: 2,
    title: "طراحی کمپین",
    description:
      "تدوین استراتژی چندکاناله، تعیین KPIها، طراحی قیف تبدیل و برنامه‌ریزی بودجه برای حداکثر بازگشت سرمایه.",
  },
  {
    id: "execution",
    step: 3,
    title: "اجرا",
    description:
      "راه‌اندازی کمپین‌های تبلیغاتی، تولید محتوا، پیاده‌سازی ردیابی و مانیتورینگ روزانه عملکرد.",
  },
  {
    id: "optimization",
    step: 4,
    title: "بهینه‌سازی",
    description:
      "تحلیل داده‌ها، A/B تست، تنظیم بودجه و بهبود مستمر کمپین‌ها بر اساس نتایج واقعی.",
  },
];

export const MARKETING_CTA = {
  title: "آماده‌اید مشتریان بیشتری جذب کنید؟",
  description:
    "در یک جلسه مشاوره رایگان، وضعیت فعلی بازاریابی شما را بررسی می‌کنیم، فرصت‌های رشد را شناسایی می‌کنیم و استراتژی اختصاصی با KPIهای قابل اندازه‌گیری ارائه می‌دهیم.",
  primaryCta: { label: "دریافت مشاوره", href: "/contact" },
  secondaryCta: { label: "شروع همکاری", href: "/contact" },
} as const;
