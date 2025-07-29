import { theme } from "@/helpers/theme";
import styled from "styled-components";

interface InformationCardProps {
  $variant?: "right" | "left";
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 669px;

  @media (max-width: 1024px) {
    max-width: 645px;
  }
`;

export const TitleContainer = styled.div<InformationCardProps>`
  border-bottom: 4px solid ${theme.primary};
  margin-left: ${({ $variant }) => ($variant === "right" ? "20%" : "0%")};
  margin-right: ${({ $variant }) => ($variant === "right" ? "0%" : "20%")};

  text-align: ${({ $variant }) => ($variant === "right" ? "start" : "end")};

  @media (max-width: 1024px) {
    margin-left: ${({ $variant }) => ($variant === "right" ? "50%" : "0%")};
    margin-right: ${({ $variant }) => ($variant === "right" ? "0%" : "50%")};
  }
`;

export const DescriptionContainer = styled.div<InformationCardProps>`
  padding: ${({ $variant }) =>
    $variant === "right" ? "56px 100px 56px 190px" : "56px 190px 56px 100px"};
  background: ${({ $variant }) =>
    $variant === "right"
      ? `linear-gradient(to left, ${theme.primary} 0%, ${theme.primary} 80%, transparent 100%)`
      : `linear-gradient(to right, ${theme.primary} 0%, ${theme.primary} 80%, transparent 100%)`};

  position: relative;
  text-align: ${({ $variant }) => ($variant === "right" ? "start" : "end")};
  @media (max-width: 1024px) {
    padding: ${({ $variant }) =>
      $variant === "right" ? "34px 32px 34px 320px" : "34px 320px 34px 32px"};
  }
`;

export const ImageContainer = styled.div<InformationCardProps>`
  width: 163px;
  position: absolute;
  right: ${({ $variant }) => ($variant === "right" ? "" : "-40px")};
  left: ${({ $variant }) => ($variant === "right" ? "-40px" : "")};
  bottom: 20px;

  svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    right: ${({ $variant }) => ($variant === "right" ? "" : "100px")};
    left: ${({ $variant }) => ($variant === "right" ? "100px" : "")};
    width: 140px;
  }
`;

export const TopContainer = styled.div<InformationCardProps>`
  background-color: ${theme.primary};
  height: 24px;
  background: ${({ $variant }) =>
    $variant === "right"
      ? `linear-gradient(
          to left,
          rgba(254, 113, 244, 0.6) 0%,
          rgba(254, 113, 244, 0.6) 80%,
          transparent 100%
        )`
      : `linear-gradient(
          to right,
          rgba(254, 113, 244, 0.6) 0%,
          rgba(254, 113, 244, 0.6) 80%,
          transparent 100%
        )`};
`;

export const BottomContainer = styled.div<InformationCardProps>`
  background-color: ${theme.primary};
  height: 10px;
  background: ${({ $variant }) =>
    $variant === "right"
      ? `linear-gradient(
          to left,
          rgba(254, 113, 244, 0.6) 0%,
          rgba(254, 113, 244, 0.6) 80%,
          transparent 100%
        )`
      : `linear-gradient(
          to right,
          rgba(254, 113, 244, 0.6) 0%,
          rgba(254, 113, 244, 0.6) 80%,
          transparent 100%
        )`};
`;
