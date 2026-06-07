import Link from "next/link";

import Radial from "@/components/shared/effects/Radial";
import { Button } from "@/components/ui/button";
import HeroBg from "@/components/ui/HeroSection/HeroBg";
import { PLANS_HERO } from "@/features/plans/plans-data";

const PlansHero = () => {
  return (
    <section className="relative w-full overflow-hidden pb-16 pt-8 sm:pb-20 lg:pb-28 lg:pt-12">
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 text-center md:px-6 lg:gap-10">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {PLANS_HERO.eyebrow}
        </span>

        <h1 className="max-w-4xl font-iransans text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
          توسعه وب حرفه‌ای برای کسب‌وکارهای{" "}
          <span className="text-primary">{PLANS_HERO.highlight}</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-content-gray sm:text-lg">
          {PLANS_HERO.description}
        </p>

        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button
            asChild
            className="h-12 rounded-2xl px-8 font-semibold"
            size="lg"
          >
            <Link href={PLANS_HERO.primaryCta.href}>
              {PLANS_HERO.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            className="h-12 rounded-2xl border-white/20 bg-white/5 px-8 font-semibold backdrop-blur-sm hover:bg-white/10"
            size="lg"
            variant="outline"
          >
            <Link href={PLANS_HERO.secondaryCta.href}>
              {PLANS_HERO.secondaryCta.label}
            </Link>
          </Button>
        </div>
      </div>

      <Radial
        className="start-1/2 top-0 -translate-x-1/2 -translate-y-1/4"
        color="rgba(0, 178, 98, 0.35)"
        size="70rem"
        transparency={65}
      />
      <HeroBg />
    </section>
  );
};

export default PlansHero;
