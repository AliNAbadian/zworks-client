"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  isNavItemActive,
  mobileBottomNavItems,
} from "@/features/layout/lib/nav-items";
import { cn } from "@/lib/utils";

const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="ناوبری موبایل"
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-primary/25 bg-background/90 font-iransans backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-lg items-stretch justify-around px-2">
        {mobileBottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = isNavItemActive(pathname, item);
          const isContact = item.href === "/contact";

          return (
            <Link
              key={item.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 transition-colors",
                isActive && "text-primary",
                !isActive && "text-white/60 hover:text-white",
              )}
              href={item.href}
            >
              <span
                className={cn(
                  "flex size-9 items-center justify-center rounded-full transition-colors",
                  isContact &&
                    "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,178,98,0.45)]",
                  !isContact && isActive && "bg-primary/15",
                )}
              >
                <Icon className="size-[18px]" strokeWidth={isActive ? 2.5 : 2} />
              </span>
              <span className="truncate text-[10px] font-medium leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
