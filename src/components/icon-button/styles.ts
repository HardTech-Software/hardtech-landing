import { theme } from "@/helpers/theme";
import styled from "styled-components";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
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
  text-decoration: none;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.background};
  }

  @media ${media.max.xxs} {
    width: 135px;
    height: 40px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
