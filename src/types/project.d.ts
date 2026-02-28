declare module 'project' {
  export interface Project {
    id: number;
    title: string;
    descriptionKey: string;
    image: string;
    technologies: string[];
    typeKey: string;
    github: string;
    live: string;
  }
}
