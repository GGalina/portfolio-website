import styled from "styled-components";
import { media } from "../../styles/themes";

export const Section = styled.section`
  padding: 0 50px 50px 50px;

  @media ${media.tablet} {
    padding: 0 20px 30px 20px;
  }

  @media ${media.mobile} {
    padding: 0 16px 24px 16px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 20px;
  margin-top: 32px;
  color: ${({ theme }) => theme.text};

  @media ${media.tablet} {
    font-size: 28px;
  }

  @media ${media.mobile} {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
  max-width: 400px;
`;

export const Description = styled.p`

`;

export const ContactItem = styled.div`

`;

export const ContactLabel = styled.p`

`;

export const Contacts = styled.p`

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;
  max-width: 860px;
  margin: 0 auto;

  @media ${media.tablet} {
    width: 50%;
    min-width: 475px;
  }

  @media ${media.mobile} {
    width: 100%;
    min-width: 150px;
    margin: 0;
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

interface InputProps {
  $hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: 13px 16px;
  font-size: 16px;
  border: 2px solid
    ${({ $hasError, theme }) => ($hasError ? theme.error : theme.highlight)};
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.error : theme.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondtext};
    opacity: 1;
  }
`;

export const Textarea = styled.textarea<InputProps>`
  padding: 13px 16px;
  font-size: 16px;
  border: 2px solid
    ${({ $hasError, theme }) => ($hasError ? theme.error : theme.highlight)};
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.error : theme.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondtext};
    opacity: 1;
  }
`;

export const Button = styled.button`
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 16px;
  width: fit-content;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.secondtext};
  color: ${({ theme }) => theme.text};
  border: solid 1px ${({ theme }) => theme.highlight};
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.accent};
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media ${media.mobile} {
    width: 100%;
  }
`;

export const Message = styled.span`
  font-size: 14px;
  margin-top: 5px;
  color: ${({ theme }) => theme.secondtext};
`;

export const LinkedIn = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Or = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

export const ContactAlt = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

export const LinkedInLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.highlight};
  margin-left: 4px;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;


export const SocialLinks = styled.div`
    display: flex;
    gap: 10px;
`;

export const SocialIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform 0.3s ease;

    img {
        width: 24px;
        height: 24px;
        filter: drop-shadow(0 0 10px ${({ theme }) => theme.highlight}); /* normal glow */
        transition: filter 0.3s ease, transform 0.3s ease;
        z-index: 1;
    }

    

    &:hover {
        &::before {
            background: ${({ theme }) => theme.accent}; /* circle color on hover */
            opacity: 0.2;
            box-shadow: 0 0 15px ${({ theme }) => theme.accent}; /* glow */
        }

        img {
            filter: drop-shadow(0 0 15px ${({ theme }) => theme.accent}); /* icon glow */
            transform: scale(1.1);
            filter: invert(1); /* icon turns white */
        }
    }
`;
