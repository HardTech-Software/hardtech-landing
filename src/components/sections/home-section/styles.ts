import Typography from "@/components/typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  padding: 4rem clamp(1rem, 5vw, 10rem);
`;

export const ContainerInner = styled.div`
  display: flex;
  max-width: 840px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerLeft = styled.div`
  max-width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 760px) {
    order: 2;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 760px) {
    margin-bottom: 5rem;
    order: 1;
  }
`;

export const TypographyCustom = styled(Typography)`
  margin: 30px 0;
`;
