import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  position: relative;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.navShadow};
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
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
