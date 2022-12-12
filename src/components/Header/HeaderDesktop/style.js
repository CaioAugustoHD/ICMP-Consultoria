import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 3em;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${({theme}) => theme.body};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;

export const Menu = styled.nav`
    display: flex;
    gap: 3em;

    @media (max-width: 985px) {
        font-size: 0.9em;
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

    @media (max-width: 985px) {
        font-size: 0.9em;
        width: 150px;
        margin: 0 23px;
    }
`;