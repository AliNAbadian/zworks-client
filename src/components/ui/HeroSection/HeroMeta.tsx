import { ActionButtons } from "@/components/shared/ui/ActionButtons";
import { CloudLightning } from "lucide-react";
import React from "react";

const HeroMeta = () => {
  return (
    <div className="container z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-10 px-4 py-24 lg:min-h-screen lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-0">
      <div className="flex w-full max-w-full flex-col items-center gap-y-8 lg:max-w-[50%] lg:gap-y-14">
        <h1 className="text-center font-iransans text-3xl font-black leading-relaxed sm:text-4xl md:text-5xl lg:text-start lg:text-7xl">
          ایده تا اوج <br /> با طراحی و توسعه دیجیتال محصول شما <br /> را به
          پرواز در می آوریم
        </h1>
        <div className="flex w-full flex-col items-center gap-4 rounded-3xl border border-accent bg-gradient-to-b from-transparent to-primary/5 px-5 py-6 font-iransans backdrop-blur-2xl sm:px-8 sm:py-8 lg:flex-row lg:gap-x-4 lg:px-10">
          <img
            alt="آیکون نوآوری زی‌ورکس"
            className="size-12 shrink-0 opacity-100 lg:size-auto"
            src="/images/fire.png"
          />
          <p className="text-center text-base font-semibold leading-relaxed lg:text-start lg:text-lg">
            6 سال سابقه طراحی و توسعه محصولات دیجیتال B2B و B2C با تمرکز بر
            تجربه کاربری و فناوری بروز
          </p>
          <div className="group flex shrink-0 flex-row items-center">
            <ActionButtons title="مشاوره فوری" icon={<CloudLightning />} />
          </div>
        </div>
      </div>

      <div className="hidden w-full max-w-[40%] lg:block">
        <img alt="گرافیک خدمات طراحی و توسعه وب زی‌ورکس" className="w-full" src="/images/mainshape.svg" />
      </div>
    </div>
  );
};

export default HeroMeta;
