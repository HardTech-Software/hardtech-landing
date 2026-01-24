import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  Container,
  DescriptionTextInput,
  InnerContainer,
  LeftContainer,
  LogoContainer,
  RightContainer,
  TextInput,
  SelectInput,
  TitleContainer,
  TypographyCustom,
  MainTitle,
} from "./styles";
import { theme } from "@/helpers/theme";
import { BackgroundSVG, Button, Icon, Title } from "@/components";
import { SUBJECT_OPTIONS } from "@/utils/constants/contact-options";

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    const handleSetSubject = (event: any) => {
      const subjectValue = event.detail;
      if (subjectValue) {
        setSelectedSubject(subjectValue);
      }
    };

    window.addEventListener("setContactSubject", handleSetSubject);
    return () => {
      window.removeEventListener("setContactSubject", handleSetSubject);
    };
  }, []);

  return (
    <Container id={id}>
      <BackgroundSVG />

      <TitleContainer>
        <Title title="Contáctate con nosotros" />
      </TitleContainer>

      <InnerContainer>
        <LeftContainer>
          <LogoContainer>
            <Icon name="contact-logo" width="296" height="362" />
          </LogoContainer>
        </LeftContainer>

        <RightContainer>
          <MainTitle variant="title5">
            ¿Tienes un proyecto en mente? <strong>¡Contáctanos!</strong>
          </MainTitle>

          <TypographyCustom variant="title3" color={theme.primary}>
            TU CORREO
          </TypographyCustom>
          <TextInput type="email" placeholder="ejemplo@tuempresa.cl" />

          <TypographyCustom variant="title3" color={theme.primary}>
            ASUNTO
          </TypographyCustom>
          <SelectInput
            value={selectedSubject}
            onChange={(e: any) => setSelectedSubject(e.target.value)}
          >
            <option value="" disabled>
              Selecciona una opción...
            </option>
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectInput>

          <TypographyCustom variant="title3" color={theme.primary}>
            DESCRIPCIÓN
          </TypographyCustom>
          <DescriptionTextInput placeholder="Cuéntanos sobre tu proyecto..." />

          <ButtonContainer>
            <Button title="ENVIAR CORREO" variant="secondary" />
          </ButtonContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default ContactSection;
