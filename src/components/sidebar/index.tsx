import React from "react";
import Typography from "../typography";
import { Container, Item, LogoIcon, Nav } from "./styles";
import Icon from "../icon";
import { navItems } from "@/utils/constants";

interface SidebarProps {
  onClick: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Sidebar = ({ onClick, scrollToSection }: SidebarProps) => {
  return (
    <Container>
      <LogoIcon>
        <Icon name="logo" />
      </LogoIcon>

      <Nav>
        {navItems.map((item, index) => (
          <Item
            key={index}
            onClick={() => {
              onClick();
              scrollToSection(item.sectionId);
            }}
          >
            <Typography variant="title">{item.label}</Typography>
          </Item>
        ))}
      </Nav>
    </Container>
  );
};

export default Sidebar;
