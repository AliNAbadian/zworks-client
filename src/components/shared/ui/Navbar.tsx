"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { ActionButtons } from "./ActionButtons";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isShowDropMenu, setIsShowDropMenu] = useState<boolean>(false);
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
      className="fixed start-0 end-0 top-5 z-[9999] mx-auto hidden h-16 max-w-[calc(100%-2rem)] font-iransans container items-center justify-between rounded-xs border-y border-primary bg-white/1 px-4 backdrop-blur-md lg:flex"
    >
      {/* Logo */}
      <Image
        alt="لوگوی زی‌ورکس — شرکت طراحی و توسعه وب"
        className="h-10 w-auto object-contain"
        height={40}
        src={"/images/logoName.png"}
        width={180}
      />

      {/* Menu */}
      <div className="flex w-1/2 flex-row items-center justify-around">
        {/* خدمات ما */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <Button
            variant={"link"}
            className="text-white underline-offset-8 cursor-pointer"
          >
            خدمات ما
          </Button>

          <AnimatePresence>
            {isShowDropMenu && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="fixed start-0 end-0 top-[110%] z-[10000] mx-auto w-[82vw] overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]/70 p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,178,98,0.12),transparent_55%)]" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06)_0%,transparent_50%)]" aria-hidden="true" />

                <div className="relative z-10 grid grid-cols-2 gap-6">
                  {/* First column */}
                  <ul className="flex flex-col text-white/80">
                    <li className="cursor-pointer rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-white">
                      <Link href="/services/web-development">توسعه وب</Link>
                    </li>
                    <li className="cursor-pointer rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-white">
                      <Link href="/services/mobile-apps">اپلیکیشن موبایل</Link>
                    </li>
                    <li className="cursor-pointer rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-white">
                      <Link href="/services/ui-ux">طراحی UI/UX</Link>
                    </li>
                    <li className="cursor-pointer rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-white">
                      <Link href="/services/seo">سئو و بازاریابی</Link>
                    </li>
                  </ul>

                  {/* Second column */}
                  <ul className="flex flex-col text-white/80">
                    <li className="cursor-pointer rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-white">
                      <Link href="/services/branding">برندسازی</Link>
                    </li>
                    <li className="cursor-pointer rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-white">
                      <Link href="/services/marketing">دیجیتال مارکتینگ</Link>
                    </li>
                    <li className="cursor-pointer rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-white">
                      <Link href="/services/support">پشتیبانی</Link>
                    </li>
                    <li className="cursor-pointer rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-white">
                      <Link href="/services/cloud">زیرساخت ابری</Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
          <Link href={"/team"}>تیم تخصصی</Link>
        </Button>
        <Button
          variant={"link"}
          className="text-white underline-offset-8 cursor-pointer"
        >
          <Link href={"/plans"}>پلن ها</Link>
        </Button>
      </div>

      {/* Contact button */}
      <Link href="/contact">
        <ActionButtons icon={<Phone />} title="ارتباط با ما" />
      </Link>
    </div>
  );
};

export default Navbar;
