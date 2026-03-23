import React from "react";
import InformationCardMission, {
  InformationCardMissionProps,
} from "../information-card-mission";
import { GridContainer, Row, EmptySpace } from "./styles";
import { useHighlightCenteredCard } from "@/hooks/useHighlightCenteredCard";
import { CardAnimation, StaggerContainer } from "@/components";

interface InformationCardMission2Props {
  data: Omit<InformationCardMissionProps, "variant">[];
}

const InformationCardMission2 = ({ data }: InformationCardMission2Props) => {
  useHighlightCenteredCard({
    cardSelector: ".info-card",
    threshold: 0.4,
  });

  return (
    <GridContainer>
      <StaggerContainer staggerDelay={0.2}>
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <Row key={index} $index={index}>
              {isLeft ? (
                <>
                  <CardAnimation>
                    <InformationCardMission
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      variant="left"
                    />
                  </CardAnimation>
                  <EmptySpace />
                </>
              ) : (
                <>
                  <EmptySpace />
                  <CardAnimation>
                    <InformationCardMission
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      variant="right"
                    />
                  </CardAnimation>
                </>
              )}
            </Row>
          );
        })}
      </StaggerContainer>
    </GridContainer>
  );
};

export default InformationCardMission2;
