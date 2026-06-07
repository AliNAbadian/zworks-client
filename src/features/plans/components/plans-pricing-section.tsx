import PricingCard from "@/features/plans/components/pricing-card";
import {
  PLANS_PRICING_INTRO,
  pricingPackages,
} from "@/features/plans/plans-data";

const PlansPricingSection = () => {
  const featured = pricingPackages.find((pkg) => pkg.highlighted);
  const others = pricingPackages.filter((pkg) => !pkg.highlighted);

  return (
    <section className="container mx-auto px-4 md:px-6" id="pricing">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {PLANS_PRICING_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {PLANS_PRICING_INTRO.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-3 xl:gap-8">
        {featured ? (
          <div className="order-first xl:order-2">
            <PricingCard pkg={featured} />
          </div>
        ) : null}
        {others.map((pkg, index) => (
          <div
            key={pkg.id}
            className={index === 0 ? "xl:order-1" : "xl:order-3"}
          >
            <PricingCard pkg={pkg} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansPricingSection;
