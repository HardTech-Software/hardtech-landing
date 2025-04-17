import Typography from "@/components/typography";
import styled from "styled-components";

export const Container = styled.div`
  padding: 7rem 0 37.5rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 clamp(1rem, 5vw, 10rem);
`;

export const TypographyCustom = styled(Typography)`
  text-align: center;
`;
