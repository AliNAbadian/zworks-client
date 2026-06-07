import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, TwitterIcon } from "lucide-react";
import React from "react";

const socialLinks = [
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const footerColumns = [
  {
    title: "????",
    links: [{ label: "???? ????", href: "#" }],
  },
  {
    title: "????? ?????",
    links: [
      { label: "???? ?????? ?? ???", href: "#" },
      { label: "???? ?????? ?? ???", href: "#" },
      { label: "???? ?????? ?? ???", href: "#" },
      { label: "???? ?????? ?? ???", href: "#" },
    ],
  },
  {
    title: "????? ?????",
    links: [
      { label: "???? ?????? ?? ???", href: "#" },
      { label: "???? ?????? ?? ???", href: "#" },
      { label: "???? ?????? ?? ???", href: "#" },
      { label: "???? ?????? ?? ???", href: "#" },
    ],
  },
  {
    title: "?????? ??",
    links: [
      { label: "?????? ??", href: "#" },
      { label: "?????? ?? ??", href: "#" },
    ],
  },
  {
    title: "????? ??",
    links: [
      { label: "????? ?", href: "#" },
      { label: "????? ?", href: "#" },
      { label: "????? ?", href: "#" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const Footer = () => {
  return (
    <div
      dir="rtl"
      className="relative container mx-auto overflow-hidden bg-transparent px-4 py-10 text-white shadow-[0_0_120px_rgba(15,15,15,0.8)] sm:px-8 sm:py-12"
    >
      <div className="flex flex-col gap-12 font-iransans">
        <div className="flex flex-col gap-8 xl:flex-row-reverse xl:items-start xl:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    aria-label={item.label}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/30 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
            <p className="text-sm text-white/70">
              ?? ?? ?? ???? ????? ????? ????.
            </p>
          </div>

          <div className="flex items-center gap-4 text-left">
            <Image
              src="/images/logo.png"
              width={160}
              height={56}
              alt="????? ZWORKS"
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid gap-10 text-sm sm:grid-cols-2 lg:grid-cols-4 place-content-around justify-center">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-base font-semibold text-white">
                {column.title}
              </h3>
              <ul className="space-y-2 text-white/60">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>????? ???? ??? ??????? ????? ?? ZWORKS ??????? ????.</p>

          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
