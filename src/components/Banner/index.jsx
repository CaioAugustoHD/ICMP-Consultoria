import React from "react";
import { BannerStyled, TextBannerContainer, Title, Subtitle, ImgBanner } from "./style";

import imgbanner from "../../assets/imgbanner.png";

export function Banner(){
    return (
        <BannerStyled>

            <TextBannerContainer>
                <Title>Vamos fazer uma <span>gestão em TI completa</span> para sua empresa</Title>
                <Subtitle>Suporte remoto e presencial para TI, consultorias e projetos</Subtitle>
            </TextBannerContainer>

            <figure>
                <ImgBanner src={imgbanner}/>
            </figure>

        </BannerStyled>
    )
}