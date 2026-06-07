import BrandingBenefitsSection from "@/features/branding/components/branding-benefits-section";
import BrandingCaseStudiesSection from "@/features/branding/components/branding-case-studies-section";
import BrandingCtaSection from "@/features/branding/components/branding-cta-section";
import BrandingHero from "@/features/branding/components/branding-hero";
import BrandingProcessSection from "@/features/branding/components/branding-process-section";
import BrandingServicesSection from "@/features/branding/components/branding-services-section";

const BrandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <BrandingHero />
      <BrandingServicesSection />
      <BrandingBenefitsSection />
      <BrandingProcessSection />
      <BrandingCaseStudiesSection />
      <BrandingCtaSection />
    </div>
  );
};

export default BrandingPage;
