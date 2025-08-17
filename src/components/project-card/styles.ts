import { theme } from "@/helpers/theme";
import styled from "styled-components";

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
  z-index: 1;

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
  padding-top: 30px;

  @media (max-width: 1350px) {
    max-width: 680px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  padding-top: 30px;

  @media (max-width: 1350px) {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const ButtonInnerContainer = styled.div`
  width: 210px;
  height: 40px;
`;

export const DownloadButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
