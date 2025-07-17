import Typography from "@/components/typography";
import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
  padding: 9rem clamp(1rem, 5vw, 14rem);

  @media (max-width: 1250px) {
    padding-top: 7rem;
  }
  @media (max-width: 1024px) {
    padding: 7rem 0;
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 80px;
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: start;
  }
  @media (max-width: 850px) {
    gap: 10px;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (max-width: 760px) {
    order: 2;
  }
`;

export const TitleContainer = styled.div`
  background: linear-gradient(
    to right,
    transparent 0%,
    ${theme.primary} 20%,
    ${theme.primary} 80%,
    transparent 100%
  );
  padding: 0 100px;
  max-width: 650px;

  @media (max-width: 1250px) {
    width: 483px;
    padding: 0 70px;
  }
  @media (max-width: 490px) {
    width: 100%;
    padding: 0 20px;
  }
`;
export const TypographyTitleCustom = styled(Typography)`
  @media (max-width: 490px) {
    max-width: 375px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    order: 1;
  }
`;

export const TypographyCustom = styled(Typography)`
  max-width: 383px;
  margin-left: -70px;

  @media (max-width: 1250px) {
    margin-left: 40px;
  }

  @media (max-width: 490px) {
    margin: 0 16px;
  }
`;

export const LogoHomeWrapper = styled.div`
  width: 275px;
  height: 437px;

  @media (max-width: 1250px) {
    width: 215px;
    height: 342px;
  }
  @media (max-width: 760px) {
    width: 198px;
    height: 303px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
