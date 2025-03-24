import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-bottom: 150px;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 30px;
  gap: 30px;
  align-items: center;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
