"use client";
import React from "react";
import { Container, Item, LogoIcon, MenuIcon, Nav } from "./styles";
import Typography from "../typography";
import Icon from "../icon";
import { navItems } from "@/utils/constants";

const Header = () => {
  return (
    <Container>
      <LogoIcon>
        <Icon name="logo" />
      </LogoIcon>
      <MenuIcon>
        <Icon name="menu" />
      </MenuIcon>
      <Nav>
        {navItems.map((item, index) => (
          <Item key={index}>
            <Typography variant="title">{item.label}</Typography>
          </Item>
        ))}
      </Nav>
    </Container>
  );
};

export default Header;
