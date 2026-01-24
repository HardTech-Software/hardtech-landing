import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 231px;
  height: 271px;
  background-color: #161616;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  padding-top: 162px;
  text-align: center;
  gap: 12px;
  z-index: 1;
  cursor: pointer;
  box-shadow: 0px 0px 25px 0px #2441FF80;
  transition: box-shadow 0.4s ease, transform 0.3s ease;

  &.active,
  &:hover {
    box-shadow: 0px 0px 25px 5px #2441FF;
  }
  /* @media (hover: hover) and (pointer: fine) {
    &.active {
      box-shadow: 0px 0px 25px 0px #2441FF80;
      transform: none;
    }
  } */
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  svg {
    width: 90px;
    height: 150px;
    object-fit: contain;
  }
`;

export const ImageContainer2 = styled.div`
  position: absolute;
  top: -40px;
  left: 64%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  svg {
    width: 90px;
    height: 150px;
    object-fit: contain;
  }
`;

export const TextTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: -30px;
  &::after {
    content: "";
    width: 104px;
    height: 3px;
    background: #fE71F4;
    margin: 4px auto 0;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;