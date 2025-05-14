import React from "react";
import {
  Container,
  ContainerInner,
  TypographyContainer,
  TypographyCustomWrapper,
  TypographyPrimary,
  TypographySecondary,
} from "./styles";
import ProjectCard from "@/components/project-card";
import { projects } from "@/utils/constants/projects";
import BackgroundSVG from "@/components/background-svg";

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  return (
    <Container id={id}>
      <BackgroundSVG />
      <ContainerInner>
        <TypographyContainer>
          <TypographyPrimary variant="h2">Nuestros Proyectos</TypographyPrimary>
        </TypographyContainer>

        <TypographyCustomWrapper>
          <TypographySecondary variant="h2">Nuestros</TypographySecondary>
          <TypographySecondary variant="h2">Proyectos</TypographySecondary>
        </TypographyCustomWrapper>

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
