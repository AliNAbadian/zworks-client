import CloudArchitectureSection from "@/features/cloud/components/cloud-architecture-section";
import CloudBenefitsSection from "@/features/cloud/components/cloud-benefits-section";
import CloudCredibilitySection from "@/features/cloud/components/cloud-credibility-section";
import CloudCtaSection from "@/features/cloud/components/cloud-cta-section";
import CloudFaqSection from "@/features/cloud/components/cloud-faq-section";
import CloudHero from "@/features/cloud/components/cloud-hero";
import CloudProcessSection from "@/features/cloud/components/cloud-process-section";
import CloudServicesSection from "@/features/cloud/components/cloud-services-section";

const CloudPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <CloudHero />
      <CloudServicesSection />
      <CloudBenefitsSection />
      <CloudArchitectureSection />
      <CloudCredibilitySection />
      <CloudProcessSection />
      <CloudFaqSection />
      <CloudCtaSection />
    </div>
  );
};

export default CloudPage;
