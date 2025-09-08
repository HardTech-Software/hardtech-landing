import React from "react";
import {
  Background,
  Container,
  InnerContainer,
  LeftContainer,
  LogoHomeWrapper,
  RightContainer,
  TitleContainer,
  TypographyCustom,
  TypographyTitleCustom,
} from "./styles";
import { theme } from "@/helpers/theme";
import { HomeBackground, Icon } from "@/components";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
      <Background>
        <HomeBackground />
      </Background>
      <InnerContainer>
        <LeftContainer>
          <TitleContainer>
            <TypographyTitleCustom variant="h1" color={theme.background}>
              Apps y sitios web con impacto real.
            </TypographyTitleCustom>
          </TitleContainer>

          <TypographyCustom variant="description2" color={theme.white}>
            En Hardtech trabajamos con diseño atractivo y desarrollo sólido.
          </TypographyCustom>
        </LeftContainer>
        <RightContainer>
          <LogoHomeWrapper>
            <Icon name="home-logo" />
          </LogoHomeWrapper>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default HomeSection;
