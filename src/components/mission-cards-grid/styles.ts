import styled, { css } from "styled-components";

interface RowProps {
  $index: number;
}

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: red;
  @media (max-width: 1350px) {
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
      @media (max-width: 1024px) {
        --offset: 0;
      }
    `}

  & > :nth-child(2) {
    transform: translateY(var(--offset));
    transition: transform 0.3s ease;
  }

  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
    // display: none;
  }
`;
