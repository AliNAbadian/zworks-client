import Image from "next/image";

import GradientCircleIcon from "../shared/ui/GradientCircleIcon";
import { Dot } from "lucide-react";

const workSteps = [
  { title: "تعریف اهداف", color: "from-primary/40" },
  { title: "تحلیل و بررسی", color: "from-white/40" },
  { title: "انتخاب فناوری‌ها", color: "from-white/40" },
  { title: "طراحی خلاقانه", color: "from-white/40" },
  { title: "توسعه‌ی قدرتمند", color: "from-white/40" },
  { title: "راه‌اندازی و گسترش", color: "from-blue-400/40" },
] as const;

const arrowPatterns = [
  { flip: false, top: false },
  { flip: true, top: true },
  { flip: false, top: false },
  { flip: true, top: true },
  { flip: false, top: false },
] as const;

const MobileWorkStep = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => (
  <div className="flex w-full items-center gap-4">
    <GradientCircleIcon
      color={color}
      icon={<Dot className="text-xl" size={24} />}
      innerSize="w-10 h-10"
      middleSize="w-12 h-12"
      outerSize="w-14 h-14"
    />
    <div className="flex min-h-14 flex-1 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-center text-sm font-semibold backdrop-blur-sm">
      {title}
    </div>
  </div>
);

const MobileArrow = () => (
  <div className="flex w-full items-center justify-center py-1">
    <Image
      alt=""
      className="h-10 w-6 rotate-90 object-contain"
      height={40}
      src="/images/arrowRoute.png"
      width={24}
    />
  </div>
);

const OurWorkRoute = () => {
  return (
    <section className="container mx-auto my-16 px-4 font-iransans sm:my-24 lg:my-32">
      <div className="grid w-full grid-cols-12 text-3xl">
        <div className="col-span-12 mb-6 text-right text-base md:col-span-3 md:mb-0 md:text-3xl">
          <p className="font-bold text-primary">روند کار ما</p>
        </div>
        <div className="col-span-12 font-bold leading-relaxed text-gray-500 md:col-span-9">
          <span className="text-white">
            متناسب و الهام‌گرفته، حرفه‌ای و قابل اعتماد، آژانس ما
          </span>{" "}
          همواره در تلاش است تا تنها بهترین راهکارها را ارائه دهد.
        </div>
      </div>

      {/* Mobile — vertical stacked timeline */}
      <div className="mt-10 flex flex-col gap-2 lg:hidden">
        {workSteps.map((step, index) => (
          <div key={step.title} className="flex flex-col gap-2">
            <MobileWorkStep color={step.color} title={step.title} />
            {index < workSteps.length - 1 ? <MobileArrow /> : null}
          </div>
        ))}
      </div>

      {/* Desktop — zigzag arrow route */}
      <div className="relative hidden border border-transparent lg:block lg:px-32">
        <div className="my-12 grid h-64 grid-cols-5 place-content-center items-center text-center sm:my-20">
          {arrowPatterns.map((pattern, index) => (
            <div key={index} className="grid h-64 max-h-64 grid-rows-2">
              <div className={`row-span-1 ${pattern.top ? "" : "invisible"}`}>
                {pattern.top ? (
                  <Image
                    alt=""
                    className="object-cover rotate-180 scale-x-[-1]"
                    height={64}
                    src="/images/arrowRoute.png"
                    width={320}
                  />
                ) : null}
              </div>
              <div
                className={`relative row-span-1 h-full w-full overflow-visible ${pattern.top ? "invisible" : ""}`}
              >
                {!pattern.top ? (
                  <Image
                    alt=""
                    className="object-cover"
                    height={64}
                    src="/images/arrowRoute.png"
                    width={320}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 container mx-auto">
          <div className="grid h-64 grid-cols-6 items-center justify-center gap-x-8 py-52 font-semibold place-content-center place-items-center">
            {workSteps.map((step) => (
              <div
                key={step.title}
                className="relative flex w-full flex-col items-center justify-center"
              >
                <GradientCircleIcon
                  color={step.color}
                  icon={<Dot className="text-xl" size={24} />}
                  innerSize="8"
                  middleSize="w-15 h-15"
                />
                <div className="absolute top-[50%] flex h-20 w-full flex-row items-center justify-center overflow-hidden rounded-full border bg-white/5 backdrop-blur-sm">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkRoute;
