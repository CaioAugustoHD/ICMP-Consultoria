import styled from "styled-components";

export const NewsStyled = styled.section`
    padding: 2em 10% 0.8em;
    text-align: center;

    @media (max-width: 499px) {
            padding: 2em 1em 0.8em;
        }
`;

export const FormNews = styled.form`
    padding: 2em 0 3em;
`;

export const InputEmail = styled.input`
    padding: 6px 13px;
    border-radius: 15px 0 0 15px;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    width: 320px;
    min-width: 275px;

    :focus {
        outline: 1px solid #000;
    }

    @media (max-width: 499px) {
            border-radius: 15px;
            width: 100%;
        }
`;

export const ButtonNews = styled.button`
    border-radius: 0 15px 15px 0;
    border: none;
    padding: 6px 13px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    background-color: ${({theme}) => theme.red};
    color: #fff;

        @media (max-width: 499px) {
            margin-top: 2em;
            border-radius: 15px;
            width: 100px;
        }
`;

export const TermsMessage = styled.div`
    margin: auto;


    p {
    font-size: 0.8em;
    line-height: 1.3em;
    }
`;

export const ErrorMessage = styled.span`
    margin: 2.4em 0 0 8px;
    color: ${({theme}) => theme.red};
    position: absolute;
    font-size: 0.9em;
`;