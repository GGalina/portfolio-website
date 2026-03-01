import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/themes';

interface InputProps {
  $hasError?: boolean;
}

export const Section = styled.section`
  padding: 0 30px 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${media.fromTablet} {
    padding: 0 50px 50px 50px;
  }

  @media ${media.fromLaptop} {
    padding: 0 50px 50px 50px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 32px;
  color: ${({ theme }) => theme.text};

  @media ${media.fromTablet} {
    font-size: 28px;
  }

  @media ${media.fromLaptop} {
    font-size: 36px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media ${media.fromTablet} {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }

  @media ${media.fromLaptop} {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 100%;

  @media ${media.fromLaptop} {
    width: 50%;
    max-width: 400px;
  }
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.thirdtext};
`;

export const ContactItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ContactLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

export const Contacts = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.thirdtext};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  background: ${({ theme }) => theme.background};
  border-radius: 16px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.primary};

  @media ${media.fromLaptop} {
    width: 50%;
    max-width: 860px;
    padding: 30px;
  }
`;

export const FieldWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin-bottom: 6px;
`;

export const Input = styled.input<InputProps>`
  padding: 13px 16px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.primary};

  border-color: ${({ $hasError, theme }) => ($hasError ? theme.error : theme.highlight)};

  &:focus {
    border-color: ${({ $hasError, theme }) => ($hasError ? theme.error : theme.accent)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondtext};
    opacity: 1;
  }
`;

export const Textarea = styled.textarea<InputProps>`
  padding: 13px 16px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;

  border-color: ${({ $hasError, theme }) => ($hasError ? theme.error : theme.highlight)};

  &:focus {
    border-color: ${({ $hasError, theme }) => ($hasError ? theme.error : theme.accent)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondtext};
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 16px;
  margin: 0 auto;
  cursor: pointer;
  background-color: ${({ theme }) => theme.secondtext};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.accent};
  font-family: 'Roboto', sans-serif;
  transition:
    all 0.3s ease,
    transform 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.highlight};
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media ${media.fromLaptop} {
    width: fit-content;
    padding: 12px 100px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Message = styled.span`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.3;
  color: ${({ theme }) => theme.error};
  animation: ${fadeIn} 0.2s ease;
`;

export const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.text};
    transition: fill 0.2s ease;
  }

  &:hover svg {
    color: ${({ theme }) => theme.accent};
  }
`;
