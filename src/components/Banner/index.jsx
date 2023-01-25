import React from "react";
import { BannerStyled, TextBannerContainer, Title, Subtitle, ImgBanner, BotaoBanner, ImgContainer } from "./style";

import imgbanner from "../../assets/imgbanner.png";

export function Banner(){
    return (
        <BannerStyled>

            <TextBannerContainer>
                <div>
                    <Title>Vamos fazer uma <span>gestão em TI completa</span> para sua empresa</Title>
                    <Subtitle>Suporte remoto e presencial para TI, consultorias e projetos</Subtitle>
                    <BotaoBanner><a href="#contact">Solicite um orçamento</a></BotaoBanner>
                </div>
            </TextBannerContainer>

            <ImgContainer>
                <ImgBanner src={imgbanner}/>
            </ImgContainer>

        </BannerStyled>
    )
}