import Typography from "@/components/typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 6rem clamp(4rem, 5vw, 10rem);

  @media (max-width: 1024px) {
    padding: 4rem clamp(4rem, 5vw, 10rem);
  }
  @media (max-width: 760px) {
    padding: 4rem 0;
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  max-width: 840px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerLeft = styled.div`
  max-width: 445px;
  display: flex;
  flex-direction: column;

  @media (max-width: 760px) {
    order: 2;
  }
  @media (max-width: 1023px) {
    max-width: 320px;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 760px) {
    margin-bottom: 32px;
    order: 1;
  }
`;

export const TypographyCustom = styled(Typography)`
  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 22px;
  }
`;

export const LogoHomeWrapper = styled.div`
  width: 226px;
  height: 346px;

  @media (max-width: 760px) {
    width: 198px;
    height: 303px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
