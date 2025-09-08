import React from "react";
import { Container } from "./styles";
import Typography from "../typography";

interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return (
    <Container>
      <Typography variant="h2">{title}</Typography>
    </Container>
  );
};

export default Title;
