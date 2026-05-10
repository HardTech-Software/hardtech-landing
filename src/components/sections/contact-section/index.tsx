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

interface ContactSectionProps {
  id: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const ContactSection = ({ id }: ContactSectionProps) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    description: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

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

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setSubmitStatus("loading");
    setSubmitMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: selectedSubject,
          description,
          honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setSubmitMessage("¡Mensaje enviado! Nos pondremos en contacto pronto.");
        setEmail("");
        setSelectedSubject("");
        setDescription("");
        setHoneypot("");
        setErrors({ email: "", subject: "", description: "" });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.error ?? "Ocurrió un error. Inténtalo nuevamente.",
        );
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Ocurrió un error de red. Inténtalo nuevamente.");
    }
  };

  return (
    <Container id={id} aria-labelledby={`${id}-title`}>
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
            headingId={`${id}-title`}
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

            <TypographyCustom
              as="label"
              htmlFor="contact-email"
              variant="title3"
              color={theme.primary}
            >
              TU CORREO{" "}
              {errors.email && (
                <span style={{ color: "#ff4444", fontSize: "12px" }}>
                  - {errors.email}
                </span>
              )}
            </TypographyCustom>
            <TextInput
              id="contact-email"
              type="email"
              placeholder="ejemplo@tuempresa.cl"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              style={{ borderColor: errors.email ? "#ff4444" : undefined }}
            />

            <TypographyCustom
              as="label"
              htmlFor="contact-subject"
              variant="title3"
              color={theme.primary}
            >
              SERVICIO{" "}
              {errors.subject && (
                <span style={{ color: "#ff4444", fontSize: "12px" }}>
                  - {errors.subject}
                </span>
              )}
            </TypographyCustom>
            <SelectInput
              id="contact-subject"
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

            <TypographyCustom
              as="label"
              htmlFor="contact-description"
              variant="title3"
              color={theme.primary}
            >
              DESCRIPCIÓN{" "}
              {errors.description && (
                <span style={{ color: "#ff4444", fontSize: "12px" }}>
                  - {errors.description}
                </span>
              )}
            </TypographyCustom>
            <DescriptionTextInput
              id="contact-description"
              placeholder="Cuéntanos qué necesitas, qué problema quieres resolver o qué proyecto tienes en mente..."
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
                title={
                  submitStatus === "loading" ? "ENVIANDO..." : "ENVIAR CORREO"
                }
                variant="secondary"
                onClick={handleSubmit}
                disabled={submitStatus === "loading"}
              />
            </ButtonContainer>

            {/* Hidden honeypot field — must remain empty */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {submitMessage && (
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "14px",
                  textAlign: "center",
                  color: submitStatus === "success" ? "#4caf50" : "#ff4444",
                }}
              >
                {submitMessage}
              </p>
            )}
          </RightContainer>
        </FadeInSection>
      </InnerContainer>
    </Container>
  );
};

export default ContactSection;
