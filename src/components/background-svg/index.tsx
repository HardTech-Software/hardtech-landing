import React from "react";

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
          <stop offset="10%" stopColor="#253392" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path d="M0 450 L720 0 L1440 450 Z" fill="url(#gradient)" />
    </svg>
  );
};

export default BackgroundSVG;
