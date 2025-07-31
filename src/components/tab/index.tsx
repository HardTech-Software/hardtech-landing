import React from "react";
import { Container, LogoContainer } from "./styles";
import Image from "next/image";

const Tab = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src="/patitas-logo.svg" width={54} height={50} alt="" />
      </LogoContainer>
      <LogoContainer>
        <Image src="/patitas-logo.svg" width={149} height={50} alt="" />
      </LogoContainer>
    </Container>
  );
};

export default Tab;
