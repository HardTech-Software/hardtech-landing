import { theme } from "@/helpers/theme";
import styled from "styled-components";

type HomeIntroVariant = "subtle" | "impact";

const introLeft = `
  @keyframes introLeft {
    0% {
      opacity: 0;
      transform: translate3d(-80px, 40px, 0) scale(0.82);
      filter: blur(0px);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0px);
    }
  }
`;

const introRight = `
  @keyframes introRight {
    0% {
      opacity: 0;
      transform: translate3d(80px, -40px, 0) scale(0.82);
      filter: blur(0px);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0px);
    }
  }
`;

const ambientPulse = `
  @keyframes ambientPulse {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
      opacity: 0.86;
    }
    50% {
      transform: translate3d(0, -18px, 0) scale(1.04);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
      opacity: 0.9;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ${introLeft}
  ${introRight}
  ${ambientPulse}
`;

export const BlurCircle1 = styled.div<{ $variant?: HomeIntroVariant }>`
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
  opacity: 0;
  will-change: transform, opacity;
  animation:
    introLeft ${(props) => (props.$variant === "impact" ? "1.5s" : "1.15s")}
      cubic-bezier(0.22, 1, 0.36, 1)
      ${(props) => (props.$variant === "impact" ? "0.04s" : "0.1s")} forwards,
    ambientPulse ${(props) => (props.$variant === "impact" ? "6.2s" : "8.2s")}
      ease-in-out
      ${(props) => (props.$variant === "impact" ? "1.55s" : "1.35s")} infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.9;
  }
`;

export const BlurCircle2 = styled.div<{ $variant?: HomeIntroVariant }>`
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
  opacity: 0;
  will-change: transform, opacity;
  animation:
    introRight ${(props) => (props.$variant === "impact" ? "1.6s" : "1.25s")}
      cubic-bezier(0.22, 1, 0.36, 1)
      ${(props) => (props.$variant === "impact" ? "0.12s" : "0.2s")} forwards,
    ambientPulse ${(props) => (props.$variant === "impact" ? "6.8s" : "9s")}
      ease-in-out
      ${(props) => (props.$variant === "impact" ? "1.75s" : "1.55s")} infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.9;
  }

  @media (max-width: 1024px) {
    right: -900px;
  }
`;
