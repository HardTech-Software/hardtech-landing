"use client";

import { breakpoints } from "@/utils/constants/breakpoints";
import { useEffect, useState } from "react";

type ResponsiveBreakpoint =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "wide";

interface UseIsMobileResult {
  width: number;
  currentBreakpoint: ResponsiveBreakpoint;
  isMobile: boolean;
}

const getCurrentBreakpoint = (width: number): ResponsiveBreakpoint => {
  if (width <= breakpoints.xxs) return "xxs";
  if (width <= breakpoints.xs) return "xs";
  if (width <= breakpoints.sm) return "sm";
  if (width <= breakpoints.md) return "md";
  if (width <= breakpoints.lg) return "lg";
  if (width <= breakpoints.xl) return "xl";
  if (width <= breakpoints.xxl) return "xxl";

  return "wide";
};

const useIsMobile = (
  breakpoint: number = breakpoints.sm,
): UseIsMobileResult => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateViewport = () => {
      setWidth(window.innerWidth);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return {
    width,
    currentBreakpoint: getCurrentBreakpoint(width),
    isMobile: width <= breakpoint,
  };
};

export default useIsMobile;
