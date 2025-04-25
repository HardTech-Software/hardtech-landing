import React from "react";
import { Container } from "./styles";
import Icon, { IconName } from "../icon";

interface IconButtonProps {
  src: string;
}

const IconButton = ({ src }: IconButtonProps) => {
  return (
    <Container>
      <Icon name={src as IconName} />
    </Container>
  );
};

export default IconButton;
