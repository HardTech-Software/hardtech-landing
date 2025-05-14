import React from "react";
import {
  ButtonContainer,
  Container,
  ContainerBottom,
  DownloadButtonContainer,
} from "./styles";
import Typography from "../typography";
import Button from "../button";
import IconButton from "../icon-button";
import SwiperComponent from "../swiper";

interface ProjectCardProps {
  title: string;
  description: string;
  urlDesktop: string[];
  urlmobile: string[];
}

const ProjectCard = ({
  title,
  description,
  urlDesktop,
  urlmobile,
}: ProjectCardProps) => {
  return (
    <Container>
      <SwiperComponent urlDesktop={urlDesktop} urlMobile={urlmobile} />
      <ContainerBottom>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="description1">{description}</Typography>
        <ButtonContainer>
          <Button title="IR A LA PÁGINA WEB" />
          <DownloadButtonContainer>
            <IconButton url="app-store" />
            <IconButton url="google-play" />
          </DownloadButtonContainer>
        </ButtonContainer>
      </ContainerBottom>
    </Container>
  );
};

export default ProjectCard;
