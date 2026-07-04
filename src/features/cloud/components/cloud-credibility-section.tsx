import {
  Activity,
  Clock,
  FileCheck,
  Shield,
  Timer,
  Zap,
} from "lucide-react";

import {
  CLOUD_CREDIBILITY_INTRO,
  credibilityItems,
  techBadges,
} from "@/features/cloud/cloud-data";
import type { CredibilityIcon } from "@/features/cloud/cloud-model";
import { cn } from "@/lib/utils";

const credibilityIcons: Record<CredibilityIcon, typeof Shield> = {
  uptime: Activity,
  security: Shield,
  response: Timer,
  compliance: FileCheck,
  automation: Zap,
  monitoring: Clock,
};

const CloudCredibilitySection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {CLOUD_CREDIBILITY_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {CLOUD_CREDIBILITY_INTRO.subtitle}
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {techBadges.map((badge) => (
          <span
            key={badge.id}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-primary/10"
          >
            {badge.name}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {credibilityItems.map((item) => {
          const Icon = credibilityIcons[item.icon];

          return (
            <article
              key={item.id}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[28px] border p-6 sm:p-8",
                "bg-[linear-gradient(145deg,rgba(4,40,39,0.95)_0%,rgba(4,20,46,0.92)_55%,rgba(3,18,28,0.92)_100%)]",
                "border-white/10 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.85)]",
                "transition-all duration-500 hover:border-primary/30 hover:shadow-[0_50px_120px_-50px_rgb(var(--primary-rgb)/0.25)]",
              )}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgb(var(--primary-rgb)/0.15),transparent_60%)]"
              />

              <div className="relative flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="text-end">
                    <p className="font-iransans text-2xl font-black text-primary sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-white">
                      {item.label}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-content-gray">
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

export default CloudCredibilitySection;
