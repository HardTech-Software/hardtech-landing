import React from "react";
import {
  AvatarContainer,
  BottomContainer,
  Container,
  InfoContainer,
  InnerContainer,
  TopContainer,
  TypographyCustom,
} from "./styles";
import Typography from "../typography";

interface TeamCardProps {
  name: string;
  profession: string;
}

const TeamCard = ({ name, profession }: TeamCardProps) => {
  return (
    <Container>
      <InnerContainer>
        <InfoContainer>
          <TypographyCustom variant="title2">{name}</TypographyCustom>
          <Typography variant="title3">{profession}</Typography>
        </InfoContainer>
        <TopContainer />
        <BottomContainer />
      </InnerContainer>
      <AvatarContainer></AvatarContainer>
    </Container>
  );
};

export default TeamCard;
