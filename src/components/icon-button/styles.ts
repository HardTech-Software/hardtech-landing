import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.button`
  border: 2px solid #fff;
  background-color: transparent;
  width: 152px;
  height: 44px;
  display: flex;
  padding: 0;
  margin: 0;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0;

  &:hover {
    background-color: ${theme.background};
  }

  @media (max-width: 430px) {
    width: 135px;
    height: 40px;
    
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
