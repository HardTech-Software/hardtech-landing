import React from "react";
import InfoCard, { InfoCardProps } from "../info-card";
import { GridContainer, Row } from "./styles";
import { SUBJECT_OPTIONS } from "@/utils/constants/contact-options";
import { useHighlightCenteredCard } from "@/hooks/useHighlightCenteredCard";

interface InfoCardSectionProps {
  data: Omit<InfoCardProps, "variant" | "subjectValue">[];
}

const InfoCardSection = ({ data }: InfoCardSectionProps) => {

    useHighlightCenteredCard({
      cardSelector: ".info-card",
      threshold: 0.40,
      mobileBreakpoint: 728
    });

  return (
    <GridContainer>
      <Row $index={0}>
        {data.map((item, index) => (
          <InfoCard
            key={index}
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
        ))}
      </Row>
    </GridContainer>
  );
};

export default InfoCardSection;
