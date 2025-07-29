import React from "react";
import {
  Background,
  Container,
  ContainerInner,
  ContainerLeft,
  ContainerRight,
  LogoHomeWrapper,
  TitleContainer,
  TypographyCustom,
  TypographyTitleCustom,
} from "./styles";
import { theme } from "@/helpers/theme";
import HomeBackground from "@/components/home-background";
import Icon from "@/components/icon";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
      <Background>
        <HomeBackground />
      </Background>
      <ContainerInner>
        <ContainerLeft>
          <TitleContainer>
            <TypographyTitleCustom variant="h1" color={theme.background}>
              Apps y sitios web con impacto real.
            </TypographyTitleCustom>
          </TitleContainer>

          <TypographyCustom variant="description2" color={theme.white}>
            En Hardtech trabajamos con diseño atractivo y desarrollo sólido.
          </TypographyCustom>
        </ContainerLeft>
        <ContainerRight>
          <LogoHomeWrapper>
            <Icon name="logo-home" />
          </LogoHomeWrapper>
        </ContainerRight>
      </ContainerInner>
    </Container>
  );
};

export default HomeSection;
