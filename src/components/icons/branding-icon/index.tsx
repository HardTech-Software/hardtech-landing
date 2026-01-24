import React from "react";

type BrandingIconProps = {
  width?: string | number;
  height?: string | number;
};

const BrandingIcon: React.FC<BrandingIconProps> = ({}) => {
  return (
    <svg
      width="17"
      height="106"
      viewBox="0 0 17 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3168_4852)">
        <path
          d="M16.0357 11.1309L0.0357666 11.1822L0.284364 88.6059L16.2843 88.5545L16.0357 11.1309Z"
          fill="#2441FF"
        />
        <path
          d="M11.3201 11.1455L4.75122 11.1666L4.99982 88.5903L11.5687 88.5692L11.3201 11.1455Z"
          fill="#1729A1"
        />
        <path
          d="M16.2842 88.5527L10.3978 100.753L8.33707 105.025L6.24894 100.767L0.284302 88.6041L16.2842 88.5527Z"
          fill="#BFC8FF"
        />
        <path
          d="M16.0273 8.5293L0.0273438 8.58067L0.0356976 11.1824L16.0356 11.131L16.0273 8.5293Z"
          fill="#BFC8FF"
        />
        <path
          d="M1.72666 0.0458296L14.2744 0.00554051C15.2277 0.0024795 16.0034 0.749508 16.0064 1.67347L16.0284 8.52892L0.0273853 8.5803L0.00537332 1.72485C0.00240658 0.800885 0.773329 0.0488906 1.72666 0.0458296Z"
          fill="#6378FF"
        />
        <path
          d="M10.3979 100.755L8.33715 105.026L6.24902 100.768L10.3979 100.755Z"
          fill="#2441FF"
        />
        <path
          d="M11.3118 8.54395L4.74292 8.56505L4.75127 11.1668L11.3201 11.1457L11.3118 8.54395Z"
          fill="#9CAAFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_3168_4852">
          <rect
            width="16"
            height="105"
            fill="white"
            transform="translate(0 0.0513737) rotate(-0.183969)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BrandingIcon;
