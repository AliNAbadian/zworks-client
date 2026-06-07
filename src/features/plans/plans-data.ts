import type {
  ComparisonRow,
  FaqItem,
  PricingPackage,
  ProcessStep,
} from "@/features/plans/plans-model";

export const PLANS_HERO = {
  eyebrow: "قیمت‌گذاری شفاف و حرفه‌ای",
  headline: "توسعه وب حرفه‌ای برای کسب‌وکارهای جدی",
  highlight: "جدی",
  description:
    "چه به یک وب‌سایت وردپرسی سریع و مقرون‌به‌صرفه نیاز داشته باشید و چه به یک پلتفرم اختصاصی React و Next.js با بک‌اند سفارشی — ما راهکار مناسب مقیاس، بودجه و اهداف شما را طراحی می‌کنیم.",
  primaryCta: { label: "شروع پروژه", href: "/contact" },
  secondaryCta: { label: "مقایسه راهکارها", href: "#comparison" },
} as const;

export const PLANS_PRICING_INTRO = {
  title: "پکیج‌های قیمت‌گذاری",
  subtitle:
    "هر پکیج با هدف مشخصی طراحی شده است. قیمت‌ها «شروع از» هستند و بر اساس پیچیدگی پروژه نهایی می‌شوند.",
} as const;

export const pricingPackages: PricingPackage[] = [
  {
    id: "wordpress-starter",
    title: "وردپرس استارتر",
    price: "۱۵ میلیون تومان",
    priceLabel: "شروع از",
    audience: "مناسب کسب‌وکارهای کوچک، برندهای شخصی و وب‌سایت‌های خدماتی",
    variant: "wordpress",
    features: [
      "طراحی واکنش‌گرا و مدرن",
      "نصب و پیکربندی وردپرس",
      "تا ۵ صفحه اختصاصی",
      "فرم تماس و درخواست مشاوره",
      "بهینه‌سازی اولیه سرعت",
      "آموزش مدیریت محتوا",
      "پشتیبانی ۱ ماهه پس از تحویل",
    ],
    ctaLabel: "درخواست این پکیج",
    ctaHref: "/contact",
  },
  {
    id: "wordpress-pro",
    title: "وردپرس حرفه‌ای",
    price: "۳۵ میلیون تومان",
    priceLabel: "شروع از",
    audience: "مناسب شرکت‌ها و کسب‌وکارهای در حال رشد",
    variant: "professional",
    highlighted: true,
    badge: "محبوب‌ترین",
    features: [
      "طراحی اختصاصی و برندمحور",
      "ساختار سئو و بهینه‌سازی فنی",
      "سیستم وبلاگ و مدیریت محتوا",
      "اتصال به ابزارهای مارکتینگ و CRM",
      "بهینه‌سازی عملکرد و امنیت",
      "صفحات و سکشن‌های سفارشی",
      "پشتیبانی ویژه ۳ ماهه",
    ],
    ctaLabel: "انتخاب پکیج محبوب",
    ctaHref: "/contact",
  },
  {
    id: "custom-platform",
    title: "پلتفرم React / Next.js",
    price: "۸۰ میلیون تومان",
    priceLabel: "شروع از",
    audience:
      "مناسب استارتاپ‌ها، محصولات SaaS، داشبوردها، پلتفرم‌های آنلاین و سیستم‌های اختصاصی",
    variant: "custom",
    features: [
      "توسعه فرانت‌اند اختصاصی با React و Next.js",
      "توسعه بک‌اند و API اختصاصی",
      "سیستم احراز هویت و مدیریت نقش‌ها",
      "معماری دیتابیس و مقیاس‌پذیری",
      "اتصال به سرویس‌های شخص ثالث",
      "پنل مدیریت و داشبورد اختصاصی",
      "زیرساخت قابل توسعه برای رشد محصول",
    ],
    ctaLabel: "مشاوره پلتفرم اختصاصی",
    ctaHref: "/contact",
  },
];

export const PLANS_COMPARISON_INTRO = {
  title: "وردپرس یا توسعه اختصاصی؟",
  subtitle:
    "انتخاب درست به اهداف کسب‌وکار، بودجه و افق رشد شما بستگی دارد. این جدول به شما کمک می‌کند تصمیم بهتری بگیرید.",
  wordpressLabel: "وردپرس",
  customLabel: "توسعه اختصاصی (React/Next.js)",
} as const;

export const comparisonRows: ComparisonRow[] = [
  {
    id: "initial-cost",
    label: "هزینه اولیه",
    wordpress: "پایین‌تر",
    custom: "بالاتر",
    wordpressRating: "excellent",
    customRating: "limited",
  },
  {
    id: "launch-speed",
    label: "سرعت راه‌اندازی",
    wordpress: "سریع‌تر",
    custom: "زمان‌برتر",
    wordpressRating: "excellent",
    customRating: "good",
  },
  {
    id: "content-management",
    label: "مدیریت محتوا",
    wordpress: "بسیار آسان",
    custom: "سفارشی و انعطاف‌پذیر",
    wordpressRating: "excellent",
    customRating: "good",
  },
  {
    id: "scalability",
    label: "مقیاس‌پذیری",
    wordpress: "محدود تا متوسط",
    custom: "بسیار بالا",
    wordpressRating: "good",
    customRating: "excellent",
  },
  {
    id: "custom-features",
    label: "قابلیت‌های سفارشی",
    wordpress: "محدود",
    custom: "نامحدود",
    wordpressRating: "limited",
    customRating: "excellent",
  },
  {
    id: "dashboard",
    label: "داشبورد و پنل مدیریت",
    wordpress: "پایه",
    custom: "کاملاً اختصاصی",
    wordpressRating: "good",
    customRating: "excellent",
  },
  {
    id: "saas-fit",
    label: "مناسب SaaS",
    wordpress: "نامناسب",
    custom: "ایده‌آل",
    wordpressRating: "limited",
    customRating: "excellent",
  },
  {
    id: "long-term-flex",
    label: "انعطاف بلندمدت",
    wordpress: "متوسط",
    custom: "عالی",
    wordpressRating: "good",
    customRating: "excellent",
  },
];

