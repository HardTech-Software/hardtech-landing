/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from "react";
import {
  NavButton,
  SlideImageTrigger,
  SwiperContainer,
  SwiperSlideCustom,
} from "./styles";
import { Swiper } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import Icon from "../icon";
import ImageLightbox from "../image-lightbox";

interface SwiperComponentProps {
  urlDesktop: string[];
  urlMobile: string[];
  lightboxEnabled?: boolean;
}

const SwiperComponent = ({
  urlDesktop,
  urlMobile,
  lightboxEnabled = false,
}: SwiperComponentProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const imagesToShow = (isMobile ? urlMobile : urlDesktop) || [];

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
          // @ts-expect-error
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error
          swiper.params.navigation.nextEl = nextRef.current;
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
            {lightboxEnabled ? (
              <SlideImageTrigger
                type="button"
                onClick={() => openLightboxAt(index)}
                aria-label={`Ver captura ${index + 1} en pantalla completa`}
              >
                {isMobile ? (
                  <div
                    style={{
                      width: 320,
                      height: 300,
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#000",
                    }}
                  >
                    {/* Background blur */}
                    <Image
                      src={url}
                      alt=""
                      fill
                      aria-hidden
                      sizes="320px"
                      style={{
                        objectFit: "cover",
                        filter: "blur(15px)",
                        transform: "scale(1)",

                        // opacity: 0.35,
                      }}
                    />

                    {/* Dark overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2))",
                        zIndex: 1,
                      }}
                    />

                    {/* Main image */}
                    <Image
                      src={url}
                      alt={`Captura de pantalla ${index + 1} del proyecto`}
                      width={320}
                      height={300}
                      style={{
                        objectFit: "contain",
                        height: "auto",
                        width: "100%",
                        position: "relative",
                        zIndex: 2,
                      }}
                    />
                  </div>
                ) : (
                  <Image
                    src={url}
                    alt={`Captura de pantalla ${index + 1} del proyecto`}
                    width={isMobile ? 320 : 623}
                    height={isMobile ? 300 : 325}
                  />
                )}
              </SlideImageTrigger>
            ) : (
              <Image
                src={url}
                width={isMobile ? 300 : 623}
                height={isMobile ? 300 : 325}
                alt={`Captura de pantalla ${index + 1} del proyecto`}
              />
            )}
          </SwiperSlideCustom>
        ))}
      </Swiper>
      {lightboxEnabled && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={imagesToShow}
          activeIndex={lightboxIndex}
          onActiveIndexChange={setLightboxIndex}
        />
      )}
    </SwiperContainer>
  );
};

export default SwiperComponent;
