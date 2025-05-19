import React, { useEffect, useState } from "react";
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
  const [store, setStore] = useState<string | null>(null);

  useEffect(() => {
    const getMobileStore = () => {
      const userAgent = navigator.userAgent || navigator.vendor;

      if (/android/i.test(userAgent)) {
        return "google-play";
      }

      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "app-store";
      }

      return null;
    };

    setStore(getMobileStore());
  }, []);

  return (
    <Container>
      <SwiperComponent urlDesktop={urlDesktop} urlMobile={urlmobile} />
      <ContainerBottom>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="description1">{description}</Typography>
        <ButtonContainer>
          <Button title="IR A LA PÁGINA WEB" />
          {store && (
            <DownloadButtonContainer>
              <IconButton url={store} />
            </DownloadButtonContainer>
          )}
        </ButtonContainer>
      </ContainerBottom>
    </Container>
  );
};

export default ProjectCard;
