import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 233px;
  background-color: ${theme.secondary};
  position: absolute;
  padding: 0 27px;
  border-bottom-left-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 1);
`;

export const LogoIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  padding: 40px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${theme.white};

  transition: background-color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }
`;
