import React from "react";
import {
  BottomContainer,
  ButtonContainer,
  ButtonInnerContainer,
  Container,
  ContentWrapper,
  DownloadButtonContainer,
  TextContent,
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
  return (
    <Container>
      <SwiperComponent urlDesktop={urlDesktop} urlMobile={urlmobile} />
      <BottomContainer>
        <Typography variant="title2" color={theme.white}>
          {title}
        </Typography>
        <ContentWrapper>
          <TextContent>
            <Typography variant="description1" color={theme.white}>
              {description}
            </Typography>
          </TextContent>
          <DownloadButtonContainer className="tablet-icons">
            <IconButton url="app-store" />
            <IconButton url="google-play" />
          </DownloadButtonContainer>
        </ContentWrapper>
        <ButtonContainer>
          <ButtonInnerContainer>
            <Button variant="secondary" title="IR A LA PÁGINA WEB" />
          </ButtonInnerContainer>
          <DownloadButtonContainer className="default-icons">
            <IconButton url="app-store" />
            <IconButton url="google-play" />
          </DownloadButtonContainer>
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default ProjectCard;