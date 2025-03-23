import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  height: 110px;
  background-color: ${theme.secondary};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  position: fixed;
  width: 100%;
  top: 0;
`;
export const LogoIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 880px) {
    display: none;
  }
`;

export const MenuIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (min-width: 880px) {
    display: none;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 880px) {
    display: none;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  padding: 25px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c32c5;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: ${(props) => (props.$isOpen ? "0" : "-250px")};
  transition: left 0.3s ease-in-out;
`;
