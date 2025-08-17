import React, { useEffect, useState } from "react";
import {
  BottomContainer,
  ButtonContainer,
  ButtonInnerContainer,
  Container,
  DownloadButtonContainer,
} from "./styles";
import { theme } from "@/helpers/theme";
import { Button, IconButton, SwiperComponent, Typography } from "..";

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
      <BottomContainer>
        <Typography variant="h2" color={theme.white}>
          {title}
        </Typography>
        <Typography variant="description2" color={theme.white}>
          {description}
        </Typography>
        <ButtonContainer>
          <ButtonInnerContainer>
            <Button variant="secondary" title="IR A LA PÁGINA WEB" />
          </ButtonInnerContainer>
          {store && (
            <DownloadButtonContainer>
              <IconButton url={store} />
            </DownloadButtonContainer>
          )}
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default ProjectCard;
