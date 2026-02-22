import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../styles/themes";

export const Container = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 70px;
  text-alig
  color: ${({ theme }) => theme.text};

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1200px;

  > * {
    flex: 1 1 calc((100% - 64px) / 3); // 3 items per row, 64px total gap (2 gaps)
    max-width: 350px; //limits max card size
     margin-bottom: 40px; // extra space for hover lift
  transition: transform 0.3s;
  }

  @media ${media.laptop} {
    > * {
      flex: 1 1 calc((100% - 32px) / 2); // 2 items per row, 32px gap
    }
  }

  @media ${media.tablet} {
    > * {
      flex: 1 1 100%; // 1 item per row
    }
  }
`;

export const Card = styled(motion.div)`
  position: relative;
  overflow: visible;
  background: ${({ theme }) => theme.body};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;
  min-height: 300px;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 20px ${({ theme }) => theme.highlight + "66"};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  transition: transform 0.6s ease;
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;

 ${Card}:hover & {
  transform: translateY(-45%);
}
`;

export const ProjectName = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

export const ProjectType = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.accent};
  margin-top: 6px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 6px;
`;

export const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ theme }) => theme.highlight};
  transition: transform 0.3s ease, background 0.3s ease;

  img {
    width: 15px;
    height: 15px;
  }

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.accent};
  }
`;

export const HoverContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 16px 0  16px 0;
  text-align: center;
  background: ${({ theme }) => theme.body};
  padding: 0 7px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
  z-index: 1;
  overflow: hidden;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  margin-bottom: 12px;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
`;

export const TechItem = styled.span`
  background: ${({ theme }) => theme.secondbackground};
  color: ${({ theme }) => theme.text};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  border-radius: 10px;
  padding: 6px 12px;
`;
