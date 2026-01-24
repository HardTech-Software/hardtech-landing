import React from "react";
import { Container } from "./styles";
import { QuoteSectionData } from "@/utils/constants/quote-card";
import { BackgroundSVG, InfoCardSection, Title } from "@/components";

interface QuoteSectionProps {
  id: string;
}
const QuoteSection = ({ id }: QuoteSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <Title title="Cotiza con nosotros" />
      <InfoCardSection data={QuoteSectionData} />
    </Container>
  );
};

export default QuoteSection;
