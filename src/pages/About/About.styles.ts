import styled from "styled-components";
import { media } from "../../styles/themes";

export const AboutWrapper = styled.div`
  padding: 0 50px 50px 50px;

  @media ${media.tablet} {
    padding: 0 20px 30px 20px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const Description = styled.ul`
  margin-bottom: 32px;
  padding-left: 20px; 
  list-style: disc;

  li {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
    padding-left: 10px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
    position: relative;
  }

  li::marker {
    color: ${({ theme }) => theme.highlight};
    font-weight: bold; 
  }

  @media ${media.tablet} {
    li {
      font-size: 14px;
    }
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const TabButton = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 8px 12px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ active, theme }) => (active ? theme.highlight : 'transparent')};
    transition: background-color 0.3s ease;
  }

  &:hover:after {
    background-color: ${({ theme }) => theme.highlight};
  }
`;

export const TabContent = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text};
`;

export const Issuer = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
`;

export const SkillsWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Skills = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 32px;
  padding-top: 32px;
  color: ${({ theme }) => theme.text};

  @media ${media.tablet} {
    font-size: 24px;
  }
`;

export const SkillSection = styled.div`
  margin-bottom: 26px;
`;

export const TechSection = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.highlight};
  }
`;

export const TechIcon = styled.div<{ "data-label"?: string }>`
  position: relative;
  display: inline-block;
  margin: 0 8px;

  svg {
    display: block;
    width: 40px;
    height: 40px;
  }

  &::after {
    content: attr(data-label);
    position: absolute;
    top: 100%; /* below the icon */
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: ${({ theme }) => theme.secondtext};
    color: ${({ theme }) => theme.text};
    border: solid 1px ${({ theme }) => theme.highlight};
    padding: 4px 6px;
    font-size: 12px;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    z-index: 10;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media ${media.tablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const TechColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  flex: 1;
`;
