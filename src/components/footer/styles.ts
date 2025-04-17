import styled from "styled-components";
import Typography from "../typography";
import { theme } from "@/helpers/theme";

export const Container = styled.div`
  background: linear-gradient(rgba(36, 65, 255, 0.3) 0%, transparent 100%);
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 5rem clamp(1rem, 5vw, 10rem);
  position: absolute;
  width: 100%;
  z-index: -1;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;
export const ContainerCenter = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TypographyCustom = styled(Typography)`
  padding: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${theme.secondary};
  }
`;

export const Email = styled.a`
  text-decoration: none;
`;
