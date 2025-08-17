import React from "react";
import { Container } from "./styles";

import { MissionSectionData } from "@/utils/constants/information-card";
import { BackgroundSVG, InformationCardSection, Title } from "@/components";

interface MissionSectionProps {
  id: string;
}
const MissionSection = ({ id }: MissionSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <Title title="Visión & misión" />
      <InformationCardSection data={MissionSectionData} />
    </Container>
  );
};

export default MissionSection;
