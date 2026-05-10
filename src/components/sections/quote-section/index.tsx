import React from "react";
import { Container } from "./styles";
import { QuoteSectionData } from "@/utils/constants/quote-card";
import {
  BackgroundSVG,
  InfoCardSection,
  Title,
  FadeInSection,
} from "@/components";

interface QuoteSectionProps {
  id: string;
}
const QuoteSection = ({ id }: QuoteSectionProps) => {
  return (
    <Container id={id} aria-labelledby={`${id}-title`}>
      <BackgroundSVG />
      <FadeInSection delay={0.1} direction="up">
        <Title title="Cotiza con nosotros" headingId={`${id}-title`} />
      </FadeInSection>
      <FadeInSection delay={0.2} direction="up">
        <InfoCardSection data={QuoteSectionData} />
      </FadeInSection>
    </Container>
  );
};

export default QuoteSection;
