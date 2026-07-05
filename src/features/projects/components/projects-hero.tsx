"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import HeroBg from "@/components/ui/HeroSection/HeroBg";
import { PROJECTS_HERO } from "@/features/projects/projects-data";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

const ProjectsHero = () => {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % PROJECTS_HERO.rotatingWords.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const activeWord = PROJECTS_HERO.rotatingWords[wordIndex];

  return (
    <section className="relative mx-auto min-h-[calc(100vh-3.5rem)] w-full overflow-hidden lg:min-h-screen">
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-8 px-4 py-20 text-center font-iransans sm:px-6 sm:py-28 md:px-6 lg:min-h-screen lg:gap-10 lg:py-32">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {PROJECTS_HERO.eyebrow}
        </span>

        <h1 className="max-w-5xl font-iransans text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
          {PROJECTS_HERO.headlinePrefix}{" "}
          <span
            aria-live="polite"
            className="relative inline-block min-w-[6ch] text-primary"
          >
            {reduceMotion ? (
              PROJECTS_HERO.rotatingWords[0]
            ) : (
              <motion.span
                key={activeWord}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {activeWord}
              </motion.span>
            )}
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-content-gray sm:text-lg">
          {PROJECTS_HERO.description}
        </p>

        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button
            asChild
            className="h-12 cursor-pointer rounded-2xl px-8 font-semibold"
            size="lg"
          >
            <Link href={PROJECTS_HERO.primaryCta.href}>
              {PROJECTS_HERO.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            className="h-12 cursor-pointer rounded-2xl border-white/20 bg-white/5 px-8 font-semibold backdrop-blur-sm hover:bg-white/10"
            size="lg"
            variant="outline"
          >
            <Link href={PROJECTS_HERO.secondaryCta.href}>
              {PROJECTS_HERO.secondaryCta.label}
            </Link>
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {PROJECTS_HERO.rotatingWords.map((word, index) => (
            <button
              key={word}
              aria-label={`نمایش ${word}`}
              className={cn(
                "cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200",
                index === wordIndex
                  ? "border-primary/50 bg-primary/15 text-primary"
                  : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80",
              )}
              onClick={() => setWordIndex(index)}
              type="button"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      <HeroBg />
    </section>
  );
};

export default ProjectsHero;
