"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ChevronDown,
  Cloud,
  Code2,
  Headphones,
  Megaphone,
  Palette,
  Phone,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { ActionButtons } from "./ActionButtons";
import { cn } from "@/lib/utils";

const SERVICE_LINKS = [
  {
    href: "/services/ui-ux",
    label: "طراحی UI/UX",
    description: "تحقیق کاربر، وایرفریم و سیستم طراحی",
    icon: Palette,
  },
  {
    href: "/development",
    label: "توسعه وب",
    description: "React، Next.js و پلتفرم‌های اختصاصی",
    icon: Code2,
  },
  {
    href: "/services/mobile-apps",
    label: "اپلیکیشن موبایل",
    description: "Android و iOS با تجربه کاربری روان",
    icon: Smartphone,
  },
  {
    href: "/services/branding",
    label: "برندسازی",
    description: "هویت بصری و زبان طراحی برند",
    icon: Sparkles,
  },
  {
    href: "/services/seo",
    label: "سئو و بهینه‌سازی",
    description: "رشد ترافیک ارگانیک و فنی",
    icon: Search,
  },
  {
    href: "/services/marketing",
    label: "دیجیتال مارکتینگ",
    description: "استراتژی محتوا و کمپین‌های داده‌محور",
    icon: Megaphone,
  },
  {
    href: "/services/support",
    label: "پشتیبانی",
    description: "نگهداری، مانیتورینگ و به‌روزرسانی",
    icon: Headphones,
  },
  {
    href: "/services/cloud",
    label: "زیرساخت ابری",
    description: "DevOps، استقرار و مقیاس‌پذیری",
    icon: Cloud,
  },
] as const;

const NAV_LINKS = [
  { href: "/#", label: "پروژه‌ها" },
  { href: "/team", label: "تیم تخصصی" },
  { href: "/plans", label: "پلن‌ها" },
] as const;

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  reduceMotion: boolean;
};

const NavLink = ({ href, label, isActive, reduceMotion }: NavLinkProps) => (
  <Link
    href={href}
    className={cn(
      "relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
      isActive ? "text-white" : "text-white/65 hover:text-white",
    )}
  >
    {isActive && !reduceMotion ? (
      <motion.span
        layoutId="navbar-active-pill"
        className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
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
  const [isShowDropMenu, setIsShowDropMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsShowDropMenu(true);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setIsShowDropMenu(false);
    }, 220);
  };

  const isServicesActive = pathname.startsWith("/services") || pathname === "/development";

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-4 z-[9999] hidden justify-center px-4 lg:flex"
    >
      <motion.nav
        aria-label="ناوبری اصلی"
        animate={
          reduceMotion
            ? undefined
            : {
                y: scrolled ? -2 : 0,
              }
        }
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "pointer-events-auto relative flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border font-iransans backdrop-blur-2xl transition-[height,box-shadow,border-color,background-color] duration-300 motion-reduce:transition-none",
          scrolled
            ? "h-[3.25rem] border-primary/30 bg-[#100e0c]/82 px-3 shadow-[0_16px_50px_-18px_rgb(var(--primary-rgb)/0.42)]"
            : "h-14 border-white/12 bg-[#141210]/58 px-4 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.82)]",
        )}
        onMouseLeave={closeMenu}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <div className="absolute inset-0 bg-[url('/images/abstractpattern.svg')] bg-cover opacity-[0.05]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgb(var(--primary-rgb)/0.22),transparent_55%)]" />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        </div>

        <Link
          aria-label="صفحه اصلی مارس"
          className="relative z-10 shrink-0 cursor-pointer rounded-full p-1 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 motion-reduce:hover:scale-100"
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

        <div className="relative z-10 hidden items-center gap-1 rounded-full border border-white/8 bg-black/20 px-1.5 py-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={openMenu}
            onFocus={openMenu}
          >
            <button
              aria-expanded={isShowDropMenu}
              aria-haspopup="true"
              className={cn(
                "relative inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                isServicesActive || isShowDropMenu
                  ? "text-white"
                  : "text-white/65 hover:text-white",
              )}
              type="button"
            >
              {(isServicesActive || isShowDropMenu) && !reduceMotion ? (
                <motion.span
                  layoutId="navbar-active-pill"
                  className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : isServicesActive || isShowDropMenu ? (
                <span className="absolute inset-0 rounded-full border border-white/10 bg-white/10" />
              ) : null}
              <span className="relative z-10">خدمات ما</span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "relative z-10 size-4 transition-transform duration-300",
                  isShowDropMenu && "rotate-180",
                )}
              />
            </button>
          </div>

          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              isActive={
                item.href === "/#"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)
              }
              label={item.label}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>

        <div className="relative z-10 shrink-0">
          <Link className="cursor-pointer" href="/contact">
            <ActionButtons icon={<Phone />} title="ارتباط با ما" />
          </Link>
        </div>

        <AnimatePresence>
          {isShowDropMenu ? (
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute inset-x-2 top-[calc(100%+0.65rem)] z-[10000] overflow-hidden rounded-[28px] border border-white/12 bg-[#12100e]/88 p-5 shadow-[0_28px_80px_-24px_rgba(0,0,0,0.85)] backdrop-blur-3xl"
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: -10, scale: 0.98 }
              }
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(var(--primary-rgb)/0.18),transparent_58%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.05)_0%,transparent_52%)]"
              />

              <div className="relative z-10 mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Studio Services
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    از طراحی محصول تا توسعه و رشد دیجیتال
                  </p>
                </div>
                <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:inline-flex">
                  Product Design First
                </span>
              </div>

              <ul className="relative z-10 grid grid-cols-2 gap-2">
                {SERVICE_LINKS.map((service, index) => {
                  const Icon = service.icon;
                  const isActive =
                    pathname === service.href ||
                    pathname.startsWith(`${service.href}/`);

                  return (
                    <motion.li
                      key={service.href}
                      animate={{ opacity: 1, y: 0 }}
                      initial={
                        reduceMotion ? false : { opacity: 0, y: 10 }
                      }
                      transition={{
                        delay: reduceMotion ? 0 : index * 0.035,
                        duration: 0.22,
                      }}
                    >
                      <Link
                        className={cn(
                          "group flex cursor-pointer gap-3 rounded-2xl border border-transparent p-3 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                          isActive && "border-primary/25 bg-primary/10",
                        )}
                        href={service.href}
                        onClick={() => setIsShowDropMenu(false)}
                      >
                        <span
                          className={cn(
                            "flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/15 group-hover:text-primary",
                            isActive && "border-primary/35 bg-primary/15 text-primary",
                          )}
                        >
                          <Icon className="size-[18px]" strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-white transition-colors group-hover:text-primary">
                            {service.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-white/45">
                            {service.description}
                          </span>
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
