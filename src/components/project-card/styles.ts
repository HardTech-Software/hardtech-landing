import styled from "styled-components";
import { theme } from "@/helpers/theme";

export const Container = styled.div`
  background: linear-gradient(
    to bottom,
    ${theme.background} 0%,
    ${theme.background} 60%,
    #1427a4 100%
  );
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 66px clamp(1rem, 5vw, 7rem) 55rem;
  gap: 100px;
  @media (max-width: 1350px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 326px;
  gap: 20px;
  @media (max-width: 1350px) {
    max-width: 680px;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1350px) and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 767px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const ButtonInnerContainer = styled.div`
  width: 210px;
  height: 40px;
`;

export const DownloadButtonContainer = styled.div`
  display: flex;
  gap: 30px;

  &.tablet-icons {
    display: none;
    @media (max-width: 1350px) and (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  &.default-icons {
    display: flex;
    @media (max-width: 1350px) and (min-width: 768px) {
      display: none;
    }
    @media (max-width: 767px) {
      gap: 16px;
      justify-content: center;
    }
  }
`;