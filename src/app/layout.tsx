import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import localFont from "next/font/local";
import SiteChrome from "@/features/layout/components/site-chrome";
import SmoothScrolling from "@/components/shared/SmoothScroll";
import { JsonLd } from "@/components/shared/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/json-ld-schemas";
import { rootMetadata } from "@/lib/seo/site-seo";

export const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSansXFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-ExtraBlack.woff2",
      weight: "950",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXFaNum-Heavy.woff2",
      weight: "960",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${iranSans.variable} relative antialiased pt-14 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pt-0 lg:pb-0`}
      >
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            {children}
            <SiteChrome />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
