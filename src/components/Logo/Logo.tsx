import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoWrapper, LogoImage } from "./Logo.styles";
import logoSrc from "../../assets/logo.png";

const Logo: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/"); //navigate Home
    };

    return (
        <LogoWrapper onClick={handleClick}>
            <LogoImage src={logoSrc} alt="Halyna Hryn" />
        </LogoWrapper>
    );
};

export default Logo;