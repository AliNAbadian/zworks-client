import GradientCircleIcon from "@/components/shared/ui/GradientCircleIcon";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import {
  PROJECTS_PROCESS_INTRO,
  projectProcessSteps,
} from "@/features/projects/projects-data";

const ProjectsProcessSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <ScrollReveal>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
            {PROJECTS_PROCESS_INTRO.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
            {PROJECTS_PROCESS_INTRO.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-4 lg:hidden">
        {projectProcessSteps.map((step, index) => (
          <ScrollReveal key={step.id} delay={index * 0.08} variant="fadeUp">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/80 p-4 backdrop-blur-xl">
                <GradientCircleIcon
                  color="from-primary/40"
                  icon={
                    <span className="text-sm font-black text-white">
                      {step.step}
                    </span>
                  }
                  innerSize="w-10 h-10"
                  middleSize="w-12 h-12"
                  outerSize="w-14 h-14"
                />
                <div>
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-content-gray">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < projectProcessSteps.length - 1 ? (
                <div className="mx-auto h-6 w-px bg-primary/40" />
              ) : null}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="hidden gap-6 lg:grid lg:grid-cols-4">
        {projectProcessSteps.map((step, index) => (
          <ScrollReveal key={step.id} delay={index * 0.08} variant="scaleIn">
            <div className="relative flex flex-col items-center rounded-[28px] border border-white/10 bg-[#1a1a1a]/80 p-6 text-center backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_32px_80px_-40px_rgb(var(--primary-rgb)/0.35)]">
              <GradientCircleIcon
                color="from-primary/40"
                icon={
                  <span className="text-base font-black text-white">
                    {step.step}
                  </span>
                }
                innerSize="w-10 h-10"
                middleSize="w-14 h-14"
                outerSize="w-18 h-18"
              />
              <h3 className="mt-6 font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-content-gray">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsProcessSection;
