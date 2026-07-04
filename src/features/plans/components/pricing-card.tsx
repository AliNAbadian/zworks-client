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
        "bg-[linear-gradient(145deg,rgba(4,40,39,0.95)_0%,rgba(4,20,46,0.92)_55%,rgba(3,18,28,0.92)_100%)]",
        "shadow-[0_40px_100px_-60px_rgba(0,0,0,0.85)] transition-all duration-500",
        pkg.highlighted
          ? "z-10 border-primary/50 shadow-[0_50px_120px_-50px_rgb(var(--primary-rgb)/0.45)] xl:scale-[1.03]"
          : "border-white/10 hover:border-primary/30 hover:shadow-[0_50px_120px_-50px_rgb(var(--primary-rgb)/0.25)]",
      )}
    >
      {pkg.badge ? (
        <span className="absolute start-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
          {pkg.badge}
        </span>
      ) : null}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/abstractpattern.svg')] bg-cover opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(var(--primary-rgb)/0.2),transparent_55%)]"
      />

      <div className="relative flex flex-1 flex-col gap-6">
        <div className="flex items-start justify-between gap-4 pt-8">
          <div>
            <h3 className="text-xl font-black text-white sm:text-2xl">
              {pkg.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-content-gray">
              {pkg.audience}
            </p>
          </div>
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Icon className="size-6 text-primary" />
          </div>
        </div>

        <div className="border-y border-white/10 py-5">
          <p className="text-sm text-content-gray">{pkg.priceLabel}</p>
          <p className="mt-1 text-3xl font-black text-white sm:text-4xl">
            {pkg.price}
          </p>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-white/80"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={cn(
            "h-12 w-full rounded-2xl font-semibold",
            pkg.highlighted
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-white/10 text-white hover:bg-white/15",
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
