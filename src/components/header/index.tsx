"use client";
import React from "react";
import {
  Container,
  Item,
  LogoIcon,
  MenuIcon,
  Nav,
  Overlay,
  SidebarContainer,
} from "./styles";
import Typography from "../typography";
import Icon from "../icon";

import useToggle from "@/hooks/use-toggle";
import Sidebar from "../sidebar";
import { headerHeight, navItems } from "@/utils/constants/nav-items";

const Header = () => {
  const { OpenSidebar, isSidebarOpen, CloseSidebar } = useToggle();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {!isSidebarOpen && (
        <Container>
          <LogoIcon>
            <Icon name="logo" />
          </LogoIcon>
          <MenuIcon onClick={OpenSidebar}>
            <Icon name="menu" />
          </MenuIcon>
          <Nav>
            {navItems.map((item, index) => (
              <Item key={index} onClick={() => scrollToSection(item.sectionId)}>
                <Typography variant="title">{item.label}</Typography>
              </Item>
            ))}
          </Nav>
        </Container>
      )}

      <SidebarContainer $isOpen={isSidebarOpen}>
        {isSidebarOpen && (
          <>
            <Overlay onClick={CloseSidebar} />
            <Sidebar onClick={CloseSidebar} scrollToSection={scrollToSection} />
          </>
        )}
      </SidebarContainer>
    </>
  );
};

export default Header;
