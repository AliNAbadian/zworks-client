"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const CtaButtons = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-center gap-x-3">
        <Button asChild className="h-12 cursor-pointer rounded-2xl px-8 font-semibold" size="lg">
          <Link href="/contact">درخواست مشاوره رایگان</Link>
        </Button>
        <Button
          asChild
          className="h-12 cursor-pointer rounded-2xl border px-8 font-semibold"
          size="lg"
          variant="ghost"
        >
          <Link href="/plans">مشاهده پلن‌های قیمت</Link>
        </Button>
      </div>
    </div>
  );
};

export default CtaButtons;
