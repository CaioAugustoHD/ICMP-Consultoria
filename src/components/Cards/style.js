import styled from "styled-components";

export const CardsStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (max-width: 1080px){
        width: 430px;
        margin: auto;
        justify-content: center;
        gap: 2em;
    }

    @media (max-width: 550px) {
        
    }
`;

export const Card = styled.img`
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;