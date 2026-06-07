import MarketingBenefitsSection from "@/features/marketing/components/marketing-benefits-section";
import MarketingCtaSection from "@/features/marketing/components/marketing-cta-section";
import MarketingHero from "@/features/marketing/components/marketing-hero";
import MarketingKpiSection from "@/features/marketing/components/marketing-kpi-section";
import MarketingProcessSection from "@/features/marketing/components/marketing-process-section";
import MarketingServicesSection from "@/features/marketing/components/marketing-services-section";
import MarketingSuccessStoriesSection from "@/features/marketing/components/marketing-success-stories-section";

const MarketingPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <MarketingHero />
      <MarketingServicesSection />
      <MarketingBenefitsSection />
      <MarketingKpiSection />
      <MarketingSuccessStoriesSection />
      <MarketingProcessSection />
      <MarketingCtaSection />
    </div>
  );
};

export default MarketingPage;
