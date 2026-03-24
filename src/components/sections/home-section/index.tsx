"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Background,
  Container,
  InnerContainer,
  LeftContainer,
  ScrollCue,
  ScrollCueLabel,
  ScrollCueChevron,
  TitleContainer,
  TypographyCustom,
  TypographyTitleCustom,
  HighlightedText,
  SecondLine,
  // CircuitsContainer,
} from "./styles";
import { theme } from "@/helpers/theme";
import {
  HomeBackground,
  FadeInSection,
  // , AnimatedCircuits
} from "@/components";
import { HOME_INTRO_VARIANT } from "@/utils/constants/ui-motion";
import { scrollToSection } from "@/utils/constants/nav-items";

interface HomeSectionProps {
  id: string;
}

const HomeSection = ({ id }: HomeSectionProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [clickedHide, setClickedHide] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateScrollCueVisibility = () => {
      setScrolled(window.scrollY > 60);
    };

    updateScrollCueVisibility();

    const handleScroll = () => {
      updateScrollCueVisibility();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      setClickedHide(false);
    }
  }, [scrolled]);

  const isScrollCueHidden = scrolled || clickedHide;

  return (
    <>
      <Container id={id}>
        <Background>
          <HomeBackground variant={HOME_INTRO_VARIANT} />
        </Background>
        {/* <CircuitsContainer>
          <AnimatedCircuits
            width={160}
            height={240}
            viewBox="0 0 130 110"
            duration={0.5}
            staggerDelay={0.15}
            glowColor={theme.secondary}
            strokeColor={theme.secondary}
            glow={false}
            animateOnView={false}
          />
        </CircuitsContainer> */}

        <InnerContainer>
          <LeftContainer>
            <FadeInSection delay={0.2} direction="up">
              <TitleContainer>
                <TypographyTitleCustom variant="h1" color={theme.white}>
                  Apps y sitios web{" "}
                  <SecondLine>
                    con <HighlightedText>impacto real.</HighlightedText>
                  </SecondLine>
                </TypographyTitleCustom>
              </TitleContainer>
            </FadeInSection>

            <FadeInSection delay={0.4} direction="up">
              <TypographyCustom variant="h4" color={theme.white}>
                En Hardtech trabajamos con diseño atractivo y desarrollo sólido.
              </TypographyCustom>
            </FadeInSection>
          </LeftContainer>
        </InnerContainer>
      </Container>

      {isMounted &&
        createPortal(
          <ScrollCue
            type="button"
            $hidden={isScrollCueHidden}
            aria-label="Explorar el resto de la página"
            onClick={() => {
              setClickedHide(true);
              scrollToSection("services-section");
            }}
          >
            <ScrollCueLabel>Scroll</ScrollCueLabel>
            <ScrollCueChevron $delay={0} />
            <ScrollCueChevron $delay={0.22} />
            <ScrollCueChevron $delay={0.44} />
          </ScrollCue>,
          document.body,
        )}
    </>
  );
};

export default HomeSection;
