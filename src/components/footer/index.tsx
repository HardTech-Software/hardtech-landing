import React from "react";
import {
  Container,
  ContainerCenter,
  ContainerRight,
  Email,
  LogoContainer,
  TypographyCustom,
} from "./styles";
import Icon from "@/components/icon";
import Typography from "@/components/typography";
import { Constants } from "@/utils/constants/constants";
import { scrollToSection } from "@/utils/constants/nav-items";
import { theme } from "@/helpers/theme";

interface FooterProps {
  id: string;
}

const Footer = ({ id }: FooterProps) => {
  return (
    <Container id={id}>
      <LogoContainer onClick={() => scrollToSection("home-section")}>
        <Icon name="logo" width="154" height="170" />
      </LogoContainer>

      <ContainerCenter>
        <Typography variant="description2" color={theme.white}>
          CONTACTO
        </Typography>
        <Email href={`mailto:${Constants.email}`}>
          <TypographyCustom variant="description2" color={theme.white}>
            {Constants.email}
          </TypographyCustom>
        </Email>
      </ContainerCenter>
      <ContainerRight>
        <Icon name="instagram" />
        <div>
          <Typography variant="description2" color={theme.white}>
            SIGUENOS
          </Typography>
          <Typography variant="description2" color={theme.white}>
            {Constants.instagram}
          </Typography>
        </div>
      </ContainerRight>
    </Container>
  );
};

export default Footer;
