import React, { useState } from "react";
import { Container, InnerContainer } from "./styles";
import { projects } from "@/utils/constants/projects";
import {
  BackgroundSVG,
  ProjectCard,
  Tab,
  Title,
  FadeInSection,
} from "@/components";

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
        <FadeInSection delay={0.1} direction="up">
          <Title title="Nuestros proyectos" />
        </FadeInSection>
        {/* <FadeInSection delay={0.2} direction="up"> */}
        <Tab activeTab={activeTab} onTabClick={setActivTab} />
        {/* </FadeInSection> */}
        {/* <FadeInSection delay={0.3} direction="up"> */}
        <ProjectCard
          key={activeTab}
          urlDesktop={activeProject.urlDesktop}
          urlmobile={activeProject.urlMobile}
          title={activeProject.title}
          subtitle={activeProject.subtitle}
          description={activeProject.description}
          websiteUrl={activeProject.websiteUrl}
          appStoreUrl={activeProject.appStoreUrl}
          googlePlayUrl={activeProject.googlePlayUrl}
        />
        {/* </FadeInSection> */}
      </InnerContainer>
    </Container>
  );
};

export default ProjectsSection;
