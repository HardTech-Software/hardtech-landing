import React from "react";
import { BottomRow, BlurCircle, Container, GridContainer } from "./styles";
import TeamCard from "../team-card";

const TeamCardSection = () => {
  return (
    <Container>
      <BlurCircle />
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
        <BottomRow>
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
        </BottomRow>
      </GridContainer>
    </Container>
  );
};

export default TeamCardSection;
