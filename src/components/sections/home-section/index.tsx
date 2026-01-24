import React from "react";
import {
  Background,
  Container,
  InnerContainer,
  LeftContainer,
  TitleContainer,
  TypographyCustom,
  TypographyTitleCustom,
  HighlightedText,
  SecondLine,
} from "./styles";
import { theme } from "@/helpers/theme";
import { HomeBackground } from "@/components";

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
            <TypographyTitleCustom variant="h1" color={theme.white}>
              Apps y sitios web{" "}
              <SecondLine>
                con <HighlightedText>impacto real.</HighlightedText>
              </SecondLine>
            </TypographyTitleCustom>
          </TitleContainer>

          <TypographyCustom variant="h4" color={theme.white}>
            En Hardtech trabajamos con diseño atractivo y desarrollo sólido.
          </TypographyCustom>

        </LeftContainer>
      </InnerContainer>
    </Container>
  );
};

export default HomeSection;
