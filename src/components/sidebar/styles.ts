import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 188px;
  background-color: ${theme.secondary};
  position: absolute;
  padding: 17px;
  border-bottom-left-radius: 30px;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);
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
  padding-bottom: 36px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
`;

export const ContainerButton = styled.div`
  height: 34px;
`;
