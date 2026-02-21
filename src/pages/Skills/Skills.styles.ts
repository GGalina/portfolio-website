import styled from "styled-components";
import { media } from "../../styles/themes";

interface TabButtonProps {
  $active?: boolean;
}

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px 50px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

// export const TabsContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 2rem;
// `;

export const TabButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: ${({ $active, theme }) =>
    $active ? theme.highlight : theme.secondbackground};
  color: ${({ theme }) => theme.thirdtext};
  transition: all 0.3s;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// First row: two columns
export const TechRow = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TechColumn = styled.div`
  flex: 1; // share space equally
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkillSection = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const TechSection = styled.h4`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.thirdtext};
  text-align: center;
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const TechIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;