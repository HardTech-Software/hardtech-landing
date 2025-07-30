import React from "react";
import { Container } from "./styles";
import BackgroundSVG from "@/components/background-svg";
import Title from "@/components/title";
import { ServicesSectionData } from "@/utils/constants/information-card";
import InformationCardSection from "@/components/information-card-section";

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
