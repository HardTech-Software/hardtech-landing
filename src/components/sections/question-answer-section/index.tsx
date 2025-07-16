import React from "react";
import {
  CardContainer,
  Container,
  ContainerInner,
  TypographyCustom,
} from "./styles";
import QuestionAnswerCard from "@/components/question-answer-card";
import { questionAnswer } from "@/utils/constants/question-answer";
import BackgroundSVG from "@/components/background-svg";
import { theme } from "@/helpers/theme";

interface QuestionAnswerSectionProps {
  id: string;
}

const QuestionAnswerSection = ({ id }: QuestionAnswerSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <ContainerInner>
        <TypographyCustom variant="h2" color={theme.background}>
          Q & A
        </TypographyCustom>
        <CardContainer>
          {questionAnswer.map((item, index) => (
            <QuestionAnswerCard
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </CardContainer>
      </ContainerInner>
    </Container>
  );
};

export default QuestionAnswerSection;
