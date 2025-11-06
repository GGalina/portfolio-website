import styled from "styled-components";

interface NavbarProps {
  $isDark?: boolean;
}

export const Nav = styled.nav<{ $isDark: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 2px 4px rgba(0,0,0,0.5)" : "0 2px 4px rgba(0,0,0,0.1)"};
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavLinkButton = styled.button`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};

  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  gap: 15px;
`;
