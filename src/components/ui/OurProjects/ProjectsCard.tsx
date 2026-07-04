import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import { cn } from "@/lib/utils";
import type { IProjectsCardProps } from "@/types/components";

const PATTERN_KEYS = ["tl", "tr", "bl", "br"] as const;

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
  const metaChip = (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
      {categoryLabel ? (
        <span className="text-white/60">{categoryLabel}</span>
      ) : null}
      <span className="text-white">{category}</span>
    </span>
  );

  const ctaClasses =
    "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/15";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(4,40,39,0.95)0%,rgba(4,20,46,0.92)55%,rgba(3,18,28,0.92)100%)] p-8 text-white shadow-[0_45px_120px_-60px_rgba(0,0,0,0.85)]",
        "transition-shadow duration-500 hover:shadow-[0_55px_140px_-60px_rgb(var(--primary-rgb)/0.45)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgb(var(--primary-rgb)/0.45),transparent_55%)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08)0%,transparent_55%)] opacity-40"
      />

      <div className="relative flex flex-col gap-8">
        <div className="relative h-48 overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
          {coverImage ? (
            <Image
              alt={coverAlt ?? title}
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              src={coverImage}
            />
          ) : (
            <div className="relative flex h-48 items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.45)_0%,transparent_75%)]" />
              <div className="relative grid h-24 w-24 grid-cols-2 gap-3 opacity-70">
                {PATTERN_KEYS.map((key) => (
                  <span
                    key={key}
                    className="rounded-2xl bg-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)]"
                  />
                ))}
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--primary-rgb)/0.22),transparent_65%)] opacity-70" />
        </div>

        <div className="flex flex-col gap-6 text-sm text-white/70">
          <div className="flex flex-wrap items-center gap-3">{metaChip}</div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-black tracking-tight text-white">
              {title}
            </h3>
            <p className="leading-relaxed text-white/60">{description}</p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            {href ? (
              <Link href={href} className={ctaClasses} onClick={onCtaClick}>
                <ArrowLeft className="h-4 w-4" />
                <span>{ctaLabel}</span>
              </Link>
            ) : (
              <button className={ctaClasses} onClick={onCtaClick} type="button">
                <ArrowLeft className="h-4 w-4" />
                <span>{ctaLabel}</span>
              </button>
            )}

            <div className="text-start sm:text-end">
              <span className="block text-xs uppercase tracking-[0.2em] text-white/40">
                {dateLabel}
              </span>
              <span className="text-base font-medium text-white">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
