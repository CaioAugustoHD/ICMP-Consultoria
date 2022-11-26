import styled from "styled-components";
import banner from "../../assets/banner.jpg";

export const BannerStyled = styled.main`
    margin-top: 69px;
    height: 500px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;

export const TextBannerContainer = styled.div`
    color: #FFF;
`;

export const Title = styled.h1`
    max-width: 600px;
`;

export const Subtitle = styled.h2`
    max-width: 600px;
`;