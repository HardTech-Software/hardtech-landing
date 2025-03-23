import React from "react";
import { Container } from "./styles";
import Typography from "@/components/typography";

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  return (
    <Container id={id}>
      <Typography variant="h2">Nuestros Proyectos</Typography>
    </Container>
  );
};

export default ProjectsSection;
