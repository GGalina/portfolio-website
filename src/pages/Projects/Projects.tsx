import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Project } from "project";
import {
  Container,
  Title,
  ProjectList,
  Card,
  CardContent,
  ProjectImage,
  ProjectName,
  ProjectType,
  Icons,
  IconLink,
  HoverContent,
  Description,
  TechList,
  TechItem,
} from "./Projects.styles";

// Assets imports
import GitHubIcon from "../../assets/techSvg/Utills/github.svg";
import WebsiteIcon from "../../assets/techSvg/www.svg";
import LearnLingoMockup from "../../assets/mockups/LearnLingo.webp";
import CocktailsMockup from "../../assets/mockups/Cocktails.webp";
import FoodStaMockup from "../../assets/mockups/Foodsta.webp";
import WebStudioMockup from "../../assets/mockups/WebStudio.webp";

const myProjects: Project[] = [
  {
    id: 1,
    title: "LearnLingo",
    descriptionKey: "projects.learnLingo.description",
    typeKey: "projects.learnLingo.type",
    image: LearnLingoMockup,
    technologies: ["React", "React Context", "React-responsive", "Styled-components", "Firebase"],
    github: "https://github.com/GGalina/LearnLingo.git",
    live: "https://ggalina.github.io/LearnLingo/",
  },
  {
    id: 2,
    title: "Cocktails",
    descriptionKey: "projects.cocktails.description",
    typeKey: "projects.cocktails.type",
    image: CocktailsMockup,
    technologies: ["HTML", "JavaScript", "SASS", "REST API", "Adaptive Design"],
    github: "https://github.com/GGalina/Cocktails.git",
    live: "https://ggalina.github.io/Cocktails",
  },
  {
    id: 3,
    title: "Foodsta",
    descriptionKey: "projects.foodsta.description",
    typeKey: "projects.foodsta.type",
    image: FoodStaMockup,
    technologies: ["HTML", "CSS", "SASS", "BEM", "JavaScript", "Adaptive Design"],
    github: "https://github.com/GGalina/Foodsta.git",
    live: "https://ggalina.github.io/Foodsta",
  },
  {
    id: 4,
    title: "WebStudio",
    descriptionKey: "projects.webstudio.description",
    typeKey: "projects.webstudio.type",
    image: WebStudioMockup,
    technologies: ["HTML", "CSS", "SASS", "BEM", "JavaScript", "Adaptive Design"],
    github: "https://github.com/GGalina/WebStudio.git",
    live: "https://ggalina.github.io/WebStudio/",
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <Container>
        <Title>{t("projects.title")}</Title>
        <ProjectList>
          {myProjects.map((project) => (
            <Card key={project.id}>
              <CardContent>
                <ProjectImage src={project.image} alt={project.title} loading="lazy"/>
                <ProjectName>{project.title}</ProjectName>
                <ProjectType>{t(project.typeKey)}</ProjectType>
                <Icons>
                  <IconLink href={project.github} target="_blank">
                    <img src={GitHubIcon} alt="GitHub" />
                  </IconLink>
                  <IconLink href={project.live} target="_blank">
                    <img src={WebsiteIcon} alt="Website" />
                  </IconLink>
                </Icons>
              </CardContent>

              <HoverContent>
                <Description>{t(project.descriptionKey)}</Description>
                <TechList>
                  {project.technologies.map((tech: string) => (
                    <TechItem key={tech}>{tech}</TechItem>
                  ))}
                </TechList>
              </HoverContent>
            </Card>
          ))}
        </ProjectList>
      </Container>
    </motion.div>
  );
};

export default Projects;
