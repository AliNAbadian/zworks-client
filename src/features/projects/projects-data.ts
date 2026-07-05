import type {
  LensPillar,
  ProcessStep,
  ProjectFilter,
  ProjectItem,
  StatItem,
} from "@/features/projects/projects-model";

export const PROJECTS_HERO = {
  eyebrow: "آزمایشگاه ایده‌ها",
  headlinePrefix: "هر پروژه، یک",
  rotatingWords: ["کنجکاوی", "نوآوری", "دقت", "اثر"],
  description:
    "از پرسش اول تا محصول نهایی — نمونه‌کارهایی که با پرسیدن «چرا؟» و «اگر چطور؟» شکل گرفته‌اند. هر کارت، داستان یک مسئله واقعی و راه‌حلی که با آن روبرو شدیم.",
  primaryCta: { label: "شروع پروژه بعدی", href: "/contact" },
  secondaryCta: { label: "مرور نمونه‌کارها", href: "#projects-grid" },
} as const;

export const PROJECTS_STATS_INTRO = {
  title: "اعداد، فقط بخشی از داستان‌اند",
  subtitle:
    "پشت هر عدد، تیم‌ها، تصمیم‌های سخت و تکرارهای بی‌پایان برای رسیدن به نتیجه‌ای که ارزش نشان دادن دارد.",
} as const;

export const projectStats: StatItem[] = [
  { id: "delivered", value: "۴۸", suffix: "+", label: "پروژه تحویل‌شده" },
  { id: "industries", value: "۱۲", label: "صنعت مختلف" },
  { id: "retention", value: "۹۴", suffix: "٪", label: "رضایت مشتری" },
  { id: "speed", value: "۳", suffix: "×", label: "سرعت متوسط تحویل MVP" },
];

export const PROJECTS_GRID_INTRO = {
  title: "کاوش در نمونه‌کارها",
  subtitle:
    "بر اساس حوزه فیلتر کنید — هر پروژه به صفحه خدمات مرتبط لینک می‌شود تا ببینید چطور همان رویکرد را برای شما اجرا می‌کنیم.",
} as const;

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "همه" },
  { id: "web", label: "توسعه وب" },
  { id: "mobile", label: "موبایل" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "branding", label: "برندسازی" },
  { id: "growth", label: "سئو و مارکتینگ" },
  { id: "cloud", label: "زیرساخت" },
];

export const projectItems: ProjectItem[] = [
  {
    id: "b2b-commerce",
    title: "پلتفرم فروش آنلاین B2B",
    description:
      "طراحی و توسعه فروشگاه اختصاصی با Next.js، پنل مدیریت سفارشات و یکپارچه‌سازی درگاه پرداخت برای رشد فروش عمده.",
    category: "توسعه وب",
    categoryId: "web",
    date: "خرداد ۱۴۰۴",
    href: "/development",
    ctaLabel: "مشاهده خدمات توسعه وب",
    coverImage: "/images/mockup1.jpg",
    coverAlt: "نمونه رابط پلتفرم فروش B2B",
    featured: true,
    tags: ["Next.js", "B2B", "پرداخت"],
    metrics: [
      { label: "رشد فروش", value: "+۳۲٪" },
      { label: "زمان بارگذاری", value: "۱.۲ث" },
    ],
  },
  {
    id: "service-mobile",
    title: "اپلیکیشن موبایل خدمات",
    description:
      "اپلیکیشن Android و iOS با تجربه کاربری روان، اعلان push و اتصال API برای مدیریت خدمات و رزرو آنلاین.",
    category: "اپلیکیشن موبایل",
    categoryId: "mobile",
    date: "اردیبهشت ۱۴۰۴",
    href: "/services/mobile-apps",
    ctaLabel: "مشاهده خدمات اپلیکیشن",
    coverImage: "/images/mockup2.jpg",
    coverAlt: "نمونه اپلیکیشن موبایل خدمات",
    featured: true,
    tags: ["iOS", "Android", "Push"],
    metrics: [
      { label: "نصب فعال", value: "۱۸K" },
      { label: "امتیاز فروشگاه", value: "۴.۸" },
    ],
  },
  {
    id: "brand-seo",
    title: "بازطراحی برند و سئو",
    description:
      "بازطراحی هویت بصری، بهینه‌سازی فنی سایت و استراتژی محتوا برای افزایش ترافیک ارگانیک و تقویت جایگاه برند.",
    category: "برندسازی و سئو",
    categoryId: "branding",
    date: "فروردین ۱۴۰۴",
    href: "/services/branding",
    ctaLabel: "مشاهده خدمات برندسازی",
    tags: ["هویت بصری", "سئو", "محتوا"],
    metrics: [
      { label: "ترافیک ارگانیک", value: "+۱۴۰٪" },
      { label: "CTR برند", value: "+۲۸٪" },
    ],
  },
  {
    id: "saas-dashboard",
    title: "داشبورد SaaS مدیریتی",
    description:
      "رابط مدیریت داده‌محور با نمودارهای real-time، فیلترهای پیشرفته و دسترسی نقش‌محور برای تیم‌های عملیاتی.",
    category: "توسعه وب",
    categoryId: "web",
    date: "بهمن ۱۴۰۳",
    href: "/development",
    ctaLabel: "مشاهده خدمات توسعه",
    tags: ["React", "Dashboard", "Real-time"],
    metrics: [
      { label: "کاهش زمان گزارش", value: "-۶۵٪" },
      { label: "کاربر فعال", value: "۲.۴K" },
    ],
  },
  {
    id: "ecommerce-ux",
    title: "بازطراحی UX فروشگاه",
    description:
      "تحقیق کاربر، بازطراحی مسیر خرید و A/B تست برای کاهش ریزش سبد و افزایش نرخ تبدیل در فروشگاه آنلاین.",
    category: "طراحی UI/UX",
    categoryId: "ui-ux",
    date: "دی ۱۴۰۳",
    href: "/services/ui-ux",
    ctaLabel: "مشاهده خدمات UI/UX",
    tags: ["UX Research", "Prototype", "A/B"],
    metrics: [
      { label: "نرخ تبدیل", value: "+۲۱٪" },
      { label: "ریزش سبد", value: "-۱۸٪" },
    ],
  },
  {
    id: "growth-campaign",
    title: "کمپین رشد دیجیتال",
    description:
      "استراتژی محتوا، اتوماسیون ایمیل و بهینه‌سازی قیف فروش برای استارتاپ B2C در بازار رقابتی.",
    category: "دیجیتال مارکتینگ",
    categoryId: "growth",
    date: "آذر ۱۴۰۳",
    href: "/services/marketing",
    ctaLabel: "مشاهده خدمات مارکتینگ",
    tags: ["Funnel", "Email", "Analytics"],
    metrics: [
      { label: "CAC", value: "-۳۴٪" },
      { label: "ROAS", value: "۴.۲×" },
    ],
  },
  {
    id: "cloud-migration",
    title: "مهاجرت زیرساخت ابری",
    description:
      "انتقال زیرساخت on-premise به AWS با CI/CD، مانیتورینگ و auto-scaling برای پلتفرم با ترافیک بالا.",
    category: "زیرساخت ابری",
    categoryId: "cloud",
    date: "آبان ۱۴۰۳",
    href: "/services/cloud",
    ctaLabel: "مشاهده خدمات ابری",
    tags: ["AWS", "DevOps", "CI/CD"],
    metrics: [
      { label: "Uptime", value: "۹۹.۹٪" },
      { label: "هزینه سرور", value: "-۴۱٪" },
    ],
  },
  {
    id: "fintech-mobile",
    title: "اپلیکیشن فین‌تک",
    description:
      "اپ مدیریت مالی شخصی با احراز هویت امن، نمودارهای تعاملی و sync چنددستگاهی برای کاربران حرفه‌ای.",
    category: "اپلیکیشن موبایل",
    categoryId: "mobile",
    date: "مهر ۱۴۰۳",
    href: "/services/mobile-apps",
    ctaLabel: "مشاهده خدمات موبایل",
    tags: ["Fintech", "Security", "Charts"],
    metrics: [
      { label: "Retention 30d", value: "۶۸٪" },
      { label: "Session/day", value: "۳.۱" },
    ],
  },
];

