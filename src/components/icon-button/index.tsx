import React from "react";
import { Container } from "./styles";
import Icon, { IconName } from "../icon";

interface IconButtonProps {
  iconName: IconName;
  href?: string;
}

const IconButton = ({ iconName, href }: IconButtonProps) => {
  if (href && href !== "#") {
    return (
      <Container as="a" href={href} target="_blank" rel="noopener noreferrer">
        <Icon name={iconName} />
      </Container>
    );
  }

  return (
    <Container>
      <Icon name={iconName} />
    </Container>
  );
};

export default IconButton;
