import { Headphones, ShieldAlert, ShieldCheck, TrendingUp } from "lucide-react";

import {
  SUPPORT_BENEFITS_INTRO,
  benefitItems,
} from "@/features/support/support-data";
import type { BenefitIcon } from "@/features/support/support-model";

const benefitIcons: Record<BenefitIcon, typeof ShieldCheck> = {
  risk: ShieldAlert,
  security: ShieldCheck,
  performance: TrendingUp,
  support: Headphones,
};

const SupportBenefitsSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {SUPPORT_BENEFITS_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {SUPPORT_BENEFITS_INTRO.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {benefitItems.map((item) => {
          const Icon = benefitIcons[item.icon];

          return (
            <article
              key={item.id}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/80 p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-content-gray">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SupportBenefitsSection;
