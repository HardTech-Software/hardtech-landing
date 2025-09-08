import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding: 12rem 0 40rem 0;
  margin-top: -45rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
  gap: 100px;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 1350px) {
    padding-top: 7rem;
  }
`;
