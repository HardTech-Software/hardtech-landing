import React from "react";
import {
  ButtonContainer,
  Container,
  DescriptionTextInput,
  InnerContainer,
  LeftContainer,
  RightContainer,
  TextInput,
  TitleContainer,
  TypographyCustom,
  TypographyCustomLeftContainer,
} from "./styles";
import BackgroundSVG from "@/components/background-svg";
import Title from "@/components/title";
import Icon from "@/components/icon";
import { theme } from "@/helpers/theme";
import Button from "@/components/button";

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <TitleContainer>
        <Title title="Contáctate con nosotros" />
      </TitleContainer>
      <InnerContainer>
        <LeftContainer>
          <TypographyCustomLeftContainer
            variant="description3"
            color={theme.white}
          >
            ¿Tienes un proyecto en mente? <b>¡Contáctanos!</b>
          </TypographyCustomLeftContainer>
          <Icon name="logo-home" />
        </LeftContainer>
        <RightContainer>
          <TypographyCustom variant="title4" color={theme.primary}>
            TU CORREO
          </TypographyCustom>
          <TextInput type="text" />
          <TypographyCustom variant="title4" color={theme.primary}>
            ASUNTO
          </TypographyCustom>
          <TextInput type="text" />
          <TypographyCustom variant="title4" color={theme.primary}>
            DESCRIPCIÓN
          </TypographyCustom>
          <DescriptionTextInput />
          <ButtonContainer>
            <Button title="ENVIAR CORREO" variant="secondary" />
          </ButtonContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default ContactSection;
