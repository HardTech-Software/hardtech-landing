import styled from "styled-components";

interface RowProps {
  $index: number;
}

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1024px) {
    gap: 140px;
  }
`;

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: ${({ $index }) =>
      $index % 2 === 0 ? "1fr 11fr" : "11fr 1fr"};
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptySpace = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 760px) {
    display: none;
  }
`;
