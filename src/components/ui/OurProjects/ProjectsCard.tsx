"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import TiltedCard from "@/components/TiltedCard";
import { cn } from "@/lib/utils";
import type { IProjectsCardProps } from "@/types/components";

const PATTERN_KEYS = ["tl", "tr", "bl", "br"] as const;

const cardSurfaceClasses =
  "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#12100e] text-white shadow-[0_32px_90px_-55px_rgba(0,0,0,0.95)] transition-[box-shadow,border-color] duration-300 ease-out hover:border-primary/45 hover:shadow-[0_48px_120px_-45px_rgb(var(--primary-rgb)/0.5)] active:scale-[0.985] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ProjectsCard: FC<IProjectsCardProps> = ({
  title,
  description,
  category,
  date,
  href,
  ctaLabel = "مشاهده جزئیات پروژه",
  coverImage,
  coverAlt,
  className,
  categoryLabel = "Category",
  dateLabel = "Date",
  onCtaClick,
}) => {
  const cardContent = (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/abstractpattern.svg')] bg-cover opacity-[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(var(--primary-rgb)/0.28),transparent_58%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,rgb(var(--primary-rgb)/0.08)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="relative aspect-[16/11] min-h-[11rem] overflow-hidden border-b border-white/10 bg-white/[0.03]">
          {coverImage ? (
            <Image
              alt={coverAlt ?? title}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              src={coverImage}
            />
          ) : (
            <div className="relative flex h-full items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(var(--primary-rgb)/0.35),transparent_55%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.55)_0%,transparent_72%)]" />
              <div className="relative grid h-24 w-24 grid-cols-2 gap-3 opacity-80">
                {PATTERN_KEYS.map((key) => (
                  <span
                    key={key}
                    className="rounded-2xl bg-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)] transition-colors duration-300 group-hover:bg-primary/25"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.72)_100%)]" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
            <span className="inline-flex max-w-[75%] items-center gap-2 rounded-full border border-primary/35 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgb(var(--primary-rgb)/0.9)]"
              />
              {categoryLabel ? (
                <span className="text-white/55">{categoryLabel}</span>
              ) : null}
              <span>{category}</span>
            </span>

            <div className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-end backdrop-blur-md">
              <span className="block text-[10px] uppercase tracking-[0.18em] text-white/45">
                {dateLabel}
              </span>
              <span className="text-sm font-semibold text-white">{date}</span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle,rgb(var(--primary-rgb)/0.18),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-100">
            <span className="inline-flex translate-y-3 items-center gap-2 rounded-full border border-primary/50 bg-primary/90 px-5 py-2.5 text-sm font-bold text-primary-foreground opacity-0 shadow-[0_12px_40px_-12px_rgb(var(--primary-rgb)/0.85)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">
              <ArrowLeft className="size-4" aria-hidden="true" />
              {ctaLabel}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-black leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-primary sm:text-2xl">
              {title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-white/60">
              {description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-[gap,color] duration-300 group-hover:gap-3 group-hover:text-primary">
              <span>{ctaLabel}</span>
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:group-hover:translate-x-0"
              />
            </span>
            <span
              aria-hidden="true"
              className="hidden size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/15 group-hover:text-primary sm:inline-flex"
            >
              <ArrowLeft className="size-4" />
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-100"
      />
    </>
  );

  const tiltedCard = (
    <TiltedCard
      containerHeight="100%"
      containerWidth="100%"
      imageHeight="100%"
      imageWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.02}
      showMobileWarning={false}
      showTooltip={false}
    >
      {href ? (
        <Link
          className={cn(cardSurfaceClasses, "h-full")}
          href={href}
          onClick={onCtaClick}
          aria-label={`${ctaLabel}: ${title}`}
        >
          {cardContent}
        </Link>
      ) : (
        <article className={cn(cardSurfaceClasses, "h-full")}>
          {cardContent}
          {onCtaClick ? (
            <button
              className="absolute inset-0 cursor-pointer opacity-0"
              onClick={onCtaClick}
              type="button"
              aria-label={`${ctaLabel}: ${title}`}
            />
          ) : null}
        </article>
      )}
    </TiltedCard>
  );

  return (
    <div className={cn("h-full", className)}>
      {tiltedCard}
    </div>
  );
};

export default ProjectsCard;
