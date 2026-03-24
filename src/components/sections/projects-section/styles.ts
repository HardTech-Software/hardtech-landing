import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  z-index: 2;
  flex-direction: column;
  position: relative;
  padding: 10rem 0 0rem 0;
  margin-top: -38rem;
  gap: 150px;

  @media (max-width: 1024px) {
    margin-top: -24rem;
    padding-top: 7rem;
    gap: 110px;
  }

  @media (max-width: 768px) {
    margin-top: -30rem;
    padding-top: 6rem;
  }

  @media (max-width: 1350px) {
    padding-top: 6rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
