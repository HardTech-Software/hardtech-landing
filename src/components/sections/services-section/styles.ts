import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding: 12rem 0 42rem 0;
  margin-top: -48rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
  gap: 300px;

  @media (max-width: 1350px) {
    padding-top: 7rem;
  }

  @media (max-width: 1024px) {
    gap: 150px;
  }
`;
