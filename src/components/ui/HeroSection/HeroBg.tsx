import Image from "next/image";
import React from "react";
const HeroBg = () => {
  return (
    <div className="absolute start-0 top-0 -z-10 flex h-full min-h-screen w-full flex-row overflow-hidden opacity-60 sm:opacity-100">
      <img
        alt=""
        className="w-1/2 scale-x-[-1] object-cover"
        src="/images/mainvec.svg"
      />
      <img
        alt=""
        className="me-auto w-1/2 object-cover"
        src="/images/mainvec.svg"
      />
    </div>
  );
};

export default HeroBg;
