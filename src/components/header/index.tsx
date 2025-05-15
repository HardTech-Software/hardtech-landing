"use client";
import React from "react";
import {
  ContainerButton,
  ContainerLeft,
  HeaderContainer,
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
import { navItemsHeader, scrollToSection } from "@/utils/constants/nav-items";
import Button from "../button";

const Header = () => {
  const { OpenSidebar, isSidebarOpen, CloseSidebar } = useToggle();

  return (
    <>
      <HeaderContainer>
        <ContainerLeft>
          <LogoIcon onClick={() => scrollToSection("home-section")}>
            <Icon name="logo" />
          </LogoIcon>
          <MenuIcon onClick={OpenSidebar}>
            <Icon name="menu" />
          </MenuIcon>
          <Nav>
            {navItemsHeader.map((item, index) => (
              <Item key={index} onClick={() => scrollToSection(item.sectionId)}>
                <Typography variant="title">{item.label}</Typography>
              </Item>
            ))}
          </Nav>
        </ContainerLeft>
        <ContainerButton>
          <Button
            title="CONTACTO"
            variant="secondary"
            onClick={() => scrollToSection("footer-section")}
          />
        </ContainerButton>
      </HeaderContainer>

      <SidebarContainer $isOpen={isSidebarOpen}>
        <Sidebar onClick={CloseSidebar} scrollToSection={scrollToSection} />
        {isSidebarOpen && <Overlay onClick={CloseSidebar} />}
      </SidebarContainer>
    </>
  );
};

export default Header;
