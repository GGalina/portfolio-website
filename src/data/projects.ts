import LearnLingoMockup from '../assets/mockups/LearnLingo.webp';
import CocktailsMockup from '../assets/mockups/Cocktails.webp';
import FoodStaMockup from '../assets/mockups/Foodsta.webp';
import WebStudioMockup from '../assets/mockups/WebStudio.webp';

const projects = [
  {
    id: 1,
    title: 'LearnLingo',
    descriptionKey: 'projects.learnLingo.description',
    typeKey: 'projects.learnLingo.type',
    image: LearnLingoMockup,
    technologies: ['React', 'React Context', 'React-responsive', 'Styled-components', 'Firebase'],
    github: 'https://github.com/GGalina/LearnLingo.git',
    live: 'https://ggalina.github.io/LearnLingo/',
  },
  {
    id: 2,
    title: 'Cocktails',
    descriptionKey: 'projects.cocktails.description',
    typeKey: 'projects.cocktails.type',
    image: CocktailsMockup,
    technologies: ['HTML', 'JavaScript', 'SASS', 'REST API', 'Adaptive Design'],
    github: 'https://github.com/GGalina/Cocktails.git',
    live: 'https://ggalina.github.io/Cocktails',
  },
  {
    id: 3,
    title: 'Foodsta',
    descriptionKey: 'projects.foodsta.description',
    typeKey: 'projects.foodsta.type',
    image: FoodStaMockup,
    technologies: ['HTML', 'CSS', 'SASS', 'BEM', 'JavaScript', 'Adaptive Design'],
    github: 'https://github.com/GGalina/Foodsta.git',
    live: 'https://ggalina.github.io/Foodsta',
  },
  {
    id: 4,
    title: 'WebStudio',
    descriptionKey: 'projects.webstudio.description',
    typeKey: 'projects.webstudio.type',
    image: WebStudioMockup,
    technologies: ['HTML', 'CSS', 'SASS', 'BEM', 'JavaScript', 'Adaptive Design'],
    github: 'https://github.com/GGalina/WebStudio.git',
    live: 'https://ggalina.github.io/WebStudio/',
  },
];

export default projects;
