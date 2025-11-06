import React from "react";
import GitHubIcon from "../../assets/techSvg/Utills/github.svg";
import LinkedInIcon from "../../assets/techSvg/linkedin.svg";
import { FooterContainer, FooterText, SocialLinks, SocialIcon } from "./Footer.styles";

interface FooterProps {
  $isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ $isDark}) => {
    return (
        <FooterContainer $isDark={$isDark}>
            <FooterText>© 2025 Halyna Hryn. All rights reserved.</FooterText>
            <SocialLinks>
                <SocialIcon
                    href="https://github.com/GGalina"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={GitHubIcon} alt="GitHub" />
                </SocialIcon>
                <SocialIcon
                    href="https://linkedin.com/in/halyna-hryn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={LinkedInIcon} alt="LinkedIn" />
                </SocialIcon>
            </SocialLinks>
        </FooterContainer>
    );
};

export default Footer;
