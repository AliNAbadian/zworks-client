import SupportBenefitsSection from "@/features/support/components/support-benefits-section";
import SupportCtaSection from "@/features/support/components/support-cta-section";
import SupportHero from "@/features/support/components/support-hero";
import SupportPlansSection from "@/features/support/components/support-plans-section";
import SupportProcessSection from "@/features/support/components/support-process-section";
import SupportServicesSection from "@/features/support/components/support-services-section";

const SupportPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <SupportHero />
      <SupportServicesSection />
      <SupportBenefitsSection />
      <SupportProcessSection />
      <SupportPlansSection />
      <SupportCtaSection />
    </div>
  );
};

export default SupportPage;
