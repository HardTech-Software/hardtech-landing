import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    to right,
    transparent 0%,
    ${theme.primary} 20%,
    ${theme.primary} 80%,
    transparent 100%
  );
  padding: 0 60px;
  text-align: center;

  @media (max-width: 1350px) {
    padding: 0 20px;
  }

  @media (max-width: 450px) {
    padding: 0 25px;
  }
`;
