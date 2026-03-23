import styled, { keyframes } from "styled-components";
import { theme } from "@/helpers/theme";

const driftLeft = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.75;
  }
  50% {
    transform: translate3d(30px, -22px, 0) scale(1.08);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.8;
  }
`;

const driftRight = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate3d(-34px, 18px, 0) scale(1.06);
    opacity: 0.98;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.72;
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(220%);
  }
`;

const pulseRing = keyframes`
  0% {
    transform: scale(0.94);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.35;
  }
  100% {
    transform: scale(0.94);
    opacity: 0.15;
  }
`;

const blink = keyframes`
  0%, 20% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

export const Screen = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(
      circle at 18% 82%,
      rgba(36, 65, 255, 0.42),
      transparent 34%
    ),
    radial-gradient(
      circle at 82% 16%,
      rgba(36, 65, 255, 0.42),
      transparent 30%
    ),
    linear-gradient(180deg, #050505 0%, ${theme.black} 55%, #080d38 100%);
`;

export const GlowLeft = styled.div`
  position: absolute;
  width: 55rem;
  height: 55rem;
  left: -18rem;
  bottom: -20rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(36, 65, 255, 0.65) 0%,
    rgba(36, 65, 255, 0) 70%
  );
  filter: blur(28px);
  animation: ${driftLeft} 7.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const GlowRight = styled.div`
  position: absolute;
  width: 48rem;
  height: 48rem;
  right: -14rem;
  top: -16rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(36, 65, 255, 0.6) 0%,
    rgba(36, 65, 255, 0) 72%
  );
  filter: blur(24px);
  animation: ${driftRight} 8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: min(34rem, calc(100vw - 2rem));
  padding: 2.4rem 1.5rem 1.8rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
  backdrop-filter: blur(12px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  text-align: center;
`;

export const LogoShell = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: -0.9rem;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(254, 113, 244, 0.22),
      rgba(36, 65, 255, 0.16),
      transparent 72%
    );
    animation: ${pulseRing} 2.8s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  svg {
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 0 24px rgba(36, 65, 255, 0.35));
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: ${theme.white};
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  margin: 0.7rem auto 1.6rem;
  max-width: 24rem;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.98rem;
  line-height: 1.5;
`;

export const Highlight = styled.span`
  color: ${theme.primary};
`;

export const ProgressTrack = styled.div`
  position: relative;
  width: 100%;
  height: 0.42rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
`;

export const ProgressFill = styled.div<{ $progress: number }>`
  position: relative;
  width: ${(props) => props.$progress}%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    ${theme.secondary} 0%,
    ${theme.primary} 72%,
    #ff9ef4 100%
  );
  transition: width 0.18s ease-out;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.65),
      transparent
    );
    animation: ${shimmer} 1.6s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

export const FooterRow = styled.div`
  margin-top: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.86rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const LoadingDots = styled.span`
  display: inline-flex;
  gap: 0.22rem;

  span {
    width: 0.32rem;
    height: 0.32rem;
    border-radius: 50%;
    background: ${theme.primary};
    animation: ${blink} 1.2s infinite ease-in-out;
  }

  span:nth-child(2) {
    animation-delay: 0.18s;
  }

  span:nth-child(3) {
    animation-delay: 0.36s;
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
      opacity: 1;
    }
  }
`;

export const Percentage = styled.span`
  color: ${theme.white};
  font-weight: 700;
`;
