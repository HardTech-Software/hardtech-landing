import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const BlurCircle = styled.div`
  position: absolute;
  width: 1400px;
  height: 935px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse,
    ${theme.primary} 0%,

    transparent 50%,
    transparent 100%
  );
  z-index: -1;
  opacity: 0.6;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.4s ease;

  @media (max-width: 1250px) {
    width: 973px;
    height: 723px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  transition: gap 0.4s ease;
`;

export const BottomRow = styled.div`
  display: contents;

  & > * {
    margin-top: -80px;
  }
  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3) {
    transform: translateX(139px);
    transition: transform 0.4s ease;
  }

  @media (max-width: 1250px) {
    & > * {
      margin-top: -70px;
    }

    & > :nth-child(1),
    & > :nth-child(2),
    & > :nth-child(3) {
      transform: translateX(116px);
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: 1250px) {
    &:hover ${BlurCircle} {
      width: 1800px;
      height: 1200px;
      opacity: 1;
    }

    &:hover ${GridContainer} {
      gap: 80px;
    }

    &:hover ${BottomRow} > :nth-child(1),
    &:hover ${BottomRow} > :nth-child(2),
    &:hover ${BottomRow} > :nth-child(3) {
      transform: translateX(170px);
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
