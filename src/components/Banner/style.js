import styled from "styled-components";
import banner from "../../assets/banner.jpg";

export const BannerStyled = styled.main`
    margin-top: 69px;
    height: 500px;
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;

export const TextBannerContainer = styled.div`
    color: #FFF;
    padding: 0 1em 0 3em;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 1198px) {
        width: calc(100vw - 436px);
        padding: 0 0 0 3em;
        align-items: center;
    }

    @media (max-width: 1043px){
        width: 100%;
        padding: 0 3em;
    }

    @media (max-width: 639px){
        padding: 0 2em;
    }

    @media (max-width: 550px){
        text-align: center;
        padding: 2em;
    }
`;

export const Title = styled.h1`
    max-width: 600px;
    font-size: 2.8em;
    text-shadow: 0 0 2px ;
    line-height: 1.2em;
    margin-bottom: 0.4em;
    min-width: 243px;

    span {
        color: ${({theme}) => theme.blue};
        -webkit-text-stroke: 0.5px #FFF;
        text-stroke: 0.5px #FFF;
    }

    @media (max-width: 639px){
        font-size: 2.5em;
    }
`;

export const Subtitle = styled.h2`
    max-width: 600px;
    font-size: 1.2em;

    @media (max-width: 639px){
        font-size: 1em;
    }
`;


export const BotaoBanner = styled.button`
    border: none;
    font-size: 1.2em;
    margin-top: 2em;
    background-color: ${({theme}) => theme.red};
    border-radius: 20px;
    padding: 6px 17px;

    a {
        text-decoration: none;
        color: #fff;
    }

    @media (max-width: 639px){
        font-size: 1em;
    }
`;

export const ImgContainer = styled.figure`
    width: 50%;
    display: flex;

    @media (max-width: 1198px) {
        width: 436px;
    }

    @media (max-width: 1043px){
     display: none;
    }
`;    

export const ImgBanner = styled.img`
        height: 500px;
        margin: auto;
`;