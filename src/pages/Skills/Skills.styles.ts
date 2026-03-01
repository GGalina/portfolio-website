import styled from 'styled-components';
import { media } from '../../styles/themes';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;

  @media ${media.fromTablet} {
    padding: 20px 50px;
  }

  @media ${media.fromLaptop} {
    padding: 20px 50px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;

  @media ${media.fromTablet} {
    font-size: 28px;
  }

  @media ${media.fromLaptop} {
    font-size: 36px;
  }
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${media.fromLaptop} {
    gap: 24px;
  }
`;

export const TechRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${media.fromTablet} {
    flex-direction: row;
    gap: 24px;
  }
`;

export const TechColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${media.fromLaptop} {
    gap: 16px;
  }
`;

export const SkillSection = styled.div`
  background: ${({ theme }) => theme.secondbackground};
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.navShadow};

  @media ${media.fromTablet} {
    padding: 20px 30px;
    min-height: 100%;
  }

  @media ${media.fromLaptop} {
    padding: 20px 40px;
  }
`;

export const TechSection = styled.h4`
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.thirdtext};
  text-align: center;

  @media ${media.fromTablet} {
    margin-bottom: 18px;
  }

  @media ${media.fromLaptop} {
    margin-bottom: 20px;
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media ${media.fromTablet} {
    gap: 12px;
  }
`;

export const TechIcon = styled.div`
  width: 32px;
  height: 32px;
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
    content: attr(data-label);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.thirdtext};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    white-space: nowrap;
    box-shadow: ${({ theme }) => theme.navShadow};
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 0.2s,
      transform 0.2s;
    z-index: 10;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(50px);
  }

  @media ${media.fromTablet} {
    width: 36px;
    height: 36px;

    &::after {
      font-size: 11px;
      transform: translateX(-50%) translateY(-8px);
    }
  }

  @media ${media.fromLaptop} {
    width: 40px;
    height: 40px;

    &::after {
      font-size: 12px;
      transform: translateX(-50%) translateY(-8px);
    }
  }
`;
