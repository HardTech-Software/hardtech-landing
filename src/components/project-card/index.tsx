import React from "react";
import {
  ButtonContainer,
  Container,
  ContainerBottom,
  DownloadButtonContainer,
  SwiperContainer,
  SwiperSlideCustom,
} from "./styles";
import Typography from "../typography";
import Button from "../button";
import IconButton from "../icon-button";
import { Swiper } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <Container>
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
          modules={[EffectCoverflow, Pagination]}
        >
          <SwiperSlideCustom>
            <Image
              src="/prueba.png"
              width={500}
              height={300}
              alt=""
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
            />
          </SwiperSlideCustom>
          <SwiperSlideCustom>
            <Image
              src="/prueba.png"
              width={500}
              height={300}
              alt=""
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
            />
          </SwiperSlideCustom>
          <SwiperSlideCustom>
            <Image
              src="/prueba.png"
              width={500}
              height={300}
              alt=""
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
            />
          </SwiperSlideCustom>
          {/* <SwiperSlideCustom>
            <Image
              src="/monito.png"
              width={500}
              height={300}
              alt=""
              style={{ objectFit: "cover", width: "auto", maxHeight: "20rem" }}
            />
          </SwiperSlideCustom>
          <SwiperSlideCustom>
            <Image
              src="/monito.png"
              width={500}
              height={300}
              alt=""
              style={{ objectFit: "cover", width: "auto", maxHeight: "20rem" }}
            />
          </SwiperSlideCustom> */}
        </Swiper>
      </SwiperContainer>

      <ContainerBottom>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="description">{description}</Typography>
        <ButtonContainer>
          <Button title="IR A LA PÁGINA WEB" />
          <DownloadButtonContainer>
            <IconButton src="app-store" />
            <IconButton src="google-play" />
          </DownloadButtonContainer>
        </ButtonContainer>
      </ContainerBottom>
    </Container>
  );
};

export default ProjectCard;
