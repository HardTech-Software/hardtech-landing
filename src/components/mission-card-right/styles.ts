import styled from "styled-components";
import { theme } from "@/helpers/theme";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  margin-top: -90px;
  @media ${media.max.lg} {
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  box-shadow: 0px 0px 25px 0px #2441ff80;
  transition:
    box-shadow 0.4s ease,
    transform 0.3s ease;

  &.active,
  &:hover {
    box-shadow: 0px 0px 25px 5px #2441ff;
  }

  position: relative;
  min-height: 173px;
  height: auto;
  box-sizing: border-box;
  overflow: visible;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-left: 3%;

  background: linear-gradient(
    to left,
    transparent 0%,
    #0f172a 35%,
    #000000 70%,
    transparent 100%
  );

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const RelativeImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 0px;
  bottom: -35px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: pre-line;
  position: relative;
  max-width: 340px;
  flex-wrap: wrap;

  @media ${media.max.md} {
    gap: 8px;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 4px solid ${theme.primary};
  width: 170px;
  max-width: 100%;
`;
