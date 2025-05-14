import React from "react";
import {
  Container,
  ContainerInner,
  ContainerLeft,
  ContainerRight,
  LogoHomeWrapper,
  TypographyCustom,
} from "./styles";
import Typography from "@/components/typography";
import { LogoHomeIcon } from "@/components/icons";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
      <ContainerInner>
        <ContainerLeft>
          <Typography variant="h1">Creando un</Typography>
          <Typography variant="h2">impacto positivo</Typography>
          <Typography variant="h1">una app a la vez.</Typography>
          <TypographyCustom variant="description2">
            En HardTech, creamos aplicaciones que transforman la sociedad con
            tecnología y diseño inteligente.
          </TypographyCustom>
        </ContainerLeft>
        <ContainerRight>
          <LogoHomeWrapper>
            <LogoHomeIcon />
          </LogoHomeWrapper>
        </ContainerRight>
      </ContainerInner>
    </Container>
  );
};

export default HomeSection;
