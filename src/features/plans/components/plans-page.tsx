import PlansComparisonSection from "@/features/plans/components/plans-comparison-section";
import PlansCtaSection from "@/features/plans/components/plans-cta-section";
import PlansFaqSection from "@/features/plans/components/plans-faq-section";
import PlansHero from "@/features/plans/components/plans-hero";
import PlansPricingSection from "@/features/plans/components/plans-pricing-section";
import PlansProcessSection from "@/features/plans/components/plans-process-section";

const PlansPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 overflow-x-hidden font-iransans sm:gap-20 lg:gap-32">
      <PlansHero />
      <PlansPricingSection />
      <PlansComparisonSection />
      <PlansProcessSection />
      <PlansFaqSection />
      <PlansCtaSection />
    </div>
  );
};

export default PlansPage;
