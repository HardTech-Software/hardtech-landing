import React from "react";
import { Container } from "./styles";
import Icon, { IconName } from "../icon";

interface IconButtonProps {
  url: string;
}

const IconButton = ({ url }: IconButtonProps) => {
  return (
    <Container>
      <Icon name={url as IconName} />
    </Container>
  );
};

export default IconButton;
