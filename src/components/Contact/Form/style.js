import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    margin: auto;
    justify-content: center;
`;

export const InputContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 0.5em 1em 1.1em 1em;

    input, select, textarea {
        padding: 6px 13px;
        border-radius: 15px;
        border: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
        min-width: 300px;
            
        :focus {
            outline: 1px solid #000;
        }
    }

    label {
        margin: 0 0 2px 8px;
    }

    @media (max-width: 785px) {
        width: 80%;
    }
`;

export const SelectContainer = styled(InputContainer)`
    width: 100%;

    @media (max-width: 785px) {
        width: 80%;
    }
`;

export const TextareaContainer = styled(SelectContainer)`
    padding: 1.1em 1em;
    width: 100%;

    textarea {
        max-width: 100%;
        min-width: 100%;
        min-height: 33px;
    }

    @media (max-width: 785px) {
        max-width: 80%;
        min-width: 300px;
    }
`;

export const ErrorMessage = styled.span`
    margin: 4.2em 0 0 8px;
    color: ${({theme}) => theme.red};
    position: absolute;
    font-size: 0.9em;
`;

export const ButtonForm = styled.button`
    margin: 1em auto 0;
    width: 150px;
    font-size: 1.1em;
    border: none;
    border-radius: 18px;
    padding: 5px 0;
    background-color: ${({theme}) => theme.red};
    color: #FFF;
`;