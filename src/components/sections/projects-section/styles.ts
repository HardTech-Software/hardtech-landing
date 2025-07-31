import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  padding: 10rem 0 50rem 0;

  margin-top: -35rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 75vh;

  @media (max-width: 1350px) {
    padding-top: 6rem;
  }
`;

export const ContainerInner = styled.div`
  // background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  @media (max-width: 1350px) {
    gap: 85px;
  }
`;

export const IconProject = styled.div`
  background-color: blue;
  margin-top: 100px;
  display: flex;
  align-self: start;
  width: 100%;
  gap: 60px;
  height: 75px;
  padding-left: 156px;

  @media (max-width: 1350px) {
    margin-top: 85px;
  }
`;
