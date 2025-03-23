import React from "react";
import { Container } from "./styles";
import Typography from "@/components/typography";

interface QuestionAnswerSectionProps {
  id: string;
}

const QuestionAnswerSection = ({ id }: QuestionAnswerSectionProps) => {
  return (
    <Container id={id}>
      <Typography variant="h2">Q & A</Typography>
    </Container>
  );
};

export default QuestionAnswerSection;
