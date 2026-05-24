"use client";

import React, { useMemo } from "react";
import {
  ButtonContainer,
  Container,
  Item,
  ItemIcon,
  ItemLabel,
  Nav,
  SidebarCta,
} from "./styles";
import { navItemsSidebar } from "@/utils/constants/nav-items";
import { ContactNavIcon, navIconMap } from "./nav-icons";
import { useActiveSection } from "@/hooks/use-active-section";
import Typography from "../typography";

interface SidebarProps {
  onClick: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Sidebar = ({ onClick, scrollToSection }: SidebarProps) => {
  const sectionIds = useMemo(
    () => navItemsSidebar.map((item) => item.sectionId),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <Container>
      <Nav aria-label="Navegación móvil">
        {navItemsSidebar.map((item, index) => {
          const isActive = activeSection === item.sectionId;
          const NavIcon = navIconMap[item.sectionId];

          return (
            <Item
              key={index}
              href={`#${item.sectionId}`}
              $isActive={isActive}
              aria-current={isActive ? "true" : undefined}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                onClick();
                scrollToSection(item.sectionId);
                window.history.pushState(null, "", `#${item.sectionId}`);
              }}
            >
              <ItemIcon $isActive={isActive} aria-hidden="true">
                {NavIcon ? <NavIcon color="currentColor" size={22} /> : null}
              </ItemIcon>
              <ItemLabel $isActive={isActive}>
                <Typography
                  variant="description1"
                  color="inherit"
                  as="span"
                >
                  {item.label}
                </Typography>
              </ItemLabel>
            </Item>
          );
        })}

        <ButtonContainer>
          <SidebarCta
            type="button"
            onClick={() => {
              onClick();
              scrollToSection("contact-section");
            }}
          >
            <ContactNavIcon color="currentColor" size={18} />
            CONTÁCTANOS
          </SidebarCta>
        </ButtonContainer>
      </Nav>
    </Container>
  );
};

export default Sidebar;
