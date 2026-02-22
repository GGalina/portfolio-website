import styled from "styled-components";
import { media } from "../../styles/themes";

interface TabButtonProps {
  $active?: boolean;
}

export const AboutWrapper = styled.div`
  padding: 20px 50px;
  background: ${({ theme }) => theme.background};

  @media ${media.tablet} {
      padding: 20px 30px;
    }
  
  @media ${media.mobile} {
    padding: 20px 16px;
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
    color: ${({ theme }) => theme.thirdtext};
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

export const TabButton = styled.button<{ $active?: boolean }>`
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
    background: ${({ $active, theme }) => ($active ? theme.highlight : 'transparent')};
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
  color: ${({ theme }) => theme.thirdtext};
`;

export const Issuer = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
`;