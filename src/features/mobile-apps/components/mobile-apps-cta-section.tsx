import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import CtaBackground from "@/components/ui/CallToAction/CtaBackground";
import { MOBILE_APPS_CTA } from "@/features/mobile-apps/mobile-apps-data";

const MobileAppsCtaSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 font-iransans sm:min-h-[50vh]">
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 py-16 text-center sm:gap-8 sm:px-10">
          <h2 className="max-w-2xl text-2xl font-black text-white sm:text-3xl lg:text-5xl">
            {MOBILE_APPS_CTA.title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-content-gray sm:text-lg">
            {MOBILE_APPS_CTA.description}
          </p>

          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-12 rounded-2xl bg-white px-8 font-semibold text-black hover:bg-white/90"
              size="lg"
            >
              <Link href={MOBILE_APPS_CTA.primaryCta.href}>
                {MOBILE_APPS_CTA.primaryCta.label}
              </Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-2xl border-white/20 bg-white/5 px-8 font-semibold backdrop-blur-sm hover:bg-white/10"
              size="lg"
              variant="outline"
            >
              <Link href={MOBILE_APPS_CTA.secondaryCta.href}>
                {MOBILE_APPS_CTA.secondaryCta.label}
              </Link>
            </Button>
          </div>

          <div className="relative mt-4 w-full max-w-xs opacity-40 sm:max-w-md lg:max-w-lg">
            <Image
              alt="مارس"
              className="h-auto w-full"
              height={960}
              src="/images/bigLogo.png"
              width={1080}
            />
          </div>
        </div>

        <CtaBackground />
      </div>
    </section>
  );
};

export default MobileAppsCtaSection;
