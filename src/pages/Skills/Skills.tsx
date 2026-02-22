import React from "react";
import { useTranslation } from "react-i18next";
import {
  SkillsContainer,
  Title,
  TechRow,
  SkillSection,
  TechSection,
  TechnologiesWrapper,
  TechColumn,
  SkillIcons,
  TechIcon,
} from "./Skills.styles";

// --- SVG Imports ---
// Frontend
import { ReactComponent as HTML5 } from "../../assets/techSvg/Frontend/html5.svg";
import { ReactComponent as JavaScript } from "../../assets/techSvg/Frontend/javascript.svg";
import { ReactComponent as ReactJS } from "../../assets/techSvg/Frontend/react.svg";
import { ReactComponent as TypeScript } from "../../assets/techSvg/Frontend/typescript.svg";
import { ReactComponent as ReactNative } from "../../assets/techSvg/Frontend/reactnative.svg";
import { ReactComponent as Redux } from "../../assets/techSvg/Frontend/redux.svg";
import { ReactComponent as CSS3 } from "../../assets/techSvg/Frontend/css3.svg";
import { ReactComponent as SaaS } from "../../assets/techSvg/Frontend/sass.svg";
import { ReactComponent as BEM } from "../../assets/techSvg/Frontend/bem.svg";
import { ReactComponent as StyledComponents } from "../../assets/techSvg/Frontend/styledcomponents.svg";
import { ReactComponent as MaterialUI } from "../../assets/techSvg/Frontend/material-ui.svg";
import { ReactComponent as Framer } from "../../assets/techSvg/Frontend/framer.svg";
import { ReactComponent as Tailwind } from "../../assets/techSvg/Frontend/tailwindcss.svg";

// Backend
import { ReactComponent as NodeJS } from "../../assets/techSvg/Backend/nodejs.svg";
import { ReactComponent as ExpressJS } from "../../assets/techSvg/Backend/expressjs.svg";
import { ReactComponent as Mongoose } from "../../assets/techSvg/Backend/mongoosejs.svg";
import { ReactComponent as FireBaseDB } from "../../assets/techSvg/Backend/firebase.svg";
import { ReactComponent as MongoDB } from "../../assets/techSvg/Backend/mongodb.svg";
import { ReactComponent as RestApi } from "../../assets/techSvg/Backend/rest-api.svg";

// Tools & Utilities
import { ReactComponent as Git } from "../../assets/techSvg/Utills/git.svg";
import { ReactComponent as GitHub } from "../../assets/techSvg/Utills/github.svg";
import { ReactComponent as Docker } from "../../assets/techSvg/Utills/docker.svg";
import { ReactComponent as Figma } from "../../assets/techSvg/Utills/figma.svg";
import { ReactComponent as Npm } from "../../assets/techSvg/Utills/npm.svg";
import { ReactComponent as Postman } from "../../assets/techSvg/Utills/postman.svg";
import { ReactComponent as VScode } from "../../assets/techSvg/Utills/vscode.svg";
import { ReactComponent as Webpack } from "../../assets/techSvg/Utills/webpack.svg";
import { ReactComponent as Vercel } from "../../assets/techSvg/Utills/vercel.svg";
import { ReactComponent as Swagger } from "../../assets/techSvg/Utills/swagger.svg";
import { ReactComponent as Json } from "../../assets/techSvg/Utills/json.svg";

// --- Tech Icons ---
const techIcons = {
  frontend: [
    { icon: HTML5, label: "HTML5" },
    { icon: JavaScript, label: "JavaScript" },
    { icon: ReactJS, label: "React" },
    { icon: TypeScript, label: "TypeScript" },
    { icon: ReactNative, label: "React Native" },
    { icon: Redux, label: "Redux" },
    { icon: CSS3, label: "CSS3" },
    { icon: SaaS, label: "Sass" },
    { icon: BEM, label: "BEM" },
    { icon: StyledComponents, label: "Styled Components" },
    { icon: MaterialUI, label: "Material UI" },
    { icon: Framer, label: "Framer Motion" },
    { icon: Tailwind, label: "Tailwind CSS" },
  ],
  backend: [
    { icon: NodeJS, label: "Node.js" },
    { icon: ExpressJS, label: "Express.js" },
    { icon: Mongoose, label: "Mongoose" },
    { icon: FireBaseDB, label: "Firebase" },
    { icon: MongoDB, label: "MongoDB" },
    { icon: RestApi, label: "REST API" },
  ],
  utilities: [
    { icon: Git, label: "Git" },
    { icon: GitHub, label: "GitHub" },
    { icon: Docker, label: "Docker" },
    { icon: Figma, label: "Figma" },
    { icon: Npm, label: "NPM" },
    { icon: VScode, label: "VS Code" },
    { icon: Postman, label: "Postman" },
    { icon: Webpack, label: "Webpack" },
    { icon: Vercel, label: "Vercel" },
    { icon: Swagger, label: "Swagger" },
    { icon: Json, label: "JSON" },
  ],
};

// --- Component ---
const Skills: React.FC = () => {
  const { t } = useTranslation();

  const renderSection = (category: keyof typeof techIcons) => (
    <SkillSection>
      <TechSection>
        {t(`skills.techCategories.${category}`, category)}
      </TechSection>

      <SkillIcons>
        {techIcons[category].map(({ icon: Icon, label }) => (
          <TechIcon key={label} data-label={label}>
            <Icon />
          </TechIcon>
        ))}
      </SkillIcons>
    </SkillSection>
  );

  return (
    <SkillsContainer>
      <Title>{t("skills.title")}</Title>

      <TechnologiesWrapper>
        {/* First row: Frontend | Backend */}
        <TechRow>
          <TechColumn>{renderSection("frontend")}</TechColumn>
          <TechColumn>{renderSection("backend")}</TechColumn>
        </TechRow>

        {/* Second row: Tools & Utilities */}
        <TechRow>
          <TechColumn>{renderSection("utilities")}</TechColumn>
        </TechRow>
      </TechnologiesWrapper>
    </SkillsContainer>
  );
};

export default Skills;