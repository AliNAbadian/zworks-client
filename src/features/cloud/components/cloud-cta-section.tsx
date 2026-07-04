import Link from "next/link";

import Radial from "@/components/shared/effects/Radial";
import { Button } from "@/components/ui/button";
import { CLOUD_CTA } from "@/features/cloud/cloud-data";
import { cn } from "@/lib/utils";

const CloudCtaSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div
        className={cn(
          "relative overflow-hidden rounded-[32px] border border-white/15 font-iransans",
          "bg-[linear-gradient(145deg,rgba(4,40,39,0.98)_0%,rgba(4,25,50,0.95)_40%,rgba(3,18,28,0.98)_100%)]",
          "shadow-[0_60px_120px_-40px_rgb(var(--primary-rgb)/0.2)] backdrop-blur-2xl",
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/images/abstractpattern.svg')] bg-cover opacity-[0.04]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border border-primary/10"
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-16 text-center sm:gap-10 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div className="flex flex-col items-center gap-4">
            <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Enterprise Infrastructure
            </span>
            <h2 className="max-w-3xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-5xl">
              {CLOUD_CTA.title}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-content-gray sm:text-lg">
            {CLOUD_CTA.description}
          </p>

          <div className="flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-12 rounded-2xl bg-primary px-10 font-semibold text-white shadow-[0_0_40px_-10px_rgb(var(--primary-rgb)/0.6)] hover:bg-primary/90"
              size="lg"
            >
              <Link href={CLOUD_CTA.primaryCta.href}>
                {CLOUD_CTA.primaryCta.label}
              </Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-2xl border-white/25 bg-white/5 px-10 font-semibold backdrop-blur-sm hover:border-primary/40 hover:bg-white/10"
              size="lg"
              variant="outline"
            >
              <Link href={CLOUD_CTA.secondaryCta.href}>
                {CLOUD_CTA.secondaryCta.label}
              </Link>
            </Button>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="font-iransans text-xl font-black text-primary">
                ۹۹.۹٪
              </p>
              <p className="mt-1 text-xs text-content-gray">Uptime SLA</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <p className="font-iransans text-xl font-black text-primary">
                ۲۴/۷
              </p>
              <p className="mt-1 text-xs text-content-gray">پشتیبانی فنی</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <p className="font-iransans text-xl font-black text-primary">
                IaC
              </p>
              <p className="mt-1 text-xs text-content-gray">زیرساخت کدمحور</p>
            </div>
          </div>
        </div>

        <Radial
          className="start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          color="rgba(0, 178, 98, 0.2)"
          size="40rem"
          transparency={75}
        />
      </div>
    </section>
  );
};

export default CloudCtaSection;
