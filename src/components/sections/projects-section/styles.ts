import styled from "styled-components";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  z-index: 2;
  flex-direction: column;
  position: relative;
  padding: 10rem 0 0rem 0;
  margin-top: -38rem;
  gap: 150px;

  @media ${media.max.lg} {
    margin-top: -24rem;
    padding-top: 7rem;
    gap: 110px;
  }

  @media ${media.max.md} {
    margin-top: -30rem;
    padding-top: 6rem;
  }

  @media ${media.max.xxl} {
    padding-top: 6rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  @media ${media.max.md} {
    padding-top: 24px;
  }
`;
