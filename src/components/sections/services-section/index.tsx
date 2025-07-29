import React from "react";
import { CardsContainer, Container } from "./styles";
import BackgroundSVG from "@/components/background-svg";
import Title from "@/components/title";
import InformationCard from "@/components/information-card";

interface ServicesSectionProps {
  id: string;
}
const ServicesSection = ({ id }: ServicesSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <Title title="Que ofrecemos" />
      <CardsContainer>
        <InformationCard variant="right" />
        <InformationCard variant="left" />
      </CardsContainer>
    </Container>
  );
};

export default ServicesSection;
