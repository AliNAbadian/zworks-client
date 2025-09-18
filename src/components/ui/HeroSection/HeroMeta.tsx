import { ActionButtons } from "@/components/shared/ui/ActionButtons";
import { CloudLightning } from "lucide-react";
import React from "react";

const HeroMeta = () => {
  return (
    <div className="container flex flex-row items-center justify-between h-screen z-10 mx-auto ">
      <div className="max-w-[50%] flex flex-col w-full items-center gap-y-14 ">
        <p className="font-iransans text-7xl leading-relaxed font-black">
          ایده تا اوج <br /> با طراحی و توسعه دیجیتال محصول شما <br /> را به
          پرواز در می آوریم
        </p>
        <div className="w-full border-[1px] border-accent py-8 px-10 rounded-3xl font-iransans flex flex-row items-center gap-x-4 bg-gradient-to-b from-transparent to-primary/5 backdrop-blur-2xl">
          <img src="/images/fire.png" alt="fire" className="opacity-100 " />
          <p className="leading-relaxed font-semibold text-lg">
            6 سال سابقه طراحی و توسعه محصولات دیجیتال B2B و B2C با تمرکز بر
            تجربه کاربری و فناوری بروز
          </p>
          <div className="flex flex-row items-center group ">
            <ActionButtons title="مشاوره فوری" icon={<CloudLightning />} />
          </div>
        </div>
      </div>

      <div className="max-w-[50%]">
        <img src={"/images/mainshape.svg"} />
      </div>
    </div>
  );
};

export default HeroMeta;
