"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

type ViewportMargin =
  | `${number}px`
  | `${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px ${number}px`;

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  fullWidth?: boolean;
  viewportMargin?: ViewportMargin;
}

export const FadeInSection = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
  fullWidth = false,
  viewportMargin = "-100px",
}: FadeInSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: viewportMargin });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1], // cubic-bezier matching header
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={fullWidth ? { width: "100%" } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
