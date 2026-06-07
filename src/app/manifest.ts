import type { MetadataRoute } from "next";

import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo/site-seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — طراحی و توسعه وب`,
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#00b262",
    lang: "fa",
    dir: "rtl",
    scope: SITE_URL,
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
