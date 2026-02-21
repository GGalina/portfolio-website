import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SkillsContainer,
  Title,
  //TabsContainer,
  TabButton,

  TechRow,
  SkillSection,
  TechSection,
  TechnologiesWrapper,
  TechColumn,
  SkillIcons,
  TechIcon,
} from "./Skills.styles";

// --- SVG Imports ---
import { ReactComponent as HTML5 } from "../../assets/techSvg/Frontend/html5.svg";
import { ReactComponent as JavaScript } from "../../assets/techSvg/Frontend/javascript.svg";
import { ReactComponent as ReactJS } from "../../assets/techSvg/Frontend/react.svg";
import { ReactComponent as TypeScript } from "../../assets/techSvg/Frontend/typescript.svg";
import { ReactComponent as ReactNative } from "../../assets/techSvg/Frontend/reactnative.svg";
import { ReactComponent as Redux } from "../../assets/techSvg/Frontend/redux.svg";
import { ReactComponent as RestApi } from "../../assets/techSvg/Frontend/restApi.svg";

import { ReactComponent as NodeJS } from "../../assets/techSvg/Backend/nodedotjs.svg";
import { ReactComponent as ExpressJS } from "../../assets/techSvg/Backend/expressJS.svg";
import { ReactComponent as Mongoose } from "../../assets/techSvg/Backend/mongoosejs.svg";

import { ReactComponent as FireBaseDB } from "../../assets/techSvg/Databases/firebase.svg";
import { ReactComponent as MongoDB } from "../../assets/techSvg/Databases/mongodb.svg";

import { ReactComponent as CSS3 } from "../../assets/techSvg/Styles/css3.svg";
import { ReactComponent as SaaS } from "../../assets/techSvg/Styles/sass.svg";
import { ReactComponent as BEM } from "../../assets/techSvg/Styles/bem.svg";
import { ReactComponent as StyledComponents } from "../../assets/techSvg/Styles/styledcomponents.svg";
import { ReactComponent as MaterialUI } from "../../assets/techSvg/Styles/material-ui.svg";
import { ReactComponent as Framer } from "../../assets/techSvg/Styles/framer.svg";

import { ReactComponent as Swagger } from "../../assets/techSvg/Documentation/swagger.svg";
import { ReactComponent as Json } from "../../assets/techSvg/Documentation/json.svg";

import { ReactComponent as Git } from "../../assets/techSvg/Utills/git.svg";
import { ReactComponent as GitHub } from "../../assets/techSvg/Utills/github.svg";
import { ReactComponent as Docker } from "../../assets/techSvg/Utills/docker.svg";
import { ReactComponent as Figma } from "../../assets/techSvg/Utills/figma.svg";
import { ReactComponent as Npm } from "../../assets/techSvg/Utills/npm.svg";
import { ReactComponent as Postman } from "../../assets/techSvg/Utills/postman.svg";
import { ReactComponent as VScode } from "../../assets/techSvg/Utills/vscode.svg";
import { ReactComponent as Webpack } from "../../assets/techSvg/Utills/webpack.svg";
import { ReactComponent as Vercel } from "../../assets/techSvg/Utills/vercel.svg";

// --- Tech Icons ---
const techIcons: Record<string, { icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }[]> =
{
  frontend: [
    { icon: HTML5, label: "HTML5" },
    { icon: JavaScript, label: "JavaScript" },
    { icon: ReactJS, label: "React" },
    { icon: TypeScript, label: "TypeScript" },
    { icon: ReactNative, label: "React Native" },
    { icon: Redux, label: "Redux" },
    { icon: RestApi, label: "REST API" },
  ],
  backend: [
    { icon: NodeJS, label: "Node.js" },
    { icon: ExpressJS, label: "Express.js" },
    { icon: Mongoose, label: "Mongoose" },
    { icon: FireBaseDB, label: "Firebase" },
    { icon: MongoDB, label: "MongoDB" },
  ],
  styles: [
    { icon: CSS3, label: "CSS3" },
    { icon: SaaS, label: "Sass" },
    { icon: BEM, label: "BEM" },
    { icon: StyledComponents, label: "Styled Components" },
    { icon: MaterialUI, label: "Material UI" },
    { icon: Framer, label: "Framer Motion" },
  ],
  documentation: [
    { icon: Swagger, label: "Swagger" },
    { icon: Json, label: "JSON" },
  ],
  utilities: [
    { icon: Git, label: "Git" },
    { icon: GitHub, label: "GitHub" },
    { icon: Docker, label: "Docker" },
    { icon: Figma, label: "Figma" },
    { icon: Npm, label: "NPM" },
    { icon: VScode, label: "VScode" },
    { icon: Postman, label: "Postman" },
    { icon: Webpack, label: "Webpack" },
    { icon: Vercel, label: "Vercel" },
  ],
};

// --- Types ---
type TabDef = { key: string; label: string };

type SkillsType = {
  title: string;
  description: string[];
  tabs: string[] | { key: string; label: string }[];
  skills?: string;
};

// --- Component ---
const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skills = t("skills", { returnObjects: true }) as SkillsType;

  // Normalize tabs
  const normalizedTabs: TabDef[] = useMemo(() => {
    const raw = skills?.tabs;
    if (!raw) return [];
    return (raw as any[]).flatMap((tab) => {
      if (typeof tab === "string") return [{ key: tab.toLowerCase(), label: tab }];
      if (tab && typeof tab === "object" && "key" in tab && "label" in tab)
        return [{ key: String(tab.key), label: String(tab.label) }];
      return [];
    });
  }, [skills?.tabs]);

  const [activeTab, setActiveTab] = useState<string>(normalizedTabs[0]?.key ?? "");

  // --- Render Technologies ---
  const renderTechnologies = () => {
  // First row: 2 columns
  const firstRowLeft = ["frontend"];
  const firstRowRight = ["backend"];

  // Second row: full-width
  const secondRow = ["styles", "documentation", "utilities"];

  const renderColumn = (categories: string[]) => (
    <TechColumn>
      {categories.map((category) => {
        const icons = techIcons[category] ?? [];
        return (
          <SkillSection key={category}>
            <TechSection>{t(`skills.techCategories.${category}`, category)}</TechSection>
            <SkillIcons>
              {icons.map(({ icon: Icon, label }, i) => (
                <TechIcon key={i} data-label={label}>
                  <Icon />
                </TechIcon>
              ))}
            </SkillIcons>
          </SkillSection>
        );
      })}
    </TechColumn>
  );

  return (
    <TechnologiesWrapper>
      <TechRow>
        {renderColumn(firstRowLeft)}
        {renderColumn(firstRowRight)}
      </TechRow>

      <TechRow style={{ flexDirection: "column" }}>
        {renderColumn(secondRow)}
      </TechRow>
    </TechnologiesWrapper>
  );
};

  return (
    <SkillsContainer>
      <Title>{skills?.title}</Title>

        {normalizedTabs.map((tab) => (
          <TabButton
            key={tab.key}
            $active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </TabButton>
        ))}
      {renderTechnologies()}
    </SkillsContainer>
  );
};

export default Skills;