import type {
  BenefitItem,
  CaseStudyItem,
  ProcessStep,
  ServiceItem,
} from "@/features/branding/branding-model";

export const BRANDING_HERO = {
  eyebrow: "برندسازی",
  headline: "برندی بسازید که فراموش نشود",
  description:
    "هویت بصری و استراتژی برند حرفه‌ای برای متمایز شدن در بازار.",
  primaryCta: { label: "شروع پروژه برندینگ", href: "/contact" },
  secondaryCta: { label: "مشاهده نمونه کارها", href: "#case-studies" },
} as const;

export const BRANDING_SERVICES_INTRO = {
  title: "خدمات برندسازی",
  subtitle:
    "از استراتژی برند تا راهنمای هویت بصری — هر مرحله برای ساخت برندی متمایز، یکپارچه و ماندگار طراحی می‌شود.",
} as const;

export const serviceItems: ServiceItem[] = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    description:
      "تعریف ارزش‌ها، مخاطب هدف، جایگاه‌یابی و پیام برند برای بنیان‌گذاری استراتژی مؤثر و پایدار.",
    icon: "brand-strategy",
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description:
      "طراحی لوگوی منحصربه‌فرد و به‌یادماندنی که هویت برند را در یک نگاه منتقل کند.",
    icon: "logo-design",
  },
  {
    id: "visual-identity",
    title: "Visual Identity",
    description:
      "ساخت سیستم بصری یکپارچه شامل المان‌های گرافیکی، الگوها و زبان تصویری برند.",
    icon: "visual-identity",
  },
  {
    id: "typography",
    title: "Typography",
    description:
      "انتخاب و تنظیم تایپوگرافی اختصاصی برای خوانایی، شخصیت برند و یکپارچگی در تمام رسانه‌ها.",
    icon: "typography",
  },
  {
    id: "color-systems",
    title: "Color Systems",
    description:
      "تعریف پالت رنگی استراتژیک با کدهای دقیق برای انتقال احساس، تمایز و انسجام بصری.",
    icon: "color-systems",
  },
  {
    id: "brand-guidelines",
    title: "Brand Guidelines",
    description:
      "تدوین راهنمای جامع برند برای استفاده صحیح از لوگو، رنگ‌ها، تایپوگرافی و المان‌های بصری.",
    icon: "brand-guidelines",
  },
];

export const BRANDING_BENEFITS_INTRO = {
  title: "مزایای برندسازی حرفه‌ای",
  subtitle:
    "برند قوی فقط ظاهر نیست — سرمایه‌گذاری استراتژیکی است که اعتماد، تمایز و رشد پایدار را به همراه دارد.",
} as const;

export const benefitItems: BenefitItem[] = [
  {
    id: "trust",
    title: "افزایش اعتماد",
    description:
      "هویت بصری حرفه‌ای و یکپارچه، حس اطمینان و اعتبار را در ذهن مشتریان و ذینفعان تقویت می‌کند.",
    icon: "trust",
  },
  {
    id: "differentiation",
    title: "تمایز از رقبا",
    description:
      "برند متمایز شما را در بازار شلوغ از رقبا جدا می‌کند و دلیل واضحی برای انتخاب شما می‌سازد.",
    icon: "differentiation",
  },
  {
    id: "recognition",
    title: "شناخت بهتر برند",
    description:
      "لوگو، رنگ و زبان بصری یکپارچه، برند شما را در ذهن مخاطب ماندگار و قابل شناسایی می‌کند.",
    icon: "recognition",
  },
  {
    id: "consistency",
    title: "یکپارچگی هویت بصری",
    description:
      "راهنمای برند و سیستم طراحی، انسجام بصری را در تمام نقاط تماس با مشتری تضمین می‌کند.",
    icon: "consistency",
  },
];

