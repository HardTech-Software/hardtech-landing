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
import Icon from "../icon";

interface InformationCardProps {
  variant?: "right" | "left";
}

const InformationCard = ({ variant = "right" }: InformationCardProps) => {
  return (
    <Container>
      <InnerContainer>
        <TitleContainer $variant={variant}>
          <Typography variant="h3" color={theme.primary}>
            APP
          </Typography>
        </TitleContainer>

        <DescriptionContainer $variant={variant}>
          <Typography>
            Diseño y desarrollo de aplicaciones mobile android e ios.
          </Typography>

          <ImageContainer $variant={variant}>
            <Icon name="app-icon" />
          </ImageContainer>
        </DescriptionContainer>
        <TopContainer $variant={variant} />
        <BottomContainer $variant={variant} />
      </InnerContainer>
    </Container>
  );
};

export default InformationCard;
