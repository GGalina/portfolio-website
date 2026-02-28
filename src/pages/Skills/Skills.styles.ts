import styled from "styled-components";
import { media } from "../../styles/themes";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;

  @media ${media.tablet} {
      padding: 20px 30px;
    }
  
  @media ${media.mobile} {
    padding: 20px 16px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TechRow = styled.div`
  display: flex;
  gap: 24px; 

  @media ${media.tablet} {
    flex-direction: column;
  }
`;

export const TechColumn = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  gap: 16px; 
`;

export const SkillSection = styled.div`
  background: ${({ theme }) => theme.secondbackground};
  padding: 20px 40px; 
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.navShadow};

  @media ${media.fromTablet} {
    min-height: 100%;
  }

`;

export const TechSection = styled.h4`
  font-weight: 600;
  margin-bottom: 20px; 
  color: ${({ theme }) => theme.thirdtext};
  text-align: center;
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px; 
`;

export const TechIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
   &::after {
    content: attr(data-label); // use data-label for tooltip text
    position: absolute;
    bottom: 100%; 
    left: 50%;
    transform: translateX(-50%) translateY(-8px); 
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.thirdtext};
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    box-shadow: ${({ theme }) => theme.navShadow};
    opacity: 0; // hidden by default
    pointer-events: none;
    transition: opacity 0.2s, transform 0.2s;
    z-index: 10;
  }

  &:hover::after {
    opacity: 1; // show on hover
    transform: translateX(-50%) translateY(65px);
  }
`;