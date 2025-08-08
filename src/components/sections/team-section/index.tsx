import React from "react";
import { Container } from "./styles";
import BackgroundSVG from "@/components/background-svg";
import Title from "@/components/title";
import TeamCardSection from "@/components/team-card-section";

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
