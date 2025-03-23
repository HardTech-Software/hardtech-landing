import Typography from "@/components/typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: center;
  width: 100%;
  padding: 190px 30px;

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerLeft = styled.div`
  max-width: 500px;

  @media (max-width: 880px) {
    margin-bottom: 80px;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
`;

export const TypographyCustom = styled(Typography)`
  margin: 30px 0;
`;
