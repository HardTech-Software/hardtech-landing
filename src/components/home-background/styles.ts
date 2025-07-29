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
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.primary} 0%,
    transparent 60%,
    transparent 100%
  );

  z-index: 1;
  left: -600px;
  bottom: -300px;
`;

export const BlurCircle2 = styled.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.secondary} 0%,
    transparent 60%,
    transparent 100%
  );

  z-index: 1;
  right: -600px;
  top: -600px;
`;
export const BlurCircle3 = styled.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.primary} 0%,
    transparent 60%,
    transparent 100%
  );

  z-index: 1;
  left: -800px;
  top: -300px;
  @media (max-width: 760px) {
    display: none;
  }
`;
