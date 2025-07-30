import React from "react";
import {
  BottomContainer,
  Container,
  DescriptionContainer,
  ImageContainer,
  InnerContainer,
  TitleContainer,
  TopContainer,
} from "./styles";
import Typography from "../typography";
import { theme } from "@/helpers/theme";
import Icon, { IconName } from "../icon";

export interface InformationCardProps {
  variant?: "right" | "left";
  icon: string;
  title: string;
  description: string;
}

const InformationCard = ({
  variant = "right",
  icon,
  title,
  description,
}: InformationCardProps) => {
  return (
    <Container>
      <InnerContainer>
        <TitleContainer $variant={variant}>
          <Typography variant="h3" color={theme.primary}>
            {title}
          </Typography>
        </TitleContainer>

        <DescriptionContainer $variant={variant}>
          <Typography>{description}</Typography>

          <ImageContainer $variant={variant}>
            <Icon name={icon as IconName} />
          </ImageContainer>
        </DescriptionContainer>
        <TopContainer $variant={variant} />
        <BottomContainer $variant={variant} />
      </InnerContainer>
    </Container>
  );
};

export default InformationCard;
