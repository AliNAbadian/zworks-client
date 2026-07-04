import React from "react";
import LinkButton from "../shared/ui/LinkButton";
import { ArrowBigLeftDash } from "lucide-react";
import Image from "next/image";
import { DEVELOPMENT_PORTFOLIO_INTRO } from "@/features/development/development-data";

const Portfolio = () => {
  return (
    <section className="container relative mx-auto my-10 min-h-[420px] space-y-6 overflow-hidden rounded-4xl border p-5 font-iransans sm:my-16 sm:min-h-[55vh] sm:space-y-8 sm:p-8 lg:p-10">
      <div className="space-y-6 sm:space-y-8">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
          پورتوفلیو خدمات توسعه وب
        </h1>
        <p className="text-sm text-gray-500 sm:text-base">
          {DEVELOPMENT_PORTFOLIO_INTRO}
        </p>
        <div className="grid h-[200px] grid-cols-1 gap-4 sm:h-[30vh] sm:grid-cols-2">
          <div className="border border-gray-800 rounded-4xl  relative overflow-hidden">
            <Image src={"/images/mockup1.jpg"} fill alt="mockup Mars Agency" />
          </div>
          <div className="border rounded-4xl  relative overflow-hidden">
            <Image src={"/images/mockup2.jpg"} fill alt="mockup Mars Agency" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex h-[30vh] w-full flex-col justify-end bg-gradient-to-b from-0% to-background py-6 sm:h-[40vh] sm:py-12">
        <div className="mx-auto w-full max-w-xs self-end rounded-full sm:max-w-sm">
          <LinkButton
            className="!w-full"
            href="/projects"
            linkIcon={<ArrowBigLeftDash />}
            linkText="مشاهده پروژه ها"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
