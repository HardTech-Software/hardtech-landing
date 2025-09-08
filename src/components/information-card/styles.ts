import { theme } from "@/helpers/theme";
import styled from "styled-components";

interface InformationCardProps {
  $variant?: "right" | "left";
}

export const Container = styled.div`
  margin-top: -180px;

  @media (max-width: 1024px) {
    margin-top: 0px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const TitleContainer = styled.div<InformationCardProps>`
  border-bottom: 4px solid ${theme.primary};
  margin-left: ${({ $variant }) => ($variant === "right" ? "25%" : "0%")};
  margin-right: ${({ $variant }) => ($variant === "right" ? "0%" : "25%")};
  text-align: ${({ $variant }) => ($variant === "right" ? "start" : "end")};

  @media (max-width: 1024px) {
    margin-left: ${({ $variant }) => ($variant === "right" ? "50%" : "0%")};
    margin-right: ${({ $variant }) => ($variant === "right" ? "0%" : "50%")};
  }
`;

export const DescriptionContainer = styled.div<InformationCardProps>`
  height: 160px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: ${({ $variant }) => ($variant === "right" ? "30%" : "0%")};
  padding-right: ${({ $variant }) => ($variant === "right" ? "0%" : "30%")};
  background: ${({ $variant }) =>
    $variant === "right"
      ? `linear-gradient(to left, ${theme.primary} 0%, ${theme.primary} 80%, transparent 100%)`
      : `linear-gradient(to right, ${theme.primary} 0%, ${theme.primary} 80%, transparent 100%)`};
  justify-content: ${({ $variant }) =>
    $variant === "right" ? "flex-start" : "flex-end"};
  text-align: ${({ $variant }) => ($variant === "right" ? "start" : "end")};

  @media (max-width: 1024px) {
    height: 103px;
    padding-left: ${({ $variant }) => ($variant === "right" ? "50%" : "5%")};
    padding-right: ${({ $variant }) => ($variant === "right" ? "5%" : "50%")};
  }
`;

export const ImageContainer = styled.div<InformationCardProps>`
  width: 163px;
  position: absolute;
  bottom: 16px;
  right: ${({ $variant }) => ($variant === "right" ? "" : "-40px")};
  left: ${({ $variant }) => ($variant === "right" ? "-40px" : "")};

  svg {
    width: 163px;
    height: auto;
  }

  @media (max-width: 1024px) {
    width: 140px;
    right: ${({ $variant }) => ($variant === "right" ? "" : "80px")};
    left: ${({ $variant }) => ($variant === "right" ? "80px" : "")};
    bottom: 5px;

    svg {
      width: 140px;
    }
  }

  @media (max-width: 760px) {
    right: ${({ $variant }) => ($variant === "right" ? "" : "20px")};
    left: ${({ $variant }) => ($variant === "right" ? "20px" : "")};
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
