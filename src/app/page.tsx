"use client";
import {
  ContactSection,
  HomeSection,
  ProjectsSection,
  TeamSection,
} from "@/components";
import MissionSection from "@/components/sections/mission-section";
import ServicesSection from "@/components/sections/services-section";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeSection id="home-section" />
      <ServicesSection id="services-section" />
      <ProjectsSection id="projects-section" />
      <TeamSection id="team-section" />
      <MissionSection id="mission-section" />
      <ContactSection id="contact-section" />
    </>
  );
};

export default Home;
