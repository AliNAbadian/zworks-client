import Radial from "@/components/shared/effects/Radial";
import React from "react";

const RadialBackgrounds = () => {
  return (
    <>
      <Radial
        className="w-full -start-[50%] bottom-0 top-10"
        size="70rem"
        color="rgba(0, 178, 98, 0.35)"
        transparency={60}
      />
      <Radial
        className="w-full start-[20%] top-8/12"
        size="70rem"
        color="rgba(0, 178, 98, 0.35)"
        transparency={90}
      />
    </>
  );
};

export default RadialBackgrounds;
