import React from "react";
import { Container, Container1, ContainerBottom, ContainerTop } from "./styles";

const REPEAT_COUNT = 30;
const SECTIONS_COUNT = 30;

const Background = () => {
  return (
    <Container>
      {[...Array(SECTIONS_COUNT)].map((_, index) =>
        index % 2 === 0 ? (
          <ContainerTop key={index}>
            {[...Array(REPEAT_COUNT)].map((_, i) => (
              <Container1 key={i} />
            ))}
          </ContainerTop>
        ) : (
          <ContainerBottom key={index}>
            {[...Array(REPEAT_COUNT)].map((_, i) => (
              <Container1 key={i} />
            ))}
          </ContainerBottom>
        )
      )}
    </Container>
  );
};

export default Background;