export const PROJECTS_LENS_INTRO = {
  title: "عدسی که با آن نگاه می‌کنیم",
  subtitle:
    "هر پروژه با یک سوال شروع می‌شود — نه با یک قالب آماده. این سه اصل، مسیر ما را مشخص می‌کند.",
} as const;

export const lensPillars: LensPillar[] = [
  {
    id: "curiosity",
    title: "کنجکاوی عمیق",
    description:
      "قبل از طراحی، «چرا این مشکل وجود دارد؟» را می‌پرسیم. تحقیق کاربر، مصاحبه و تحلیل رقبا — نه برای گزارش، برای فهم واقعی.",
    icon: "telescope",
  },
  {
    id: "craft",
    title: "دقت در ساخت",
    description:
      "از وایرفریم تا کد production — هر جزئیات با استانداردهای accessibility، performance و maintainability سنجیده می‌شود.",
    icon: "layers",
  },
  {
    id: "impact",
    title: "اثر قابل اندازه‌گیری",
    description:
      "موفقیت را با KPI واقعی می‌سنجیم: تبدیل، retention، سرعت، هزینه — نه فقط زیبایی بصری.",
    icon: "sparkles",
  },
];

export const PROJECTS_PROCESS_INTRO = {
  title: "از سوال تا محصول",
  subtitle: "مسیر تکرارشونده‌ای که در هر پروژه — کوچک یا بزرگ — دنبال می‌کنیم.",
} as const;

export const projectProcessSteps: ProcessStep[] = [
  {
    id: "discover",
    step: "۰۱",
    title: "کشف",
    description: "جلسات کشف، تحلیل نیاز و تعریف مسئله اصلی — قبل از هر wireframe.",
  },
  {
    id: "explore",
    step: "۰۲",
    title: "کاوش",
    description: "ایده‌پردازی، پروتوتایپ سریع و تست با کاربران واقعی.",
  },
  {
    id: "build",
    step: "۰۳",
    title: "ساخت",
    description: "توسعه iterative با review منظم و deploy مرحله‌ای.",
  },
  {
    id: "evolve",
    step: "۰۴",
    title: "رشد",
    description: "مانیتورینگ، بهینه‌سازی و توسعه قابلیت‌های جدید بر اساس داده.",
  },
];

export const PROJECTS_CTA = {
  title: "پروژه بعدی، سوال بعدی",
  description:
    "اگر کنجکاوید بدانید تیم مارس چطور به این نتایج رسیده — یا می‌خواهید مسیر خودتان را شروع کنید، یک جلسه مشاوره رایگان رزرو کنید.",
  primaryCta: { label: "درخواست مشاوره", href: "/contact" },
  secondaryCta: { label: "مشاهده پلن‌ها", href: "/plans" },
} as const;
