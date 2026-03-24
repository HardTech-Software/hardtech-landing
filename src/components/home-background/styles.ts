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
    }
    50% {
      transform: translate3d(0, -18px, 0) scale(1.04);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
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
  width: 1240px;
  height: 1240px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.secondary} -25%,
    transparent 70%,
    transparent 100%
  );
  z-index: 1;
  left: -370px;
  bottom: -190px;
  opacity: 0;
  will-change: transform, opacity;
  animation:
    introLeft ${(props) => (props.$variant === "impact" ? "1.5s" : "1.15s")}
      cubic-bezier(0.22, 1, 0.36, 1)
      ${(props) => (props.$variant === "impact" ? "0.04s" : "0.1s")} forwards,
    ambientPulse ${(props) => (props.$variant === "impact" ? "6.8s" : "8.2s")}
      ease-in-out
      ${(props) => (props.$variant === "impact" ? "1.55s" : "1.35s")} infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.9;
  }

  @media (max-width: 1024px) {
    width: 1120px;
    height: 1120px;
    left: -420px;
    bottom: -340px;
  }

  @media (max-width: 768px) {
    width: 1320px;
    height: 1320px;
    left: -560px;
    bottom: -470px;
  }

  @media (max-width: 480px) {
    width: 1300px;
    height: 1300px;
    left: -560px;
    bottom: -450px;
  }
`;

export const BlurCircle2 = styled.div<{ $variant?: HomeIntroVariant }>`
  position: absolute;
  width: 1520px;
  height: 1520px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.secondary} -25%,
    transparent 70%,
    transparent 100%
  );
  z-index: 1;
  right: -450px;
  top: -800px;
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
    width: 1020px;
    height: 1100px;
    right: -680px;
    top: -470px;
  }

  @media (max-width: 768px) {
    width: 1260px;
    height: 1320px;
    right: -920px;
    top: -620px;
  }

  @media (max-width: 480px) {
    width: 1300px;
    height: 1300px;
    right: -900px;
    top: -610px;
  }
`;
