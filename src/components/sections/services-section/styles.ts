import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding: 12rem 0 45rem 0;
  margin-top: -45rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
  gap: 350px;

  @media (max-width: 1350px) {
    gap: 150px;
    padding-top: 6rem;
  }
`;
