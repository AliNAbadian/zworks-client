import type {
  BenefitItem,
  ProcessStep,
  ServiceItem,
  ShowcaseItem,
} from "@/features/ui-ux/ui-ux-model";

export const UI_UX_HERO = {
  eyebrow: "طراحی UI/UX",
  headline: "طراحی تجربه‌ای که کاربران عاشق آن می‌شوند",
  description:
    "طراحی رابط و تجربه کاربری مدرن، حرفه‌ای و مبتنی بر رفتار واقعی کاربران.",
  primaryCta: { label: "دریافت مشاوره", href: "/contact" },
  secondaryCta: { label: "مشاهده نمونه طراحی‌ها", href: "#showcase" },
} as const;

export const UI_UX_SERVICES_INTRO = {
  title: "خدمات طراحی UI/UX",
  subtitle:
    "از تحقیق کاربر تا سیستم طراحی — هر مرحله برای ساخت تجربه‌ای یکپارچه، زیبا و مؤثر برنامه‌ریزی می‌شود.",
} as const;

export const serviceItems: ServiceItem[] = [
  {
    id: "user-research",
    title: "User Research",
    description:
      "شناخت عمیق کاربران، تحلیل رفتار، مصاحبه و تست برای تصمیم‌گیری‌های طراحی مبتنی بر داده.",
    icon: "user-research",
  },
  {
    id: "wireframing",
    title: "Wireframing",
    description:
      "ساختاردهی صفحات و جریان‌های اصلی با وایرفریم‌های شفاف قبل از ورود به طراحی بصری.",
    icon: "wireframing",
  },
  {
    id: "user-flow",
    title: "User Flow Design",
    description:
      "طراحی مسیرهای کاربری بهینه برای رسیدن سریع‌تر به اهداف و کاهش اصطکاک در تعامل.",
    icon: "user-flow",
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description:
      "ساخت پروتوتایپ تعاملی برای تست ایده‌ها، اعتبارسنجی UX و هم‌راستایی با ذینفعان.",
    icon: "prototyping",
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description:
      "تعریف کامپوننت‌ها، توکن‌های بصری و راهنمای برند برای یکپارچگی و مقیاس‌پذیری طراحی.",
    icon: "design-systems",
  },
  {
    id: "usability-testing",
    title: "Usability Testing",
    description:
      "ارزیابی قابلیت استفاده، شناسایی نقاط ضعف و بهینه‌سازی تجربه بر اساس بازخورد واقعی.",
    icon: "usability-testing",
  },
];

export const UI_UX_BENEFITS_INTRO = {
  title: "مزایای طراحی UI/UX حرفه‌ای",
  subtitle:
    "طراحی درست فقط زیبایی نیست — مستقیماً بر تبدیل، نگهداشت کاربر و اعتماد به برند تأثیر می‌گذارد.",
} as const;

export const benefitItems: BenefitItem[] = [
  {
    id: "conversion",
    title: "افزایش نرخ تبدیل",
    description:
      "مسیرهای واضح، CTAهای مؤثر و کاهش اصطکاک، کاربران را سریع‌تر به اقدام هدف هدایت می‌کند.",
    icon: "conversion",
  },
  {
    id: "retention",
    title: "کاهش نرخ خروج",
    description:
      "ناوبری شهودی و تجربه روان، کاربران را بیشتر در محصول نگه می‌دارد و پرش از صفحات را کم می‌کند.",
    icon: "retention",
  },
  {
    id: "satisfaction",
    title: "بهبود رضایت کاربران",
    description:
      "طراحی متمرکز بر نیاز واقعی کاربر، احساس راحتی و لذت از تعامل با محصول را افزایش می‌دهد.",
    icon: "satisfaction",
  },
  {
    id: "professional",
    title: "تجربه کاربری حرفه‌ای",
    description:
      "ظاهر یکپارچه، جزئیات دقیق و الگوهای آشنا، محصول شما را در سطح برندهای بین‌المللی قرار می‌دهد.",
    icon: "professional",
  },
  {
    id: "trust",
    title: "افزایش اعتماد کاربران",
    description:
      "طراحی شفاف، قابل‌اعتماد و منظم، حس امنیت و حرفه‌ای بودن را در ذهن کاربر تثبیت می‌کند.",
    icon: "trust",
  },
];

