import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CtaButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center z-10 space-y-4">
      <p>لورنم ایپسوم</p>
      <div className="flex flex-row items-center gap-x-3">
        <Button size={"lg"} className="cursor-pointer">
          شروع کن
        </Button>
        <Button
          size={"lg"}
          className=" border cursor-pointer"
          variant={"ghost"}
        >
          مشاوره رایگان{" "}
        </Button>
      </div>
    </div>
  );
};

export default CtaButtons;
