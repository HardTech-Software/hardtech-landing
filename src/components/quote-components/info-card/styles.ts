import styled from "styled-components";
import { theme } from "@/helpers/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 100%;  
  cursor: pointer;
  box-shadow: 0px 0px 20px 0px #2441FF80;  
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
  
`;

export const DescriptionContainer = styled.div`
  position: relative;
  width: 275px;
  min-height: 397px;
  height: auto;
  background-color: #161616;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
  padding-bottom: 080px; 
`;

export const AvatarContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: -56px;
`;

export const TextTitle = styled.div`
  background: linear-gradient(
    to right,
    transparent 5%,
    ${theme.primary} 20%,
    ${theme.primary} 100%,
    transparent 100%
  );
  width: 235px;
  text-align: center;
  height: 35px;
  padding: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 25px 12px 0px;
`;

export const IconContainer = styled.div`
  position: absolute;
  svg {
    width: 100px;
    height: 120px;
  }
  bottom: 318px;
  margin-left: 230px;
`;

export const IconContainer2 = styled.div`
  position: absolute;
  svg {
    width: 100px;
    height: 120px;
  }
  bottom: 318px;
  margin-left: 280px;
`;

export const TextContent = styled.div`
  width: 232px;
  margin-top: 18px;
  margin-left: 25px;
`;

export const TextContent2 = styled.div`
  width: 232px;
  margin-top: 15px;
  margin-left: 25px;
  white-space: pre-line;
`;

export const BottomSection = styled.div`
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px; 
`;

export const Text = styled.div`
  margin-left: 12px;
  width: 100%;
  max-width: 232px;
  white-space: pre-line;
`;

export const PriceContent = styled.div`
  width: 100%;
  max-width: 232px;
  white-space: pre-line;
  text-align: center;
`;

export const TextContent3 = styled.div`
  width: 100%;
  max-width: 215px;
  white-space: pre-line;
  text-align: center;
  margin-top: 8px;
`;

export const CTAContainer = styled.div`
  width: 217px;
  height: 32px;
  
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin-top: 5px;
  width: 232px;

  &:first-child {
    margin-top: 12px;
  }

  svg {
    flex-shrink: 0;
    width: 10px;
    height: 10px;
    margin-top: 2px;
  }
`;