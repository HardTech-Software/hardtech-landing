import React from "react";
import Typography from "../typography";
import { Container, ContainerButton, Item, Nav } from "./styles";
import { navItemsSidebar } from "@/utils/constants/nav-items";
import Button from "../button";
import { theme } from "@/helpers/theme";

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
            <Typography variant="title1" color={theme.white}>
              {item.label}
            </Typography>
          </Item>
        ))}

        <ContainerButton>
          <Button
            title="CONTÁCTANOS"
            variant="secondary"
            onClick={() => scrollToSection("contact-section")}
          />
        </ContainerButton>
      </Nav>
    </Container>
  );
};

export default Sidebar;
