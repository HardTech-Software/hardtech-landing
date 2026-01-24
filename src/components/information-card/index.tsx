import React from "react";
import {
  Container,
  DescriptionContainer,
  ImageContainer,
  InnerContainer,
  TextTitle,
  TextContent,
  ImageContainer2
} from "./styles";
import Typography from "../typography";
import { theme } from "@/helpers/theme";
import Icon, { IconName } from "../icon";
import { scrollToSection } from "@/utils/constants/nav-items";

export interface InformationCardProps {
  variant?: "right" | "left";
  icon: string;
  icon2?: string;
  title: string;
  description: string;
  subjectValue: string;
}

const InformationCard = ({
  variant = "right",
  icon,
  icon2,
  title,
  description,
  subjectValue
}: InformationCardProps) => {
  
  const handleClick = () => {
    const event = new CustomEvent("setContactSubject", { detail: subjectValue });
    window.dispatchEvent(event);
    setTimeout(() => {
      scrollToSection("contact-section");
    }, 80);
  };
  
  return (
    <Container>
      <InnerContainer>
        <DescriptionContainer className="info-card" onClick={handleClick}>
          <ImageContainer>
            <Icon name={icon as IconName} />
          </ImageContainer>
          
          <ImageContainer2>
            <Icon name={icon2 as IconName} />
          </ImageContainer2>

          <TextTitle>
            <Typography variant="title1" color={theme.primary}>
              {title}
            </Typography>
          </TextTitle>

          <TextContent>
            <Typography variant="description1" color={theme.white}>
              {description}
            </Typography>
          </TextContent>
        </DescriptionContainer>
      </InnerContainer>
    </Container>
  );
};

export default InformationCard;
