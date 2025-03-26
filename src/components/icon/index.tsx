import { IconProps } from "@/utils/icon-props";
import React from "react";
import { AppStoreIcon, InstragramIcon, LogoIcon, MenuIcon } from "../icons";
import GooglePlayIcon from "../icons/google-play";
import LogoHomeIcon from "../icons/logo-home";

const icons = (props?: IconProps) => ({
  menu: <MenuIcon {...props} />,
  logo: <LogoIcon {...props} />,
  instagram: <InstragramIcon {...props} />,
  "app-store": <AppStoreIcon {...props} />,
  "google-play": <GooglePlayIcon {...props} />,
  "logo-home": <LogoHomeIcon {...props} />,
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
