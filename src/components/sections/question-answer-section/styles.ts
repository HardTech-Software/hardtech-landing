import Typography from "@/components/typography";
import styled from "styled-components";

export const Container = styled.div`
  padding: 8rem 0 15rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: -750px;
  min-height: 75vh;
  @media (max-width: 1024px) {
    padding: 4rem 0 15rem 0;
  }

  @media (max-width: 760px) {
    margin-top: -600px;
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 0 clamp(1rem, 5vw, 10rem);

  @media (max-width: 760px) {
    gap: 30px;
  }
`;

export const CardContainer = styled.div`
  max-width: 854px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 46px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TypographyCustom = styled(Typography)`
  padding: 5px 20px 0.6rem 20px;
`;
