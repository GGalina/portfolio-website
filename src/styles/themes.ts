import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  body: "#fdf6f0", // warm nude base background
  text: "#1f1f1f", // dark text for readability
  background: "#f4e1d2", // soft nude beige for sections/cards
  primary: "#65849a", // logo steel blue
  accent: "#9a6a65", // warm rose complementary
  highlight: "#6ab7b7" // soft aqua highlight for buttons/links
};

export const darkTheme: DefaultTheme = {
  body: "#121212", // near black background
  text: "#f5f5f5", // off-white for readability
  background: "#0f0f0f", // darker neutral for sections/cards
  primary: "#65849a", // logo steel blue
  accent: "#ecb38e", // peach accent
  highlight: "#4ecdc4", // aqua neon highlight
};
