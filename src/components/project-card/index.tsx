import React from "react";
import {
  ButtonContainer,
  CarouselContainer,
  Container,
  ContainerBottom,
  DownloadButtonContainer,
} from "./styles";
import Typography from "../typography";
import Button from "../button";
import IconButton from "../icon-button";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <Container>
      <CarouselContainer />
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
