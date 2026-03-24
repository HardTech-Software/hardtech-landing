import React from "react";

const VisionIcon = ({ width = "158", height = "205" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 158 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_3668_6953)">
        <ellipse
          cx="72.7752"
          cy="183.233"
          rx="66.7752"
          ry="15.5672"
          fill="#1A1A1A"
          fillOpacity="0.5"
        />
      </g>
      <g filter="url(#filter1_d_3668_6953)">
        <path
          d="M64.8287 69.2777L66.5983 38.3102L33.0006 3.80078L20.6216 56.0035L38.3011 77.2388C33.4513 86.1857 28.6016 95.1326 23.7518 104.079C33.9104 117.253 44.0607 130.419 54.2193 143.593C55.1041 155.681 55.9889 167.777 56.8737 179.865C65.7135 180.75 74.5532 181.636 83.393 182.521L89.378 143.593L119.645 116.167L113.46 90.5046L149.704 71.0403V24.9525L103.727 45.3859L96.6568 77.2388L81.6234 70.1632L64.8287 69.2777Z"
          fill="#2441FF"
        />
        <path
          d="M120.522 111.305C120.522 112.023 120.497 112.733 120.422 113.427C119.353 125.874 108.919 135.631 96.2065 135.631C83.4936 135.631 72.1079 124.955 71.8992 111.698L69.8124 111.614C67.976 123.226 57.9343 132.089 45.8057 132.089C33.6771 132.089 22.6838 122.34 21.607 109.901C21.5486 109.2 21.5068 108.49 21.5068 107.763C21.5068 105.766 21.7489 103.82 22.2164 101.957L69.779 103.653L73.0929 103.77L119.813 105.441C120.28 107.32 120.53 109.283 120.53 111.297L120.522 111.305Z"
          fill="black"
        />
        <path
          d="M58.2375 116.018C58.4198 113.182 52.1715 110.471 44.2815 109.963C36.3916 109.456 29.8477 111.343 29.6655 114.179C29.4832 117.015 35.7315 119.726 43.6215 120.234C51.5114 120.742 58.0553 118.854 58.2375 116.018Z"
          stroke="white"
          strokeMiterlimit="10"
        />
        <path
          d="M50.6794 115.581C50.8756 112.528 48.1741 109.869 44.6455 109.642C41.1168 109.415 38.0973 111.705 37.9011 114.758C37.7049 117.811 40.4064 120.469 43.935 120.696C47.4637 120.924 50.4832 118.633 50.6794 115.581Z"
          fill="white"
        />
        <path
          d="M110.955 119.409C111.138 116.573 104.889 113.862 96.9993 113.354C89.1093 112.846 82.5655 114.734 82.3833 117.57C82.201 120.406 88.4493 123.117 96.3393 123.625C104.229 124.132 110.773 122.245 110.955 119.409Z"
          stroke="white"
          strokeMiterlimit="10"
        />
        <path
          d="M103.388 118.973C103.585 115.921 100.883 113.262 97.3544 113.035C93.8258 112.808 90.8063 115.098 90.6101 118.151C90.4139 121.203 93.1154 123.862 96.644 124.089C100.173 124.316 103.192 122.026 103.388 118.973Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_3668_6953"
          x="0"
          y="161.666"
          width="145.55"
          height="43.1348"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3"
            result="effect1_foregroundBlur_3668_6953"
          />
        </filter>
        <filter
          id="filter1_d_3668_6953"
          x="12.8216"
          y="0.000781059"
          width="144.682"
          height="194.321"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3.9" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3668_6953"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3668_6953"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default VisionIcon;
