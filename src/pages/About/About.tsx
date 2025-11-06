import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AboutWrapper,
  Title,
  Description,
  TabsContainer,
  TabButton,
  TabContent,
  Issuer,
  SkillsWrapper,
  Skills,
  SkillSection,
  TechSection,
  TechnologiesWrapper,
  TechColumn,
  SkillIcons,
  TechIcon,
} from "./About.styles";

// SVG imports
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
const techIcons: Record<
  string,
  { icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }[]
> = {
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
  ],
  databases: [
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

type AboutType = {
  title: string;
  description: string[];
  tabs: string[] | { key: string; label: string }[];
  education?: { title: string; issuer: string; info: string };
  certificates?: { title: string; issuer: string; info: string }[];
  languages?: string[];
  skills?: string;
};

// --- Component ---
const About: React.FC = () => {
  const { t } = useTranslation();
  const about = t("about", { returnObjects: true }) as AboutType;

  // Normalize tabs
  const normalizedTabs: TabDef[] = useMemo(() => {
    const raw = about?.tabs;
    if (!raw) return [];
    return (raw as any[]).flatMap((tab) => {
      if (typeof tab === "string") {
        return [{ key: tab.toLowerCase(), label: tab }];
      }
      if (tab && typeof tab === "object" && "key" in tab && "label" in tab) {
        return [{ key: String(tab.key), label: String(tab.label) }];
      }
      return [];
    });
  }, [about?.tabs]);

  const [activeTab, setActiveTab] = useState<string>(
    normalizedTabs[0]?.key ?? "education"
  );

  useEffect(() => {
    if (!normalizedTabs.some((t) => t.key === activeTab)) {
      setActiveTab(normalizedTabs[0]?.key ?? "education");
    }
  }, [normalizedTabs, activeTab]);

  // --- Renderers ---
  const renderEducation = (edu: AboutType["education"]) => {
    if (!edu) return null;
    return (
      <div className="mb-4">
        <Issuer>{edu.issuer}</Issuer>
        <div>{edu.title}</div>
        <div>{edu.info}</div>
      </div>
    );
  };

  const renderCertificates = (
    certs: AboutType["certificates"]
  ) => {
    if (!certs) return null;
    return certs.map((c, i) => (
      <div key={i} className="mb-4">
        <Issuer>{c.issuer}</Issuer>
        <div>{c.title}</div>
        <div>{c.info}</div>
      </div>
    ));
  };

  const renderLanguages = (langs: AboutType["languages"]) => {
    if (!langs) return null;
    return langs.map((l, i) => <div key={i}>{l}</div>);
  };

  const renderTechnologies = () => {

    const leftCategories: (keyof typeof techIcons)[] = ["frontend", "backend", "databases"];
    const rightCategories: (keyof typeof techIcons)[] = ["styles", "documentation", "utilities"];

    const renderColumn = (categories: (keyof typeof techIcons)[]) => (
      <TechColumn>
        {categories.map((category) => {
          const icons = techIcons[category] ?? [];
          return (
            <SkillSection key={category}>
              <TechSection>
                {t(
                  `about.techCategories.${category}`,
                  category.charAt(0).toUpperCase() + category.slice(1)
                )}
              </TechSection>
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
        {renderColumn(leftCategories)}
        {renderColumn(rightCategories)}
      </TechnologiesWrapper>
    );
  };

  return (
    <AboutWrapper>
      <Title>{about?.title}</Title>

      <Description>
        {about.description?.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </Description>

      {/* Tabs */}
      <TabsContainer>
        {normalizedTabs.map((tab) => (
          <TabButton
            key={tab.key}
            $active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsContainer>

      {/* Tab content */}
      <TabContent>
        {activeTab === "education" && renderEducation(about.education)}
        {activeTab === "certificates" && renderCertificates(about.certificates)}
        {activeTab === "languages" && renderLanguages(about.languages)}
      </TabContent>

      {/* Skills heading */}
      <SkillsWrapper>
        <Skills>{about?.skills}</Skills>
      </SkillsWrapper>

      {/* Technology subsections */}
      {renderTechnologies()}
    </AboutWrapper>
  );
};

export default About;
