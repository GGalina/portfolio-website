import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    secondtext: string;
    thirdtext: string;
    background: string;
    secondbackground: string;
    primary: string;
    accent: string;
    highlight: string;
    navShadow: string;
    error: string;
  }
}
