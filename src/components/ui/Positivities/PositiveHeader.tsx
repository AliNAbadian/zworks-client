import { HOME_POSITIVITIES_INTRO } from "@/features/home/home-data";
import React from "react";

const PositiveHeader = () => {
  return (
    <div className=" flex flex-col  items-center gap-y-6">
      <h2 className="px-4 text-center font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        ایده تا اوج با طراحی و نوآوری دیجیتال
      </h2>
      <h3 className="px-4 text-center font-bold text-xl text-content-gray sm:text-2xl md:text-3xl lg:text-4xl">
        توسعه وب، اپلیکیشن و تجربه کاربری
      </h3>
      <p className="text-content-gray">
        {HOME_POSITIVITIES_INTRO}
      </p>
    </div>
  );
};

export default PositiveHeader;
