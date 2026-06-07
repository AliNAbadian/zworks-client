import { HOME_CTA } from "@/features/home/home-data";
import React from "react";

const CtaHeader = () => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-y-6">
      <h2 className="text-center font-black text-2xl sm:text-3xl lg:text-5xl">
        {HOME_CTA.title}
      </h2>
      <p className="text-content-gray">{HOME_CTA.description}</p>
    </div>
  );
};

export default CtaHeader;