export const UI_UX_PROCESS_INTRO = {
  title: "فرآیند طراحی UI/UX",
  subtitle:
    "از درک کاربر تا محصول نهایی — هر مرحله با هدف ساخت تجربه‌ای مؤثر و قابل اندازه‌گیری پیش می‌رود.",
} as const;

export const processSteps: ProcessStep[] = [
  {
    id: "research",
    step: 1,
    title: "تحقیق کاربران",
    description:
      "تحلیل مخاطب، بررسی رقبا، مصاحبه و جمع‌آوری بینش برای تصمیم‌گیری‌های طراحی.",
  },
  {
    id: "wireframe",
    step: 2,
    title: "طراحی وایرفریم",
    description:
      "ساختاردهی صفحات، چیدمان المان‌ها و تعریف سلسله‌مراتب اطلاعات قبل از UI نهایی.",
  },
  {
    id: "ui-design",
    step: 3,
    title: "طراحی UI",
    description:
      "طراحی بصری، انتخاب رنگ و تایپوگرافی، ساخت کامپوننت‌ها و سیستم طراحی یکپارچه.",
  },
  {
    id: "testing",
    step: 4,
    title: "تست و بهینه‌سازی",
    description:
      "تست قابلیت استفاده، جمع‌آوری بازخورد و بهبود مستمر بر اساس داده واقعی.",
  },
];

export const UI_UX_SHOWCASE_INTRO = {
  title: "نمونه طراحی‌ها",
  subtitle:
    "نگاهی به پروژه‌های UI/UX که با تمرکز بر تجربه کاربری، هویت برند و نتایج کسب‌وکار طراحی شده‌اند.",
} as const;

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "fintech-dashboard",
    title: "داشبورد مدیریت مالی",
    category: "فین‌تک",
    description:
      "طراحی داشبورد تحلیلی با تمرکز بر خوانایی داده‌ها، نمودارهای تعاملی و جریان کار سریع برای مدیران مالی.",
    gradient:
      "linear-gradient(135deg, rgb(var(--primary-rgb)/0.35) 0%, rgba(4,20,46,0.95) 55%, rgba(3,18,28,0.95) 100%)",
  },
  {
    id: "ecommerce-app",
    title: "اپلیکیشن فروشگاه آنلاین",
    category: "تجارت الکترونیک",
    description:
      "تجربه خرید روان از مرور محصول تا پرداخت، با UI مدرن و مسیرهای کوتاه برای افزایش نرخ تبدیل.",
    gradient:
      "linear-gradient(135deg, rgba(56,189,248,0.25) 0%, rgba(4,40,39,0.95) 50%, rgba(3,18,28,0.95) 100%)",
  },
  {
    id: "saas-platform",
    title: "پلتفرم SaaS مدیریت پروژه",
    category: "SaaS",
    description:
      "سیستم طراحی یکپارچه، ناوبری چندسطحی و رابط کاربری مقیاس‌پذیر برای تیم‌های در حال رشد.",
    gradient:
      "linear-gradient(135deg, rgba(168,85,247,0.25) 0%, rgba(4,20,46,0.92) 55%, rgba(3,18,28,0.92) 100%)",
  },
  {
    id: "healthcare-portal",
    title: "پورتال خدمات درمانی",
    category: "سلامت",
    description:
      "طراحی دسترس‌پذیر و آرام برای رزرو نوبت، مشاهده پرونده و ارتباط با پزشک — با تمرکز بر اعتماد کاربر.",
    gradient:
      "linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(4,40,39,0.95) 50%, rgba(3,18,28,0.95) 100%)",
  },
];

export const UI_UX_CTA = {
  title: "آماده‌اید تجربه کاربری محصول خود را متحول کنید؟",
  description:
    "در یک جلسه مشاوره رایگان، اهداف کسب‌وکار و نیازهای کاربران شما را بررسی می‌کنیم و نقشه راه طراحی UI/UX اختصاصی را ترسیم می‌کنیم.",
  primaryCta: { label: "شروع پروژه UI/UX", href: "/contact" },
  secondaryCta: { label: "دریافت مشاوره", href: "/contact" },
} as const;
