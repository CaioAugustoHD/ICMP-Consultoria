import styled from "styled-components";

export const ContactStyled = styled.section`
 background-color: ${({theme}) => theme.inside};
 padding: 2em 10%;

 @media (max-width: 785px) {
        padding: 2em 1em;
    }
`;

export const Title = styled.h3`
    text-align: center;
`;

export const Text = styled.p`
    text-align: center;
    margin: 1em 0 ;
`;
