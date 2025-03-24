import styled from "styled-components";
import Typography from "../typography";
import { theme } from "@/helpers/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8rem 2rem;
  position: absolute;
  width: 100%;
  z-index: -1;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;
export const ContainerCenter = styled.div`
  margin: 40px 0;
`;
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
