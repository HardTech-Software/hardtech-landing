import React from "react";
import {
  AvatarContainer,
  BottomContainer,
  Container,
  InfoContainer,
  TopContainer,
  TypographyCustom,
} from "./styles";
import Typography from "../typography";
import Image from "next/image";

interface TeamCardMobileProps {
  name: string;
  profession: string;
  avatar: string;
}

const TeamCardMobile = ({ name, profession, avatar }: TeamCardMobileProps) => {
  return (
    <Container>
      <InfoContainer>
        <TypographyCustom variant="title2">{name}</TypographyCustom>
        <Typography variant="title3">{profession}</Typography>
      </InfoContainer>
      <TopContainer />
      <BottomContainer />

      <AvatarContainer>
        <Image src={avatar} width={206} height={206} alt="" />
      </AvatarContainer>
    </Container>
  );
};

export default TeamCardMobile;
