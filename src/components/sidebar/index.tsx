import React from "react";
import Typography from "../typography";
import { Container, Item, Nav } from "./styles";
import { navItemsSidebar } from "@/utils/constants/nav-items";

interface SidebarProps {
  onClick: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Sidebar = ({ onClick, scrollToSection }: SidebarProps) => {
  return (
    <Container>
      <Nav>
        {navItemsSidebar.map((item, index) => (
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
