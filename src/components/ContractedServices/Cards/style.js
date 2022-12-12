import styled from "styled-components";

export const CardStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2em 0;

    @media (max-width: 950px) {
        width: 450px;
        margin: 2em auto;
        gap: 2em;
    }

    @media (max-width: 600px) {
        width: 250px;
    }
`;

export const Card = styled.div`
    text-align: center;
    width: 28%;

    p {
        margin-top: 0.5em;
    }

    img {
        height: 72px;
    }

    @media (max-width: 950px) {
        width: 450px;
    }

    @media (max-width: 600px) {
        width: 250px;
    }
`;