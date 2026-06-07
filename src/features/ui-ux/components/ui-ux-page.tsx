import UiUxBenefitsSection from "@/features/ui-ux/components/ui-ux-benefits-section";
import UiUxCtaSection from "@/features/ui-ux/components/ui-ux-cta-section";
import UiUxHero from "@/features/ui-ux/components/ui-ux-hero";
import UiUxProcessSection from "@/features/ui-ux/components/ui-ux-process-section";
import UiUxServicesSection from "@/features/ui-ux/components/ui-ux-services-section";
import UiUxShowcaseSection from "@/features/ui-ux/components/ui-ux-showcase-section";

const UiUxPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <UiUxHero />
      <UiUxServicesSection />
      <UiUxBenefitsSection />
      <UiUxProcessSection />
      <UiUxShowcaseSection />
      <UiUxCtaSection />
    </div>
  );
};

export default UiUxPage;
