import React from "react";

const ChevronLeftIcon = ({ color = "#fff", width = "12", height = "28" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2L2 14L10 26"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
