import type {
  ArchitectureLayer,
  BenefitItem,
  CredibilityItem,
  FaqItem,
  ProcessStep,
  ServiceItem,
  TechBadge,
} from "@/features/cloud/cloud-model";

export const CLOUD_HERO = {
  eyebrow: "زیرساخت ابری و DevOps — برای استارتاپ‌ها، SaaS و شرکت‌های فناوری",
  headline: "زیرساختی مقیاس‌پذیر برای رشد بدون محدودیت",
  description:
    "طراحی و مدیریت زیرساخت ابری مدرن، امن و آماده رشد.",
  primaryCta: { label: "مشاوره زیرساخت", href: "/contact" },
  secondaryCta: { label: "درخواست ارزیابی", href: "/contact" },
} as const;

export const CLOUD_SERVICES_INTRO = {
  title: "خدمات زیرساخت ابری",
  subtitle:
    "از طراحی معماری ابری تا اتوماسیون کامل — زیرساختی مقیاس‌پذیر، امن و آماده رشد برای کسب‌وکارهای فناوری‌محور.",
} as const;

export const serviceItems: ServiceItem[] = [
  {
    id: "architecture",
    title: "Cloud Architecture",
    description:
      "طراحی معماری ابری مقیاس‌پذیر با تفکیک سرویس‌ها، high availability و fault tolerance برای رشد بدون محدودیت.",
    icon: "architecture",
  },
  {
    id: "cicd",
    title: "CI/CD Pipelines",
    description:
      "پیاده‌سازی خطوط یکپارچه‌سازی و استقرار خودکار با GitHub Actions، GitLab CI و Jenkins برای انتشار سریع و ایمن.",
    icon: "cicd",
  },
  {
    id: "containerization",
    title: "Containerization",
    description:
      "کانتینرسازی اپلیکیشن‌ها با Docker برای محیط‌های یکسان توسعه، تست و production و کاهش وابستگی به زیرساخت.",
    icon: "containerization",
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    description:
      "ارکستراسیون کانتینرها با Kubernetes برای مقیاس‌پذیری خودکار، self-healing و مدیریت سرویس‌های توزیع‌شده.",
    icon: "kubernetes",
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description:
      "راه‌اندازی سیستم‌های مانیتورینگ و alerting با Prometheus، Grafana و ELK برای دید کامل بر عملکرد زیرساخت.",
    icon: "monitoring",
  },
  {
    id: "automation",
    title: "Infrastructure Automation",
    description:
      "اتوماسیون زیرساخت با Terraform و Ansible — infrastructure as code برای تکرارپذیری، شفافیت و کاهش خطای انسانی.",
    icon: "automation",
  },
];

export const CLOUD_BENEFITS_INTRO = {
  title: "مزایای زیرساخت ابری",
  subtitle:
    "با زیرساخت مدرن و بهینه‌شده، هزینه‌ها را کاهش دهید، امنیت را تقویت کنید و با سرعت بیشتری به بازار برسید.",
} as const;

export const benefitItems: BenefitItem[] = [
  {
    id: "scalability",
    title: "مقیاس‌پذیری بالا",
    description:
      "افزایش یا کاهش منابع به‌صورت خودکار بر اساس ترافیک واقعی — بدون نگرانی از محدودیت ظرفیت در زمان رشد.",
    icon: "scalability",
  },
  {
    id: "security",
    title: "امنیت بیشتر",
    description:
      "پیاده‌سازی best practiceهای امنیتی ابری، رمزنگاری داده‌ها، مدیریت دسترسی و ممیزی مستمر آسیب‌پذیری‌ها.",
    icon: "security",
  },
  {
    id: "cost",
    title: "کاهش هزینه‌ها",
    description:
      "بهینه‌سازی مصرف منابع ابری، right-sizing و استفاده از reserved instances برای کاهش هزینه‌های عملیاتی.",
    icon: "cost",
  },
  {
    id: "deployment",
    title: "استقرار سریع‌تر",
    description:
      "با CI/CD و اتوماسیون، زمان انتشار از روزها به دقیقه کاهش می‌یابد و تیم توسعه با سرعت بیشتری iterate می‌کند.",
    icon: "deployment",
  },
];

