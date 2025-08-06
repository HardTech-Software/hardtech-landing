import React, { useState } from "react";
import { Container, ContainerInner } from "./styles";
import ProjectCard from "@/components/project-card";
import { projects } from "@/utils/constants/projects";
import BackgroundSVG from "@/components/background-svg";

import Title from "@/components/title";
import Tab from "@/components/tab";

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  const [activeTab, setActivTab] = useState(0);
  const activeProject = projects[activeTab];
  return (
    <Container id={id}>
      <BackgroundSVG />
      <ContainerInner>
        <Title title="Nuestros proyectos" />

        <Tab activeTab={activeTab} onTabClick={setActivTab} />

        <ProjectCard
          urlDesktop={activeProject.urlDesktop}
          urlmobile={activeProject.urlMobile}
          title={activeProject.title}
          description={activeProject.description}
        />
      </ContainerInner>
    </Container>
  );
};

export default ProjectsSection;
