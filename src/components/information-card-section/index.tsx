import React from "react";
import InformationCard, { InformationCardProps } from "../information-card";
import { GridContainer, Row, EmptySpace } from "./styles";

interface InformationCardSectionProps {
  data: Omit<InformationCardProps, "variant">[];
}

const InformationCardSection = ({ data }: InformationCardSectionProps) => {
  return (
    <GridContainer>
      {data.map((item, index) => {
        const isRight = index % 2 === 0;

        return (
          <Row key={index} $index={index}>
            {isRight ? (
              <>
                <EmptySpace />
                <InformationCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant="right"
                />
              </>
            ) : (
              <>
                <InformationCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant="left"
                />
                <EmptySpace />
              </>
            )}
          </Row>
        );
      })}
    </GridContainer>
  );
};

export default InformationCardSection;
