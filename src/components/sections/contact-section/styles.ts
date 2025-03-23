import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
export const ContainerCenter = styled.div`
  margin: 40px 0;
`;
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
