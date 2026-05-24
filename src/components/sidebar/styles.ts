import styled, { css } from "styled-components";
import { theme } from "@/helpers/theme";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 24px 18px 28px;
  border-bottom-left-radius: 28px;
  border-top-left-radius: 12px;
  max-height: calc(100vh - 7.2rem - 12px);
  overflow-y: auto;
  overflow-x: hidden;

  background: linear-gradient(
    168deg,
    rgba(22, 22, 22, 0.88) 0%,
    rgba(28, 40, 120, 0.78) 38%,
    rgba(36, 65, 255, 0.58) 100%
  );
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);

  box-shadow:
    -10px 6px 32px rgba(0, 0, 0, 0.32),
    0 0 0 1px rgba(255, 255, 255, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-bottom-left-radius: 28px;
    border-top-left-radius: 12px;
    pointer-events: none;
    box-shadow:
      inset 1px 0 0 rgba(36, 65, 255, 0.22),
      -3px 0 16px rgba(36, 65, 255, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.09),
      transparent
    );
    pointer-events: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  z-index: 1;
`;

export const ItemIcon = styled.span<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  color: ${(props) => (props.$isActive ? theme.primary : theme.white2)};
  opacity: ${(props) => (props.$isActive ? 1 : 0.72)};
  transition:
    color 0.26s ease,
    opacity 0.26s ease,
    transform 0.26s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ItemLabel = styled.span<{ $isActive?: boolean }>`
  flex: 1;
  min-width: 0;
  letter-spacing: 0.02em;
  line-height: 1.4;
  color: ${(props) => (props.$isActive ? theme.primary : theme.white)};
  text-shadow: ${(props) =>
    props.$isActive ? "0 0 14px rgba(254, 113, 244, 0.12)" : "none"};
  transition: color 0.26s ease, text-shadow 0.26s ease;
`;

export const Item = styled.a<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 13px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  width: 100%;
  padding: 12px 14px 12px 16px;
  border-radius: 12px;
  position: relative;
  transition:
    background-color 0.26s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.26s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.18s ease;

  ${(props) =>
    props.$isActive &&
    css`
      background: rgba(255, 255, 255, 0.035);
      box-shadow: none;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 58%;
        min-height: 20px;
        background: linear-gradient(180deg, ${theme.primary}, ${theme.tertiary});
        border-radius: 0 3px 3px 0;
        box-shadow: 0 0 7px rgba(254, 113, 244, 0.28);
      }
    `}

  @media (hover: hover) {
    &:hover {
      background: ${(props) =>
        props.$isActive
          ? "rgba(255, 255, 255, 0.045)"
          : "rgba(255, 255, 255, 0.04)"};
      transform: translateX(3px);
    }

    &:hover ${ItemIcon} {
      opacity: ${(props) => (props.$isActive ? 1 : 0.88)};
    }

    &:hover ${ItemLabel} {
      color: ${(props) => (props.$isActive ? theme.primary : theme.white)};
    }
  }

  &:active {
    background: rgba(255, 255, 255, 0.055);
    transform: translateX(2px) scale(0.985);
    opacity: 0.9;
    transition-duration: 0.14s;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  padding: 8px 12px 0;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const SidebarCta = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 88%;
  max-width: 100%;
  height: 46px;
  padding: 0 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: ${theme.background};
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.04em;
  background: linear-gradient(
    135deg,
    ${theme.primary} 0%,
    ${theme.tertiary} 55%,
    #dd62d5 100%
  );
  box-shadow:
    0 3px 14px rgba(254, 113, 244, 0.16),
    0 2px 6px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
  transition:
    transform 0.24s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.24s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.18s ease,
    filter 0.24s ease;

  svg {
    flex-shrink: 0;
    color: ${theme.background};
    opacity: 0.85;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-1px);
      box-shadow:
        0 5px 20px rgba(254, 113, 244, 0.24),
        0 3px 10px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.22);
      filter: brightness(1.03);
    }
  }

  &:active {
    transform: scale(0.975);
    opacity: 0.92;
    box-shadow:
      0 2px 10px rgba(254, 113, 244, 0.14),
      0 1px 4px rgba(0, 0, 0, 0.26);
    transition-duration: 0.14s;
  }

  @media ${media.max.md} {
    height: 44px;
    font-size: 14px;
    width: 90%;
  }
`;
