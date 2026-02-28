import React from "react";
import logoSrc from "../../assets/logo.png";
import { LogoWrapper, LogoImage } from "./Logo.styles";

const Logo: React.FC = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <LogoWrapper onClick={handleClick}>
            <LogoImage src={logoSrc} alt="Halyna Hryn logo" />
        </LogoWrapper>
    );
};

export default Logo;