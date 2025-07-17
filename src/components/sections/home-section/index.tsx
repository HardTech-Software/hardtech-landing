import React from "react";
import {
  Container,
  ContainerInner,
  ContainerLeft,
  ContainerRight,
  LogoHomeWrapper,
  TitleContainer,
  TypographyCustom,
  TypographyTitleCustom,
} from "./styles";
import Typography from "@/components/typography";
import { LogoHomeIcon } from "@/components/icons";
import { theme } from "@/helpers/theme";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
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
            <LogoHomeIcon />
          </LogoHomeWrapper>
        </ContainerRight>
      </ContainerInner>
    </Container>
  );
};

export default HomeSection;
