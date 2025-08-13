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

const TeamCardSectionMobile = () => {
  return (
    <Container>
      <InnerContainer>
        <InfoContainer>
          <TypographyCustom variant="title2">NICOLÁS CASTILLO</TypographyCustom>
          <Typography variant="title3">Desarrollador Fullstack</Typography>
        </InfoContainer>
        <TopContainer />
        <BottomContainer />
      </InnerContainer>
      <AvatarContainer>
        <Image src="/nicolas.svg" width={185} height={185} alt="" />
      </AvatarContainer>
    </Container>
  );
};

export default TeamCardSectionMobile;
