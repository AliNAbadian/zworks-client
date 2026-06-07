import SeoCtaSection from "@/features/seo/components/seo-cta-section";
import SeoFaqSection from "@/features/seo/components/seo-faq-section";
import SeoHero from "@/features/seo/components/seo-hero";
import SeoProcessSection from "@/features/seo/components/seo-process-section";
import SeoResultsSection from "@/features/seo/components/seo-results-section";
import SeoServicesSection from "@/features/seo/components/seo-services-section";

const SeoPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <SeoHero />
      <SeoServicesSection />
      <SeoResultsSection />
      <SeoProcessSection />
      <SeoFaqSection />
      <SeoCtaSection />
    </div>
  );
};

export default SeoPage;
