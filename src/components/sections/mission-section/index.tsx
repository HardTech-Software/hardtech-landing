import React from "react";
import { Container } from "./styles";
import { MissionSectionData } from "@/utils/constants/information-card";
import {
  BackgroundSVG,
  MissionCardsGrid,
  Title,
  FadeInSection,
} from "@/components";

interface MissionSectionProps {
  id: string;
}
const MissionSection = ({ id }: MissionSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <FadeInSection delay={0.1} direction="up">
        <Title title="Visión & misión" />
      </FadeInSection>
      <FadeInSection delay={0.2} direction="up" fullWidth>
        <MissionCardsGrid data={MissionSectionData} />
      </FadeInSection>
    </Container>
  );
};

export default MissionSection;
