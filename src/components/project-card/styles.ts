import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    to bottom,
    ${theme.background} 0%,
    ${theme.background} 80%,
    transparent 100%
  );
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 66px clamp(1rem, 5vw, 7rem) 10rem;
  gap: 100px;

  @media (max-width: 1350px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const ContainerBottom = styled.div`
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
`;
export const DownloadButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
