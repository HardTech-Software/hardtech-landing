import React from "react";
import { Container, TypographyCustom } from "./styles";
import ProjectCard from "@/components/project-card";
import { projects } from "@/utils/constants/projects";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          url={item.url}
          title={item.title}
          description={item.description}
        />
      ))}
    </Container>
  );
};

export default ProjectsSection;
