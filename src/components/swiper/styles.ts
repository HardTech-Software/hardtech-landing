import { theme } from "@/helpers/theme";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const SwiperContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  max-height: 20rem;
  overflow: hidden;
`;

export const SwiperSlideCustom = styled(SwiperSlide)`
  justify-content: center;
  display: flex;
  background-color: ${theme.background};
  width: auto;
  max-width: 100%;
  height: auto;
`;

export const ImageSlider = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
