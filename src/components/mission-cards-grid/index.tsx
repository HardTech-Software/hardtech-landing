import React from "react";
import MissionCardLeft from "../mission-card-left";
import MissionCardRight from "../mission-card-right";
import { GridContainer, Row, EmptySpace } from "./styles";
import { useHighlightCenteredCard } from "@/hooks/useHighlightCenteredCard";
import { CardAnimation, StaggerContainer } from "@/components";

interface MissionCardsGridProps {
  data: {
    icon: string;
    title: string;
    description: string;
  }[];
}

const MissionCardsGrid = ({ data }: MissionCardsGridProps) => {
  useHighlightCenteredCard({
    cardSelector: ".info-card",
    threshold: 0.4,
  });

  const mission = data[0];
  const vision = data[1];

  return (
    <GridContainer>
      <StaggerContainer staggerDelay={0.2}>
        {mission && (
          <Row key="mission" $index={0}>
            <>
              <CardAnimation>
                <MissionCardLeft
                  icon={mission.icon}
                  title={mission.title}
                  description={mission.description}
                />
              </CardAnimation>
              <EmptySpace />
            </>
          </Row>
        )}

        {vision && (
          <Row key="vision" $index={1}>
            <>
              <EmptySpace />
              <CardAnimation>
                <MissionCardRight
                  icon={vision.icon}
                  title={vision.title}
                  description={vision.description}
                />
              </CardAnimation>
            </>
          </Row>
        )}
      </StaggerContainer>
    </GridContainer>
  );
};

export default MissionCardsGrid;
