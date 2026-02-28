import React from 'react';
import { FooterContainer, FooterText } from './Footer.styles';
import { useTranslation } from 'react-i18next';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterText>
        © {currentYear} {t('footer.message')}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
