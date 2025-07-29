import React from "react";
import { theme } from "@/helpers/theme";

const BackgroundSVG = () => {
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
          <stop offset="10%" stopColor="#1427A4" />
          <stop offset="100%" stopColor={theme.background} />
        </linearGradient>
      </defs>
      <path d="M0 300 L720 0 L1440 300 Z" fill="url(#gradient)" />
    </svg>
  );
};

export default BackgroundSVG;
