import CtaBackground from "@/components/ui/CallToAction/CtaBackground";
import CtaButtons from "@/components/ui/CallToAction/CtaButtons";
import CtaHeader from "@/components/ui/CallToAction/CtaHeader";
import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-3xl border font-iransans p-5 sm:min-h-[50vh] sm:p-8 lg:h-[60vh] lg:p-10">
      <div className="flex h-full flex-col items-center justify-evenly gap-6">
        <CtaHeader />
        <CtaButtons />

        <div className="relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-2xl">
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
  );
};

export default Cta;
