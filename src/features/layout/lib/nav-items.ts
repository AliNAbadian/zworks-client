import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Home,
  Layers,
  Phone,
  Users,
} from "lucide-react";

export type MobileNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  matchPaths?: string[];
};

export const mobileBottomNavItems: MobileNavItem[] = [
  {
    label: "خانه",
    href: "/",
    icon: Home,
    matchPaths: ["/"],
  },
  {
    label: "توسعه",
    href: "/development",
    icon: Code2,
    matchPaths: ["/development"],
  },
  {
    label: "تیم",
    href: "/team",
    icon: Users,
    matchPaths: ["/team"],
  },
  {
    label: "پلن‌ها",
    href: "/plans",
    icon: Layers,
    matchPaths: ["/plans"],
  },
  {
    label: "تماس",
    href: "/contact",
    icon: Phone,
    matchPaths: ["/contact"],
  },
];

export const isNavItemActive = (
  pathname: string,
  item: MobileNavItem,
): boolean => {
  if (item.matchPaths?.includes(pathname)) return true;
  if (item.href !== "/" && pathname.startsWith(item.href)) return true;
  return false;
};
