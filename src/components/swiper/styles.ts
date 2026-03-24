import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { media } from "@/utils/constants/breakpoints";

export const SwiperContainer = styled.div`
  width: 680px;
  height: 325px;
  position: relative;

  @media ${media.max.md} {
    width: 350px;
  }
`;

export const SwiperSlideCustom = styled(SwiperSlide)`
  justify-content: center;
  display: flex;
  background-color: transparent;
  height: 325px;

  @media ${media.max.md} {
    height: 300px;
  }
`;

export const NavButton = styled.button<{
  position: "left" | "right";
  $isVisible: boolean;
}>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  ${({ position }) => (position === "left" ? "left: -5px;" : "right:-5px;")}
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media ${media.max.lg} {
    ${({ position }) => (position === "left" ? "left: -8px;" : "right: -8px;")}
  }

  @media ${media.max.md} {
    ${({ position }) =>
      position === "left" ? "left: -10px;" : "right: -10px;"}
  }
`;
