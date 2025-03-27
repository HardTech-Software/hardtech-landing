"use client";
import {
  Background,
  HomeSection,
  ProjectsSection,
  QuestionAnswerSection,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeSection id="home-section" />
      <ProjectsSection id="projects-section" />
      <QuestionAnswerSection id="question-answer-section" />
    </>
  );
};

export default Home;
