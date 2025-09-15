import styled from "styled-components";
import toggleLight from "../../assets/toggle/light.svg";
import toggleDark from "../../assets/toggle/dark.svg";

export const ToggleWrapper = styled.div<{ isDark: boolean }>`
    width: 60px;
    height: 30px;
    border-radius: 50px;
    cursor: pointer;
    position: relative; // required for knob movement
    background-image: url(${({ isDark }) => (isDark ? toggleDark : toggleLight)});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 2px;
    box-sizing: border-box;
    transition: background-image 0.3s ease;
`;

export const Knob = styled.div<{ isDark: boolean }>`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${({ isDark }) => (isDark ? "#ffffff" : "#FFD700")};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;
