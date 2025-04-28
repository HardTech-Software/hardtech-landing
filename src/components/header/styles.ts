import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const HeaderContainer = styled.div<{ $isOpen: boolean }>`
  height: 5rem;
  background-color: ${theme.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;

  box-shadow: ${(props) =>
    props.$isOpen ? "none" : "0 10px 30px rgba(0, 0, 0, 1)"};

  @media (max-width: 1280px) {
    padding: 0 30px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 760px) {
    justify-content: space-between;
  }
`;
export const LogoIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const MenuIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (min-width: 760px) {
    display: none;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  @media (max-width: 760px) {
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

export const ContainerButton = styled.div`
  @media (max-width: 760px) {
    display: none;
  }
`;
export const Overlay = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 2;
  right: ${(props) => (props.$isOpen ? "233px" : "0px")};
  transition: right 0.3s ease-in-out;
`;
