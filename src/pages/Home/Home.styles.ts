import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 120px 30px;
  position: relative;
  overflow: hidden;

  @media ${media.fromTablet} {
    padding: 120px 20px 30px 20px;
  }

  @media ${media.fromLaptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 50px;
    height: 100vh;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;

  @media ${media.fromTablet} {
    margin-bottom: 40px;
  }

  @media ${media.fromLaptop} {
    align-items: flex-start;
    text-align: left;
    margin-bottom: 0;
    flex: 1;
  }
`;

export const RightSide = styled.div`
  display: none;

  @media ${media.fromLaptop} {
    display: block;
    flex: 1;
    position: relative;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 5px;
  background: ${({ theme }) => theme.highlight};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media ${media.fromTablet} {
    font-size: 36px;
  }

  @media ${media.fromLaptop} {
    font-size: 48px;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};

  @media ${media.fromTablet} {
    font-size: 20px;
  }

  @media ${media.fromLaptop} {
    font-size: 24px;
  }
`;

export const Tagline = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  max-width: 100%;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text};

  @media ${media.fromTablet} {
    font-size: 16px;
    max-width: 90%;
    margin-bottom: 32px;
  }

  @media ${media.fromLaptop} {
    font-size: 18px;
    max-width: 600px;
    margin-bottom: 40px;
  }
`;

export const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
  align-items: center;

  @media ${media.fromTablet} {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }

  @media ${media.fromLaptop} {
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const CTAButton = styled.button`
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.accent};
  background-color: ${({ theme }) => theme.secondtext};
  color: ${({ theme }) => theme.text};
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition:
    all 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.highlight};
    transform: scale(1.05);
  }

  @media ${media.fromTablet} {
    padding: 10px 32px;
  }

  @media ${media.fromLaptop} {
    width: auto;
    padding: 12px 40px;
    font-size: 16px;
  }
`;

export const SkillIcon = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.highlight});
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: drop-shadow(0 0 15px ${({ theme }) => theme.accent});
  }

  @media ${media.fromTablet} {
    width: 40px;
    height: 40px;
  }

  @media ${media.fromLaptop} {
    width: 50px;
    height: 50px;
  }
`;
