export const breakpoints = {
  xxs: 430,
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1250,
  xxl: 1350,
  minMd: 768,
  minLg: 1025,
  minXl: 1251,
  minXxl: 1400,
} as const;

export const media = {
  max: {
    xxs: `(max-width: ${breakpoints.xxs}px)`,
    xs: `(max-width: ${breakpoints.xs}px)`,
    sm: `(max-width: ${breakpoints.sm}px)`,
    md: `(max-width: ${breakpoints.md}px)`,
    lg: `(max-width: ${breakpoints.lg}px)`,
    xl: `(max-width: ${breakpoints.xl}px)`,
    xxl: `(max-width: ${breakpoints.xxl}px)`,
  },
  min: {
    md: `(min-width: ${breakpoints.minMd}px)`,
    lg: `(min-width: ${breakpoints.minLg}px)`,
    xl: `(min-width: ${breakpoints.minXl}px)`,
    xxl: `(min-width: ${breakpoints.minXxl}px)`,
  },
} as const;