export const PLANS_PROCESS_INTRO = {
  title: "فرآیند اجرای پروژه",
  subtitle: "از اولین جلسه مشاوره تا لانچ نهایی، هر مرحله شفاف و حرفه‌ای پیش می‌رود.",
} as const;

export const processSteps: ProcessStep[] = [
  {
    id: "consultation",
    step: 1,
    title: "مشاوره و تحلیل نیازها",
    description:
      "جلسه کشف نیاز، بررسی اهداف کسب‌وکار، تحلیل رقبا و تعیین دقیق دامنه پروژه و بودجه.",
  },
  {
    id: "design",
    step: 2,
    title: "طراحی UI/UX",
    description:
      "طراحی تجربه کاربری، وایرفریم، طراحی بصری و تأیید نهایی قبل از شروع توسعه.",
  },
  {
    id: "development",
    step: 3,
    title: "توسعه و پیاده‌سازی",
    description:
      "کدنویسی فرانت‌اند و بک‌اند، یکپارچه‌سازی سرویس‌ها و گزارش‌دهی منظم پیشرفت.",
  },
  {
    id: "launch",
    step: 4,
    title: "تست و راه‌اندازی",
    description:
      "تست کیفیت، بهینه‌سازی نهایی، استقرار روی سرور و آموزش تیم شما برای مدیریت.",
  },
];

export const PLANS_FAQ_INTRO = {
  title: "سوالات متداول",
  subtitle: "پاسخ سوالات رایج درباره قیمت‌گذاری، زمان‌بندی و انتخاب راهکار.",
} as const;

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "آیا قیمت‌های ذکر شده نهایی هستند؟",
    answer:
      "خیر. قیمت‌های صفحه «شروع از» هستند. پس از جلسه مشاوره و بررسی دقیق نیازها، پیش‌فاکتور شفاف و نهایی ارائه می‌شود.",
  },
  {
    id: "faq-2",
    question: "مدت زمان اجرای پروژه چقدر است؟",
    answer:
      "پروژه‌های وردپرس استارتر معمولاً ۲ تا ۴ هفته، وردپرس حرفه‌ای ۴ تا ۸ هفته و پلتفرم‌های اختصاصی بسته به پیچیدگی ۸ تا ۱۶ هفته یا بیشتر زمان می‌برند.",
  },
  {
    id: "faq-3",
    question: "شرایط پرداخت چگونه است؟",
    answer:
      "معمولاً پرداخت در سه فاز انجام می‌شود: ۴۰٪ پیش‌پرداخت، ۴۰٪ پس از تأیید طراحی و ۲۰٪ پیش از تحویل نهایی. برای پروژه‌های بزرگ‌تر شرایط اختصاصی قابل توافق است.",
  },
  {
    id: "faq-4",
    question: "پشتیبانی پس از تحویل شامل چه مواردی است؟",
    answer:
      "رفع باگ‌های مربوط به تحویل اولیه، پاسخگویی فنی، به‌روزرسانی‌های امنیتی (در پکیج‌های وردپرس) و امکان تمدید پشتیبانی ماهانه یا سالانه.",
  },
  {
    id: "faq-5",
    question: "آیا امکان توسعه مرحله‌ای پروژه وجود دارد؟",
    answer:
      "بله. بسیاری از مشتریان با نسخه MVP شروع می‌کنند و قابلیت‌ها را در فازهای بعدی اضافه می‌کنند. این رویکرد برای استارتاپ‌ها بسیار مقرون‌به‌صرفه است.",
  },
  {
    id: "faq-6",
    question: "چه زمانی وردپرس و چه زمانی React/Next.js مناسب‌تر است؟",
    answer:
      "اگر هدف شما وب‌سایت شرکتی، معرفی خدمات یا فروش محدود است، وردپرس گزینه عالی است. اگر به داشبورد، SaaS، احراز هویت پیچیده یا منطق اختصاصی نیاز دارید، توسعه اختصاصی توصیه می‌شود.",
  },
];

export const PLANS_CTA = {
  title: "آماده‌اید پروژه بعدی‌تان را حرفه‌ای شروع کنید؟",
  description:
    "تیم ما آماده است تا در یک جلسه مشاوره رایگان، بهترین راهکار را برای بودجه، زمان و اهداف شما پیشنهاد دهد. بیایید با هم شروع کنیم.",
  primaryCta: { label: "تماس با ما", href: "/contact" },
  secondaryCta: { label: "مشاوره رایگان", href: "/contact" },
} as const;
