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
} from "../icons";

const icons = (props?: IconProps) => ({
  menu: <MenuIcon {...props} />,
  logo: <LogoIcon {...props} />,
  instagram: <InstragramIcon {...props} />,
  "app-store": <AppStoreIcon {...props} />,
  "google-play": <GooglePlayIcon {...props} />,
  "logo-home": <LogoHomeIcon {...props} />,
  "chevron-left": <ChevronLeftIcon {...props} />,
  "chevron-right": <ChevronRightIcon {...props} />,
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
