import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
} from './Projects.styles';

import GitHubIcon from '../../assets/techSvg/Utills/github.svg';
import WebsiteIcon from '../../assets/techSvg/www.svg';
import myProjects from '../../data/projects';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <Container>
        <Title>{t('projects.title')}</Title>
        <ProjectList>
          {myProjects.map((project) => (
            <Card key={project.id}>
              <CardContent>
                <ProjectImage src={project.image} alt={project.title} loading="lazy" />
                <ProjectName>{project.title}</ProjectName>
                <ProjectType>{t(project.typeKey)}</ProjectType>
                <Icons>
                  <IconLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" />
                  </IconLink>
                  <IconLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <img src={WebsiteIcon} alt="Website" />
                  </IconLink>
                </Icons>
              </CardContent>

              <HoverContent>
                <Description>{t(project.descriptionKey)}</Description>
                <TechList>
                  {project.technologies.map((tech) => (
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
