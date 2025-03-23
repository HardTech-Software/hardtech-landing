import React from "react";
import { ButtonContainer } from "./styles";
import Typography from "../typography";

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <ButtonContainer>
      <Typography variant="title">{title}</Typography>
    </ButtonContainer>
  );
};

export default Button;
