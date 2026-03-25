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
import {
  BackgroundSVG,
  Button,
  Icon,
  Title,
  FadeInSection,
} from "@/components";
import { SUBJECT_OPTIONS } from "@/utils/constants/contact-options";
import { Constants } from "@/utils/constants/constants";

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    description: "",
  });

  useEffect(() => {
    const handleSetSubject = (event: CustomEvent<string>) => {
      const subjectValue = event.detail;
      if (subjectValue) {
        setSelectedSubject(subjectValue);
        setErrors((prev) => ({ ...prev, subject: "" }));
      }
    };

    window.addEventListener(
      "setContactSubject",
      handleSetSubject as EventListener,
    );
    return () => {
      window.removeEventListener(
        "setContactSubject",
        handleSetSubject as EventListener,
      );
    };
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors = { email: "", subject: "", description: "" };
    let isValid = true;

    if (!email.trim()) {
      newErrors.email = "El correo es requerido";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "El correo no es válido";
      isValid = false;
    }

    if (!selectedSubject) {
      newErrors.subject = "Debes seleccionar un asunto";
      isValid = false;
    }

    if (!description.trim()) {
      newErrors.description = "La descripción es requerida";
      isValid = false;
    } else if (description.trim().length < 10) {
      newErrors.description =
        "La descripción debe tener al menos 10 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    // Construir el mailto link con los datos del formulario
    const subject = encodeURIComponent(selectedSubject);
    const body = encodeURIComponent(
      `Correo del cliente: ${email}\n\nAsunto: ${selectedSubject}\n\nDescripción:\n${description}`,
    );

    window.location.href = `mailto:${Constants.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Container id={id}>
      <BackgroundSVG />

      <FadeInSection delay={0.1} direction="up">
        <TitleContainer>
          <Title
            title={
              <>
                Contáctate
                <br />
                con nosotros
              </>
            }
          />
        </TitleContainer>
      </FadeInSection>

      <InnerContainer>
        <FadeInSection delay={0.2} direction="left">
          <LeftContainer>
            <LogoContainer>
              <Icon name="contact-logo" width="296" height="362" />
            </LogoContainer>
          </LeftContainer>
        </FadeInSection>

        <FadeInSection delay={0.3} direction="right">
          <RightContainer>
            <MainTitle variant="title5">
              ¿Tienes un proyecto en mente? <strong>¡Contáctanos!</strong>
            </MainTitle>

            <TypographyCustom variant="title3" color={theme.primary}>
              TU CORREO{" "}
              {errors.email && (
                <span style={{ color: "#ff4444", fontSize: "12px" }}>
                  - {errors.email}
                </span>
              )}
            </TypographyCustom>
            <TextInput
              type="email"
              placeholder="ejemplo@tuempresa.cl"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              style={{ borderColor: errors.email ? "#ff4444" : undefined }}
            />

            <TypographyCustom variant="title3" color={theme.primary}>
              ASUNTO{" "}
              {errors.subject && (
                <span style={{ color: "#ff4444", fontSize: "12px" }}>
                  - {errors.subject}
                </span>
              )}
            </TypographyCustom>
            <SelectInput
              value={selectedSubject}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setSelectedSubject(e.target.value);
                setErrors((prev) => ({ ...prev, subject: "" }));
              }}
              style={{ borderColor: errors.subject ? "#ff4444" : undefined }}
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
              DESCRIPCIÓN{" "}
              {errors.description && (
                <span style={{ color: "#ff4444", fontSize: "12px" }}>
                  - {errors.description}
                </span>
              )}
            </TypographyCustom>
            <DescriptionTextInput
              placeholder="Cuéntanos sobre tu proyecto..."
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setDescription(e.target.value);
                setErrors((prev) => ({ ...prev, description: "" }));
              }}
              style={{
                borderColor: errors.description ? "#ff4444" : undefined,
              }}
            />

            <ButtonContainer>
              <Button
                title="ENVIAR CORREO"
                variant="secondary"
                onClick={handleSubmit}
              />
            </ButtonContainer>
          </RightContainer>
        </FadeInSection>
      </InnerContainer>
    </Container>
  );
};

export default ContactSection;
