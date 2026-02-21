import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  body: "#fdf6f0", // warm nude base background
  text: "#1f1f1f", // dark text for readability
  secondtext: "#f4d0cdff",
  thirdtext: "#cccccc",
  background: "#f4e1d2",
  secondbackground:  "#1F2937", // soft nude beige for sections/cards
  primary: "#65849a", // logo steel blue
  accent: "#f9948dff", // warm rose complementary
  highlight: "#fabcb7ff", // soft aqua highlight for buttons/links
  error: "#a32921",
};

export const darkTheme: DefaultTheme = {
  body: "#121212", // near black background
  text: "#f5f5f5", // off-white for readability
  secondtext: "#1e1e1e", //dark grey 
  thirdtext: "#cccccc",
  background: "#14141fdd",
  secondbackground:  "#1F2937", // darker neutral for sections/cards
  primary: "#65849a", // logo steel blue
  accent: "#3b82f6", // peach accent
  highlight: "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)",
  error: "#a32921"
};

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
};

export const media = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
};
