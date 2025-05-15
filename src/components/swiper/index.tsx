import React, { useEffect, useRef, useState } from "react";
import { NavButton, SwiperContainer, SwiperSlideCustom } from "./styles";
import { Swiper } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import Icon from "../icon";

interface SwiperComponentProps {
  urlDesktop: string[];
  urlMobile: string[];
}

const SwiperComponent = ({ urlDesktop, urlMobile }: SwiperComponentProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const imagesToShow = (isMobile ? urlMobile : urlDesktop) || [];

  return (
    <SwiperContainer>
      <NavButton ref={prevRef} position="left" $isVisible={activeIndex > 0}>
        <Icon name="chevron-left" />
      </NavButton>

      <NavButton
        ref={nextRef}
        position="right"
        $isVisible={activeIndex < imagesToShow.length - 1}
      >
        <Icon name="chevron-right" />
      </NavButton>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.5}
        spaceBetween={0}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          setSwiperInstance(swiper);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        coverflowEffect={{
          rotate: 0,
          depth: 200,
          stretch: 0,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {imagesToShow.map((url, index) => (
          <SwiperSlideCustom key={index}>
            <Image
              src={url}
              width={isMobile ? 300 : 623}
              height={isMobile ? 300 : 325}
              alt=""
            />
          </SwiperSlideCustom>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperComponent;
