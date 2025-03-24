import React from "react";
import { Container, TypographyCustom } from "./styles";
import ProjectCard from "@/components/project-card";
import { projects } from "@/utils/constants";

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  return (
    <Container id={id}>
      <TypographyCustom variant="h2">Nuestros Proyectos</TypographyCustom>
      {projects.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </Container>
  );
};

export default ProjectsSection;
