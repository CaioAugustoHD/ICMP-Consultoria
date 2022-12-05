import styled from "styled-components";

export const NewsStyled = styled.section`
    padding: 2em 10%;
    text-align: center;
`;

export const InputEmail = styled.input`
    margin: 2em 0 0.7em 0;
    padding: 6px 13px;
    border-radius: 15px 0 0 15px;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    width: 320px;

    :focus {
        outline: 1px solid #000;
    }
`;

export const ButtonNews = styled.button`
    border-radius: 0 15px 15px 0;
    border: none;
    padding: 6px 13px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    background-color: ${({theme}) => theme.red};
    color: #fff;
`;

export const TermsMessage = styled.div`
    width: 400px;
    margin: auto;


    p {
    font-size: 0.8em;
    line-height: 1.3em;
    }
`;