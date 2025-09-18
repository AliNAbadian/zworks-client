import Image from "next/image";
import React from "react";
const HeroBg = () => {
  return (
    <div className="w-full flex flex-row overflow-hidden h-screen absolute top-0 start-0 -z-10">
      <img
        src="/images/mainvec.svg"
        alt="mainvec"
        className="object-cover w-[50%] scale-x-[-1]"
      />
      <img
        src="/images/mainvec.svg"
        alt="mainvec"
        className="object-cover w-[50%] me-auto"
      />
    </div>
  );
};

export default HeroBg;
