import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 2.5rem 0 8rem 0;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  align-items: center;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
