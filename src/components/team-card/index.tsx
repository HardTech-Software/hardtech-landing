
import React from "react";
import {
  AvatarContainer,
  CardContainer,
  CardShadow,
  InfoContainer,
  InnerContainer,
  TextTitle,
} from "./styles";
import Typography from "../typography";
import { theme } from "@/helpers/theme";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  profession: string;
  avatar: string;
}

const TeamCard = ({ name, profession, avatar }: TeamCardProps) => {
  return (
    <CardShadow className="info-card">
      <CardContainer>
        <InnerContainer>

          <AvatarContainer>
                <Image src={avatar} width={135} height={135} alt={name} />
          </AvatarContainer>

          <InfoContainer>
            <TextTitle>
              <Typography variant="title3" color={theme.primary}>
                {name}
              </Typography>
            </TextTitle>
            <Typography variant="description1" color={theme.primary}>
              {profession}
            </Typography>
          </InfoContainer>

        </InnerContainer>
      </CardContainer>
    </CardShadow>
  );
};

export default TeamCard;