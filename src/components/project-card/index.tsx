import React from "react";
import {
  BottomContainer,
  ButtonContainer,
  ButtonInnerContainer,
  Container,
  ContentWrapper,
  DownloadButtonContainer,
  SubtitleText,
  TextContent,
} from "./styles";
import { theme } from "@/helpers/theme";
import { Button, IconButton, SwiperComponent, Typography } from "..";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  urlDesktop: string[];
  urlmobile: string[];
  websiteUrl: string | null;
  appStoreUrl: string | null;
  googlePlayUrl: string | null;
  lightboxEnabled?: boolean;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  urlDesktop,
  urlmobile,
  websiteUrl,
  appStoreUrl,
  googlePlayUrl,
  lightboxEnabled,
}: ProjectCardProps) => {
  const handleWebsiteClick = () => {
    if (websiteUrl && websiteUrl !== "#") {
      window.open(websiteUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Container>
      <SwiperComponent
        urlDesktop={urlDesktop}
        urlMobile={urlmobile}
        lightboxEnabled={lightboxEnabled}
      />
      <BottomContainer>
        <Typography variant="title2" color={theme.white}>
          {title}
        </Typography>
        <ContentWrapper>
          <TextContent>
            {subtitle && (
              <SubtitleText variant="description1" fontWeight={600}>
                {subtitle}
              </SubtitleText>
            )}
            <Typography variant="description1" color={theme.white}>
              {description}
            </Typography>
          </TextContent>
          <DownloadButtonContainer className="tablet-icons">
            {appStoreUrl && (
              <IconButton iconName="app-store" href={appStoreUrl} />
            )}
            {googlePlayUrl && (
              <IconButton iconName="google-play" href={googlePlayUrl} />
            )}
          </DownloadButtonContainer>
        </ContentWrapper>
        <ButtonContainer>
          <ButtonInnerContainer>
            {websiteUrl ? (
              <Button
                variant="secondary"
                title="IR A LA PÁGINA WEB"
                onClick={handleWebsiteClick}
              />
            ) : (
              <Button variant="secondary" title="Próximamente" disabled />
            )}
          </ButtonInnerContainer>
          <DownloadButtonContainer className="default-icons">
            {appStoreUrl && (
              <IconButton iconName="app-store" href={appStoreUrl} />
            )}
            {googlePlayUrl && (
              <IconButton iconName="google-play" href={googlePlayUrl} />
            )}
          </DownloadButtonContainer>
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default ProjectCard;
