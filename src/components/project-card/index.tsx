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
  websiteUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  urlDesktop,
  urlmobile,
  websiteUrl,
  appStoreUrl,
  googlePlayUrl,
}: ProjectCardProps) => {
  const handleWebsiteClick = () => {
    if (websiteUrl && websiteUrl !== "#") {
      window.open(websiteUrl, "_blank", "noopener,noreferrer");
    }
  };

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
            <IconButton iconName="app-store" href={appStoreUrl} />
            <IconButton iconName="google-play" href={googlePlayUrl} />
          </DownloadButtonContainer>
        </ContentWrapper>
        <ButtonContainer>
          <ButtonInnerContainer>
            <Button
              variant="secondary"
              title="IR A LA PÁGINA WEB"
              onClick={handleWebsiteClick}
            />
          </ButtonInnerContainer>
          <DownloadButtonContainer className="default-icons">
            <IconButton iconName="app-store" href={appStoreUrl} />
            <IconButton iconName="google-play" href={googlePlayUrl} />
          </DownloadButtonContainer>
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default ProjectCard;
