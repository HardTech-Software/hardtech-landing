import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  background-color: ${theme.secondary};
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  padding: 30px 0;
`;

export const LogoIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav``;

export const Item = styled.div`
  margin-top: 30px;
  padding: 15px;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c32c5;
  }
`;
