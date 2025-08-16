import { IconProps } from "@/utils/icon-props";
import React from "react";
import {
  AppStoreIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GooglePlayIcon,
  InstragramIcon,
  LogoHomeIcon,
  LogoIcon,
  MenuIcon,
  PatitasLogo,
  ZeventLogo,
  AppIcon,
  WebIcon,
  VisionIcon,
  MisionIcon,
  ContactLogo,
} from "../icons";

const icons = (props?: IconProps) => ({
  menu: <MenuIcon {...props} />,
  logo: <LogoIcon {...props} />,
  instagram: <InstragramIcon {...props} />,
  "app-store": <AppStoreIcon {...props} />,
  "google-play": <GooglePlayIcon {...props} />,
  "home-logo": <LogoHomeIcon {...props} />,
  "chevron-left": <ChevronLeftIcon {...props} />,
  "chevron-right": <ChevronRightIcon {...props} />,
  "app-icon": <AppIcon {...props} />,
  "web-icon": <WebIcon {...props} />,
  "vision-icon": <VisionIcon {...props} />,
  "mision-icon": <MisionIcon {...props} />,
  "patitas-logo": <PatitasLogo {...props} />,
  "zevent-logo": <ZeventLogo {...props} />,
  "contact-logo": <ContactLogo {...props} />,
});

export type IconName = keyof ReturnType<typeof icons>;

interface IconComponentProps extends IconProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = icons({ ...props })[name];

  if (!IconComponent) return <></>;

  return <>{IconComponent}</>;
};

export default Icon;
