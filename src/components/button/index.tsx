import React from "react";
import { ButtonContainer } from "./styles";
import Typography from "../typography";

interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ title, variant = "primary", onClick }: ButtonProps) => {
  return (
    <ButtonContainer $variant={variant} onClick={onClick}>
      <Typography variant="title">{title}</Typography>
    </ButtonContainer>
  );
};

export default Button;
