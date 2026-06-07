import MobileAppsBenefitsSection from "@/features/mobile-apps/components/mobile-apps-benefits-section";
import MobileAppsCtaSection from "@/features/mobile-apps/components/mobile-apps-cta-section";
import MobileAppsFaqSection from "@/features/mobile-apps/components/mobile-apps-faq-section";
import MobileAppsHero from "@/features/mobile-apps/components/mobile-apps-hero";
import MobileAppsProcessSection from "@/features/mobile-apps/components/mobile-apps-process-section";
import MobileAppsServicesSection from "@/features/mobile-apps/components/mobile-apps-services-section";

const MobileAppsPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <MobileAppsHero />
      <MobileAppsServicesSection />
      <MobileAppsBenefitsSection />
      <MobileAppsProcessSection />
      <MobileAppsFaqSection />
      <MobileAppsCtaSection />
    </div>
  );
};

export default MobileAppsPage;
