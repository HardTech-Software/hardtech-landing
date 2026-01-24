import styled from "styled-components";
import { theme } from "@/helpers/theme";

interface InformationCardProps {
  $variant?: "left" | "right";
}

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  @media (max-width: 1024px) {
    margin-top: -30px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
`;

export const DescriptionContainer = styled.div<InformationCardProps>`
  box-shadow: 0px 0px 25px 0px #2441FF80;
  transition: box-shadow 0.4s ease, transform 0.3s ease;

  &.active,
  &:hover {
    box-shadow: 0px 0px 25px 5px #2441FF;
  }
  /* @media (hover: hover) and (pointer: fine) {
    &.active {
      box-shadow: 0px 0px 25px 0px #2441FF80;
      transform: none;
    }
  } */

  position: relative;
  min-height: 173px;
  height: auto;
  box-sizing: border-box;
  overflow: visible;
  padding-top: 20px;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: ${({ $variant }) => ($variant === "right" ? "2%" : "0")};
  margin-right: ${({ $variant }) => ($variant === "left" ? "2%" : "0")};
  
  background: linear-gradient(
    to ${props => props.$variant === "left" ? "right" : "left"},
    transparent 0%,
    #0f172a 35%,
    #000000 70%,
    transparent 100%
  );
  
  border-top-${props => props.$variant === "left" ? "right" : "left"}-radius: 24px;
  border-bottom-${props => props.$variant === "left" ? "right" : "left"}-radius: 24px;

  @media (max-width: 1024px) {
    min-height: 200px;
    margin-left: ${({ $variant }) => ($variant === "right" ? "25%" : "0")};
    margin-right: ${({ $variant }) => ($variant === "left" ? "25%" : "0")};
  }
    @media (max-width: 728px) {
    min-height: 194px;
    margin-left: ${({ $variant }) => ($variant === "right" ? "2%" : "0")};
    margin-right: ${({ $variant }) => ($variant === "left" ? "2%" : "0")};
  }
`;

export const ImageContainer = styled.div<InformationCardProps>`
  position: absolute;
  bottom: -20px;
  width: 13px;
  z-index: 2;

  svg {
    width: 200px;
    height: auto;
    transform: translateY(-28px);
  }

  ${({ $variant }) =>
    $variant === "left" &&
    `
    left: 300px;
    svg { width: 250px; }
  `}

  ${({ $variant }) =>
    $variant === "right" &&
    `
    left: 30px;
  `}

  @media (max-width: 1800px) {
     ${({ $variant }) =>
    $variant === "left" &&
    `
    left: 150px;
  `}
  }

  @media (max-width: 1500px) {
    svg { width: 180px; }
    ${({ $variant }) => $variant === "left" && `left: 10px; svg { width: 220px; }`}
  }

  @media (max-width: 1024px) {
    bottom: -10px;
    
    svg { width: 195px; }

    ${({ $variant }) =>
      $variant === "left" &&
      `
      left: 80px;
      svg { width: 210px; }
    `}
     ${({ $variant }) =>
      $variant === "right" &&
      `
      left: 40px;
    `}
  }

  @media (max-width: 728px) {
    svg { width: 105px; }
    
    ${({ $variant }) =>
      $variant === "left" &&
      `
      left: 5px;
      svg { width: 105px; 
      transform: translateY(-60px);}
    `}
    ${({ $variant }) =>
      $variant === "right" &&
      `
      left: 10px;
      transform: translateY(0px);}
    `}
  }
`;

export const TextContainer = styled.div<InformationCardProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
  white-space: pre-line;
  padding-right: 24px;
  position: relative;
  z-index: 3;

  margin-left: 550px;
  max-width: 330px;

  ${({ $variant }) =>
    $variant === "right" &&
    `
    margin-left: 290px;
    max-width: 330px
    padding-left: 0;
  `}
  ${({ $variant }) =>
    $variant === "left" &&
    `
    padding-right: 0;
    padding-left: 50px;
  `}

  @media (max-width: 1800px) {
    ${({ $variant }) =>
    $variant === "left" &&
    `
    margin-left: 350px;
  `}
  }
  @media (max-width: 1500px) {
    margin-left: 200px;
    max-width: 330px
    
    ${({ $variant }) =>
      $variant === "left" &&
      `
    margin-left: 200px;
    max-width: 330px
      `}
  }

  @media (max-width: 1024px) {
    margin-left: 180px; 
    max-width: 330px;

    ${({ $variant }) =>
      $variant === "right" &&
      `
      margin-left: 250px;
      max-width: 330px;
    `}
    ${({ $variant }) =>
      $variant === "left" &&
      `
    margin-left: 250px;
    max-width: 330px
      `}
  }

  @media (max-width: 728px) {
    margin-left: 60px;
    max-width: 330px;
    padding-right: 10px;

    ${({ $variant }) =>
      $variant === "right" &&
      `
      margin-left: 140px;
      `}
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 4px solid ${theme.primary};
  width: fit-content;
  max-width: 100%;
`;