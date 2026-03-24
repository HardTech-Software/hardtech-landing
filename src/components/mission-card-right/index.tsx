import React from "react";
import {
  Container,
  DescriptionContainer,
  ImageContainer,
  InnerContainer,
  RelativeImageContainer,
  TextContainer,
  TitleContainer,
} from "./styles";
import Typography from "../typography";
import { theme } from "@/helpers/theme";
import Icon, { IconName } from "../icon";

export interface MissionCardRightProps {
  icon: string;
  title: string;
  description: string;
}

const MissionCardRight = ({
  icon,
  title,
  description,
}: MissionCardRightProps) => {
  return (
    <Container>
      <InnerContainer>
        <DescriptionContainer className="info-card">
          <RelativeImageContainer>
            <ImageContainer>
              <Icon name={icon as IconName} />
            </ImageContainer>
          </RelativeImageContainer>

          <TextContainer>
            <TitleContainer>
              <Typography variant="title4" color={theme.primary}>
                {title}
              </Typography>
            </TitleContainer>

            <Typography
              variant="description1"
              color={theme.white}
              fontWeight={200}
            >
              {description}
            </Typography>
          </TextContainer>
        </DescriptionContainer>
      </InnerContainer>
    </Container>
  );
};

export default MissionCardRight;
