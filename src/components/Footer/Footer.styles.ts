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
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    right: 40px;
`;

export const SocialIcon = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform 0.3s ease;

    img {
        width: 24px;
        height: 24px;
        filter: drop-shadow(0 0 10px ${({ theme }) => theme.highlight}); /* normal glow */
        transition: filter 0.3s ease, transform 0.3s ease;
        z-index: 1;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: transparent;
        transition: all 0.3s ease;
        z-index: 0;
    }

    &:hover {
        &::before {
            background: ${({ theme }) => theme.accent}; /* circle color on hover */
            opacity: 0.2;
            box-shadow: 0 0 15px ${({ theme }) => theme.accent}; /* glow */
        }

        img {
            filter: drop-shadow(0 0 15px ${({ theme }) => theme.accent}); /* icon glow */
            transform: scale(1.1);
            filter: invert(1); /* icon turns white */
        }
    }
`;
