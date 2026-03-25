import React from "react";
import { ButtonContainer, Container, Item, Nav } from "./styles";
import { navItemsSidebar } from "@/utils/constants/nav-items";
import { theme } from "@/helpers/theme";
import { Button, Typography } from "..";

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
            <Typography variant="h3" color={theme.white}>
              {item.label}
            </Typography>
          </Item>
        ))}

        <ButtonContainer>
          <Button
            title="CONTÁCTANOS"
            variant="secondary"
            onClick={() => {
              onClick();
              scrollToSection("contact-section");
            }}
          />
        </ButtonContainer>
      </Nav>
    </Container>
  );
};

export default Sidebar;
