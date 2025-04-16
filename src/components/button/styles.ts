import { theme } from "@/helpers/theme";
import styled from "styled-components";

interface ButtonContainerProps {
  $variant?: "primary" | "secondary";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: none;
  height: 44px;
  padding: 9px 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: ${({ $variant }) =>
    $variant === "secondary" ? theme.primary : theme.secondary};

  ${({ $variant }) =>
    $variant === "secondary" &&
    `
      box-shadow: 2px 2px 7px rgba(0,0,0, 0.5);
  `}

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "secondary" ? "#dd62d5" : "#1c32c5"};
  }
`;