export const CLOUD_ARCHITECTURE_INTRO = {
  title: "معماری زیرساخت",
  subtitle:
    "جریان داده از کاربر تا پایگاه داده — طراحی لایه‌ای برای عملکرد بالا، دسترس‌پذیری و مقیاس‌پذیری.",
} as const;

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "users",
    label: "کاربران",
    description: "ترافیک ورودی از وب و موبایل",
    icon: "users",
  },
  {
    id: "load-balancer",
    label: "Load Balancer",
    description: "توزیع بار و failover خودکار",
    icon: "load-balancer",
  },
  {
    id: "app-servers",
    label: "سرورهای اپلیکیشن",
    description: "سرویس‌های مقیاس‌پذیر و stateless",
    icon: "app-servers",
  },
  {
    id: "database",
    label: "پایگاه داده",
    description: "ذخیره‌سازی با replication و backup",
    icon: "database",
  },
  {
    id: "cdn",
    label: "CDN / Cache",
    description: "کش محتوا و تحویل سریع جهانی",
    icon: "cdn",
  },
];

export const CLOUD_CREDIBILITY_INTRO = {
  title: "اعتبار فنی و تضمین کیفیت",
  subtitle:
    "با ابزارها و استانداردهای صنعتی، زیرساختی پایدار و قابل اعتماد برای کسب‌وکارهای SaaS و استارتاپی می‌سازیم.",
} as const;

export const techBadges: TechBadge[] = [
  { id: "aws", name: "AWS" },
  { id: "docker", name: "Docker" },
  { id: "kubernetes", name: "Kubernetes" },
  { id: "github-actions", name: "GitHub Actions" },
  { id: "terraform", name: "Terraform" },
  { id: "prometheus", name: "Prometheus" },
  { id: "grafana", name: "Grafana" },
  { id: "ansible", name: "Ansible" },
];

export const credibilityItems: CredibilityItem[] = [
  {
    id: "uptime",
    value: "۹۹.۹٪",
    label: "Uptime تضمینی",
    description:
      "طراحی high availability با redundancy چندلایه و failover خودکار برای حداقل downtime.",
    icon: "uptime",
  },
  {
    id: "security",
    value: "SOC 2",
    label: "استانداردهای امنیتی",
    description:
      "پیاده‌سازی کنترل‌های امنیتی مطابق best practiceهای صنعتی و آماده‌سازی برای ممیزی compliance.",
    icon: "security",
  },
  {
    id: "response",
    value: "< ۵۰ms",
    label: "زمان پاسخ‌دهی",
    description:
      "بهینه‌سازی CDN، کش و load balancing برای latency پایین و تجربه کاربری روان.",
    icon: "response",
  },
  {
    id: "compliance",
    value: "ISO 27001",
    label: "انطباق با استانداردها",
    description:
      "رعایت الزامات امنیت اطلاعات و حریم خصوصی برای کسب‌وکارهای SaaS و enterprise.",
    icon: "compliance",
  },
  {
    id: "automation",
    value: "۱۰۰٪",
    label: "Infrastructure as Code",
    description:
      "تمام زیرساخت با Terraform و Ansible مدیریت می‌شود — قابل تکرار، version-controlled و auditable.",
    icon: "automation",
  },
  {
    id: "monitoring",
    value: "۲۴/۷",
    label: "مانیتورینگ مستمر",
    description:
      "پایش real-time عملکرد، alerting هوشمند و incident response برای پایداری زیرساخت.",
    icon: "monitoring",
  },
];

export const CLOUD_PROCESS_INTRO = {
  title: "فرآیند پیاده‌سازی",
  subtitle:
    "از تحلیل نیازها تا بهینه‌سازی مستمر — رویکردی ساختاریافته برای زیرساختی پایدار و مقیاس‌پذیر.",
} as const;

export const processSteps: ProcessStep[] = [
  {
    id: "analysis",
    step: 1,
    title: "تحلیل نیازها",
    description:
      "بررسی معماری فعلی، الگوی ترافیک، الزامات امنیتی و اهداف رشد برای تعیین استراتژی زیرساخت.",
  },
  {
    id: "design",
    step: 2,
    title: "طراحی زیرساخت",
    description:
      "طراحی معماری ابری، انتخاب سرویس‌ها، تعریف IaC و برنامه‌ریزی migration یا greenfield deployment.",
  },
  {
    id: "implementation",
    step: 3,
    title: "پیاده‌سازی",
    description:
      "استقرار زیرساخت، راه‌اندازی CI/CD، کانتینرسازی و اتوماسیون با تست و validation کامل.",
  },
  {
    id: "optimization",
    step: 4,
    title: "مانیتورینگ و بهینه‌سازی",
    description:
      "راه‌اندازی observability، تحلیل عملکرد، right-sizing منابع و بهبود مستمر هزینه و کارایی.",
  },
];

