import React from "react";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  TypographyCustom,
} from "./styles";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Icon from "@/components/icon";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
      <ContainerLeft>
        <Typography variant="h1">Creando un</Typography>
        <Typography variant="h2">impacto positivo</Typography>
        <Typography variant="h1">una app a la vez</Typography>
        <TypographyCustom>
          En HardTech, creamos aplicaciones que transforman la sociedad con
          tecnología y diseño inteligente.
        </TypographyCustom>
        <Button title="NUESTROS PROYECTOS" />
      </ContainerLeft>
      <ContainerRight>
        <Icon name="logo-home" />
      </ContainerRight>
    </Container>
  );
};

export default HomeSection;
