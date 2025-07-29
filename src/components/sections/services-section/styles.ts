import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding: 10rem 0 50rem 0;
  margin-top: -45rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
  gap: 30px;
`;

export const CardsContainer = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;

  gap: 60px;

  flex-direction: column;

  > *:nth-child(odd) {
    align-self: flex-end;
  }

  > *:nth-child(even) {
    align-self: flex-start;
  }
`;
