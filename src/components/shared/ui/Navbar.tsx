"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowLeft, ChevronDown, Phone } from "lucide-react";

import { ActionButtons } from "./ActionButtons";
import {
  isNavbarLinkActive,
  isNavbarServiceActive,
  isNavbarServiceLinkActive,
  NAVBAR_MEGA_MENU,
  NAVBAR_STUDIO,
  navbarLinks,
  navbarServiceCategories,
} from "@/features/layout/lib/navbar-data";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  reduceMotion: boolean;
  onNavigate?: () => void;
};

const NavLink = ({
  href,
  label,
  isActive,
  reduceMotion,
  onNavigate,
}: NavLinkProps) => (
  <Link
    href={href}
    onClick={onNavigate}
    className={cn(
      "relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
      isActive ? "text-white" : "text-white/60 hover:text-white",
    )}
  >
    {isActive && !reduceMotion ? (
      <motion.span
        layoutId="navbar-active-pill"
        className="absolute inset-0 rounded-full border border-white/10 bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
      />
    ) : isActive ? (
      <span className="absolute inset-0 rounded-full border border-white/10 bg-white/10" />
    ) : null}
    <span className="relative z-10">{label}</span>
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const openMenu = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 180);
  }, []);

  const isServicesActive = isNavbarServiceActive(pathname);
  const FeaturedIcon = NAVBAR_MEGA_MENU.featured.icon;

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-4 z-[9999] hidden justify-center px-4 lg:flex"
    >
      <motion.nav
        ref={navRef}
        aria-label="ناوبری اصلی"
        animate={
          reduceMotion
            ? undefined
            : {
                y: scrolled ? -1 : 0,
              }
        }
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "pointer-events-auto relative w-full max-w-6xl overflow-hidden rounded-[2rem] border font-iransans backdrop-blur-2xl transition-[box-shadow,border-color,background-color] duration-300 motion-reduce:transition-none",
          scrolled
            ? "border-primary/35 bg-[#0f0d0b]/88 shadow-[0_20px_60px_-20px_rgb(var(--primary-rgb)/0.5)]"
            : "border-white/10 bg-[#141210]/55 shadow-[0_28px_90px_-36px_rgba(0,0,0,0.88)]",
        )}
        onMouseLeave={closeMenu}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
        >
          <div className="absolute inset-0 bg-[url('/images/abstractpattern.svg')] bg-cover opacity-[0.04]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgb(var(--primary-rgb)/0.24),transparent_52%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_100%,rgb(var(--primary-rgb)/0.12),transparent_45%)]" />
          <div
            className={cn(
              "absolute inset-0 rounded-[2rem] opacity-60 transition-opacity duration-500",
              scrolled ? "opacity-100" : "opacity-0",
            )}
            style={{
              background:
                "conic-gradient(from 210deg at 50% 50%, rgb(var(--primary-rgb)/0.35), transparent 25%, rgb(var(--primary-rgb)/0.15), transparent 50%, rgb(var(--primary-rgb)/0.25), transparent 75%)",
            }}
          />
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
        </div>

        {!reduceMotion ? (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-right bg-gradient-to-l from-primary via-primary/70 to-transparent"
            style={{ scaleX: progressScale }}
          />
        ) : (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-primary/40"
          />
        )}

        <div
          className={cn(
            "relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-3 transition-[padding] duration-300",
            isMenuOpen ? "py-3" : scrolled ? "py-2.5" : "py-3",
          )}
        >
          <div className="flex min-w-0 items-center gap-3 justify-self-start">
            <Link
              aria-label="صفحه اصلی مارس"
              className="group relative shrink-0 cursor-pointer rounded-2xl p-1 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 motion-reduce:hover:scale-100"
              href="/"
            >
              <Image
                alt="لوگوی مارس — آژانس طراحی و توسعه وب"
                className="h-9 w-auto object-contain"
                height={36}
                priority
                src="/images/logoName.png"
                width={160}
              />
            </Link>

            <div className="hidden min-w-0 flex-col gap-0.5 xl:flex">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                </span>
                {NAVBAR_STUDIO.badge}
              </span>
              <span className="truncate text-[11px] text-white/40">
                {NAVBAR_STUDIO.tagline}
              </span>
            </div>
          </div>

          <div className="hidden justify-self-center lg:block">
            <div className="flex items-center gap-0.5 rounded-full border border-white/8 bg-black/25 p-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-md">
              <div className="relative" onMouseEnter={openMenu} onFocus={openMenu}>
                <button
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                  className={cn(
                    "relative inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                    isServicesActive || isMenuOpen
                      ? "text-white"
                      : "text-white/60 hover:text-white",
                  )}
                  onClick={() => setIsMenuOpen((open) => !open)}
                  type="button"
                >
                  {(isServicesActive || isMenuOpen) && !reduceMotion ? (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full border border-white/10 bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : isServicesActive || isMenuOpen ? (
                    <span className="absolute inset-0 rounded-full border border-white/10 bg-white/10" />
                  ) : null}
                  <span className="relative z-10">خدمات</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "relative z-10 size-4 transition-transform duration-300",
                      isMenuOpen && "rotate-180",
                    )}
                  />
                </button>
              </div>

              {navbarLinks.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isActive={isNavbarLinkActive(pathname, item)}
                  label={item.label}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 shrink-0 justify-self-end">
            <Link className="cursor-pointer" href="/contact">
              <ActionButtons icon={<Phone />} title="شروع گفتگو" />
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              animate={{ opacity: 1, height: "auto" }}
              className="relative z-10 overflow-hidden border-t border-white/8"
              exit={{ opacity: 0, height: 0 }}
              initial={
                reduceMotion
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative px-4 pb-4 pt-3 sm:px-5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--primary-rgb)/0.14),transparent_62%)]"
                />

                <div className="relative z-10 mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {NAVBAR_MEGA_MENU.eyebrow}
                    </p>
                    <h2 className="mt-1 text-lg font-black text-white sm:text-xl">
                      {NAVBAR_MEGA_MENU.title}
                    </h2>
                    <p className="mt-1 max-w-xl text-sm text-white/50">
                      {NAVBAR_MEGA_MENU.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_17rem]">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {navbarServiceCategories.map((category, categoryIndex) => (
                      <motion.div
                        key={category.id}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-[22px] border border-white/8 bg-white/[0.03] p-3"
                        initial={
                          reduceMotion ? false : { opacity: 0, y: 12 }
                        }
                        transition={{
                          delay: reduceMotion ? 0 : categoryIndex * 0.05,
                          duration: 0.24,
                        }}
                      >
                        <div className="mb-3 border-b border-white/8 pb-3">
                          <p className="text-sm font-bold text-white">
                            {category.label}
                          </p>
                          <p className="mt-0.5 text-xs text-white/40">
                            {category.tagline}
                          </p>
                        </div>

                        <ul className="space-y-1">
                          {category.links.map((service) => {
                            const Icon = service.icon;
                            const isActive = isNavbarServiceLinkActive(
                              pathname,
                              service.href,
                            );

                            return (
                              <li key={service.href}>
                                <Link
                                  className={cn(
                                    "group flex cursor-pointer items-start gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                                    isActive &&
                                      "border-primary/25 bg-primary/10",
                                  )}
                                  href={service.href}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <span
                                    className={cn(
                                      "flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/15 group-hover:text-primary",
                                      isActive &&
                                        "border-primary/35 bg-primary/15 text-primary",
                                    )}
                                  >
                                    <Icon className="size-4" strokeWidth={1.75} />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-sm font-semibold text-white transition-colors group-hover:text-primary">
                                      {service.label}
                                    </span>
                                    <span className="mt-0.5 block text-xs leading-relaxed text-white/40">
                                      {service.description}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="relative overflow-hidden rounded-[22px] border border-primary/25 bg-[linear-gradient(155deg,rgba(193,68,14,0.22)_0%,rgba(20,18,16,0.95)_55%,rgba(10,10,10,0.98)_100%)] p-5"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.15,
                      duration: 0.24,
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(var(--primary-rgb)/0.35),transparent_58%)]"
                    />
                    <div className="relative flex h-full flex-col gap-4">
                      <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-primary">
                        <FeaturedIcon className="size-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-base font-black text-white">
                          {NAVBAR_MEGA_MENU.featured.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                          {NAVBAR_MEGA_MENU.featured.description}
                        </p>
                      </div>
                      <Link
                        className="group mt-auto inline-flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-[border-color,background-color,gap] duration-200 hover:border-primary/35 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        href={NAVBAR_MEGA_MENU.featured.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{NAVBAR_MEGA_MENU.featured.cta}</span>
                        <ArrowLeft
                          aria-hidden="true"
                          className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                        />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
