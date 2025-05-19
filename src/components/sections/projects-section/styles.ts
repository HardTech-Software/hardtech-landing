import Typography from "@/components/typography";
import styled from "styled-components";

export const Container = styled.div`
  padding: 7rem 0 50rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 75vh;

  @media (max-width: 760px) {
    padding: 5rem 0 40rem 0;
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 clamp(1rem, 5vw, 1rem);
`;

export const TypographyPrimary = styled(Typography)`
  @media (max-width: 1024px) {
    padding: 5px 20px 9px 20px;
  }
`;

export const TypographySecondary = styled(Typography)`
  padding: 5px 0 9px 0;
`;

export const TypographyCustomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  @media (min-width: 760px) {
    display: none;
  }
`;

export const TypographyContainer = styled.div`
  text-align: center;
  @media (max-width: 760px) {
    display: none;
  }
`;
