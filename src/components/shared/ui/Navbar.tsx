"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { ActionButtons } from "./ActionButtons";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isShowDropMenu, setIsShowDropMenu] = useState<boolean>(true);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsShowDropMenu(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsShowDropMenu(false);
    }, 300); // delay in ms
  };

  return (
    <div
      className="fixed max-h-[9vh] font-iransans container inset-0 mx-auto  border-y top-5 border-primary bg-white/1 backdrop-blur-md rounded-xs flex flex-row items-center justify-between px-4"
      style={{ zIndex: 9999 }}
    >
      {/* Logo */}
      <Image
        alt="zworks"
        src={"/images/logoName.png"}
        width={280}
        height={96}
      />

      {/* Menu */}
      <div className="flex flex-row items-center justify-around w-1/4 ">
        {/* خدمات ما */}
        <div
          className=""
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            variant={"link"}
            className="text-white underline-offset-8 cursor-pointer"
          >
            خدمات ما
          </Button>

          {isShowDropMenu && (
            <div
              className="
      fixed top-[110%] right-0 left-0 w-[82vw] mx-auto z-[10000]
      rounded-2xl bg-white/30 backdrop-blur-2xl shadow-xl p-6
      animate-fade-slide
    "
            >
              <div className="grid grid-cols-2 gap-6">
                {/* First column */}
                <ul className="flex flex-col text-gray-900">
                  <li className="px-4 py-2 hover:bg-white/40 rounded-lg cursor-pointer">
                    <Link href="/services/web-development">توسعه وب</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white/40 rounded-lg cursor-pointer">
                    <Link href="/services/mobile-apps">اپلیکیشن موبایل</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white/40 rounded-lg cursor-pointer">
                    <Link href="/services/ui-ux">طراحی UI/UX</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white/40 rounded-lg cursor-pointer">
                    <Link href="/services/seo">سئو و بازاریابی</Link>
                  </li>
                </ul>

                {/* Second column */}
                <ul className="flex flex-col text-gray-900">
                  <li className="px-4 py-2 hover:bg-white/40 rounded-lg cursor-pointer">
                    <Link href="/services/branding">برندسازی</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white/40 rounded-lg cursor-pointer">
                    <Link href="/services/marketing">دیجیتال مارکتینگ</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white/40 rounded-lg cursor-pointer">
                    <Link href="/services/support">پشتیبانی</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white/40 rounded-lg cursor-pointer">
                    <Link href="/services/cloud">زیرساخت ابری</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Other menu items */}
        <Button
          variant={"link"}
          className="text-white underline-offset-8 cursor-pointer"
        >
          <Link href={"#"}>پروژه ها</Link>
        </Button>
        <Button
          variant={"link"}
          className="text-white underline-offset-8 cursor-pointer"
        >
          <Link href={"#"}>تیم تخصصی</Link>
        </Button>
        <Button
          variant={"link"}
          className="text-white underline-offset-8 cursor-pointer"
        >
          <Link href={"/"}>پلن ها</Link>
        </Button>
      </div>

      {/* Contact button */}
      <ActionButtons icon={<Phone />} title="ارتباط با ما" />
    </div>
  );
};

export default Navbar;
