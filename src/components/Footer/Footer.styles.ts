import styled from "styled-components";

export const FooterContainer = styled.footer<{ $isDark: boolean }>`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  position: relative;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 -2px 4px rgba(0,0,0,0.5)" : "0 -2px 4px rgba(0,0,0,0.1)"};
  transition: background-color 0.3s, box-shadow 0.3s;
`;

export const FooterText = styled.p`
      font-family: 'Roboto', sans-serif;
    font-size: 14px;
    opacity: 0.8;
    text-align: center;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.highlight};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

