import styled from "styled-components";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 11rem 0 54rem 0;
  margin-top: -35rem;
  display: flex;
  min-height: 190vh;
  gap: 220px;
  z-index: 2;

  @media ${media.max.xxl} {
    padding-top: 7rem;
  }
  @media ${media.max.lg} {
    gap: 150px;
  }
`;
