import { theme } from "@/helpers/theme";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SwiperContainer = styled.div`
  width: 60rem;
  width: 100%;
  height: 20rem;
  // background-color: red;
`;

export const SwiperSlideCustom = styled(SwiperSlide)`
  justify-content: center;
  display: flex;
  background-color: ${theme.background};
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 37rem;
  gap: 20px;
  padding-top: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 30px;
  margin-top: 10px;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DownloadButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
