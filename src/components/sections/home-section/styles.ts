import Typography from "@/components/typography";
import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 125vh;
  position: relative;
  z-index: -1;
  padding: 15rem 0 60rem 0;

  @media (max-width: 1024px) {
    padding: 0rem 0 52rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 0rem 0 58rem 0;
  }
`;

export const Background = styled.div`
  height: 1500px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 80px;
  align-items: flex-start;
  z-index: 2;
  padding-top: 9vh;
  
  @media (max-width: 1024px) {
    padding-top: 20vh
  }
  @media (max-width: 768px) {
    padding-top: 28vh;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024) {
    
  }
`;

export const TypographyTitleCustom = styled(Typography)`
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    white-space: normal;
    word-wrap: break-word;
  }

  @media (min-width: 1025px) {
    white-space: nowrap;
  }
`;

export const SecondLine = styled.span`
  display: inline;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const HighlightedText = styled.span`
  background: linear-gradient(
    to right,
    transparent 0%,
    ${theme.primary} 0%,
    ${theme.primary} 75%,
    transparent 100%
  );
  background-size: 110% 100%;
  background-position: left center;
  padding: 0px 10px 4px 4px;
  display: inline;
  white-space: normal;
  word-break: break-word;
  color: #000000;
`;


export const TypographyCustom = styled(Typography)`
  max-width: 1000px;
  text-align: center;
  margin: auto;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 400px;
    padding: 0 20px;
    margin: 20px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    padding: 0 20px;
  }
`;
