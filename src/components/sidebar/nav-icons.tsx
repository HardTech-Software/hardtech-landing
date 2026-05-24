import React from "react";

interface NavIconProps {
  color?: string;
  size?: number;
}

const NavIcon = ({
  size = 22,
  children,
}: NavIconProps & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const HomeNavIcon = ({ color = "currentColor", size = 22 }: NavIconProps) => (
  <NavIcon color={color} size={size}>
    <path
      d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </NavIcon>
);

export const ServicesNavIcon = ({ color = "currentColor", size = 22 }: NavIconProps) => (
  <NavIcon color={color} size={size}>
    <rect
      x="3"
      y="3"
      width="7"
      height="7"
      rx="1.5"
      stroke={color}
      strokeWidth="1.5"
    />
    <rect
      x="14"
      y="3"
      width="7"
      height="7"
      rx="1.5"
      stroke={color}
      strokeWidth="1.5"
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      rx="1.5"
      stroke={color}
      strokeWidth="1.5"
    />
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      rx="1.5"
      stroke={color}
      strokeWidth="1.5"
    />
  </NavIcon>
);

export const ProjectsNavIcon = ({ color = "currentColor", size = 22 }: NavIconProps) => (
  <NavIcon color={color} size={size}>
    <path
      d="M4 7C4 5.89543 4.89543 5 6 5H10.5858C11.1162 5 11.625 5.21071 12 5.58579L13.4142 7H18C19.1046 7 20 7.89543 20 9V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V7Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 12H15M9 16H13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </NavIcon>
);

export const MissionNavIcon = ({ color = "currentColor", size = 22 }: NavIconProps) => (
  <NavIcon color={color} size={size}>
    <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" />
    <path
      d="M12 4V2M12 22V20M20 12H22M2 12H4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </NavIcon>
);

export const QuoteNavIcon = ({ color = "currentColor", size = 22 }: NavIconProps) => (
  <NavIcon color={color} size={size}>
    <path
      d="M7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 9H15M9 13H13M9 17H11"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </NavIcon>
);

export const ContactNavIcon = ({ color = "currentColor", size = 18 }: NavIconProps) => (
  <NavIcon color={color} size={size}>
    <path
      d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V15C20 16.1046 19.1046 17 18 17H9L4 20V6Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M8 9H16M8 12H13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </NavIcon>
);

export const navIconMap: Record<
  string,
  React.ComponentType<NavIconProps>
> = {
  "home-section": HomeNavIcon,
  "services-section": ServicesNavIcon,
  "projects-section": ProjectsNavIcon,
  "mission-section": MissionNavIcon,
  "quote-section": QuoteNavIcon,
};
