import Radial from "@/components/shared/effects/Radial";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import {
  PROJECTS_STATS_INTRO,
  projectStats,
} from "@/features/projects/projects-data";

const ProjectsStatsSection = () => {
  return (
    <section className="relative">
      <Radial
        className="absolute start-[10%] top-1/2 -z-10 -translate-y-1/2"
        color="rgba(193, 68, 14, 0.2)"
        size="40rem"
        transparency={70}
      />

      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
            <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-4xl">
              {PROJECTS_STATS_INTRO.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
              {PROJECTS_STATS_INTRO.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {projectStats.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 0.08} variant="scaleIn">
              <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#12100e]/80 p-6 text-center backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-[0_32px_80px_-40px_rgb(var(--primary-rgb)/0.45)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--primary-rgb)/0.12),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <p className="relative font-iransans text-3xl font-black text-primary sm:text-4xl lg:text-5xl">
                  {stat.value}
                  {stat.suffix ? (
                    <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
                  ) : null}
                </p>
                <p className="relative mt-2 text-sm text-content-gray">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsStatsSection;
