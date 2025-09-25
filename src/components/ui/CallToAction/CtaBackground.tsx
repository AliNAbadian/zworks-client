import React from "react";

// CtaBackground.tsx
// CtaBackground.tsx
const CtaBackground = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full flex flex-row">
      <img
        src="/images/mainvec.svg"
        alt="mainvec"
        className="object-cover scale-x-[-1] w-full"
      />
      <img
        src="/images/mainvec.svg"
        alt="mainvec"
        className="object-cover w-full"
      />
    </div>
  );
};

export default CtaBackground;
