import Image from "next/image";
import React from "react";
import ProcessFlow from "./Flows";
import GradientCircleIcon from "../shared/ui/GradientCircleIcon";
import { Dot, Phone } from "lucide-react";

type StepItem = {
  label: string;
  glow: string;
  accent: string;
  dot: string;
  shadow: string;
};

const STEPS: StepItem[] = [
  {
    label: "تعریف اهداف",
    glow: "bg-emerald-400/30",
    accent: "from-emerald-400/80 via-emerald-400/25 to-emerald-400/0",
    dot: "bg-emerald-400",
    shadow: "shadow-[0_0_18px_rgba(52,211,153,0.55)]",
  },
  {
    label: "تحلیل و بررسی",
    glow: "bg-emerald-300/15",
    accent: "from-white/50 via-white/15 to-transparent",
    dot: "bg-white/60",
    shadow: "shadow-[0_0_18px_rgba(255,255,255,0.35)]",
  },
  {
    label: "انتخاب فناوری‌ها",
    glow: "bg-emerald-300/20",
    accent: "from-white/45 via-white/15 to-transparent",
    dot: "bg-white/55",
    shadow: "shadow-[0_0_18px_rgba(255,255,255,0.28)]",
  },
  {
    label: "طراحی خلاقانه",
    glow: "bg-emerald-300/15",
    accent: "from-white/45 via-white/15 to-transparent",
    dot: "bg-white/55",
    shadow: "shadow-[0_0_18px_rgba(255,255,255,0.28)]",
  },
  {
    label: "توسعه‌ی قدرتمند",
    glow: "bg-emerald-300/20",
    accent: "from-white/45 via-white/15 to-transparent",
    dot: "bg-white/55",
    shadow: "shadow-[0_0_18px_rgba(255,255,255,0.28)]",
  },
  {
    label: "راه‌اندازی و گسترش",
    glow: "bg-sky-500/30",
    accent: "from-sky-500/75 via-sky-500/20 to-sky-500/0",
    dot: "bg-sky-400",
    shadow: "shadow-[0_0_18px_rgba(56,189,248,0.45)]",
  },
];

const StepCard = ({ step }: { step: StepItem }) => {
  return (
    <div className="relative flex w-full max-w-full shrink-0 flex-col items-center text-center md:w-[150px] md:max-w-none">
      <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 opacity-90 blur-3xl">
        <div className={`h-full w-full rounded-full ${step.glow}`} />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center gap-4 rounded-full border border-white/10 bg-black/50 px-5 py-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-b ${step.accent} opacity-90`}
          />
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 shadow-inner">
            <span
              className={`inline-flex h-3 w-3 rounded-full ${step.dot} ${step.shadow}`}
            />
          </div>
        </div>
        <p className="text-lg font-semibold text-white">{step.label}</p>
      </div>
    </div>
  );
};

const Connector = ({ direction }: { direction: "up" | "down" }) => {
  const path =
    direction === "up"
      ? "M160 60 C 120 -20 40 -20 0 60"
      : "M160 60 C 120 140 40 140 0 60";

  return (
    <div className="hidden w-16 shrink-0 justify-center text-emerald-400/70 md:flex lg:w-24">
      <svg
        viewBox="0 0 160 160"
        fill="none"
        className="h-24 w-full"
        role="presentation"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="4"
            orient="auto"
          >
            <path
              d="M0 0 L8 4 L0 8 Q2 4 0 0"
              fill="currentColor"
              opacity="0.85"
            />
          </marker>
        </defs>
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 9"
          markerEnd="url(#arrowhead)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

const OurWorkRoute = () => {
  return (
    <section className="container mx-auto min-h-screen font-iransans py-16">
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

      {/* <div className="mt-24 flex flex-col items-center gap-12">
        <div className="hidden w-full overflow-x-auto pb-4 md:block">
          <div className="mx-auto flex min-w-[1200px] flex-row-reverse items-center justify-between gap-6 lg:gap-10">
            {STEPS.map((step, index) => (
              <React.Fragment key={step.label}>
                <StepCard step={step} />
                {index < STEPS.length - 1 && (
                  <Connector direction={index % 2 === 0 ? "down" : "up"} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-md flex-col items-center gap-10 md:hidden">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.label}>
              <StepCard step={step} />
              {index < STEPS.length - 1 && (
                <div className="flex h-12 w-px items-center justify-center bg-gradient-to-b from-emerald-400/70 via-emerald-400/0 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div> */}
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
