"use client";

import Link from "next/link";
import { Headphones, ShieldCheck, Sparkles, Zap } from "lucide-react";

import Radial from "@/components/shared/effects/Radial";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import PricingCard from "@/features/plans/components/pricing-card";
import {
  PLANS_PRICING_INTRO,
  pricingPackages,
} from "@/features/plans/plans-data";
import { cn } from "@/lib/utils";

const TRUST_SIGNALS = [
  {
    icon: Sparkles,
    label: "قیمت شفاف",
    description: "برآورد دقیق پس از مشاوره",
  },
  {
    icon: ShieldCheck,
    label: "قرارداد رسمی",
    description: "فازبندی و تحویل مرحله‌ای",
  },
  {
    icon: Headphones,
    label: "پشتیبانی پس از تحویل",
    description: "همراهی تیم فنی مارس",
  },
] as const;

const PlansPricingSection = () => {
  const featured = pricingPackages.find((pkg) => pkg.highlighted);
  const others = pricingPackages.filter((pkg) => !pkg.highlighted);

  return (
    <section className="relative overflow-hidden" id="pricing">
      <Radial
        className="pointer-events-none absolute inset-s-[8%] top-[10%] z-50"
        color="rgba(193, 68, 14, 0.28)"
        size="42rem"
        transparency={72}
      />
      <Radial
        className="pointer-events-none absolute inset-e-[5%] top-[45%] z-50"
        color="rgba(210, 90, 35, 0.22)"
        size="34rem"
        transparency={78}
      />

      <div className="container relative mx-auto px-4 md:px-6">
        <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Zap className="size-4" aria-hidden="true" />
            ۳ پکیج · مناسب هر مقیاس کسب‌وکار
          </span>

          <h2 className="mt-5 font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
            {PLANS_PRICING_INTRO.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
            {PLANS_PRICING_INTRO.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="mx-auto mb-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:mb-14"
          delay={0.08}
        >
          {TRUST_SIGNALS.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Icon className="size-[18px]" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 text-start">
                <span className="block text-sm font-semibold text-white">
                  {label}
                </span>
                <span className="block text-xs text-content-gray">
                  {description}
                </span>
              </span>
            </div>
          ))}
        </ScrollReveal>

        <div className="relative mx-auto max-w-6xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12%] top-8 hidden h-40 rounded-full bg-[radial-gradient(circle,rgb(var(--primary-rgb)/0.16),transparent_70%)] xl:block"
          />

          <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-3 xl:gap-8">
            {featured ? (
              <ScrollReveal
                className="order-first xl:order-2"
                delay={0.12}
                variant="scaleIn"
              >
                <div className="relative h-full">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-1 rounded-[32px] bg-gradient-to-b from-primary/35 via-primary/10 to-transparent opacity-80 blur-sm"
                  />
                  <PricingCard pkg={featured} />
                </div>
              </ScrollReveal>
            ) : null}

            {others.map((pkg, index) => (
              <ScrollReveal
                key={pkg.id}
                className={cn(index === 0 ? "xl:order-1" : "xl:order-3")}
                delay={0.08 + index * 0.1}
                variant="fadeUp"
              >
                <PricingCard pkg={pkg} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mx-auto mt-10 max-w-2xl text-center lg:mt-14" delay={0.2}>
          <p className="text-sm leading-relaxed text-content-gray sm:text-base">
            هنوز مطمئن نیستید کدام راهکار مناسب شماست؟{" "}
            <Link
              className="cursor-pointer font-semibold text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              href="#comparison"
            >
              جدول مقایسه وردپرس و React
            </Link>{" "}
            را ببینید یا برای مشاوره رایگان{" "}
            <Link
              className="cursor-pointer font-semibold text-primary underline-offset-4 transition-colors duration-200 hover:text-primary/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              href="/contact"
            >
              با ما تماس بگیرید
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlansPricingSection;
