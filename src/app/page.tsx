"use client";
import {
  HomeSection,
  ProjectsSection,
  QuestionAnswerSection,
} from "@/components";
import ServicesSection from "@/components/sections/services-section";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeSection id="home-section" />
      <ServicesSection id="services-section" />
      <ProjectsSection id="projects-section" />
      <QuestionAnswerSection id="question-answer-section" />
    </>
  );
};

export default Home;
