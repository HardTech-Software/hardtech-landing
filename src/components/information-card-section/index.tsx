import React from "react";
import InformationCard, { InformationCardProps } from "../information-card";
import { GridContainer, Row } from "./styles";
import { SUBJECT_OPTIONS } from "@/utils/constants/contact-options";
import { useHighlightCenteredCard } from "@/hooks/useHighlightCenteredCard";
import { StaggerContainer, CardAnimation } from "@/components";

interface InformationCardSectionProps {
  data: Omit<InformationCardProps, "variant" | "subjectValue">[];
}

const InformationCardSection = ({ data }: InformationCardSectionProps) => {
  useHighlightCenteredCard({
    cardSelector: ".info-card",
    threshold: 0.5,
    mobileBreakpoint: 728,
  });

  return (
    <GridContainer>
      <StaggerContainer staggerDelay={0.15}>
        <Row $index={0}>
          {data.map((item, index) => (
            <CardAnimation key={index}>
              <InformationCard
                icon={item.icon}
                icon2={item.icon2}
                title={item.title}
                description={item.description}
                variant={index % 2 === 0 ? "right" : "left"}
                subjectValue={SUBJECT_OPTIONS[index]?.value || ""}
              />
            </CardAnimation>
          ))}
        </Row>
      </StaggerContainer>
    </GridContainer>
  );
};

export default InformationCardSection;
