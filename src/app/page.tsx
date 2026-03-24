"use client";
import {
  ContactSection,
  HomeSection,
  ProjectsSection,
  TeamSection,
  QuoteSection,
  MissionSection,
  ServicesSection,
} from "@/components";
import React from "react";

const Root = () => {
  return (
    <>
      <HomeSection id="home-section" />
      <ServicesSection id="services-section" />
      <ProjectsSection id="projects-section" />
      {/* <TeamSection id="team-section" /> */}
      <MissionSection id="mission-section" />
      <QuoteSection id="quote-section" />
      <ContactSection id="contact-section" />
    </>
  );
};

export default Root;
