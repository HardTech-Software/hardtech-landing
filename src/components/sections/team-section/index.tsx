import React from "react";
import { Container } from "./styles";
import {
  BackgroundSVG,
  TeamCardSection,
  TeamCardSectionMobile,
  Title,
} from "@/components";

interface TeamSectionProps {
  id: string;
}

const TeamSection = ({ id }: TeamSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <Title title="Nuestro equipo" />
      <TeamCardSection />
      <TeamCardSectionMobile />
    </Container>
  );
};

export default TeamSection;
