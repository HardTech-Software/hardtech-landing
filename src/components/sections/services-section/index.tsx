import React from "react";
import { Container } from "./styles";
import { ServicesSectionData } from "@/utils/constants/information-card";
import { BackgroundSVG, InformationCardSection, Title } from "@/components";

interface ServicesSectionProps {
  id: string;
}
const ServicesSection = ({ id }: ServicesSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <Title title="Que ofrecemos" />
      <InformationCardSection data={ServicesSectionData} />
    </Container>
  );
};

export default ServicesSection;
