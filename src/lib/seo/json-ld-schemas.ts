import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_NAME_EN, SITE_URL } from "./site-seo";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-name.svg`,
  description: DEFAULT_DESCRIPTION,
  sameAs: [] as string[],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  url: SITE_URL,
  inLanguage: "fa-IR",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/contact?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const webDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "خدمات طراحی و توسعه وب",
  description:
    "طراحی وب‌سایت حرفه‌ای، توسعه React/Next.js، ساخت سایت شرکتی و اپلیکیشن وب توسط تیم مارس.",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Iran",
  },
  serviceType: [
    "طراحی وب سایت",
    "توسعه وب",
    "React Development",
    "Next.js Development",
    "WordPress Development",
  ],
};
