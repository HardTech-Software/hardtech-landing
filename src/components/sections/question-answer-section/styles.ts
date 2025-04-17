import styled from "styled-components";

export const Container = styled.div`
  padding: 7rem 0 15rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: -550px;
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0 clamp(1rem, 5vw, 10rem);
`;
export const CardContainer = styled.div`
  max-width: 838px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
