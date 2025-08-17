import React, { useState } from "react";
import { Container, InnerContainer } from "./styles";
import { projects } from "@/utils/constants/projects";
import { BackgroundSVG, ProjectCard, Tab, Title } from "@/components";

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  const [activeTab, setActivTab] = useState(0);
  const activeProject = projects[activeTab];
  return (
    <Container id={id}>
      <BackgroundSVG />
      <InnerContainer>
        <Title title="Nuestros proyectos" />
        <Tab activeTab={activeTab} onTabClick={setActivTab} />
        <ProjectCard
          key={activeTab}
          urlDesktop={activeProject.urlDesktop}
          urlmobile={activeProject.urlMobile}
          title={activeProject.title}
          description={activeProject.description}
        />
      </InnerContainer>
    </Container>
  );
};

export default ProjectsSection;
