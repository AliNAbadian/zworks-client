import React from "react";
import LinkButton from "../shared/ui/LinkButton";
import { ArrowBigLeftDash } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="container mx-auto my-16 border h-[55vh] rounded-4xl p-10 font-iransans overflow-hidden relative space-y-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">پورتوفلیو خدمات توسعه وب</h1>
        <p className="text-gray-500">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        </p>
        <div className="grid grid-cols-2 h-[30vh] gap-4 ">
          <div className="border border-gray-800 rounded-4xl  relative overflow-hidden">
            <Image src={"/images/mockup1.jpg"} fill alt="mockup zworks" />
          </div>
          <div className="border rounded-4xl  relative overflow-hidden">
            <Image src={"/images/mockup2.jpg"} fill alt="mockup zworks" />
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 left-0 bg-gradient-to-b from-0% to-background h-[40vh] flex flex-col justify-end py-12">
        <div className="w-1/6 bg-black mx-auto rounded-full self-end">
          <LinkButton
            href="/projects"
            linkIcon={<ArrowBigLeftDash />}
            linkText="مشاهده پروژه ها"
            className="!w-1/4 "
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
