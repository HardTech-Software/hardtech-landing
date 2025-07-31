import React from "react";
import { Container, ContainerInner, IconProject } from "./styles";
import ProjectCard from "@/components/project-card";
import { projects } from "@/utils/constants/projects";
import BackgroundSVG from "@/components/background-svg";

import Title from "@/components/title";

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <ContainerInner>
        <Title title="Nuestros proyectos" />

        <IconProject>
          <div style={{ width: 102, backgroundColor: "purple" }} />
          <div style={{ width: 202, backgroundColor: "yellow" }} />
        </IconProject>

        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            urlDesktop={item.urlDesktop}
            urlmobile={item.urlMobile}
            title={item.title}
            description={item.description}
          />
        ))}
      </ContainerInner>
    </Container>
  );
};

export default ProjectsSection;
