import React from "react";
import { motion } from "framer-motion";
import { Container, Title, ProjectList, ProjectCard, ProjectTitle, ProjectDesc } from "./Projects.styles";

const dummyProjects = [
  { id: 1, title: "Portfolio Website", description: "My personal portfolio project." },
  { id: 2, title: "Task Manager", description: "A React + TypeScript task manager app." },
  { id: 3, title: "Blog App", description: "A blog application built with React." },
];

const Projects: React.FC = () => {
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }}>
      <Container>
        <Title>My Projects</Title>
        <ProjectList>
          {dummyProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.description}</ProjectDesc>
            </ProjectCard>
          ))}
        </ProjectList>
      </Container>
    </motion.div>
  );
};

export default Projects;
