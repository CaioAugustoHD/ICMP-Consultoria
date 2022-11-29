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
    padding-right: 1em;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

export const Title = styled.h1`
    max-width: 600px;
    font-size: 2.8em;
    text-shadow: 0 0 2px ;
    line-height: 1.2em;
    margin-bottom: 0.4em;

    span {
        color: ${({theme}) => theme.blue};
        -webkit-text-stroke: 0.5px #FFF;
        text-stroke: 1px #FFF;
}
`;

export const Subtitle = styled.h2`
    max-width: 600px;
    font-size: 1.2em;
`;


export const BotaoBanner = styled.button`
    border: none;
    font-size: 1.2em;
    margin-top: 2em;
    background-color: ${({theme}) => theme.red};
    color: #fff;
    border-radius: 20px;
    padding: 6px 17px;
`;

export const ImgContainer = styled.figure`
    width: 50%;
    display: flex;
`;    

export const ImgBanner = styled.img`
        height: 500px;
        margin: auto;
    `;