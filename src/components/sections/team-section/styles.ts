import styled from "styled-components";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12rem 0 42rem 0;
  margin-top: -45rem;
  align-items: center;
  min-height: 75vh;
  gap: 100px;
  overflow: hidden;
  z-index: 2;

  @media ${media.max.xxl} {
    padding-top: 7rem;
  } 
    
  @media ${media.max.md} {
    padding-top: 7rem;
  }
`;
