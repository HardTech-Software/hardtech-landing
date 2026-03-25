import React from "react";
import {
  Container,
  DescriptionContainer,
  AvatarContainer,
  InnerContainer,
  TextTitle,
  IconContainer,
  TitleContainer,
  TextContent,
  TextContent2,
  PriceContent,
  TextContent3,
  Text,
  BottomSection,
  CTAContainer,
  FeatureItem,
  IconContainer2,
} from "./styles";
import Typography from "../../typography";
import { theme } from "@/helpers/theme";
import Icon, { IconName } from "../../icon";
import Button from "@/components/button";
import Image from "next/image";
import { scrollToSection } from "@/utils/constants/nav-items";

export interface InfoCardProps {
  variant?: "right" | "left";
  avatar: string;
  icon: string;
  icon2?: string;
  title?: string;
  description?: string;
  description2?: string;
  price?: string;
  description3?: string;
  text?: string;
  showCTA?: boolean;
  subjectValue: string;
}

const InfoCard = ({
  icon,
  icon2,
  title,
  description,
  avatar,
  description2,
  price,
  description3,
  text,
  showCTA = false,
  subjectValue,
}: InfoCardProps) => {
  const features = description2!
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const handleClick = () => {
    const event = new CustomEvent("setContactSubject", {
      detail: subjectValue,
    });
    window.dispatchEvent(event);
    setTimeout(() => {
      scrollToSection("contact-section");
    }, 80);
  };

  return (
    <Container>
      <InnerContainer className="info-card" onClick={handleClick}>
        <AvatarContainer>
          <Image
            src={avatar}
            width={275}
            height={183}
            alt={title || "Imagen del servicio"}
          />
        </AvatarContainer>

        <DescriptionContainer>
          <TitleContainer>
            <TextTitle>
              <Typography variant="title4" color={theme.background}>
                {title}
              </Typography>
            </TextTitle>
            <IconContainer>
              <Icon name={icon as IconName} />
            </IconContainer>

            <IconContainer2>
              <Icon name={icon2 as IconName} />
            </IconContainer2>
          </TitleContainer>

          <TextContent>
            <Typography variant="description2" color={theme.white2}>
              {description}
            </Typography>
          </TextContent>

          <TextContent2>
            {features.map((line, index) => (
              <FeatureItem key={index}>
                <Icon name="hexa-icon" />
                <Typography variant="description2" color={theme.white2}>
                  {line}
                </Typography>
              </FeatureItem>
            ))}
          </TextContent2>

          <BottomSection>
            {showCTA && (
              <CTAContainer>
                <Button title="COTIZA CON NOSOTROS" variant="secondary" />
              </CTAContainer>
            )}

            <Text>
              <Typography variant="description2" color={theme.white2}>
                {text}
              </Typography>
            </Text>

            <PriceContent>
              <Typography variant="price" color={theme.white}>
                {price}
              </Typography>
            </PriceContent>

            {/* <TextContent3>
              <Typography variant="description3" color={theme.white2}>
                {description3}
              </Typography>
            </TextContent3> */}
          </BottomSection>
        </DescriptionContainer>
      </InnerContainer>
    </Container>
  );
};

export default InfoCard;
