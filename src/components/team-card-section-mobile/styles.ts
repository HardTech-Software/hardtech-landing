import { theme } from "@/helpers/theme";
import { styled } from "styled-components";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 87px 0;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media ${media.min.md} {
    display: none;
  }
`;

export const ContainerInner = styled.div`
  width: 290px;
  height: 100%;
  background: linear-gradient(to bottom, ${theme.background} 0%, #1427a4 100%);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  clip-path: polygon(
    50% 0%,
    100% 4.5%,
    100% 95.5%,
    50% 100%,
    0% 95.5%,
    0% 4.5%
  );
`;
