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
    gap: 36px;
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;

  @media (max-width: 1024px) and (min-width: 641px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 231px));
    justify-content: center;
    align-items: start;
    column-gap: 28px;
    row-gap: 38px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 60px;
  }
`;
