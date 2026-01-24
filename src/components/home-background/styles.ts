import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const BlurCircle1 = styled.div`
  position: absolute;
  width: 1600px;
  height: 1600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.secondary} 0%,
    transparent 70%,
    transparent 100%
  );
  z-index: 1;
  left: -600px;
  bottom: -500px;

`;

export const BlurCircle2 = styled.div`
  position: absolute;
  width: 1380px;
  height: 1480px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.secondary} -25%,
    transparent 70%,
    transparent 100%
  );
  z-index: 1;
  right: -500px;
  top: -600px;

  @media (max-width: 1024px) {
    right: -900px;
  }
`;
