import type { ComparisonRating } from "@/features/plans/plans-model";
import {
  PLANS_COMPARISON_INTRO,
  comparisonRows,
} from "@/features/plans/plans-data";
import { cn } from "@/lib/utils";

const ratingStyles: Record<ComparisonRating, string> = {
  excellent: "bg-primary/15 text-primary border-primary/30",
  good: "bg-white/10 text-white/80 border-white/15",
  limited: "bg-white/5 text-content-gray border-white/10",
};

const ComparisonChip = ({
  value,
  rating,
}: {
  value: string;
  rating: ComparisonRating;
}) => (
  <span
    className={cn(
      "inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:text-sm",
      ratingStyles[rating],
    )}
  >
    {value}
  </span>
);

const PlansComparisonSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6" id="comparison">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {PLANS_COMPARISON_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {PLANS_COMPARISON_INTRO.subtitle}
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-[28px] border border-white/10 bg-[#1a1a1a]/80 backdrop-blur-xl lg:block">
        <div className="grid grid-cols-3 border-b border-white/10 bg-white/5 px-6 py-5 text-sm font-bold text-white">
          <div>معیار</div>
          <div className="text-center">{PLANS_COMPARISON_INTRO.wordpressLabel}</div>
          <div className="text-center">{PLANS_COMPARISON_INTRO.customLabel}</div>
        </div>
        {comparisonRows.map((row) => (
          <div
            key={row.id}
            className="grid grid-cols-3 items-center gap-4 border-b border-white/5 px-6 py-5 last:border-b-0"
          >
            <div className="font-semibold text-white">{row.label}</div>
            <div className="flex justify-center">
              <ComparisonChip
                rating={row.wordpressRating}
                value={row.wordpress}
              />
            </div>
            <div className="flex justify-center">
              <ComparisonChip rating={row.customRating} value={row.custom} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile stacked cards */}
      <div className="flex flex-col gap-4 lg:hidden">
        {comparisonRows.map((row) => (
          <div
            key={row.id}
            className="rounded-2xl border border-white/10 bg-[#1a1a1a]/80 p-4 backdrop-blur-xl"
          >
            <h3 className="mb-4 font-bold text-white">{row.label}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-content-gray">
                  {PLANS_COMPARISON_INTRO.wordpressLabel}
                </span>
                <ComparisonChip
                  rating={row.wordpressRating}
                  value={row.wordpress}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-content-gray">
                  {PLANS_COMPARISON_INTRO.customLabel}
                </span>
                <ComparisonChip rating={row.customRating} value={row.custom} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansComparisonSection;
