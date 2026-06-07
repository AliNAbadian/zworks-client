import {
  Database,
  Globe,
  Layers,
  Server,
  Users,
} from "lucide-react";

import {
  CLOUD_ARCHITECTURE_INTRO,
  architectureLayers,
} from "@/features/cloud/cloud-data";
import type { ArchitectureLayerIcon } from "@/features/cloud/cloud-model";
import { cn } from "@/lib/utils";

const layerIcons: Record<ArchitectureLayerIcon, typeof Users> = {
  users: Users,
  "load-balancer": Layers,
  "app-servers": Server,
  database: Database,
  cdn: Globe,
};

const CloudArchitectureSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6" id="architecture">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {CLOUD_ARCHITECTURE_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {CLOUD_ARCHITECTURE_INTRO.subtitle}
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          <svg
            className="h-full w-full"
            fill="none"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="flowGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,178,98,0.1)" />
                <stop offset="50%" stopColor="rgba(0,178,98,0.4)" />
                <stop offset="100%" stopColor="rgba(0,178,98,0.1)" />
              </linearGradient>
            </defs>
            <path
              d="M 100 300 L 700 300"
              stroke="url(#flowGradient)"
              strokeDasharray="8 4"
              strokeWidth="2"
            />
            <circle cx="100" cy="300" fill="rgba(0,178,98,0.3)" r="6" />
            <circle cx="250" cy="300" fill="rgba(0,178,98,0.3)" r="6" />
            <circle cx="400" cy="300" fill="rgba(0,178,98,0.3)" r="6" />
            <circle cx="550" cy="300" fill="rgba(0,178,98,0.3)" r="6" />
            <circle cx="700" cy="300" fill="rgba(0,178,98,0.3)" r="6" />
          </svg>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between lg:gap-3">
          {architectureLayers.map((layer, index) => {
            const Icon = layerIcons[layer.icon];

            return (
              <div key={layer.id} className="flex flex-col items-center lg:flex-1">
                <article
                  className={cn(
                    "group relative w-full overflow-hidden rounded-[24px] border p-5 text-center",
                    "bg-[linear-gradient(145deg,rgba(4,40,39,0.95)_0%,rgba(4,20,46,0.92)_55%,rgba(3,18,28,0.92)_100%)]",
                    "border-white/10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.85)] backdrop-blur-xl",
                    "transition-all duration-500 hover:border-primary/30 hover:shadow-[0_40px_100px_-40px_rgba(0,178,98,0.25)]",
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,178,98,0.15),transparent_60%)]"
                  />

                  <div className="relative flex flex-col items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-white">{layer.label}</h3>
                    <p className="text-xs leading-relaxed text-content-gray">
                      {layer.description}
                    </p>
                  </div>
                </article>

                {index < architectureLayers.length - 1 ? (
                  <div className="my-2 flex items-center justify-center lg:hidden">
                    <div className="h-6 w-px bg-primary/40" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 hidden items-center justify-center gap-2 lg:flex">
          <span className="text-xs text-content-gray">جریان داده</span>
          <div className="flex items-center gap-1">
            {architectureLayers.map((layer, index) => (
              <div key={layer.id} className="flex items-center gap-1">
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-primary">
                  {layer.label}
                </span>
                {index < architectureLayers.length - 1 ? (
                  <span className="text-primary/60" aria-hidden="true">
                    ←
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudArchitectureSection;
