import React from "react";
import {
  Container,
  DescriptionContainer,
  ImageContainer,
  InnerContainer,
  TitleContainer,
  TextContainer,
} from "./styles";
import Typography from "../typography";
import { theme } from "@/helpers/theme";
import Icon, { IconName } from "../icon";

export interface InformationCardMissionProps {
  variant?: "left" | "right";
  icon: string;
  title: string;
  description: string;
}

const InformationCardMission = ({
  variant = "right",
  icon,
  title,
  description,
}: InformationCardMissionProps) => {
  return (
    <Container>
      <InnerContainer>
        <DescriptionContainer className="info-card" $variant={variant}>
          <ImageContainer $variant={variant}>
            <Icon name={icon as IconName} />
          </ImageContainer>

          <TextContainer $variant={variant}>
            <TitleContainer>
              <Typography variant="title4" color={theme.primary}>
                {title}
              </Typography>
            </TitleContainer>

            <Typography variant="description1" color={theme.white}>
              {description.split("**").map((text, index) =>
                index % 2 === 1 ? (
                  <strong key={index}>{text}</strong>
                ) : (
                  text
                )
              )}
            </Typography>
          </TextContainer>
        </DescriptionContainer>
      </InnerContainer>
    </Container>
  );
};

export default InformationCardMission;