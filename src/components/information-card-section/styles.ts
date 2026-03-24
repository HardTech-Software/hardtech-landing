import styled from "styled-components";
import { media } from "@/utils/constants/breakpoints";

interface RowProps {
  $index: number;
}

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media ${media.max.lg} {
    gap: 36px;
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;

  @media ${media.max.lg} and (min-width: 641px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 231px));
    justify-content: center;
    align-items: start;
    column-gap: 28px;
    row-gap: 38px;
  }

  @media ${media.max.sm} {
    flex-direction: column;
    gap: 60px;
  }
`;
