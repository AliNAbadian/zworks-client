import CtaBackground from "@/components/ui/CallToAction/CtaBackground";
import CtaButtons from "@/components/ui/CallToAction/CtaButtons";
import CtaHeader from "@/components/ui/CallToAction/CtaHeader";
import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="relative h-[60vh] border rounded-3xl overflow-hidden font-iransans p-10">
      <div className="flex flex-col items-center justify-ev h-full">
        <CtaHeader />
        <CtaButtons />

        <div className="relative z-10">
          <Image
            src={"/images/bigLogo.png"}
            width={1080}
            height={960}
            alt="زی ورکس"
          />
        </div>
      </div>
      <CtaBackground />
    </div>
  );
};

export default Cta;
