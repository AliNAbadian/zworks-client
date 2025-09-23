import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const FaqHeader = () => {
  return (
    <div className=" flex flex-col  items-center gap-y-6">
      <h2 className="font-black text-5xl">سوالات متداول</h2>
      <p className="text-content-gray">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
      <div className="relative w-3/12">
        <Input className="text-white" placeholder="جستجو" prefix="asdas" />
        <Search className="pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 opacity-100 select-none" />
      </div>
    </div>
  );
};

export default FaqHeader;
