import Image from "next/image";
import React from "react";
import ProcessFlow from "./Flows";
import GradientCircleIcon from "../shared/ui/GradientCircleIcon";
import { Dot, Phone } from "lucide-react";

const OurWorkRoute = () => {
  return (
    <section className="container mx-auto  font-iransans my-32">
      <div className="grid w-full grid-cols-12 text-3xl">
        <div className="col-span-12 mb-6 text-right text-base md:col-span-3 md:mb-0 md:text-3xl">
          <p className="text-primary font-bold">روند کار ما</p>
        </div>
        <div className="col-span-12 font-bold leading-relaxed text-gray-500 md:col-span-9">
          <span className="text-white">
            متناسب و الهام‌گرفته، حرفه‌ای و قابل اعتماد، آژانس ما
          </span>{" "}
          همواره در تلاش است تا تنها بهترین راهکارها را ارائه دهد.
        </div>
      </div>

      <div className="relative px-32 border border-transparent">
        <div className="grid grid-cols-5 place-content-center items-center text-center h-64 my-20">
          <div className="grid grid-rows-2  h-64 max-h-64">
            <div className="row-span-1"></div>
            <div className="row-span-1 relative w-full h-full overflow-visible">
              <Image
                src={"/images/arrowRoute.png"}
                alt="arrow"
                height={64}
                width={320}
                className="object-cover"
              />
            </div>
          </div>

          {/* Example other columns */}
          <div className="grid grid-rows-2">
            <div className="row-span-1">
              <Image
                src={"/images/arrowRoute.png"}
                alt="arrow"
                height={64}
                width={320}
                className="object-cover rotate-180 scale-x-[-1]"
              />
            </div>
            <div className="row-span-1"></div>
          </div>
          <div className="grid grid-rows-2">
            <div className="row-span-1"></div>
            <div className="row-span-1">
              <Image
                src={"/images/arrowRoute.png"}
                alt="arrow"
                height={64}
                width={320}
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="row-span-1">
              <Image
                src={"/images/arrowRoute.png"}
                alt="arrow"
                height={64}
                width={320}
                className="object-cover rotate-180 scale-x-[-1]"
              />
            </div>
            <div className="row-span-1"></div>
          </div>
          <div className="grid grid-rows-2">
            <div className="row-span-1"></div>
            <div className="row-span-1">
              <Image
                src={"/images/arrowRoute.png"}
                alt="arrow"
                height={64}
                width={320}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute container mx-auto top-0 left-0 ">
          <div className="grid grid-cols-6 items-center justify-center place-items-center place-content-center py-52 h-64 gap-x-8 font-semibold">
            <div className=" w-full flex flex-col items-center justify-center relative">
              <GradientCircleIcon
                icon={<Dot size={24} className="text-xl" />}
                innerSize="8"
                middleSize="w-15 h-15"
              />
              <div className="absolute  top-[50%] w-full border rounded-full bg-white/1 backdrop-blur-sm h-20 overflow-hidden flex flex-row items-center justify-center">
                تعریف اهداف
              </div>
            </div>
            <div className=" w-full flex flex-col items-center justify-center relative">
              <GradientCircleIcon
                innerSize="8"
                middleSize="w-15 h-15"
                color="from-white/40"
                icon={<Dot size={24} className="text-xl" />}
              />
              <div className="absolute top-[50%] w-full border rounded-full bg-white/1 backdrop-blur-sm h-20 overflow-hidden flex flex-row items-center justify-center">
                تحلیل و بررسی
              </div>
            </div>
            <div className=" w-full flex flex-col items-center justify-center relative">
              <GradientCircleIcon
                innerSize="8"
                middleSize="w-15 h-15"
                color="from-white/40"
                icon={<Dot size={24} className="text-xl" />}
              />
              <div className="absolute top-[50%] w-full border rounded-full bg-white/1 backdrop-blur-sm h-20 overflow-hidden flex flex-row items-center justify-center">
                انتخاب فناوری‌ها
              </div>
            </div>
            <div className=" w-full flex flex-col items-center justify-center relative">
              <GradientCircleIcon
                innerSize="8"
                middleSize="w-15 h-15"
                color="from-white/40"
                icon={<Dot size={24} className="text-xl" />}
              />
              <div className="absolute top-[50%] w-full border rounded-full bg-white/1 backdrop-blur-sm h-20 overflow-hidden flex flex-row items-center justify-center">
                طراحی خلاقانه
              </div>
            </div>
            <div className=" w-full flex flex-col items-center justify-center relative">
              <GradientCircleIcon
                innerSize="8"
                middleSize="w-15 h-15"
                color="from-white/40"
                icon={<Dot size={24} className="text-xl" />}
              />
              <div className="absolute top-[50%] w-full border rounded-full bg-white/1 backdrop-blur-sm h-20 overflow-hidden flex flex-row items-center justify-center">
                توسعه‌ی قدرتمند
              </div>
            </div>
            <div className=" w-full flex flex-col items-center justify-center relative">
              <GradientCircleIcon
                innerSize="8"
                middleSize="w-15 h-15"
                color="from-blue-400/40"
                icon={<Dot size={24} className="text-xl" />}
              />
              <div className="absolute top-[50%] w-full border rounded-full bg-white/1 backdrop-blur-sm h-20 overflow-hidden flex flex-row items-center justify-center">
                راه‌اندازی و گسترش{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkRoute;
