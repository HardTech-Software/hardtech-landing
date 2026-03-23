import React from "react";
import InfoCard, { InfoCardProps } from "../info-card";
import { GridContainer, Row } from "./styles";
import { SUBJECT_OPTIONS } from "@/utils/constants/contact-options";
import { useHighlightCenteredCard } from "@/hooks/useHighlightCenteredCard";
import { StaggerContainer, CardAnimation } from "@/components";

interface InfoCardSectionProps {
  data: Omit<InfoCardProps, "variant" | "subjectValue">[];
}

const InfoCardSection = ({ data }: InfoCardSectionProps) => {
  useHighlightCenteredCard({
    cardSelector: ".info-card",
    threshold: 0.4,
    mobileBreakpoint: 728,
  });

  return (
    <GridContainer>
      <StaggerContainer staggerDelay={0.15}>
        <Row $index={0}>
          {data.map((item, index) => (
            <CardAnimation key={index}>
              <InfoCard
                avatar={item.avatar}
                icon={item.icon}
                icon2={item.icon2}
                title={item.title}
                description={item.description}
                description2={item.description2}
                price={item.price}
                description3={item.description3}
                text={item.text}
                variant={index % 2 === 0 ? "right" : "left"}
                showCTA={index === 0}
                subjectValue={SUBJECT_OPTIONS[index]?.value || ""}
              />
            </CardAnimation>
          ))}
        </Row>
      </StaggerContainer>
    </GridContainer>
  );
};

export default InfoCardSection;
