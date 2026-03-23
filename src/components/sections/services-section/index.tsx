"use client";
import React, { useEffect, useState } from "react";
import { Container, CTAContainer, TitleSlot } from "./styles";
import { ServicesSectionData } from "@/utils/constants/information-card";
import {
  BackgroundSVG,
  InformationCardSection,
  Title,
  FadeInSection,
} from "@/components";
import Button from "@/components/button";
import { scrollToSection } from "@/utils/constants/nav-items";
import { HOME_INTRO_VARIANT } from "@/utils/constants/ui-motion";

interface ServicesSectionProps {
  id: string;
}
const ServicesSection = ({ id }: ServicesSectionProps) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const updateTopState = () => {
      setIsTop(window.scrollY < 60);
    };

    updateTopState();
    window.addEventListener("scroll", updateTopState, { passive: true });

    return () => window.removeEventListener("scroll", updateTopState);
  }, []);

  return (
    <Container id={id}>
      <BackgroundSVG animateOnMount animationVariant={HOME_INTRO_VARIANT} />
      <TitleSlot $hidden={isTop}>
        <FadeInSection delay={0.1} direction="up">
          <Title title="Que ofrecemos" />
        </FadeInSection>
      </TitleSlot>
      <FadeInSection delay={0.2} direction="up">
        <InformationCardSection data={ServicesSectionData} />
      </FadeInSection>
      <FadeInSection
        delay={0.3}
        direction="up"
        viewportMargin="0px 0px 160px 0px"
      >
        <CTAContainer>
          <Button
            title="COTIZA CON NOSOTROS"
            variant="secondary"
            onClick={() => scrollToSection("contact-section")}
          />
        </CTAContainer>
      </FadeInSection>
    </Container>
  );
};

export default ServicesSection;
