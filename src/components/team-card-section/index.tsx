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
        />
        <TeamCard name="ABRAHAM VIDAL" profession="Desarrollador Fullstack" />
        <TeamCard name="BRYAN MONTÉS" profession="Desarrollador Fullstack" />
        <BottomRow>
          <TeamCard name="MATÍAS PADILLA" profession="Ingeniero Comercial" />
          <TeamCard name="MACARENA TECAS" profession="Diseñadora Gráfica" />
        </BottomRow>
      </GridContainer>
    </Container>
  );
};

export default TeamCardSection;
