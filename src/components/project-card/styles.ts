import styled from "styled-components";
import { theme } from "@/helpers/theme";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  background: linear-gradient(
    to bottom,
    ${theme.background} 0%,
    ${theme.background} 60%,
    #1427a4 100%
  );
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 66px clamp(1rem, 5vw, 7rem) 55rem;
  gap: 100px;
  @media ${media.max.xxl} {
    flex-direction: column;
    gap: 30px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 326px;
  gap: 20px;
  @media ${media.max.xxl} {
    max-width: 680px;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${media.max.xxl} and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  @media ${media.max.md} {
    margin-top: 30px;
    width: 100%;
  }
`;

export const ButtonInnerContainer = styled.div`
  width: 210px;
  height: 40px;
`;

export const DownloadButtonContainer = styled.div`
  display: flex;
  gap: 30px;

  &.tablet-icons {
    display: none;
    @media ${media.max.xxl} and (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  &.default-icons {
    display: flex;
    @media ${media.max.xxl} and (min-width: 768px) {
      display: none;
    }
    @media ${media.max.md} {
      gap: 16px;
      justify-content: center;
    }
  }
`;
