"use client";

import { useId } from "react";

import { Input } from "@/components/ui/input";
import { HOME_FAQ_INTRO } from "@/features/home/home-data";
import { Search } from "lucide-react";

type FaqHeaderProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

const FaqHeader = ({ query, onQueryChange }: FaqHeaderProps) => {
  const searchId = useId();

  return (
    <div className="flex flex-col items-center gap-y-6">
      <h2 className="text-center font-black text-2xl text-balance sm:text-3xl lg:text-5xl">
        سوالات متداول
      </h2>
      <p className="text-center text-content-gray">{HOME_FAQ_INTRO}</p>
      <div className="relative w-full max-w-sm">
        <label className="sr-only" htmlFor={searchId}>
          جستجو در سوالات
        </label>
        <Input
          className="text-white"
          id={searchId}
          name="faq-search"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="جستجو در سوالات…"
          type="search"
          value={query}
        />
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 opacity-100 select-none"
        />
      </div>
    </div>
  );
};

export default FaqHeader;
