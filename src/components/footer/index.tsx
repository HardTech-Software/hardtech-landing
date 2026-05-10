"use client";

import React from "react";
import {
  BrandBlock,
  BrandStack,
  ContactBlock,
  ContactEmail,
  ContactLabel,
  Container,
  Copyright,
  Divider,
  FooterNav,
  Inner,
  InstagramLink,
  LogoButton,
  NavBlock,
  NavLink,
  SocialRow,
  Tagline,
  TopGrid,
} from "./styles";
import { Constants } from "@/utils/constants/constants";
import { scrollToSection } from "@/utils/constants/nav-items";
import { Icon } from "..";

const FOOTER_QUICK_LINKS = [
  { label: "Qué ofrecemos", sectionId: "services-section" },
  { label: "Nuestros proyectos", sectionId: "projects-section" },
  { label: "Visión & misión", sectionId: "mission-section" },
  { label: "Contacto", sectionId: "contact-section" },
] as const;

const Footer = () => {
  const onSectionNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <Container>
      <Inner>
        <TopGrid>
          <BrandBlock>
            <BrandStack>
              <LogoButton
                type="button"
                aria-label="Ir al inicio — HardTech"
                onClick={() => scrollToSection("home-section")}
              >
                <Icon
                  name="logo"
                  width="104"
                  height="115"
                  mobileWidth="81"
                  mobileHeight="90"
                />
              </LogoButton>
              <Tagline>Tecnología sólida. Resultados reales.</Tagline>
            </BrandStack>
          </BrandBlock>

          <NavBlock>
            <ContactLabel>Enlaces</ContactLabel>
            <FooterNav aria-label="Enlaces rápidos">
              {FOOTER_QUICK_LINKS.map(({ label, sectionId }) => (
                <NavLink
                  key={sectionId}
                  href={`#${sectionId}`}
                  onClick={(e) => onSectionNavigate(e, sectionId)}
                >
                  {label}
                </NavLink>
              ))}
            </FooterNav>
          </NavBlock>

          <ContactBlock>
            <ContactLabel>Contacto</ContactLabel>
            <ContactEmail href={`mailto:${Constants.email}`}>
              {Constants.email}
            </ContactEmail>
            <SocialRow>
              <InstagramLink
                href={Constants.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de HardTech: @hardtech — abre en una nueva pestaña"
              >
                <Icon name="instagram" width="22" height="22" />
                <span>Instagram: {Constants.instagram}</span>
              </InstagramLink>
            </SocialRow>
          </ContactBlock>
        </TopGrid>

        <Divider />
        <Copyright>
          © 2026 HardTech. Todos los derechos reservados.
        </Copyright>
      </Inner>
    </Container>
  );
};

export default Footer;
