import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 11rem 0 48rem 0;
  margin-top: -35rem;
  display: flex;
  min-height: 75vh;
  gap: 220px;
  z-index: 2;

  @media (max-width: 1350px) {
    padding-top: 7rem;
  }
  @media (max-width: 1024px) {
    gap: 150px;
  }
`;
