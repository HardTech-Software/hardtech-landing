import React from "react";
import { Container, GridContainer } from "./styles";
import TeamCard from "../team-card";
import { useHighlightCenteredCard } from "@/hooks/useHighlightCenteredCard";

const TeamCardSection = () => {

    useHighlightCenteredCard({
      cardSelector: ".info-card",
      threshold: 0.40,
      mobileBreakpoint: 728
    });

  return (
    <Container>
      <GridContainer>
        <TeamCard
          name="NICOLÁS CASTILLO"
          profession="Desarrollador Fullstack"
          avatar="/nicolas.svg"
        />
        <TeamCard
          name="ABRAHAM VIDAL"
          profession="Desarrollador Fullstack"
          avatar="/abraham.svg"
        />
        <TeamCard
          name="BRYAN MONTÉS"
          profession="Desarrollador Fullstack"
          avatar="/bryan.svg"
        />
        <TeamCard
          name="MATÍAS PADILLA"
          profession="Ingeniero Comercial"
          avatar="/matias.svg"
        />
        <TeamCard
          name="MACARENA TECAS"
          profession="Diseñadora Gráfica"
          avatar="/maca.svg"
        />
      </GridContainer>
    </Container>
  );
};

export default TeamCardSection;
