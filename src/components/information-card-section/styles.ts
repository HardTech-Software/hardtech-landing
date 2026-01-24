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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }
`;

