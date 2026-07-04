import { Check, Code2, Layout, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { PricingPackage } from "@/features/plans/plans-model";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  pkg: PricingPackage;
};

const variantIcons = {
  wordpress: Layout,
  professional: Sparkles,
  custom: Code2,
} as const;

const PricingCard = ({ pkg }: PricingCardProps) => {
  const Icon = variantIcons[pkg.variant ?? "wordpress"];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 sm:p-8",
        "bg-[#12100e] shadow-[0_32px_90px_-55px_rgba(0,0,0,0.95)]",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-1.5 motion-reduce:hover:translate-y-0",
        pkg.highlighted
          ? "z-10 border-primary/45 shadow-[0_40px_100px_-40px_rgb(var(--primary-rgb)/0.5)] ring-1 ring-primary/20"
          : "border-white/10 hover:border-primary/30 hover:shadow-[0_40px_100px_-45px_rgb(var(--primary-rgb)/0.28)]",
      )}
    >
      {pkg.highlighted ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      ) : null}

      {pkg.badge ? (
        <span className="absolute start-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-[0_8px_24px_-8px_rgb(var(--primary-rgb)/0.8)]">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {pkg.badge}
        </span>
      ) : null}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/abstractpattern.svg')] bg-cover opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(var(--primary-rgb)/0.22),transparent_58%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,rgb(var(--primary-rgb)/0.06)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex flex-1 flex-col gap-6">
        <div className="flex items-start justify-between gap-4 pt-8">
          <div className="min-w-0">
            <h3 className="text-xl font-black text-white transition-colors duration-300 group-hover:text-primary sm:text-2xl">
              {pkg.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-content-gray">
              {pkg.audience}
            </p>
          </div>
          <div
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300",
              pkg.highlighted
                ? "border-primary/30 bg-primary/15 text-primary"
                : "border-white/10 bg-white/5 text-primary group-hover:border-primary/25 group-hover:bg-primary/10",
            )}
          >
            <Icon className="size-6" strokeWidth={1.75} />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-5 backdrop-blur-sm">
          <p className="text-sm text-content-gray">{pkg.priceLabel}</p>
          <p className="mt-1 bg-gradient-to-l from-white to-white/80 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
            {pkg.price}
          </p>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-white/80"
            >
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                <Check className="size-3 text-primary" strokeWidth={2.5} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={cn(
            "h-12 w-full cursor-pointer rounded-2xl font-semibold transition-all duration-300",
            pkg.highlighted
              ? "bg-primary text-primary-foreground shadow-[0_12px_40px_-12px_rgb(var(--primary-rgb)/0.75)] hover:bg-primary/90"
              : "border border-white/10 bg-white/10 text-white hover:border-primary/30 hover:bg-primary/15 hover:text-white",
          )}
          size="lg"
        >
          <Link href={pkg.ctaHref}>{pkg.ctaLabel}</Link>
        </Button>
      </div>
    </article>
  );
};

export default PricingCard;
