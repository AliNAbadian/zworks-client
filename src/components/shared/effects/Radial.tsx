import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import type { IRadialEffectProps } from "@/types/components";

const DEFAULT_SIZE = "36rem";
const DEFAULT_COLOR = "rgba(59, 130, 246, 0.35)";
const DEFAULT_TRANSPARENCY = 70;

const Radial = ({
  className,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  transparency = DEFAULT_TRANSPARENCY,
}: IRadialEffectProps) => {
  const style: CSSProperties = {
    width: size,
    height: size,
    background: `radial-gradient(circle, ${color} 0%, transparent ${transparency}%)`,
  };

  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 block blur-3xl opacity-80",
        className,
      )}
      style={style}
    />
  );
};

export default Radial;
