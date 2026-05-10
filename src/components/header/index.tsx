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
import { useIsLoading } from "@/lib/loading-context";

const Header = () => {
  const { OpenSidebar, isSidebarOpen, CloseSidebar } = useToggle();
  const { isMobile } = useIsMobile(breakpoints.xl);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isLoading = useIsLoading();

  const isEmbeddedInHome = !isScrolled;
  const shouldShowScrolledStyle =
    isScrolled || (isMobile && isSidebarOpen && isEmbeddedInHome);

  // Scroll listener — mount immediately so state is correct from the start.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade-in animation — only trigger after the loading overlay has finished.
  useEffect(() => {
    if (!isLoading) {
      setIsVisible(true);
    }
  }, [isLoading]);

  return (
    <>
      <HeaderContainer
        id="site-header"
        $isScrolled={shouldShowScrolledStyle}
        className={isVisible ? "fade-in" : ""}
      >
        <LeftContainer>
          <LogoIcon
            aria-label="Ir al inicio de HardTech"
            onClick={() => scrollToSection("home-section")}
          >
            <Icon name="logo" />
          </LogoIcon>
          <MenuIcon onClick={OpenSidebar}>
            <Icon name="menu" />
          </MenuIcon>
        </LeftContainer>

        <RightContainer>
          <Nav aria-label="Navegación principal">
            {navItemsHeader.map((item, index) => (
              <Item
                key={index}
                href={`#${item.sectionId}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  scrollToSection(item.sectionId);
                  window.history.pushState(null, "", `#${item.sectionId}`);
                }}
              >
                <Typography variant="description1" color={theme.white}>
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
