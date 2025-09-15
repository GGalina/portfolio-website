import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const ProjectCard = styled.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px #ff4d6d;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ProjectDesc = styled.p`
  font-size: 1rem;
  color: #ccc;
`;
