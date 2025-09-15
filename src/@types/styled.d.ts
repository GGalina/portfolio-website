import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    background: string;
    primary: string;
    accent: string;
    highlight: string;
  }
}
