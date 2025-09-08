import React from "react";
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
import { navItemsHeader, scrollToSection } from "@/utils/constants/nav-items";
import { theme } from "@/helpers/theme";
import { Button, Icon, Sidebar, Typography } from "..";

const Header = () => {
  const { OpenSidebar, isSidebarOpen, CloseSidebar } = useToggle();

  return (
    <>
      <HeaderContainer>
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
                <Typography variant="title1" color={theme.white}>
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

      <SidebarContainer $isOpen={isSidebarOpen}>
        <Sidebar onClick={CloseSidebar} scrollToSection={scrollToSection} />
        {isSidebarOpen && <Overlay onClick={CloseSidebar} />}
      </SidebarContainer>
    </>
  );
};

export default Header;
