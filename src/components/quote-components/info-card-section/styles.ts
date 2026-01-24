import styled from "styled-components";

interface RowProps {
  $index: number;
}

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;

`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;

`;