export const CLOUD_FAQ_INTRO = {
  title: "سوالات متداول",
  subtitle:
    "پاسخ به رایج‌ترین سوالات درباره انتخاب provider، migration، هزینه‌ها و امنیت زیرساخت ابری.",
} as const;

export const faqItems: FaqItem[] = [
  {
    id: "provider",
    question: "کدام cloud provider را انتخاب کنیم؟",
    answer:
      "انتخاب provider به نیازهای شما بستگی دارد. AWS برای اکوسیستم گسترده و enterprise، Google Cloud برای data/ML و Azure برای محیط‌های Microsoft مناسب‌تر است. ما بر اساس بودجه، تیم فنی و الزامات compliance بهترین گزینه را پیشنهاد می‌دهیم.",
  },
  {
    id: "migration",
    question: "مهاجرت به ابر چقدر زمان می‌برد؟",
    answer:
      "بسته به پیچیدگی سیستم فعلی، migration از چند هفته تا چند ماه طول می‌کشد. با استراتژی lift-and-shift سریع‌تر و با re-architecture کیفیت بالاتر اما زمان بیشتر. ما ابتدا assessment انجام می‌دهیم و timeline دقیق ارائه می‌کنیم.",
  },
  {
    id: "costs",
    question: "هزینه زیرساخت ابری چقدر است؟",
    answer:
      "هزینه به مصرف منابع، ترافیک و سرویس‌های استفاده‌شده بستگی دارد. با right-sizing، reserved instances و اتوماسیون معمولاً ۳۰ تا ۵۰ درصد صرفه‌جویی نسبت به on-premise ممکن است. ما budget و cost optimization را از ابتدا در نظر می‌گیریم.",
  },
  {
    id: "kubernetes",
    question: "چه زمانی به Kubernetes نیاز داریم؟",
    answer:
      "Kubernetes زمانی مناسب است که چندین سرویس microservice دارید، نیاز به auto-scaling پیچیده دارید یا تیم DevOps آماده مدیریت cluster است. برای اپلیکیشن‌های ساده‌تر، Docker Compose یا managed services مثل ECS یا Cloud Run کافی و مقرون‌به‌صرفه‌تر است.",
  },
  {
    id: "sla",
    question: "SLA و uptime چگونه تضمین می‌شود؟",
    answer:
      "با طراحی multi-AZ، load balancing، health checks و automated failover، uptime ۹۹.۹٪ قابل دستیابی است. SLA قراردادی شامل زمان پاسخ به incident و جبران خسارت در صورت نقض تعهدات ارائه می‌شود.",
  },
  {
    id: "security",
    question: "امنیت داده‌ها در ابر چگونه تضمین می‌شود؟",
    answer:
      "رمزنگاری at-rest و in-transit، IAM با least privilege، network segmentation، WAF، audit logging و اسکن آسیب‌پذیری مستمر. برای داده‌های حساس، VPC اختصاصی و compliance با GDPR و استانداردهای محلی رعایت می‌شود.",
  },
  {
    id: "scaling",
    question: "مقیاس‌پذیری خودکار چگونه کار می‌کند؟",
    answer:
      "با auto-scaling groups، HPA در Kubernetes و serverless functions، منابع بر اساس CPU، memory یا custom metrics به‌صورت خودکار افزایش یا کاهش می‌یابند. این یعنی در peak traffic بدون downtime و در off-peak بدون هزینه اضافی.",
  },
];

export const CLOUD_CTA = {
  title: "زیرساختی enterprise-grade برای رشد پایدار",
  description:
    "برای استارتاپ‌ها و شرکت‌های SaaS که به پایداری، امنیت و مقیاس‌پذیری نیاز دارند، تیم فنی ما آماده طراحی و پیاده‌سازی زیرساخت ابری اختصاصی است. در جلسه ارزیابی، معماری فعلی شما را بررسی می‌کنیم و roadmap فنی شفاف ارائه می‌دهیم.",
  primaryCta: { label: "درخواست جلسه ارزیابی", href: "/contact" },
  secondaryCta: { label: "مشاوره زیرساخت", href: "/contact" },
} as const;
