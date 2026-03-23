"use client";

import React from "react";
import { theme } from "@/helpers/theme";
import { motion } from "framer-motion";

interface BackgroundSVGProps {
  animateOnMount?: boolean;
  animationVariant?: "subtle" | "impact";
}

const BackgroundSVG = ({
  animateOnMount = false,
  animationVariant = "subtle",
}: BackgroundSVGProps) => {
  const isImpact = animationVariant === "impact";

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 300"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#1427A4" />
          <stop offset="60%" stopColor={theme.black} />
          <stop offset="100%" stopColor={theme.black} />
        </linearGradient>
      </defs>
      {animateOnMount ? (
        <motion.path
          d="M0 320 L720 0 L1440 320 Z"
          fill="url(#gradient)"
          initial={{
            opacity: 0,
            y: isImpact ? 240 : 180,
            scaleY: isImpact ? 1.06 : 1.03,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scaleY: 1,
            transition: {
              duration: isImpact ? 1.3 : 1,
              delay: isImpact ? 0.18 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          style={{ transformOrigin: "50% 100%" }}
        />
      ) : (
        <path d="M0 320 L720 0 L1440 320 Z" fill="url(#gradient)" />
      )}
    </svg>
  );
};

export default BackgroundSVG;
