import styled from "styled-components";
import { theme } from "@/helpers/theme";

export const PortalRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.88);
`;

export const Layer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: max(12px, env(safe-area-inset-top));
  right: max(12px, env(safe-area-inset-right));
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid rgba(254, 113, 244, 0.35);
  border-radius: 8px;
  background: rgba(22, 22, 22, 0.92);
  color: ${theme.white};
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  pointer-events: auto;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: ${theme.primary};
    background: rgba(36, 65, 255, 0.25);
  }

  &:focus-visible {
    outline: 2px solid ${theme.secondary};
    outline-offset: 2px;
  }
`;

export const NavRoundButton = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === "left" ? "left: 8px;" : "right: 8px;")}
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid rgba(36, 65, 255, 0.45);
  border-radius: 50%;
  background: rgba(22, 22, 22, 0.85);
  cursor: pointer;
  pointer-events: auto;
  color: ${theme.white};
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: ${theme.secondary};
    background: rgba(254, 113, 244, 0.15);
  }

  &:focus-visible {
    outline: 2px solid ${theme.primary};
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    ${({ $side }) => ($side === "left" ? "left: 4px;" : "right: 4px;")}
  }
`;

export const Figure = styled.figure`
  position: relative;
  width: min(96vw, 1280px);
  height: min(88vh, 860px);
  max-width: calc(100vw - 24px);
  max-height: calc(100vh - 96px);
  margin: 0;
  pointer-events: auto;
`;

export const CounterText = styled.span`
  position: absolute;
  bottom: max(12px, env(safe-area-inset-bottom));
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(22, 22, 22, 0.9);
  border: 1px solid rgba(254, 113, 244, 0.25);
  color: ${theme.white2};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  pointer-events: auto;
  user-select: none;

  &:focus-visible {
    outline: 2px solid ${theme.secondary};
    outline-offset: 2px;
  }
`;
