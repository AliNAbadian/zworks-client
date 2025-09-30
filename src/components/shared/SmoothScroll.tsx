"use client";
import ReactLenis from "lenis/react";
import React, { ReactNode } from "react";

const SmoothScrolling = ({ children }: { children: ReactNode }) => {
  //   const lenis = useLenis(({ scroll }) => {});
  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
