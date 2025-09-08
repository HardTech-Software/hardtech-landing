import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-self: start;
  width: 100%;
  gap: 60px;
  height: 75px;
  padding: 0 clamp(1rem, 10vw, 11rem);

  @media (max-width: 1350px) {
    height: 90px;
  }

  @media (max-width: 760px) {
    height: 70px;
  }
`;

export const LogoContainer = styled.div`
  background: linear-gradient(
    to right,
    ${theme.background} 0%,
    ${theme.background} 70%,
    transparent 100%
  );
  padding: 20px 35px 10px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
