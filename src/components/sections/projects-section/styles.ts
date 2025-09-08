import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding-top: 10rem;
  margin-top: -35rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 75vh;

  @media (max-width: 1350px) {
    padding-top: 6rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;
