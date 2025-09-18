import { Stars } from "lucide-react";
import React from "react";

const PositiveHeader = () => {
  return (
    <div className=" flex flex-col  items-center gap-y-6">
      <h2 className="font-black text-5xl">
        ایده تا اوج با طراحی و نوآوری دیجیتال
      </h2>
      <h3 className="font-bold text-content-gray text-4xl">
        توسعه وب، اپلیکیشن و تجربه کاربری
      </h3>
      <p className="text-content-gray">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
    </div>
  );
};

export default PositiveHeader;
