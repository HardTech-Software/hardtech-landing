import React from "react";
import InformationCardMission, { InformationCardMissionProps } from "../information-card-mission";
import { GridContainer, Row, EmptySpace } from "./styles";
import { useHighlightCenteredCard } from "@/hooks/useHighlightCenteredCard";

interface InformationCardMission2Props {
  data: Omit<InformationCardMissionProps, "variant">[];
}

const InformationCardMission2 = ({ data }: InformationCardMission2Props) => {

    useHighlightCenteredCard({
      cardSelector: ".info-card",
      threshold: 0.40,
    });

  return (
    <GridContainer>
      {data.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <Row key={index} $index={index}>
            {isLeft ? (
              <>
                <InformationCardMission
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant="left" 
                />
                <EmptySpace />
              </>
            ) : (
              <>
                <EmptySpace />
                <InformationCardMission
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant="right"
                />
              </>
            )}
          </Row>
        );
      })}
    </GridContainer>
  );
};

export default InformationCardMission2;