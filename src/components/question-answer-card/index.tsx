import React from "react";
import Typography from "../typography";
import { Container, TypographyCustom } from "./styles";

interface QuestionAnswerCardProps {
  question: string;
  answer: string;
}

const QuestionAnswerCard = ({ question, answer }: QuestionAnswerCardProps) => {
  return (
    <Container>
      <TypographyCustom variant="title1">{question}</TypographyCustom>
      <Typography>{answer}</Typography>
    </Container>
  );
};

export default QuestionAnswerCard;
