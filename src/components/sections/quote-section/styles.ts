import styled from "styled-components";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10rem 0 55rem 0;
  margin-top: -45rem;
  display: flex;
  min-height: 75vh;
  gap: 120px;
  z-index: 2;

  @media ${media.max.xxl} {
    padding-top: 5rem;
  }
  @media ${media.max.lg} {
    gap: 100px;
  }
  @media ${media.max.md} {
    padding-top: 6.5rem;
  }
`;
