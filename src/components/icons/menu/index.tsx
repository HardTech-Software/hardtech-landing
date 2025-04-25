import React from "react";

const MenuIcon = ({ color = "#fff", width = "35", height = "24" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.5C0 0.671573 0.671573 0 1.5 0H28.5C29.3284 0 30 0.671573 30 1.5C30 2.32843 29.3284 3 28.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.8235C0 10.9951 0.671573 10.3235 1.5 10.3235H28.5C29.3284 10.3235 30 10.9951 30 11.8235C30 12.6519 29.3284 13.3235 28.5 13.3235H1.5C0.671573 13.3235 0 12.6519 0 11.8235Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 22.147C0 21.3185 0.671573 20.647 1.5 20.647H28.5C29.3284 20.647 30 21.3185 30 22.147C30 22.9754 29.3284 23.647 28.5 23.647H1.5C0.671573 23.647 0 22.9754 0 22.147Z"
        fill={color}
      />
    </svg>
  );
};

export default MenuIcon;
