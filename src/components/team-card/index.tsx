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
import Image from "next/image";

interface TeamCardProps {
  name: string;
  profession: string;
  avatar: string;
}

const TeamCard = ({ name, profession, avatar }: TeamCardProps) => {
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
      <AvatarContainer>
        <Image src={avatar} width={185} height={185} alt="" />
      </AvatarContainer>
    </Container>
  );
};

export default TeamCard;
