import {
  MARKETING_SUCCESS_STORIES_INTRO,
  successStories,
} from "@/features/marketing/marketing-data";
import { cn } from "@/lib/utils";

const PATTERN_KEYS = ["tl", "tr", "bl", "br"] as const;

const MarketingSuccessStoriesSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {MARKETING_SUCCESS_STORIES_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {MARKETING_SUCCESS_STORIES_INTRO.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
        {successStories.map((story) => (
          <article
            key={story.id}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10",
              "bg-[linear-gradient(145deg,rgba(4,40,39,0.95)_0%,rgba(4,20,46,0.92)_55%,rgba(3,18,28,0.92)_100%)]",
              "shadow-[0_45px_120px_-60px_rgba(0,0,0,0.85)]",
              "transition-shadow duration-500 hover:shadow-[0_55px_140px_-60px_rgb(var(--primary-rgb)/0.45)]",
            )}
          >
            <div
              className="relative h-40 overflow-hidden border-b border-white/10"
              style={{ background: story.gradient }}
            >
              <div className="relative flex h-full items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.35)_0%,transparent_75%)]" />
                <div className="relative grid h-20 w-20 grid-cols-2 gap-2 opacity-70">
                  {PATTERN_KEYS.map((key) => (
                    <span
                      key={key}
                      className="rounded-xl bg-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)]"
                    />
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--primary-rgb)/0.22),transparent_65%)] opacity-70" />
            </div>

            <div className="relative flex flex-1 flex-col gap-4 p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {story.industry}
                </span>
              </div>

              <h3 className="text-xl font-black text-white">{story.client}</h3>

              <div>
                <p className="text-xs font-medium text-white/50">چالش</p>
                <p className="mt-1 text-sm leading-relaxed text-content-gray">
                  {story.challenge}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-white/50">نتیجه</p>
                <p className="mt-1 text-sm leading-relaxed text-content-gray">
                  {story.result}
                </p>
              </div>

              <div className="mt-auto flex gap-4 border-t border-white/10 pt-4">
                {story.metrics.map((metric) => (
                  <div key={metric.label} className="flex-1 text-center">
                    <p className="font-iransans text-2xl font-black text-primary">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-content-gray">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MarketingSuccessStoriesSection;
