import Link from "next/link";

import { Button } from "@/components/ui/button";
import HeroBg from "@/components/ui/HeroSection/HeroBg";
import { MOBILE_APPS_HERO } from "@/features/mobile-apps/mobile-apps-data";

const MobileAppsHero = () => {
  return (
    <section className="relative mx-auto min-h-[calc(100vh-3.5rem)] w-full overflow-hidden lg:min-h-screen">
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-8 px-4 py-20 text-center font-iransans sm:px-6 sm:py-28 md:px-6 lg:min-h-screen lg:gap-10 lg:py-32">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {MOBILE_APPS_HERO.eyebrow}
        </span>

        <h1 className="max-w-4xl font-iransans text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
          {MOBILE_APPS_HERO.headline}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-content-gray sm:text-lg">
          {MOBILE_APPS_HERO.description}
        </p>

        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button
            asChild
            className="h-12 rounded-2xl px-8 font-semibold"
            size="lg"
          >
            <Link href={MOBILE_APPS_HERO.primaryCta.href}>
              {MOBILE_APPS_HERO.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            className="h-12 rounded-2xl border-white/20 bg-white/5 px-8 font-semibold backdrop-blur-sm hover:bg-white/10"
            size="lg"
            variant="outline"
          >
            <Link href={MOBILE_APPS_HERO.secondaryCta.href}>
              {MOBILE_APPS_HERO.secondaryCta.label}
            </Link>
          </Button>
        </div>
      </div>

      <HeroBg />
    </section>
  );
};

export default MobileAppsHero;
