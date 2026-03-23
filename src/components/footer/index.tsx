import React from "react";
import {
  CenterContainer,
  Container,
  Email,
  InnerContainer,
  LogoContainer,
  RightContainer,
  TypographyCustom,
} from "./styles";
import { Constants } from "@/utils/constants/constants";
import { scrollToSection } from "@/utils/constants/nav-items";
import { theme } from "@/helpers/theme";
import { Icon, Typography } from "..";

const Footer = () => {
  return (
    <Container>
      <LogoContainer onClick={() => scrollToSection("home-section")}>
        <Icon name="logo" width="154" height="170" />
      </LogoContainer>
      <CenterContainer>
        <Typography variant="description2" color={theme.white}>
          CONTACTO
        </Typography>
        <Email href={`mailto:${Constants.email}`}>
          <TypographyCustom variant="description2" color={theme.white}>
            {Constants.email}
          </TypographyCustom>
        </Email>
      </CenterContainer>
      <RightContainer>
        <a
          href={Constants.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar Instagram de HardTech"
        >
          <Icon name="instagram" />
        </a>
        <InnerContainer>
          <Typography variant="description2" color={theme.white}>
            SIGUENOS
          </Typography>
          <Typography variant="description2" color={theme.white}>
            {Constants.instagram}
          </Typography>
        </InnerContainer>
      </RightContainer>
    </Container>
  );
};

export default Footer;
