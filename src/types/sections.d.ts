import React from "react";

export type SectionRefs = {
  home: React.RefObject<HTMLElement | null>;
  about: React.RefObject<HTMLElement | null>;
  skills: React.RefObject<HTMLElement | null>;
  projects: React.RefObject<HTMLElement | null>;
  contact: React.RefObject<HTMLElement | null>;
};
