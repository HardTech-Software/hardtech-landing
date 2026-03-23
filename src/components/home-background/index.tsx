import React from "react";
import { BlurCircle1, BlurCircle2, Container } from "./styles";
import { IntroAnimationVariant } from "@/utils/constants/ui-motion";

interface HomeBackgroundProps {
  variant?: IntroAnimationVariant;
}

const HomeBackground = ({ variant = "subtle" }: HomeBackgroundProps) => {
  return (
    <Container>
      <BlurCircle1 $variant={variant} />
      <BlurCircle2 $variant={variant} />
    </Container>
  );
};

export default HomeBackground;
