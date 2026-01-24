import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12rem 0 46rem 0;
  margin-top: -48rem;
  align-items: center;
  min-height: 75vh;
  gap: 150px;

  @media (max-width: 1024px) {
    padding: 7rem 0 42rem 0;
    gap: 100px;
  }

  @media (max-width: 768px) {
    padding: 6rem 0 42rem 0;
    gap: 80px;
  }
`;

export const CTAContainer = styled.div`
  width: 290px;
  height: 45px;
  margin-top: -5rem;

  @media (max-width: 1024px) {
   margin-top: -2.5rem;
  }

  @media (max-width: 768px) {
    margin-top: -rem;
    width: 240px;
    height: 40px;
  }
`;
