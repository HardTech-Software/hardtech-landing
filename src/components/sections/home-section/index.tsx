"use client";
import React, { useEffect, useRef, useState } from "react";
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
} from "./styles";
import { theme } from "@/helpers/theme";
import { HomeBackground, FadeInSection } from "@/components";
import { HOME_INTRO_VARIANT } from "@/utils/constants/ui-motion";
import { scrollToSection } from "@/utils/constants/nav-items";

interface HomeSectionProps {
  id: string;
}

const HomeSection = ({ id }: HomeSectionProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [clickedHide, setClickedHide] = useState(false);
  const [topDelayHidden, setTopDelayHidden] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const previousScrolled = useRef(false);
  const topDelayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    if (previousScrolled.current && !scrolled) {
      setTopDelayHidden(true);
      if (topDelayTimeout.current) {
        clearTimeout(topDelayTimeout.current);
      }
      topDelayTimeout.current = setTimeout(() => {
        setTopDelayHidden(false);
      }, 220);
    }

    if (scrolled) {
      setClickedHide(false);
      setTopDelayHidden(false);
      if (topDelayTimeout.current) {
        clearTimeout(topDelayTimeout.current);
      }
    }

    previousScrolled.current = scrolled;

    return () => {
      if (topDelayTimeout.current) {
        clearTimeout(topDelayTimeout.current);
      }
    };
  }, [scrolled]);

  const isScrollCueHidden = scrolled || clickedHide || topDelayHidden;

  return (
    <>
      <Container id={id}>
        <Background>
          <HomeBackground variant={HOME_INTRO_VARIANT} />
        </Background>

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
