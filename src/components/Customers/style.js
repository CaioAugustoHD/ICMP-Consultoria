import styled from "styled-components";

export const CustomersStyled = styled.section`
    background-color: ${({theme}) => theme.body};
    padding: 2em 10%;
`;

export const Title = styled.h3`
    text-align: center;
`;

export const Text = styled.p`
    text-align: center;
    margin: 1em 0 2em;
`;