import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const LogoImage = styled.img`
    width: 100px; 
    height: 50px; 
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;