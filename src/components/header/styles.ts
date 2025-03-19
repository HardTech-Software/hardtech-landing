import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  height: 110px;
  background-color: ${theme.secondary};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;
export const Logo = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 870px) {
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
