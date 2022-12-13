import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: ${({theme}) => theme.blue};
    padding: 2em 10% 0.5em;
    color: #FFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ul {
        margin-top: 1em;
        list-style: none;
        line-height: 2em;
    }

    @media (max-width: 1075px) {
        padding: 2em 2em 0.5em;

        ul, span {
            font-size: 0.9em;
        }
    }

    @media (max-width: 785px) {

    }
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

    @media (max-width: 785px) {
        width: 100%;

        h3 {
            text-align: center;
            margin-bottom: 12px;
        }

        div {
            text-align: center;
            margin-bottom: 12px;
        }
    }
`;

export const SectionInstitutional = styled.section`
    /* border: 1px solid #FFF; */
    width: 25%;

    @media (max-width: 785px) {
        width: 100%;

        h3 {
            text-align: center;
            margin-bottom: 12px;
            margin-top: 35px;
        }
        
        ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 12px;
        }
    }
`;

export const SectionServices = styled.section`
    /* border: 1px solid #FFF; */
    width: 25%;

    @media (max-width: 785px) {
        width: 100%;

        h3 {
            text-align: center;
            margin-bottom: 12px;
            margin-top: 35px;
        }
        
        ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 12px;
        margin-bottom: 1em;
        }
    }

`;

export const Copyright = styled.section`
   display: block;
   margin: 1.3em auto 0;
   font-size: 0.8em;
`;