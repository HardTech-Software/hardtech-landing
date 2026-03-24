import { theme } from "@/helpers/theme";
import styled from "styled-components";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-self: start;
  gap: 20px;
  height: 75px;
  padding: 0 clamp(1rem, 10vw, 18rem);

  @media ${media.max.xxl} {
    height: 90px;
  }

  @media ${media.max.md} {
    height: 70px;
  }
`;

export const LogoContainer = styled.div`
  background: linear-gradient(
    to right,
    ${theme.background} 0%,
    ${theme.background} 70%,
    transparent 100%
  );
  padding: 20px 35px 10px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
