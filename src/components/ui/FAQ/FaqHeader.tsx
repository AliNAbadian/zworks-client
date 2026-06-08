import { Input } from "@/components/ui/input";
import { HOME_FAQ_INTRO } from "@/features/home/home-data";
import { Search } from "lucide-react";
import React from "react";

const FaqHeader = () => {
  return (
    <div className=" flex flex-col  items-center gap-y-6">
      <h2 className="text-center font-black text-2xl sm:text-3xl lg:text-5xl">
        سوالات متداول
      </h2>
      <p className="text-content-gray">{HOME_FAQ_INTRO}</p>
      <div className="relative w-full max-w-sm">
        <Input className="text-white" placeholder="جستجو در سوالات" />
        <Search className="pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 opacity-100 select-none" />
      </div>
    </div>
  );
};

export default FaqHeader;