export const BRANDING_PROCESS_INTRO = {
  title: "فرآیند برندسازی",
  subtitle:
    "از کشف عمیق برند تا تحویل راهنمای جامع — هر مرحله با هدف ساخت هویتی ماندگار و مؤثر پیش می‌رود.",
} as const;

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    step: 1,
    title: "کشف برند",
    description:
      "تحلیل ارزش‌ها، مخاطب، رقبا و چشم‌انداز برای درک عمیق DNA برند و فرصت‌های تمایز.",
  },
  {
    id: "strategy",
    step: 2,
    title: "استراتژی",
    description:
      "تعریف جایگاه‌یابی، شخصیت برند، پیام کلیدی و چارچوب استراتژیک برای هدایت طراحی.",
  },
  {
    id: "visual-design",
    step: 3,
    title: "طراحی هویت بصری",
    description:
      "طراحی لوگو، رنگ، تایپوگرافی و المان‌های گرافیکی برای ساخت سیستم بصری یکپارچه.",
  },
  {
    id: "guidelines",
    step: 4,
    title: "تدوین راهنمای برند",
    description:
      "مستندسازی استانداردها، نمونه‌های کاربرد و قوانین استفاده برای حفظ انسجام در آینده.",
  },
];

export const BRANDING_CASE_STUDIES_INTRO = {
  title: "نمونه کارهای برندسازی",
  subtitle:
    "نگاهی به پروژه‌های برندینگ که با تمرکز بر استراتژی، هویت بصری و تأثیر تجاری طراحی شده‌اند.",
} as const;

export const caseStudyItems: CaseStudyItem[] = [
  {
    id: "tech-startup",
    title: "برند استارتاپ فناوری",
    industry: "فناوری",
    description:
      "بازطراحی کامل هویت بصری برای استارتاپ SaaS — از لوگو تا سیستم رنگ و تایپوگرافی مدرن برای جذب سرمایه‌گذار.",
    gradient:
      "linear-gradient(135deg, rgb(var(--primary-rgb)/0.35) 0%, rgba(4,20,46,0.95) 55%, rgba(3,18,28,0.95) 100%)",
  },
  {
    id: "luxury-retail",
    title: "برند خرده‌فروشی لوکس",
    industry: "خرده‌فروشی",
    description:
      "ساخت هویت برند پریمیوم با لوگوی مینیمال، پالت رنگی طلایی-مشکی و راهنمای جامع برای فروشگاه و بسته‌بندی.",
    gradient:
      "linear-gradient(135deg, rgba(234,179,8,0.25) 0%, rgba(4,40,39,0.95) 50%, rgba(3,18,28,0.95) 100%)",
  },
  {
    id: "healthcare-brand",
    title: "برند مراکز درمانی",
    industry: "سلامت",
    description:
      "طراحی هویت بصری آرام و قابل اعتماد برای شبکه کلینیک‌ها — تمرکز بر حس امنیت، تخصص و دسترس‌پذیری.",
    gradient:
      "linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(4,40,39,0.95) 50%, rgba(3,18,28,0.95) 100%)",
  },
  {
    id: "food-beverage",
    title: "برند محصولات غذایی",
    industry: "صنایع غذایی",
    description:
      "برندسازی محصول ارگانیک با لوگوی دست‌ساز، بسته‌بندی جذاب و سیستم رنگی گرم برای ایجاد ارتباط عاطفی.",
    gradient:
      "linear-gradient(135deg, rgba(249,115,22,0.25) 0%, rgba(4,20,46,0.92) 55%, rgba(3,18,28,0.92) 100%)",
  },
];

export const BRANDING_CTA = {
  title: "برندسازی سرمایه‌گذاری است، نه هزینه",
  description:
    "برند قوی پایه‌ای برای رشد پایدار، جذب مشتریان وفادار و تمایز در بازار رقابتی است. در یک جلسه مشاوره، اهداف برند شما را بررسی می‌کنیم و نقشه راه هویت بصری اختصاصی را ترسیم می‌کنیم.",
  primaryCta: { label: "شروع پروژه برندینگ", href: "/contact" },
  secondaryCta: { label: "دریافت مشاوره رایگان", href: "/contact" },
} as const;
