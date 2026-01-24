import React from "react";
import { Container, CTAContainer } from "./styles";
import { ServicesSectionData } from "@/utils/constants/information-card";
import { BackgroundSVG, InformationCardSection, Title } from "@/components";
import Button from "@/components/button";
import { scrollToSection } from "@/utils/constants/nav-items";

interface ServicesSectionProps {
  id: string;
}
const ServicesSection = ({ id }: ServicesSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <Title title="Que ofrecemos" />
      <InformationCardSection data={ServicesSectionData} />
      <CTAContainer>
        <Button
          title="COTIZA CON NOSOTROS"
          variant="secondary"
          onClick={() => scrollToSection("contact-section")}
        />
      </CTAContainer>
    </Container>
  );
};

export default ServicesSection;
