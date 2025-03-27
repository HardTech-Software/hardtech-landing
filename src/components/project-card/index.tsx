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
  url: string[];
}

const ProjectCard = ({ title, description, url }: ProjectCardProps) => {
  return (
    <Container>
      <SwiperComponent url={url} />
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
