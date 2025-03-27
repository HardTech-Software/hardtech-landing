import React from "react";
import { CardContainer, Container } from "./styles";
import Typography from "@/components/typography";
import QuestionAnswerCard from "@/components/question-answer-card";
import { questionAnswer } from "@/utils/constants/question-answer";

interface QuestionAnswerSectionProps {
  id: string;
}

const QuestionAnswerSection = ({ id }: QuestionAnswerSectionProps) => {
  return (
    <Container id={id}>
      <Typography variant="h2">Q & A</Typography>
      <CardContainer>
        {questionAnswer.map((item, index) => (
          <QuestionAnswerCard
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default QuestionAnswerSection;
