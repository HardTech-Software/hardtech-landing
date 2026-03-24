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
import useIsMobile from "@/hooks/use-is-mobile";

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
  const { isMobile } = useIsMobile();

  const mobileIconWidth = "77px";
  const mobileIconHeight = "105px";

  const currentIconWidth = isMobile ? mobileIconWidth : undefined;
  const currentIconHeight = isMobile ? mobileIconHeight : undefined;

  return (
    <Container>
      <InnerContainer>
        <DescriptionContainer className="info-card">
          <RelativeImageContainer>
            <ImageContainer>
              <Icon
                name={icon as IconName}
                width={currentIconWidth}
                height={currentIconHeight}
              />
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
              style={{ flex: 1, paddingTop: isMobile ? "5px" : undefined }}
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
