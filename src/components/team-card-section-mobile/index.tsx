import React from "react";
import { Container, ContainerInner } from "./styles";
import TeamCardMobile from "../team-card-mobile";

const TeamCardSectionMobile = () => {
  return (
    <Container>
      <ContainerInner />
      <TeamCardMobile
        name="NICOLÁS CASTILLO"
        profession="Desarrollador Fullstack"
        avatar="/nicolas.svg"
      />
      <TeamCardMobile
        name="ABRAHAM VIDAL"
        profession="Desarrollador Fullstack"
        avatar="/abraham.svg"
      />
      <TeamCardMobile
        name="BRYAN MONTÉS"
        profession="Desarrollador Fullstack"
        avatar="/bryan.svg"
      />

      <TeamCardMobile
        name="MATÍAS PADILLA"
        profession="Ingeniero Comercial"
        avatar="/matias.svg"
      />
      <TeamCardMobile
        name="MACARENA TECAS"
        profession="Diseñadora Gráfica"
        avatar="/maca.svg"
      />
    </Container>
  );
};

export default TeamCardSectionMobile;
