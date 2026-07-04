import {
  DollarSign,
  Heart,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import {
  MARKETING_KPI_INTRO,
  kpiStats,
} from "@/features/marketing/marketing-data";
import type { KpiIcon } from "@/features/marketing/marketing-model";
import { cn } from "@/lib/utils";

const kpiIcons: Record<KpiIcon, typeof TrendingUp> = {
  traffic: TrendingUp,
  conversion: Zap,
  roi: DollarSign,
  leads: Users,
  cost: Target,
  satisfaction: Heart,
};

const MarketingKpiSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6" id="kpi">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {MARKETING_KPI_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {MARKETING_KPI_INTRO.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {kpiStats.map((stat) => {
          const Icon = kpiIcons[stat.icon];

          return (
            <article
              key={stat.id}
              className={cn(
                "group relative flex flex-col items-center overflow-hidden rounded-[28px] border p-6 text-center sm:p-8",
                "bg-[linear-gradient(145deg,rgba(4,40,39,0.95)_0%,rgba(4,20,46,0.92)_55%,rgba(3,18,28,0.92)_100%)]",
                "border-white/10 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.85)] backdrop-blur-xl",
                "transition-all duration-500 hover:border-primary/30 hover:shadow-[0_50px_120px_-50px_rgb(var(--primary-rgb)/0.25)]",
              )}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--primary-rgb)/0.2),transparent_60%)]"
              />

              <div className="relative flex flex-col items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <p className="font-iransans text-4xl font-black text-primary sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-white sm:text-base">
                  {stat.label}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MarketingKpiSection;
