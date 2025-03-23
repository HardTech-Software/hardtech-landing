import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  background-color: ${theme.secondary};
  padding: 9px 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c32c5;
  }
`;
