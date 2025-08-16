import React from "react";
import { Container } from "./styles";
import BackgroundSVG from "@/components/background-svg";
import Title from "@/components/title";
import TeamCardSection from "@/components/team-card-section";
import TeamCardSectionMobile from "@/components/team-card-section-mobile";

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
