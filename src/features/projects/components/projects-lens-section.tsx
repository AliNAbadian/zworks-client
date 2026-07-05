import { Layers, Sparkles, Telescope } from "lucide-react";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import {
  PROJECTS_LENS_INTRO,
  lensPillars,
} from "@/features/projects/projects-data";
import type { LensPillar } from "@/features/projects/projects-model";
import { cn } from "@/lib/utils";

const pillarIcons = {
  telescope: Telescope,
  layers: Layers,
  sparkles: Sparkles,
} as const;

const PillarIcon = ({ pillar }: { pillar: LensPillar }) => {
  const Icon = pillarIcons[pillar.icon];

  return (
    <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-[background-color,border-color] duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
      <Icon aria-hidden="true" className="size-5" />
    </span>
  );
};

const ProjectsLensSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <ScrollReveal>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
            {PROJECTS_LENS_INTRO.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
            {PROJECTS_LENS_INTRO.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {lensPillars.map((pillar, index) => (
          <ScrollReveal key={pillar.id} delay={index * 0.1} variant="fadeUp">
            <article
              className={cn(
                "group relative flex h-full flex-col gap-5 overflow-hidden rounded-[28px] border border-white/10 p-8",
                "bg-[linear-gradient(145deg,rgba(4,40,39,0.95)_0%,rgba(4,20,46,0.92)_55%,rgba(3,18,28,0.92)_100%)]",
                "shadow-[0_45px_120px_-60px_rgba(0,0,0,0.85)]",
                "transition-shadow duration-300 hover:shadow-[0_55px_140px_-60px_rgb(var(--primary-rgb)/0.4)]",
              )}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(var(--primary-rgb)/0.25),transparent_55%)] opacity-60"
              />

              <PillarIcon pillar={pillar} />

              <div className="relative flex flex-col gap-3">
                <h3 className="text-xl font-black text-white sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                  {pillar.description}
                </p>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsLensSection;
