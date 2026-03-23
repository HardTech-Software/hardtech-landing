import React from "react";
import { Container, GridContainer } from "./styles";
import TeamCard from "../team-card";
import { useHighlightCenteredCard } from "@/hooks/useHighlightCenteredCard";
import { StaggerContainer, CardAnimation } from "@/components";

const TeamCardSection = () => {
  useHighlightCenteredCard({
    cardSelector: ".info-card",
    threshold: 0.4,
    mobileBreakpoint: 728,
  });

  return (
    <Container>
      <StaggerContainer staggerDelay={0.12}>
        <GridContainer>
          <CardAnimation>
            <TeamCard
              name="NICOLÁS CASTILLO"
              profession="Desarrollador Fullstack"
              avatar="/nicolas.svg"
            />
          </CardAnimation>
          <CardAnimation>
            <TeamCard
              name="ABRAHAM VIDAL"
              profession="Desarrollador Fullstack"
              avatar="/abraham.svg"
            />
          </CardAnimation>
          <CardAnimation>
            <TeamCard
              name="BRYAN MONTÉS"
              profession="Desarrollador Fullstack"
              avatar="/bryan.svg"
            />
          </CardAnimation>
          <CardAnimation>
            <TeamCard
              name="MATÍAS PADILLA"
              profession="Ingeniero Comercial"
              avatar="/matias.svg"
            />
          </CardAnimation>
          <CardAnimation>
            <TeamCard
              name="MACARENA TECAS"
              profession="Diseñadora Gráfica"
              avatar="/maca.svg"
            />
          </CardAnimation>
        </GridContainer>
      </StaggerContainer>
    </Container>
  );
};

export default TeamCardSection;
