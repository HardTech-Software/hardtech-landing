import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const SwiperContainer = styled.div`
  width: 880px;
  height: 325px;
  position: relative;

  @media (max-width: 1024px) {
    width: 680px;
  }
  @media (max-width: 760px) {
    width: 350px;
  }
`;

export const SwiperSlideCustom = styled(SwiperSlide)`
  justify-content: center;
  display: flex;
  background-color: transparent;
  height: 325px;
  @media (max-width: 760px) {
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
  ${({ position }) => (position === "left" ? "left: 90px;" : "right:90px;")}
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

  @media (max-width: 1024px) {
    ${({ position }) => (position === "left" ? "left: -8px;" : "right: -8px;")}
  }

  @media (max-width: 768px) {
    ${({ position }) =>
      position === "left" ? "left: -10px;" : "right: -10px;"}
  }
`;
