import {
  BarChart3,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  SEO_RESULTS_INTRO,
  resultItems,
} from "@/features/seo/seo-data";
import type { ResultIcon } from "@/features/seo/seo-model";
import { cn } from "@/lib/utils";

const resultIcons: Record<ResultIcon, typeof TrendingUp> = {
  traffic: TrendingUp,
  rankings: BarChart3,
  leads: Users,
  sales: ShoppingCart,
};

const SeoResultsSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {SEO_RESULTS_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {SEO_RESULTS_INTRO.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        {resultItems.map((item) => {
          const Icon = resultIcons[item.icon];

          return (
            <article
              key={item.id}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[28px] border p-6 sm:p-8",
                "bg-[linear-gradient(145deg,rgba(4,40,39,0.95)_0%,rgba(4,20,46,0.92)_55%,rgba(3,18,28,0.92)_100%)]",
                "border-white/10 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.85)]",
                "transition-all duration-500 hover:border-primary/30 hover:shadow-[0_50px_120px_-50px_rgba(0,178,98,0.25)]",
              )}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,178,98,0.15),transparent_60%)]"
              />

              <div className="relative flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="text-end">
                    <p className="font-iransans text-3xl font-black text-primary sm:text-4xl">
                      {item.metric}
                    </p>
                    <p className="mt-1 text-xs text-content-gray">
                      {item.metricLabel}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-gray">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SeoResultsSection;
