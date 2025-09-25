import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0 50px;
  position: relative;
  overflow: hidden;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const RightSide = styled.div`
  flex: 1;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.background};
  text-shadow: 
    -1px -1px 0 ${({ theme }) => theme.text},
    1px -1px 0 ${({ theme }) => theme.text},
    -1px  1px 0 ${({ theme }) => theme.text},
    1px  1px 0 ${({ theme }) => theme.text};

`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.primary};
`;

export const Tagline = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 40px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  max-width: 600px;
  color: ${({ theme }) => theme.text};
`;

export const CTAGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CTAButton = styled.button`
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.secondtext};
  color: ${({ theme }) => theme.text};
  border: solid 1px ${({ theme }) => theme.highlight};
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    transform: scale(1.05);
  }
`;

export const SkillIcon = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.highlight});
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: drop-shadow(0 0 15px ${({ theme }) => theme.accent});
  }
`;
