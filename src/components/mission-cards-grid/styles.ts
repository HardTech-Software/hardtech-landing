import styled, { css } from "styled-components";
import { media } from "@/utils/constants/breakpoints";

interface RowProps {
  $index: number;
}

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media ${media.max.xxl} {
    gap: 180px;
  }
`;

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
  width: 100%;

  ${({ $index }) =>
    $index % 2 === 1 &&
    css`
      --offset: -75px;
      & > :nth-child(2) {
        grid-column: 2;
      }

      @media ${media.max.lg} {
        --offset: 0;
      }

      @media ${media.max.md} {
        & > :nth-child(2) {
          grid-column: 1;
        }
      }
    `}

  & > :nth-child(2) {
    transform: translateY(var(--offset));
    transition: transform 0.3s ease;
  }

  @media ${media.max.md} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const EmptySpace = styled.div`
  width: 100%;
  height: 100%;
  @media ${media.max.md} {
    display: none;
  }
`;
