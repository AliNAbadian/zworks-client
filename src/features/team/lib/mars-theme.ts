export const MARS_AVATAR_URL = "/images/hero-mars-logo.svg";

export const MARS_INNER_GRADIENT =
  "linear-gradient(145deg, rgba(240, 136, 74, 0.42) 0%, rgba(107, 40, 8, 0.9) 52%, rgba(10, 4, 2, 0.98) 100%)";

export const MARS_AVATAR_GRADIENT =
  "linear-gradient(135deg, #F0884A 0%, #D25A23 45%, #6B2808 100%)";

export const MARS_BEHIND_GLOW = "rgba(193, 68, 14, 0.55)";

export const MARS_SUNPILLAR_COLORS = [
  "#FFD0B0",
  "#F0884A",
  "#D25A23",
  "#C1440E",
  "#8B3010",
  "#6B2808",
] as const;

export const MARS_NAME_GRADIENT = ["#FFFFFF", "#F0884A"] as const;
export const MARS_ROLE_GRADIENT = ["#FFD0B0", "#D25A23"] as const;

export const MARS_SHINE_SURFACE = {
  base: "#150804",
  mid: "hsl(18, 50%, 32%)",
  peak: "hsl(24, 58%, 42%)",
} as const;

export const MARS_GLARE = {
  highlight: "hsl(32, 90%, 80%)",
  shadow: "hsla(14, 52%, 16%, 0.88)",
} as const;

export const MARS_CARD_THEME = {
  innerGradient: MARS_INNER_GRADIENT,
  behindGlowColor: MARS_BEHIND_GLOW,
  behindGlowSize: "55%",
  sunpillarColors: MARS_SUNPILLAR_COLORS,
  nameGradient: MARS_NAME_GRADIENT,
  roleGradient: MARS_ROLE_GRADIENT,
  shineSurface: MARS_SHINE_SURFACE,
  glareColors: MARS_GLARE,
} as const;
