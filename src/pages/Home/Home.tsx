import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // 👈 import hook
import {
  Container,
  LeftSide,
  RightSide,
  Title,
  Subtitle,
  CTAButton,
  SkillIcon,
} from "./Home.styles";

// Import all SVGs
import ReactSVG from "../../assets/techSvg/react.svg";
import NodeSVG from "../../assets/techSvg/nodedotjs.svg";
import TS from "../../assets/techSvg/typescript.svg";
import JS from "../../assets/techSvg/javascript.svg";
import HTML from "../../assets/techSvg/html5.svg";
import CSS from "../../assets/techSvg/css.svg";
import MongoDB from "../../assets/techSvg/mongodb.svg";
import Firebase from "../../assets/techSvg/firebase.svg";
import Git from "../../assets/techSvg/git.svg";
import Docker from "../../assets/techSvg/docker.svg";
import Redux from "../../assets/techSvg/redux.svg";
import GitHub from "../../assets/techSvg/github.svg";
import StyledComponents from "../../assets/techSvg/styledcomponents.svg";

const skillIcons = [
  ReactSVG,
  NodeSVG,
  TS,
  JS,
  HTML,
  CSS,
  MongoDB,
  Firebase,
  Git,
  Docker,
  Redux,
  GitHub,
  StyledComponents,
];

interface IconPosition {
  x: number;
  y: number;
}

const Home: React.FC = () => {
  const { t } = useTranslation(); // 👈 translation hook
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<IconPosition[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const padding = 60;
    const size = 50; // icon size
    const newPositions: IconPosition[] = [];

    skillIcons.forEach(() => {
      let x = 0;
      let y = 0;
      let attempts = 0;

      do {
        x = padding + Math.random() * (rect.width / 2 - padding);
        y = padding + Math.random() * (rect.height - padding * 2);
        attempts++;
      } while (
        newPositions.some(
          (pos) =>
            Math.abs(pos.x - x) < size + 10 && Math.abs(pos.y - y) < size + 10
        ) &&
        attempts < 100
      );

      newPositions.push({ x, y });
    });

    setPositions(newPositions);
  }, [containerRef.current]);

  return (
    <Container ref={containerRef}>
      <LeftSide>
        <Title>{t("hero.title")}</Title>
        <Subtitle>{t("hero.subtitle")}</Subtitle>
        <CTAButton>{t("hero.cta", "Contact Me")}</CTAButton>
      </LeftSide>

      <RightSide>
        {skillIcons.map((icon, index) => {
          const pos = positions[index];
          if (!pos) return null;
          return (
            <SkillIcon key={index} style={{ left: pos.x, top: pos.y }}>
              <img src={icon} alt="tech icon" />
            </SkillIcon>
          );
        })}
      </RightSide>
    </Container>
  );
};

export default Home;
