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
import { theme } from "@/helpers/theme";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
      <ContainerInner>
        <ContainerLeft>
          <Typography variant="h2" color={theme.background}>
            Apps y sitios web con impacto real.
          </Typography>

          <TypographyCustom variant="description2">
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
