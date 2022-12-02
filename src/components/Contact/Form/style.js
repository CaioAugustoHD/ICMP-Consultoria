import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    margin: auto;
`;

export const InputContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 0.5em 1em;

    input, select, textarea {
        padding: 6px 13px;
        border-radius: 15px;
        border: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
            
        :focus {
            outline: 1px solid #000;
        }
    }

    label {
        margin: 0 0 2px 8px;
    }
`;

export const SelectContainer = styled(InputContainer)`
    width: 100%;
`;

export const TextareaContainer = styled(SelectContainer)`
    padding: 1em;

    textarea {
        max-width: 100%;
        min-width: 100%;
        min-height: 33px;
    }
`;