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
} from "./About.styles";

// --- Types ---
type TabDef = { key: string; label: string };

type AboutType = {
  title: string;
  description: string[];
  tabs: string[] | { key: string; label: string }[];
  education?: { title: string; issuer: string; info: string };
  certificates?: { title: string; issuer: string; info: string }[];
  languages?: string[];
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
      if (typeof tab === "string") return [{ key: tab.toLowerCase(), label: tab }];
      if (tab && typeof tab === "object" && "key" in tab && "label" in tab)
        return [{ key: String(tab.key), label: String(tab.label) }];
      return [];
    });
  }, [about?.tabs]);

  const [activeTab, setActiveTab] = useState<string>(normalizedTabs[0]?.key ?? "education");

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

  const renderCertificates = (certs: AboutType["certificates"]) => {
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
    </AboutWrapper>
  );
};

export default About;