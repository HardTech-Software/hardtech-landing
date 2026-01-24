import React from "react";

type BrandingIconProps = {
  width?: string | number;
  height?: string | number;
};

const BrandingIcon2: React.FC<BrandingIconProps> = ({
  width = "104",
  height = "131",
}) => {
  return (
    <svg width="38" height="107" viewBox="0 0 38 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_3168_4835)">
<path d="M35.2874 14.2327L19.6416 10.8848L3.44102 86.5949L19.0868 89.9428L35.2874 14.2327Z" fill="#FE71F4"/>
<path d="M30.6763 13.2456L24.2528 11.8711L8.05222 87.5813L14.4757 88.9558L30.6763 13.2456Z" fill="#E04ED7"/>
<path d="M19.0871 89.9417L10.7437 100.614L7.8229 104.35L6.6867 99.7458L3.44129 86.5938L19.0871 89.9417Z" fill="#FFC7FC"/>
<path d="M35.8319 11.6878L20.186 8.33984L19.6416 10.884L35.2874 14.2319L35.8319 11.6878Z" fill="#FFC7FC"/>
<path d="M23.6591 0.361296L35.9292 2.98685C36.8614 3.18633 37.4608 4.08107 37.2674 4.98459L35.833 11.6883L20.1861 8.34016L21.6205 1.63644C21.8139 0.732924 22.7269 0.161816 23.6591 0.361296Z" fill="#FF9CFA"/>
<path d="M10.7437 100.614L7.82285 104.35L6.68665 99.7461L10.7437 100.614Z" fill="#FE71F4"/>
<path d="M31.2207 10.7007L24.7972 9.32617L24.2528 11.8703L30.6763 13.2448L31.2207 10.7007Z" fill="#FF91F9"/>
</g>
<defs>
<clipPath id="clip0_3168_4835">
<rect width="16" height="105" fill="white" transform="translate(21.9707) rotate(12.0781)"/>
</clipPath>
</defs>
</svg>

  );
};

export default BrandingIcon2;