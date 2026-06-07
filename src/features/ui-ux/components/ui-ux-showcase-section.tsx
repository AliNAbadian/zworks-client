import {
  UI_UX_SHOWCASE_INTRO,
  showcaseItems,
} from "@/features/ui-ux/ui-ux-data";
import { cn } from "@/lib/utils";

const PATTERN_KEYS = ["tl", "tr", "bl", "br"] as const;

const UiUxShowcaseSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6" id="showcase">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {UI_UX_SHOWCASE_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {UI_UX_SHOWCASE_INTRO.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {showcaseItems.map((item) => (
          <article
            key={item.id}
            className={cn(
              "group relative overflow-hidden rounded-[32px] border border-white/10 p-8 text-white",
              "bg-[linear-gradient(145deg,rgba(4,40,39,0.95)_0%,rgba(4,20,46,0.92)_55%,rgba(3,18,28,0.92)_100%)]",
              "shadow-[0_45px_120px_-60px_rgba(0,0,0,0.85)]",
              "transition-shadow duration-500 hover:shadow-[0_55px_140px_-60px_rgba(0,178,98,0.45)]",
            )}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,178,98,0.45),transparent_55%)] opacity-70"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08)_0%,transparent_55%)] opacity-40"
            />

            <div className="relative flex flex-col gap-8">
              <div
                className="relative h-48 overflow-hidden rounded-[24px] border border-white/10"
                style={{ background: item.gradient }}
              >
                <div className="relative flex h-full items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,transparent_60%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.35)_0%,transparent_75%)]" />
                  <div className="relative grid h-24 w-24 grid-cols-2 gap-3 opacity-70">
                    {PATTERN_KEYS.map((key) => (
                      <span
                        key={key}
                        className="rounded-2xl bg-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)]"
                      />
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,178,98,0.22),transparent_65%)] opacity-70" />
              </div>

              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                  {item.category}
                </span>
                <h3 className="text-2xl font-black tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UiUxShowcaseSection;
