import {
  Activity,
  Boxes,
  Cloud,
  Container,
  GitBranch,
  Settings2,
} from "lucide-react";

import {
  CLOUD_SERVICES_INTRO,
  serviceItems,
} from "@/features/cloud/cloud-data";
import type { ServiceIcon } from "@/features/cloud/cloud-model";
import { cn } from "@/lib/utils";

const serviceIcons: Record<ServiceIcon, typeof Cloud> = {
  architecture: Cloud,
  cicd: GitBranch,
  containerization: Container,
  kubernetes: Boxes,
  monitoring: Activity,
  automation: Settings2,
};

const CloudServicesSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {CLOUD_SERVICES_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {CLOUD_SERVICES_INTRO.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {serviceItems.map((item) => {
          const Icon = serviceIcons[item.icon];

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
                className="pointer-events-none absolute inset-0 bg-[url('/images/abstractpattern.svg')] bg-cover opacity-[0.06]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(var(--primary-rgb)/0.2),transparent_55%)]"
              />

              <div className="relative flex flex-col gap-5">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-white">{item.title}</h3>
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

export default CloudServicesSection;
