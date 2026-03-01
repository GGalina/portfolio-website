import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Container,
  LeftSide,
  RightSide,
  Title,
  Subtitle,
  Tagline,
  CTAGroup,
  CTAButton,
} from './Home.styles';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LeftSide>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>{t('hero.title')}</Title>
          <Subtitle>{t('hero.subtitle')}</Subtitle>
          <Tagline>{t('hero.tagline')}</Tagline>

          <CTAGroup>
            <a href="/Halyna_Hryn_Fullstack_dev.pdf" target="_blank" rel="noopener noreferrer">
              <CTAButton>{t('hero.cvBtn')}</CTAButton>
            </a>

            <CTAButton
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('hero.contactBtn')}
            </CTAButton>
          </CTAGroup>
        </motion.div>
      </LeftSide>

      <RightSide>{/* Add animated skill icons / illustration */}</RightSide>
    </Container>
  );
};

export default Home;
