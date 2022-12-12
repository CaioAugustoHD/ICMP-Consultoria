import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 276px;
    background-color: ${({theme}) => theme.body};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

    > svg {
        width: 30px;
        height: 30px;
        color: ${({theme}) => theme.blue};
        cursor: pointer;
    }

    @media (max-width: 600px) {
        svg {
            height: 25px;
            width: 25px;
        }
    }

    @media (max-width: 500px) {
        padding: 1em;
    }
`;

export const ButtonClient = styled.button`
    width: 170px;
    margin: 0 13px;
    font-size: 1em;
    border: none;
    border-radius: 18px;
    padding: 6px 0;
    background-color: ${({theme}) => theme.red};
    color: #FFF;
`;