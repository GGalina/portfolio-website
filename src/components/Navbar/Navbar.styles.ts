import styled from "styled-components";

export const Nav = styled.nav<{ isDark: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* space between logo and right side */
  padding: 0 40px;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ isDark }) =>
    isDark ? "0 2px 4px rgba(0,0,0,0.5)" : "0 2px 4px rgba(0,0,0,0.1)"};
  transition: background-color 0.3s, box-shadow 0.3s;
`;

export const NavLinks = styled.div<{ isDark: boolean }>`
  display: flex;
  gap: 25px;

  a {
    text-decoration: none;
    color: ${({ isDark }) => (isDark ? "#ffffff" : "#333333")};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 16px;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: ${({ isDark }) => (isDark ? "#f1c40f" : "#ff9900")};
      transform: scale(1.05);
    }
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;
