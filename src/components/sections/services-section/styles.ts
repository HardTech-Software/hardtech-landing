import styled from "styled-components";
import { media } from "@/utils/constants/breakpoints";

interface ContainerProps {
  $viewportWidth?: number;
  $viewportHeight?: number;
}

const getMobileMarginTop = (width = 375, height = 667) => {
  const clampedWidth = Math.max(320, Math.min(width, 430));
  const clampedHeight = Math.max(640, Math.min(height, 920));

  // Base calibrado para iPhone SE; en pantallas mas altas se reduce mas el solapamiento.
  const basePx = -38 * 16;
  const heightAdjust = (clampedHeight - 667) * 0.55;
  const widthAdjust = (clampedWidth - 375) * 0.18;

  // Limites para mantener estabilidad visual entre SE y mobiles altos.
  const minPx = -38 * 16;
  const maxPx = -29 * 16;
  const computed = basePx + heightAdjust + widthAdjust;
  const clampedResult = Math.max(minPx, Math.min(maxPx, computed));

  return `${clampedResult}px`;
};

export const Container = styled.div<ContainerProps>`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  padding: 12rem 0 46rem 0;
  margin-top: -48rem;
  align-items: center;
  min-height: 75vh;
  gap: 150px;

  @media ${media.max.lg} {
    margin-top: -38rem;
    min-height: 100vh;
    padding: 6.5rem 0 34rem 0;
    gap: 56px;
  }

  @media ${media.max.md} {
    margin-top: ${({ $viewportWidth = 375, $viewportHeight = 667 }) =>
      getMobileMarginTop($viewportWidth, $viewportHeight)};
    padding: 5.8rem 0 42rem 0;
    gap: 76px;
  }
`;

export const CTAContainer = styled.div`
  width: 290px;
  height: 45px;
  margin-top: -5rem;

  @media ${media.max.lg} {
    margin-top: -2.5rem;
  }

  @media ${media.max.md} {
    margin-top: -2rem;
    width: 240px;
    height: 40px;
  }
`;

export const TitleSlot = styled.div<{ $hidden: boolean }>`
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? "none" : "auto")};
  transition: opacity 0.25s ease;

  @media ${media.max.md} {
    margin-top: 1.25rem;
  }
`;
