import React from "react";
import { Container, LogoContainer } from "./styles";
import { projects } from "@/utils/constants/projects";
import Icon, { IconName } from "../icon";

interface TabProps {
  activeTab: number;
  onTabClick: (index: number) => void;
}

const Tab = ({ activeTab, onTabClick }: TabProps) => {
  return (
    <Container>
      {projects.map((item, index) => (
        <LogoContainer
          key={index}
          onClick={() => onTabClick(index)}
          style={{ opacity: activeTab === index ? 1 : 0.4 }}
        >
          <Icon name={item.logo as IconName} width="100%" height="100%" />
        </LogoContainer>
      ))}
    </Container>
  );
};

export default Tab;
