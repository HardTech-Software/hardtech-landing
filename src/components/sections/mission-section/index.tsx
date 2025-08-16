import React from "react";
import { Container } from "./styles";
import BackgroundSVG from "@/components/background-svg";
import Title from "@/components/title";
import InformationCardSection from "@/components/information-card-section";
import { MissionSectionData } from "@/utils/constants/information-card";

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
