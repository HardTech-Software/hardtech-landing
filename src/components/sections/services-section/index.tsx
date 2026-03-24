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
  const [viewport, setViewport] = useState({ width: 375, height: 667 });

  useEffect(() => {
    const updateTopState = () => {
      setIsTop(window.scrollY < 60);
    };

    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    updateTopState();
    updateViewport();
    window.addEventListener("scroll", updateTopState, { passive: true });
    window.addEventListener("resize", updateViewport, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateTopState);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return (
    <Container
      id={id}
      $viewportWidth={viewport.width}
      $viewportHeight={viewport.height}
    >
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
