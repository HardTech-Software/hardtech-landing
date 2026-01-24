import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 12rem 0 55rem 0;
  margin-top: -45rem;
  display: flex;
  min-height: 75vh;
  gap: 120px;
  z-index: 2;

  @media (max-width: 1350px) {
    padding-top: 7rem;
  }
  @media (max-width: 1024px) {
    gap: 100px;
  }
`;
