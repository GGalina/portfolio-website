import React from "react";
import GitHubIcon from "../../assets/techSvg/Utills/github.svg";
import LinkedInIcon from "../../assets/techSvg/linkedin.svg";
import { FooterContainer, FooterText } from "./Footer.styles";
import { useTranslation } from "react-i18next";

interface FooterProps {
  $isDark: boolean;
}

const currentYear = new Date().getFullYear();

const Footer: React.FC<FooterProps> = ({ $isDark}) => {
    const { t } = useTranslation();
    
    return (
        <FooterContainer $isDark={$isDark}>
            <FooterText>© {currentYear} {t("footer.message")}</FooterText>
        </FooterContainer>
    );
};

export default Footer;
