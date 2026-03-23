import React from "react";
import { Container } from "./styles";
import {
  BackgroundSVG,
  TeamCardSection,
  Title,
  FadeInSection,
} from "@/components";

interface TeamSectionProps {
  id: string;
}

const TeamSection = ({ id }: TeamSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <FadeInSection delay={0.1} direction="up">
        <Title title="Nuestro equipo" />
      </FadeInSection>
      <FadeInSection delay={0.2} direction="up">
        <TeamCardSection />
      </FadeInSection>
    </Container>
  );
};

export default TeamSection;
