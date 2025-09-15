import styled from "styled-components";

export const Main = styled.main`

  min-height: calc(100vh - 120px);
`;

export const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  z-index: 1000;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
