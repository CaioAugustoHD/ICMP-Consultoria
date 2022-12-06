import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: ${({theme}) => theme.blue};
    padding: 1em 10% 0.5em;
    color: #FFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ul {
        margin-top: 1em;
        list-style: none;
        line-height: 2em;
    }
`;

export const Title = styled.h3`
    
`;

export const SectionContact = styled.section`
    /* border: 1px solid #FFF; */
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span:first-child {
        font-weight: 700;
        display: block;
}
`;

export const SectionInstitutional = styled.section`
    /* border: 1px solid #FFF; */
    width: 25%;
`;

export const SectionServices = styled.section`
    /* border: 1px solid #FFF; */
    width: 25%;

`;

export const Copyright = styled.section`
   display: block;
   margin: 1.3em auto 0;
   font-size: 0.8em;
`;