import React from "react";

const HeroContent = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen col-span-6 font-iransans">
      <div className="w-full absolute left-0 right-0 flex flex-col items-center gap-y-10">
        <h1 className="text-7xl font-black text-primary">
          <span className="text-gray-400">خدمات</span> توسعه وب
        </h1>{" "}
        <h2 className="text-gray-500 w-[1200px] z-10 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده
        </h2>
      </div>
    </div>
  );
};

export default HeroContent;
