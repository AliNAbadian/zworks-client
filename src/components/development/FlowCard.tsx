import { cn } from "@/lib/utils";

interface FlowCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

const FlowCard = ({ step, title, description, className }: FlowCardProps) => {
  return (
    <article
      dir="rtl"
      className={cn(
        "relative flex min-h-[340px]  flex-col items-center  justify-between  overflow-hidden rounded-4xl  border border-white/8 bg-[#14100d] p-20 text-center text-white shadow-[0_32px_90px_rgba(20,10,5,0.55)] transition-transform duration-500 ease-out hover:-translate-y-1 hover:border-primary/40",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle,rgba(193,68,14,0.35)_0%,rgba(20,16,13,0)_65%)]" />
      <span className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(circle,rgba(139,48,16,0.25)_1px,transparent_1px)] [background-size:24px_24px]" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 opacity-90 [background:linear-gradient(180deg,rgba(20,16,13,0)_0%,rgba(20,16,13,0.85)_100%)]" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-between gap-y-20">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <span className="absolute h-[55%] w-[55%] rounded-full border border-white/10" />
          <span className="absolute h-[85%] w-[85%] rounded-full border border-white/15" />
          <span
            className="absolute h-[125%] w-[125%] rounded-full border"
            style={{ borderColor: "rgba(193, 68, 14, 0.35)" }}
          />
          <span
            className="absolute h-[160%] w-[160%] rounded-full border"
            style={{ borderColor: "rgba(193, 68, 14, 0.15)" }}
          />
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(193,68,14,0.16)_0%,rgba(193,68,14,0)_70%)]" />
          <span className="relative text-4xl font-black tracking-[0.18em] text-white">
            {step}
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="font-iransans text-xl font-bold leading-tight text-white">
            {title}
          </h3>
          <p className="font-iransans text-sm leading-7 text-white/70">
            {description}
          </p>
        </div>
      </div>
      <img
        src={"/images/abstractbg.svg"}
        alt="abstract"
        className="absolute top-0 left-0 "
      />
    </article>
  );
};

export default FlowCard;
