import React from "react";
import {
  Container,
  ContainerHex,
  ContainerBottom,
  ContainerTop,
} from "./styles";

const REPEAT_COUNT = 30;
const SECTIONS_COUNT = 15;

const Background = () => {
  return (
    <Container>
      {[...Array(SECTIONS_COUNT)].map((_, index) =>
        index % 2 === 0 ? (
          <ContainerTop key={index}>
            {[...Array(REPEAT_COUNT)].map((_, i) => (
              <ContainerHex key={i} />
            ))}
          </ContainerTop>
        ) : (
          <ContainerBottom key={index}>
            {[...Array(REPEAT_COUNT)].map((_, i) => (
              <ContainerHex key={i} />
            ))}
          </ContainerBottom>
        )
      )}
    </Container>
  );
};

export default Background;
