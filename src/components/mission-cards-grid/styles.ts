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
  background-color: red;
  @media ${media.max.xxl} {
    // gap: 180px;
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
      @media ${media.max.lg} {
        --offset: 0;
      }
    `}

  & > :nth-child(2) {
    transform: translateY(var(--offset));
    transition: transform 0.3s ease;
  }

  @media ${media.max.lg} {
    display: flex;
    flex-direction: column;
    gap: 30px;

    & > :nth-child(2) {
      transform: none;
    }

    ${({ $index }) =>
      $index % 2 === 1 &&
      css`
        & > :nth-child(1) {
          order: 2;
        }
        & > :nth-child(2) {
          order: 1;
        }
      `}
  }
`;

export const EmptySpace = styled.div`
  width: 100%;
  height: 100%;
  @media ${media.max.lg} {
    // display: none;
  }
`;
