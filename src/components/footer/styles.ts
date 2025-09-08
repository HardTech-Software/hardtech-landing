import styled from "styled-components";
import Typography from "../typography";
import { theme } from "@/helpers/theme";

export const Container = styled.div`
  background: linear-gradient(
    rgba(18, 34, 133, 0.2) 0%,
    transparent 70%,
    transparent 100%
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem clamp(1rem, 10vw, 10rem);
  position: absolute;
  width: 100%;
  z-index: -1;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CenterContainer = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 760px) {
    align-items: center;
  }
`;

export const RightContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const InnerContainer = styled.div``;

export const TypographyCustom = styled(Typography)`
  padding: 4px;
  margin-left: -4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.secondary};
  }
`;

export const Email = styled.a`
  text-decoration: none;
`;
