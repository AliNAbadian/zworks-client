import GradientCircleIcon from "@/components/shared/ui/GradientCircleIcon";
import {
  SEO_PROCESS_INTRO,
  processSteps,
} from "@/features/seo/seo-data";

const SeoProcessSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {SEO_PROCESS_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {SEO_PROCESS_INTRO.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:hidden">
        {processSteps.map((step, index) => (
          <div key={step.id} className="flex flex-col gap-3">
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
            {index < processSteps.length - 1 ? (
              <div className="mx-auto h-6 w-px bg-primary/40" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="hidden gap-6 lg:grid lg:grid-cols-4">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center rounded-[28px] border border-white/10 bg-[#1a1a1a]/80 p-6 text-center backdrop-blur-xl"
          >
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
        ))}
      </div>
    </section>
  );
};

export default SeoProcessSection;
