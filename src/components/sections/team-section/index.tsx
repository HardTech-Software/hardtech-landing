import React from "react";
import { Container } from "./styles";
import { BackgroundSVG, TeamCardSection, Title } from "@/components";

interface TeamSectionProps {
  id: string;
}

const TeamSection = ({ id }: TeamSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <Title title="Nuestro equipo" />
      <TeamCardSection />
    </Container>
  );
};

export default TeamSection;
