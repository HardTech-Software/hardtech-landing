import React from "react";
import { ButtonContainer } from "./styles";
import Typography from "../typography";
import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ title, variant = "primary", onClick }: ButtonProps) => {
  return (
    <ButtonContainer
      as={motion.button}
      $variant={variant}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "secondary"
            ? "0 10px 25px rgba(233, 30, 99, 0.4)"
            : "0 10px 25px rgba(255, 255, 255, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <Typography
        variant="button"
        color={variant === "secondary" ? "#1d1d1d" : "white"}
      >
        {title}
      </Typography>
    </ButtonContainer>
  );
};

export default Button;
