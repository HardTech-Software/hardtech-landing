import React, { useState, useEffect } from "react"; // Añadimos hooks
import {
  ButtonContainer,
  HeaderContainer,
  Item,
  LeftContainer,
  LogoIcon,
  MenuIcon,
  Nav,
  Overlay,
  RightContainer,
  SidebarContainer,
} from "./styles";
import useToggle from "@/hooks/use-toggle";
import useIsMobile from "@/hooks/use-is-mobile";
import { navItemsHeader, scrollToSection } from "@/utils/constants/nav-items";
import { breakpoints } from "@/utils/constants/breakpoints";
import { theme } from "@/helpers/theme";
import { Button, Icon, Sidebar, Typography } from "..";

const Header = () => {
  const { OpenSidebar, isSidebarOpen, CloseSidebar } = useToggle();
  const { isMobile } = useIsMobile(breakpoints.xl);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isEmbeddedInHome = !isScrolled;
  const shouldShowScrolledStyle =
    isScrolled || (isMobile && isSidebarOpen && isEmbeddedInHome);

  useEffect(() => {
    // Animación de fade-in al cargar
    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeaderContainer
        id="site-header"
        $isScrolled={shouldShowScrolledStyle}
        className={isVisible ? "fade-in" : ""}
      >
        <LeftContainer>
          <LogoIcon onClick={() => scrollToSection("home-section")}>
            <Icon name="logo" />
          </LogoIcon>
          <MenuIcon onClick={OpenSidebar}>
            <Icon name="menu" />
          </MenuIcon>
        </LeftContainer>

        <RightContainer>
          <Nav>
            {navItemsHeader.map((item, index) => (
              <Item key={index} onClick={() => scrollToSection(item.sectionId)}>
                <Typography variant="h3" color={theme.white}>
                  {item.label}
                </Typography>
              </Item>
            ))}
          </Nav>
          <ButtonContainer>
            <Button
              title="CONTÁCTANOS"
              variant="secondary"
              onClick={() => scrollToSection("contact-section")}
            />
          </ButtonContainer>
        </RightContainer>
      </HeaderContainer>

      {isSidebarOpen && <Overlay onClick={CloseSidebar} />}
      <SidebarContainer $isOpen={isSidebarOpen}>
        <Sidebar onClick={CloseSidebar} scrollToSection={scrollToSection} />
      </SidebarContainer>
    </>
  );
};

export default Header;
