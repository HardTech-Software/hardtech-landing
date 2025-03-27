import React from "react";
import { ImageSlider, SwiperContainer, SwiperSlideCustom } from "./styles";
import { Swiper } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

interface SwiperComponentProps {
  url: string[];
}

const SwiperComponent = ({ url }: SwiperComponentProps) => {
  return (
    <SwiperContainer>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
      >
        {url.map((imageUrl, index) => (
          <SwiperSlideCustom key={index}>
            <ImageSlider>
              <Image src={imageUrl} width={500} height={300} alt="" />
            </ImageSlider>
          </SwiperSlideCustom>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperComponent;
